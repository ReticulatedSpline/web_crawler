webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3, h4 {\r\n  font-weight: lighter;\r\n}\r\n\r\n#actions {\r\n  margin-top: 2%;\r\n}\r\n\r\n#buttons {\r\n  display: inline-block;\r\n}\r\n\r\n#cardHeader {\r\n  margin-bottom: 2%;\r\n}\r\n\r\n#expWidth {\r\n  width: 250px;\r\n}\r\n\r\n#header {\r\n  font-size: 50;\r\n  font-weight: bold;\r\n  border-bottom: 2px solid grey;\r\n}\r\n\r\n#mailTo {\r\n  color: black;\r\n}\r\n\r\n#nameWidth {\r\n  width: 100px;\r\n}\r\n\r\n#parent {\r\n  margin-top: 5%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n#topButton {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n#resultList {\r\n  padding-left: 1em;\r\n  padding-top: 4%;\r\n  padding-bottom: 4%;\r\n}\r\n\r\n#resultBorder {\r\n  border-top: 1px solid black;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.button {\r\n  -webkit-transform: scale(.8);\r\n          transform: scale(.8);\r\n}\r\n\r\n.card {\r\n  display: inline-block;\r\n}\r\n\r\n.center {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n}\r\n\r\n.cardItem {\r\n  display: inline-block;\r\n}\r\n\r\n.fullWidth {\r\n  width: 350px;\r\n}\r\n\r\n.logo {\r\n  margin-right: auto;\r\n  margin-left: 1em;\r\n  -webkit-filter: invert(100%);\r\n  filter: invert(100%);\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Unsubmitted Form ------------------------------>\r\n<span id=\"parent\" *ngIf = \"!submitted\">\r\n  <mat-card\r\n  class=\"card\">\r\n  <mat-card-header>\r\n    <h2>Web Crawler v0.4</h2>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <ul class = \"list\">\r\n      <li>\r\n        <mat-input-container\r\n          class = \"cardItem, fullWidth\"\r\n          matTooltip=\"Where should the search begin?\"\r\n          matTooltipPosition=\"left\">\r\n          <input\r\n            matInput\r\n            type = \"url\"\r\n            [(ngModel)] = \"root\"\r\n            placeholder=\"Root Site URL\">\r\n        </mat-input-container>\r\n      </li><li>\r\n        <h4>Search depth</h4>\r\n        <mat-slider\r\n          class = \"fullWidth\"\r\n          min = \"1\"\r\n          max = \"100\"\r\n          tickInterval = \"10\"\r\n          thumb-label = \"true\"\r\n          matTooltip=\"How many links should I follow?\"\r\n          matTooltipPosition=\"left\"\r\n          value = \"10\"\r\n          [(ngModel)] = \"depth\"></mat-slider>\r\n      </li><li>\r\n        <h4>Search for...</h4>\r\n      </li><li>\r\n        <mat-slide-toggle\r\n         labelPosition = \"after\"\r\n         [(ngModel)]=\"email\">Emails</mat-slide-toggle>\r\n      </li><li>\r\n        <mat-slide-toggle\r\n        labelPosition = \"after\"\r\n        [(ngModel)]=\"phone\">Phone Numbers</mat-slide-toggle>\r\n      </li><li>\r\n        <mat-slide-toggle\r\n        labelPosition = \"after\"\r\n        [(ngModel)]=\"address\">Addresses [Experimental]</mat-slide-toggle>\r\n      </li>\r\n      <li *ngFor=\"let regex of regexes; let i = index\" [attr.data-index]=\"i\">\r\n        <mat-input-container\r\n          id = \"nameWidth\">\r\n          <input\r\n            matInput\r\n            [(ngModel)] = \"regexes[i].name\"\r\n            matTooltip=\"Give the custom pattern a name.\"\r\n            matTooltipPosition=\"left\"\r\n            placeholder=\"Name\">\r\n        </mat-input-container>\r\n        <mat-input-container\r\n          id = \"expWidth\">\r\n          <input\r\n            matInput\r\n            [(ngModel)] = \"regexes[i].placeholder\"\r\n            matTooltip=\"Provide the regular expression without slashes or flags.\"\r\n            matTooltipPosition=\"left\"\r\n            placeholder=\"Text Pattern\">\r\n        </mat-input-container>\r\n      </li>\r\n    </ul>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button\r\n        mat-raised-button\r\n        color=\"warn\"\r\n        (click) = \"addRegex()\"\r\n        matTooltip=\"Add a Regular Expression pattern to look for.\"\r\n        matTooltipPosition=\"below\">Add Search Target</button>\r\n      <button\r\n        mat-raised-button\r\n        color=\"warn\"\r\n        (click) = \"removeRegex()\"\r\n        matTooltip=\"Remove the bottommost text pattern.\"\r\n        matTooltipPosition=\"below\">Remove Search Target</button>\r\n      <button\r\n        mat-raised-button\r\n        color = \"primary\"\r\n        (keyup)=\"onKey(rootTrigger)\"\r\n        [disabled] = \"!valid()\"\r\n        matTooltip=\"Fill out all fields to unlock.\"\r\n        matTooltipPosition=\"below\"\r\n        (click) = \"submit()\">Begin search</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n  <span id = \"buttons\">\r\n    <div>\r\n    <a class=\"logo\" [href]=\"regexLink\">\r\n      <button\r\n        mat-icon-button\r\n        matTooltip=\"What are Regular Expressions?\"\r\n        matTooltipPosition=\"right\">\r\n        <img [src]=\"questionMarkLogoPath\"></button>\r\n    </a></div><div><a class=\"logo\" [href]=\"githubLink\">\r\n    <button\r\n      mat-icon-button\r\n      matTooltip=\"View Source\"\r\n      matTooltipPosition=\"right\">\r\n      <img [src]=\"githubLogoPath\"></button>\r\n  </a></div></span>\r\n</span>\r\n\r\n<!-- Submitted Form ------------------------------->\r\n<span id=\"parent\" *ngIf = \"submitted\">\r\n  <mat-card\r\n  class=\"card\">\r\n  <mat-card-header>\r\n    <h2>Search Results</h2>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <ul class = list>\r\n      <li *ngFor=\"let regex of regexes; let i = index\" [attr.data-index]=\"i\">\r\n        <h3>{{regex.name.endsWith('s') ? regex.name + \"es\" : regex.name + \"s\"}}</h3>\r\n        <textarea\r\n          matInput\r\n          readonly\r\n          matTextareaAutosize\r\n          matAutosizeMinRows=\"2\"\r\n          matAutosizeMaxRows=\"5\">{{regex.found}}</textarea>\r\n    </ul>\r\n  </mat-card-content>\r\n    <mat-card-actions>\r\n      <button\r\n        mat-raised-button\r\n        color=\"warn\"\r\n        matTooltip=\"Emails will be seperated by commas\"\r\n        matTooltipPosition=\"below\">Copy to clipboard</button>\r\n      <button\r\n        mat-raised-button\r\n        color=\"warn\"\r\n        matTooltip=\"CSV files can be opened by any spreadsheet software\"\r\n        matTooltipPosition=\"below\">Download as CSV</button>\r\n      <button\r\n        mat-raised-button\r\n        color=\"warn\"\r\n        matTooltip=\"Create an email with found addresses\"\r\n        matTooltipPosition=\"below\">Open as email</button>\r\n      <button\r\n        mat-raised-button\r\n        color = \"primary\"\r\n        (click) = \"reset()\"\r\n        matTooltip=\"Try another query\"\r\n        matTooltipPosition=\"below\"\r\n        >Restart</button>\r\n    </mat-card-actions>\r\n</mat-card>\r\n\r\n<!-- Side Buttons --------------------------------->\r\n<span id = \"buttons\">\r\n  <div><a class=\"logo\" [href]=\"githubLink\">\r\n  <button\r\n    mat-icon-button\r\n    matTooltip=\"View Source\"\r\n    matTooltipPosition=\"right\">\r\n    <img [src]=\"githubLogoPath\"></button>\r\n</a></div></span>\r\n</span>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__network_service__ = __webpack_require__("../../../../../src/app/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__regex__ = __webpack_require__("../../../../../src/app/regex.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(snackBar, networkService) {
        this.snackBar = snackBar;
        this.networkService = networkService;
        this.githubLogoPath = "https://assets-cdn.github.com/favicon.ico";
        this.questionMarkLogoPath = "http://www.act.org/content/dam/act/unsecured/Images/icons/icon-question.png";
        this.githubLink = "https://github.com/ReticulatedSpline/Web-Crawler";
        this.regexLink = "https://www.w3schools.com/jsref/jsref_obj_regexp.asp";
        this.regexes = [];
        this.submitted = false;
        this.email = true;
        this.phone = true;
        this.address = false;
        this.depth = 1;
        this.root = defaultRoot;
    }
    AppComponent.prototype.addRegex = function () {
        this.regexes.push(new __WEBPACK_IMPORTED_MODULE_4__regex__["a" /* Regex */]("", ""));
    };
    AppComponent.prototype.removeRegex = function () {
        this.regexes.pop();
    };
    AppComponent.prototype.valid = function () {
        for (var _i = 0, _a = this.regexes; _i < _a.length; _i++) {
            var regex = _a[_i];
            if (regex.name === "" ||
                regex.expr === "") {
                return false;
            }
        }
        if (this.root === "") {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.onKey = function (event) {
        this.valid();
    };
    AppComponent.prototype.submit = function () {
        if (this.email)
            this.regexes.push(new __WEBPACK_IMPORTED_MODULE_4__regex__["a" /* Regex */]("Email", emailExpr));
        if (this.phone)
            this.regexes.push(new __WEBPACK_IMPORTED_MODULE_4__regex__["a" /* Regex */]("Phone", phoneExpr));
        if (this.address)
            this.regexes.push(new __WEBPACK_IMPORTED_MODULE_4__regex__["a" /* Regex */]("Address", addressExpr));
        this.submitted = true;
        this.networkService.start(this.root, this.depth, this.regexes);
    };
    AppComponent.prototype.setMailTo = function () {
        this.mailLink = String("mailto:?subject=Scraped%20Emails%20&body=");
        this.mailLink += String();
        this.submitted = true;
    };
    AppComponent.prototype.copy = function () {
        //TODO: add copy functionality
        this.snackBar.open("Not yet supported!", "Close", {
            duration: 2000,
        });
    };
    AppComponent.prototype.reset = function () {
        this.regexes = [];
        this.submitted = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__network_service__["a" /* NetworkService */]])
    ], AppComponent);
    return AppComponent;
}());

var defaultRoot = "https://www.google.com/search?q=colorado%20physicians";
var emailExpr = "[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,}([A-Z]{2,})?";
var phoneExpr = "(\(\d{3}\)|\d{3})-?\d{3}-?\d{4}";
var addressExpr = "\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\.";


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__network_service__ = __webpack_require__("../../../../../src/app/network.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//for Angular material UI






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                //Network
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                //Forms
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
                //Material
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatSliderModule */],
                //Clipboard
                __WEBPACK_IMPORTED_MODULE_7_ngx_clipboard__["a" /* ClipboardModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__network_service__["a" /* NetworkService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//


/***/ }),

/***/ "../../../../../src/app/network.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkService = (function () {
    function NetworkService(http) {
        this.http = http;
        this.apiStart = "http://localhost:8080/init";
        this.apiFetch = "http://localhost:8080/results";
    }
    NetworkService.prototype.start = function (url, depth, regexes) {
        var body = {
            "url": url,
            "depth": depth,
            "regexes": regexes
        };
        return this.http.post(this.apiStart, body)
            .subscribe(function (res) { return res.json; });
    };
    NetworkService.prototype.get = function () {
        return this.http.get(this.apiFetch)
            .map(function (res) { return res.json; });
    };
    NetworkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], NetworkService);
    return NetworkService;
}());



/***/ }),

/***/ "../../../../../src/app/regex.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Regex; });
var Regex = (function () {
    function Regex(name, expr) {
        this.name = name;
        this.expr = expr;
        this.found = [];
    }
    return Regex;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map