webpackJsonp(["main"],{

/***/ "../../../../../angular/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../angular/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../angular/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" routerLink=\"/\">Bookt</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/how-it-works\">How It Works</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/about\">About Us</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/faq\">F.A.Q.</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../angular/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Welcome to Anvel!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../angular/app/app.component.html"),
        styles: [__webpack_require__("../../../../../angular/app/app.component.scss")]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../angular/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var app_component_1 = __webpack_require__("../../../../../angular/app/app.component.ts");
var home_component_1 = __webpack_require__("../../../../../angular/app/pages/home/home.component.ts");
var faq_component_1 = __webpack_require__("../../../../../angular/app/pages/faq/faq.component.ts");
var about_component_1 = __webpack_require__("../../../../../angular/app/pages/about/about.component.ts");
var how_it_works_component_1 = __webpack_require__("../../../../../angular/app/pages/how-it-works/how-it-works.component.ts");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'how-it-works',
        component: how_it_works_component_1.HowItWorksComponent
    },
    {
        path: 'faq',
        component: faq_component_1.FaqComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            faq_component_1.FaqComponent,
            about_component_1.AboutComponent,
            how_it_works_component_1.HowItWorksComponent
        ],
        imports: [
            animations_1.BrowserAnimationsModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_1.MatButtonModule,
            material_1.MatCheckboxModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [
            material_1.MatButtonModule,
            material_1.MatCheckboxModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../angular/app/pages/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../angular/app/pages/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/pages/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'app-about',
        template: __webpack_require__("../../../../../angular/app/pages/about/about.component.html"),
        styles: [__webpack_require__("../../../../../angular/app/pages/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../angular/app/pages/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  faq works!\n</p>\n"

/***/ }),

/***/ "../../../../../angular/app/pages/faq/faq.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/pages/faq/faq.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FaqComponent = (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    return FaqComponent;
}());
FaqComponent = __decorate([
    core_1.Component({
        selector: 'app-faq',
        template: __webpack_require__("../../../../../angular/app/pages/faq/faq.component.html"),
        styles: [__webpack_require__("../../../../../angular/app/pages/faq/faq.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FaqComponent);
exports.FaqComponent = FaqComponent;
//# sourceMappingURL=faq.component.js.map

/***/ }),

/***/ "../../../../../angular/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-primary row search-section justify-content-md-center\">\n    <div class=\"col-8 text-center\">\n        <h1 class=\"my-5\">\n            Finding college textbooks at the cheapest price.\n            <br />Guaranteed.\n        </h1>\n        <div class=\"input-group input-group-lg mb-3\">\n            <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\n            <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary\" type=\"button\">Button</button>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../angular/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-section {\n  min-height: 100vh; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/pages/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'Homepage for Bookt';
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__("../../../../../angular/app/pages/home/home.component.html"),
        styles: [__webpack_require__("../../../../../angular/app/pages/home/home.component.scss")]
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../angular/app/pages/how-it-works/how-it-works.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  how-it-works works!\n</p>\n"

/***/ }),

/***/ "../../../../../angular/app/pages/how-it-works/how-it-works.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../angular/app/pages/how-it-works/how-it-works.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var HowItWorksComponent = (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    return HowItWorksComponent;
}());
HowItWorksComponent = __decorate([
    core_1.Component({
        selector: 'app-how-it-works',
        template: __webpack_require__("../../../../../angular/app/pages/how-it-works/how-it-works.component.html"),
        styles: [__webpack_require__("../../../../../angular/app/pages/how-it-works/how-it-works.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HowItWorksComponent);
exports.HowItWorksComponent = HowItWorksComponent;
//# sourceMappingURL=how-it-works.component.js.map

/***/ }),

/***/ "../../../../../angular/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../angular/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../angular/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../angular/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../angular/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map