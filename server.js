// imports
const express = require('express');
  const path = require('path');
  const request = require('request');
  const cheerio = require('cheerio');
  const URL = require('url-parse');
  const app = express();
  const bodyParser = require('body-parser');

// spoof user agent
const header = request.defaults({
    headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'}
});

// global vars
var linkCount = 0;
  var maxPages = 1;
  var pagesToVisit = [];
  var regexes = [];
  var pagesVisited = {};
  var results = {};
  var followExternal = false;

// Set up nodeJS listeners, parsers, and request API
app.use(express.static(__dirname + '/dist'));

  // Start the app by listening on the default Heroku port
  app.listen(process.env.PORT || 8080);

  console.log("Listening for requests on 8080...");

  // for parsing requests
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  // For all GET requests, send back index.html (the Angular web interface)
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });

  app.post('/init', function(req, res) {
    reset();
    console.log("Init Recieved!");
    maxPages = req.body.depth;
    followExternal = req.body.external;
    pagesToVisit.push(req.body.url);
    ++linkCount;
    let targets = "";
    for (let regex of req.body.regexes) {
      regexes.push(regex);
      targets += regex.name + ", ";
    }
    console.log("Depth: " + maxPages + " pages.\n"
              + "Root: " + pagesToVisit[0] + "\n"
              + "Targets: " + targets);
    var onComplete = function() {
      console.log("Transmitting results...");
      res.send(regexes);
      console.log("Transmission complete.");
    };
    crawl(onComplete);
  });

/**
* Control the crawl process
* Source modified from original by Stephen at netinstructions:
* http://www.netinstructions.com/how-to-make-a-simple-web-crawler-in-javascript-and-node-js/
**/
function crawl(callback) {
  // Exit if target depth reached
  if (Object.keys(pagesVisited).length >= maxPages) {
    console.log("Reached target search depth!");
    callback();

    // Exit if page stack is empty
  } else if (pagesToVisit.length == 0) {
    console.log("Search stack emptied!");
    callback();

    //else process the page
  } else {
    var nextPage = pagesToVisit.pop();
    if (nextPage in pagesVisited) {
      // We've already visited this page, so repeat the crawl
      crawl(callback);
    } else {
      // New page we haven't visited
      if (nextPage != null && nextPage != "") visitPage(nextPage, callback);
    }
  }
}

/**
* Control actions taken on each visited page.
**/
function visitPage(url, callback) {
  console.log("Visiting page " + Object.keys(pagesVisited).length + ":\n" + url);
  pagesVisited[url] = true;
  header.get(url, function(error, response, body) {
    if (response.statusCode !== 200) {
      console.log("Unresponsive link!");
      crawl(callback);
      return;
    }
    // Parse the document body
    let page = cheerio.load(body);
    scrape(page);
    if (linkCount < maxPages) {
      collectLinks(page, url);
    }
    crawl(callback);
  });
}

/**
* Determines if the given link is a valid page to scrape.
**/
function validLink(link) {
  return link != null &&
         link != "" &&
         link != " " &&
         link.indexOf(".php") < 0 &&
         link.indexOf("mailto:") < 0 &&
         !pagesToVisit.includes(link) &&
         !pagesVisited.toString().includes(link)
}

/**
* Search for regex matches.
**/
function scrape(page) {
  let bodyText = page.html().toString();
  console.log("-----------------------------------------------");
  for (let regex of regexes) {
    let regexp = new RegExp(regex.expr, 'ig');
    let results = bodyText.match(regexp);
    if (results) {
      for (let instance of results) {
        if (regex.found.indexOf(instance) < 0) {
          regex.found.push(instance);
        }
      }
    }
    console.log(regex.found);
  }
  console.log("-----------------------------------------------");
}

/**
* Add to the stack of pages to analyze. Process internal links to absolute.
**/
function collectLinks(page, url) {
  url = new URL(url);
  let baseUrl = url.protocol + "//" + url.hostname;
  page('a').each(function() {
     // If we've already hit max pages, skip
     if (linkCount >= maxPages) return;
     let link = page(this).attr('href');

     // ignore dead, undefined, mailto, and dupe links
     if (validLink(link)) {
       let firstChar = link.substring(0, 1);

       // strip CGI params
       if (link.indexOf("?") !== -1) {
         link = link.substring(0, link.indexOf("?"));
       }
       if (link.indexOf("#") !== -1) {
         link = link.substring(0, link.indexOf("?"));
       }

       // convert internal links to absolute links.
       if (firstChar === ".") {
         link = baseUrl + link.substring(1, link.length);
       } else if (firstChar === "/") {
         link = baseUrl + link;
       } else if (firstChar !== "h") {
         link = baseUrl + "/" + link;
       }
       pagesToVisit.push(link);
       ++linkCount;
       console.log("Link " + linkCount + ": " + link + " pushed to stack.");
     }
   });
   return;
}

/**
* Clear global variables
* TODO: Fix this horrible hack ¯\_(ツ)_/¯
**/
function reset() {
  console.log("[Flow] Resetting Globals");
  linkCount = 0;
  maxPages = 1;
  pagesToVisit = [];
  regexes = [];
  pagesVisited = {};
  results = {};
}
