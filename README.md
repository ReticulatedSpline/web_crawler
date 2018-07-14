# About
This is another small webapp based on the [Utilities Balancer](https://github.com/ReticulatedSpline/Utilities-Balancer-3) UI. Give it a root node, the number of pages to search, and some RegEx targets and it will politely ask the NodeJS backend to complete the search. The split stack was done as a work-around to the [Same Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).

You can break it on [Heroku](https://web-crawler-proto.herokuapp.com/) if it isn't broken already.

# Credits

This app uses HTML5 for DOM elements and pure CSS for styling. The business logic is implemented with [Angular](https://angular.io/), a Javascript framework. A single purpose [Node.js](https://nodejs.org/en/) server is used to serve the webpage as well as run the search algorithm.

This would not have been possible without Stephen's tutorial on [NetInstructions](http://www.netinstructions.com/how-to-make-a-simple-web-crawler-in-javascript-and-node-js/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

UI elements provided by [Angular Material.](https://material.angular.io/)

[NPM](https://www.npmjs.com/) was used to manage Node packages, including [Cheerio](https://www.npmjs.com/package/cheerio) for DOM scraping and [Express](https://www.npmjs.com/package/express) for serving the static transpiled build version.
[ngx-clipboard.](https://github.com/maxisam/ngx-clipboard) for clipboard functionality.

# Launching

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng build` to transpile to the /dist folder. It can then be served with `npm start` on `http:localhost:8080`. The latest version of the origin branch is live [Here](http://web-crawler-proto.herokuapp.com/). It may take a few minutes to spool up from cold boot.

# Usage

![Web scraper UI](http://i65.tinypic.com/nlu8n6.png)

The root site is where the search starts. Quota is the number of pages to process.
You can specify searching for email, phone, regex, or add custom targets.
