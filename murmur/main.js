(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AuthGuard/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/AuthGuard/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(mur, router) {
        this.mur = mur;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.mur.Check_scatter().then(function (result) {
            console.log("Guard Result " + result);
            if (result) {
                return true;
            }
            else {
                _this.router.navigate([{ outlets: { primary: ['login'], feed: ['login'] } }]);
                return false;
            }
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_2__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n<app-mainapp></app-mainapp>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _mainapp_mainapp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainapp/mainapp.component */ "./src/app/mainapp/mainapp.component.ts");
/* harmony import */ var _mainappone_mainappone_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainappone/mainappone.component */ "./src/app/mainappone/mainappone.component.ts");
/* harmony import */ var _mainapptwo_mainapptwo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainapptwo/mainapptwo.component */ "./src/app/mainapptwo/mainapptwo.component.ts");
/* harmony import */ var _wisperchatlist_wisperchatlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wisperchatlist/wisperchatlist.component */ "./src/app/wisperchatlist/wisperchatlist.component.ts");
/* harmony import */ var _userprofilelist_userprofilelist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./userprofilelist/userprofilelist.component */ "./src/app/userprofilelist/userprofilelist.component.ts");
/* harmony import */ var _sharepost_sharepost_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sharepost/sharepost.component */ "./src/app/sharepost/sharepost.component.ts");
/* harmony import */ var _commentpost_commentpost_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./commentpost/commentpost.component */ "./src/app/commentpost/commentpost.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _userchat_userchat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./userchat/userchat.component */ "./src/app/userchat/userchat.component.ts");
/* harmony import */ var _userpersonalfeed_userpersonalfeed_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./userpersonalfeed/userpersonalfeed.component */ "./src/app/userpersonalfeed/userpersonalfeed.component.ts");
/* harmony import */ var _otheruserpersonalfeed_otheruserpersonalfeed_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./otheruserpersonalfeed/otheruserpersonalfeed.component */ "./src/app/otheruserpersonalfeed/otheruserpersonalfeed.component.ts");
/* harmony import */ var _postmurmur_postmurmur_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./postmurmur/postmurmur.component */ "./src/app/postmurmur/postmurmur.component.ts");
/* harmony import */ var _editmyprofile_editmyprofile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./editmyprofile/editmyprofile.component */ "./src/app/editmyprofile/editmyprofile.component.ts");
/* harmony import */ var _logincontent_logincontent_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./logincontent/logincontent.component */ "./src/app/logincontent/logincontent.component.ts");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./AuthGuard/auth.guard */ "./src/app/AuthGuard/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// import { MurmurdsbpnlComponent } from './murmurdsbpnl/murmurdsbpnl.component';
// import { MurmurdsbgblComponent } from './murmurdsbgbl/murmurdsbgbl.component';


var routes = [
    { path: '', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_15__["FeedComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: '', component: _userprofilelist_userprofilelist_component__WEBPACK_IMPORTED_MODULE_12__["UserprofilelistComponent"], outlet: 'feed', canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'login', component: _logincontent_logincontent_component__WEBPACK_IMPORTED_MODULE_21__["LogincontentComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], outlet: 'feed' },
    { path: 'feed', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_15__["FeedComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'userprofilelist', component: _userprofilelist_userprofilelist_component__WEBPACK_IMPORTED_MODULE_12__["UserprofilelistComponent"], outlet: 'feed', canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'user', component: _userprofilelist_userprofilelist_component__WEBPACK_IMPORTED_MODULE_12__["UserprofilelistComponent"], outlet: 'feed', canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'chat', component: _wisperchatlist_wisperchatlist_component__WEBPACK_IMPORTED_MODULE_11__["WisperchatlistComponent"], outlet: 'feed', canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'userchat', component: _userchat_userchat_component__WEBPACK_IMPORTED_MODULE_16__["UserchatComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'share', component: _sharepost_sharepost_component__WEBPACK_IMPORTED_MODULE_13__["SharepostComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'comment', component: _commentpost_commentpost_component__WEBPACK_IMPORTED_MODULE_14__["CommentpostComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'create', component: _postmurmur_postmurmur_component__WEBPACK_IMPORTED_MODULE_19__["PostmurmurComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'userpost', component: _userpersonalfeed_userpersonalfeed_component__WEBPACK_IMPORTED_MODULE_17__["UserpersonalfeedComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'editprofile', component: _editmyprofile_editmyprofile_component__WEBPACK_IMPORTED_MODULE_20__["EditmyprofileComponent"], canActivate: [_AuthGuard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _mainapp_mainapp_component__WEBPACK_IMPORTED_MODULE_8__["MainappComponent"],
                _mainappone_mainappone_component__WEBPACK_IMPORTED_MODULE_9__["MainapponeComponent"],
                _mainapptwo_mainapptwo_component__WEBPACK_IMPORTED_MODULE_10__["MainapptwoComponent"],
                _wisperchatlist_wisperchatlist_component__WEBPACK_IMPORTED_MODULE_11__["WisperchatlistComponent"],
                _userprofilelist_userprofilelist_component__WEBPACK_IMPORTED_MODULE_12__["UserprofilelistComponent"],
                _sharepost_sharepost_component__WEBPACK_IMPORTED_MODULE_13__["SharepostComponent"],
                _commentpost_commentpost_component__WEBPACK_IMPORTED_MODULE_14__["CommentpostComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_15__["FeedComponent"],
                _userchat_userchat_component__WEBPACK_IMPORTED_MODULE_16__["UserchatComponent"],
                _userpersonalfeed_userpersonalfeed_component__WEBPACK_IMPORTED_MODULE_17__["UserpersonalfeedComponent"],
                _otheruserpersonalfeed_otheruserpersonalfeed_component__WEBPACK_IMPORTED_MODULE_18__["OtheruserpersonalfeedComponent"],
                _postmurmur_postmurmur_component__WEBPACK_IMPORTED_MODULE_19__["PostmurmurComponent"],
                _editmyprofile_editmyprofile_component__WEBPACK_IMPORTED_MODULE_20__["EditmyprofileComponent"],
                _logincontent_logincontent_component__WEBPACK_IMPORTED_MODULE_21__["LogincontentComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [_murmur_service__WEBPACK_IMPORTED_MODULE_22__["MurmurService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/commentpost/commentpost.component.css":
/*!*******************************************************!*\
  !*** ./src/app/commentpost/commentpost.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n    /*display: flex;*/\n    /*flex-direction: column;*/\n    height: 100%;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n.headerone{\n    background-color: #ffffff;\n    padding: 10px 16px;\n    height: 59px;\n    width: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n}\n.userimage {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.userimage1 {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.footerone {\n    background-color: #dcdcdc;\n    position: absolute;\n    bottom: 0;\n    min-height: 80px;\n    width: 100%;\n}\n.formcolor{\n    background-color: #f7f8fa;\n    border: 1px solid #f7f8fa;\n}\n.threeicons {\n    font-size: 20px;\n}\n.threeicons:hover {\n    color: #a09fed;\n}\n.icon {\n    max-width: 80%;\n}\n.countdiv {\n    padding: 0;\n    margin: auto;\n    text-align: left;\n}\n.countdivp{\n    margin: 0;\n}\n.icondiv {\n    padding-right: 0;\n}\n.countselected {\n    color: #a09fed;\n}\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHBvc3QvY29tbWVudHBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7Q0FDYjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLDRFQUE0RTtJQUM1RSxvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksVUFBVTtDQUNiO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRwb3N0L2NvbW1lbnRwb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVvbmV7XG4gICAgLypkaXNwbGF5OiBmbGV4OyovXG4gICAgLypmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbn1cbi5oZWFkZXJvbmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgaGVpZ2h0OiA1OXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnVzZXJpbWFnZSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi51c2VyaW1hZ2UxIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmZvb3Rlcm9uZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGNkYztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybWNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjhmYTtcbn1cbi50aHJlZWljb25zIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4udGhyZWVpY29uczpob3ZlciB7XG4gICAgY29sb3I6ICNhMDlmZWQ7XG59XG4uaWNvbiB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG59XG4uY291bnRkaXYge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY291bnRkaXZwe1xuICAgIG1hcmdpbjogMDtcbn1cbi5pY29uZGl2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLmNvdW50c2VsZWN0ZWQge1xuICAgIGNvbG9yOiAjYTA5ZmVkO1xufVxuLmN1cnNvcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/commentpost/commentpost.component.html":
/*!********************************************************!*\
  !*** ./src/app/commentpost/commentpost.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\t<!-- This header is open header for User psersonal Profile. Starts Here -->\n\t<header class=\"headerone\">\n\t\t<a routerLink=\"/feed\"><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t</header>\n\t<!-- This header is open header for User psersonal Profile. Ends Here -->\n\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\t<!-- <header class=\"headerone\">\n\t\t<a><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t</header> -->\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\n\t<div style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n\n\t\t<div class=\"card mt-0\" *ngFor=\"let mur of Murmur_Posts; let i = index\">\n\t\t\t<div class=\"card-body\" *ngIf = \"mur.action_type == 'murmur'\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t<a><img class=\"userimage\" src={{mur.image}}></a>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h5 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span></h5></a>\n\t\t\t\t\t\t\t<a><p>{{mur.murmur.message}}</p></a>\n\t\t\t\t\t\t\t<a *ngIf = \" mur.murmur.attached_url !== ''\" ><img style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src={{mur.murmur.attached_url}}></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">thumb_up</i></a>{{mur.murmur.snoop_count}}</div>\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"/share\"  style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">share</i></a>{{mur.murmur.yell_count}}</div>\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"/comment\" (click)=\"cmt_ID(i)\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">comment</i></a>{{mur.murmur.comment_count}}</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" (click)=\"snoop(i)\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" ><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a routerLink=\"/share\" ><img class=\"icon\" src=\"assets/img/share.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.yell_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"card-body\" *ngIf = \"mur.action_type == 'yell'\">\n\t\t\t\t<div class=\"row\">\n                    <div class=\"col-1\">\n                        <a><img class=\"userimage\" src={{mur.image}}></a>\n                    </div>            \n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t<a><p>{{mur.yell.extra_comment}}</p></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 mb-4\">\n\t\t\t\t\t\t\t<div class=\"card mt-0\" style=\"border-radius: 10px;\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t\t\t\t<a><img class=\"userimage\" src={{mur.yell.mur_acc_image}}></a>\n\t\t\t\t\t\t\t\t\t</div>            \n\t\t\t\t\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.yell.mur_account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.yell.mur_acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t\t\t\t\t<a><p>{{mur.yell.message}}</p></a>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf = \" mur.yell.attached_url !== ''\" ><img style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src={{mur.yell.attached_url}}></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\"><a (click)=\"snoop(i)\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">thumb_up</i></a>{{mur.yell.snoop_count}}</div>\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"/comment\" (click)=\"cmt_ID(i)\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">comment</i></a>{{mur.yell.comment_count}}</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" (click)=\"snoop(i)\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.yell.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a routerLink=\"/comment\" (click)=\"cmt_ID(i)\"><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.yell.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\" style=\"background-color: #dcdcdc;\">\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col-1\" style=\"margin: auto;text-align: right;padding: 0;\">\n\t\t    \t\t<a><img class=\"userimage1\" src={{My_Profile.profile_pic}}></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-9\" style=\"margin: auto;\">\n\t\t\t\t\t<input class=\"form-control form-control-lg formcolor\" type=\"text\" [(ngModel)]=\"cmt\" placeholder=\"Type a message here\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" style=\"margin: auto;\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"comment()\" style=\"background-color: #a09fed;border-color: #a09fed;\">Comment</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\n\t\t<div *ngFor=\"let cmt of Murmur_Commetnts; let i = index\">\n\t\t\t<div class=\"card mt-0\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t<a><img class=\"userimage\" src={{cmt.image}}></a>\n\t\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{cmt.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{cmt.Acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t<a><p>{{cmt.comment}}</p></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->"

/***/ }),

/***/ "./src/app/commentpost/commentpost.component.ts":
/*!******************************************************!*\
  !*** ./src/app/commentpost/commentpost.component.ts ***!
  \******************************************************/
/*! exports provided: CommentpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentpostComponent", function() { return CommentpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentpostComponent = /** @class */ (function () {
    function CommentpostComponent(ms, router) {
        this.ms = ms;
        this.router = router;
        this.Murmur_Commetnts = [];
        this.Murmur_Posts = [];
        this.My_Profile = {};
        this.cmt = '';
    }
    CommentpostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ms.getAccountProfile().then(function (res) {
            _this.My_Profile = res[0];
            // console.log(res)
        });
        this.ms.getCommentData().then(function (res) {
            if (res['id'] != undefined) {
                if (res['type'] == 'murmur') {
                    // console.log("mur")
                    _this.ms.getMurmurByIndex(res['id']).then(function (mur) {
                        _this.Murmur_Posts.push(mur);
                        console.log(_this.Murmur_Posts);
                        if (_this.Murmur_Posts[0].action_type == 'murmur') {
                            _this.ms.getMurmurComments(_this.Murmur_Posts[0].murmur.murmur_id).then(function (resp) {
                                _this.Murmur_Commetnts = resp;
                                // console.log(res)
                            });
                        }
                        else {
                            _this.ms.getYellComments(_this.Murmur_Posts[0].yell.yell_id).then(function (resp) {
                                _this.Murmur_Commetnts = resp;
                                // console.log(res)
                            });
                        }
                    });
                }
                else {
                    // console.log("mymur")
                    _this.ms.getMyMurmurByIndex(res['id']).then(function (mur) {
                        _this.Murmur_Posts.push(mur);
                        console.log(_this.Murmur_Posts);
                        _this.ms.getMurmurComments(_this.Murmur_Posts[0].murmur.murmur_id).then(function (resp) {
                            _this.Murmur_Commetnts = resp;
                            // console.log(res)
                        });
                    });
                }
            }
            else {
                _this.router.navigate(['/feed']);
            }
        });
    };
    CommentpostComponent.prototype.cmt_ID = function (id) {
        var _this = this;
        this.ms.getCommentData().then(function (res) {
            _this.ms.setCommentData(id, res['type']);
        });
    };
    CommentpostComponent.prototype.snoop = function (id) {
        var _this = this;
        this.ms.getCommentData().then(function (res) {
            _this.ms.Snoop(res['id'], res['type']).then(function (res) {
                console.log(res);
            });
        });
    };
    CommentpostComponent.prototype.comment = function () {
        var _this = this;
        this.ms.getCommentData().then(function (res) {
            if (res['id'] != undefined) {
                var mur_1 = [];
                if (res['type'] == 'murmur') {
                    // console.log("mur")
                    _this.ms.getMurmurByIndex(res['id']).then(function (resp) {
                        mur_1.push(resp);
                        console.log(mur_1);
                        if (mur_1[0].action_type == 'murmur') {
                            _this.ms.commentmurmur(mur_1[0].murmur.murmur_id, _this.cmt).then(function (result) {
                                console.log(result);
                                _this.router.navigate(['/feed']);
                            });
                        }
                        else {
                            _this.ms.commentyell(mur_1[0].yell.yell_id, _this.cmt).then(function (result) {
                                console.log(result);
                                _this.router.navigate(['/feed']);
                            });
                        }
                    });
                }
                else {
                    // console.log("mymur")
                    _this.ms.getMyMurmurByIndex(res['id']).then(function (resp) {
                        mur_1.push(resp);
                        console.log(mur_1);
                        _this.ms.commentmurmur(mur_1[0].murmur.murmur_id, _this.cmt).then(function (result) {
                            console.log(result);
                            _this.router.navigate(['/feed']);
                        });
                    });
                }
            }
            else {
                _this.router.navigate(['/feed']);
            }
        });
    };
    CommentpostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commentpost',
            template: __webpack_require__(/*! ./commentpost.component.html */ "./src/app/commentpost/commentpost.component.html"),
            styles: [__webpack_require__(/*! ./commentpost.component.css */ "./src/app/commentpost/commentpost.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CommentpostComponent);
    return CommentpostComponent;
}());



/***/ }),

/***/ "./src/app/editmyprofile/editmyprofile.component.css":
/*!***********************************************************!*\
  !*** ./src/app/editmyprofile/editmyprofile.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 59px;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #a09fed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG15cHJvZmlsZS9lZGl0bXlwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsY0FBYztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtDQUNiOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFlBQVk7SUFDVCw0RUFBNEU7SUFDNUUsb0JBQW9COztDQUV2Qjs7QUFFRDs7Q0FFQyxZQUFZO0lBQ1QsYUFBYTtDQUNoQjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixpQkFBaUI7SUFDZCxZQUFZO0NBQ2Y7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQjs7QUFHRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2VkaXRteXByb2ZpbGUvZWRpdG15cHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlb25le1xuXG5cdC8qZGlzcGxheTogZmxleDsqL1xuXHQvKmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5oZWFkZXJvbmV7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cGFkZGluZzogMTBweCAxNnB4O1xuXHRoZWlnaHQ6IDU5cHg7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cbi51c2VyaW1hZ2Uge1xuXG5cdHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmZvb3Rlcm9uZSB7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG5cdG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtY29sb3J7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y3ZjhmYTtcbn1cblxuXG4udGhyZWVpY29ucyB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRocmVlaWNvbnM6aG92ZXIge1xuXHRjb2xvcjogI2EwOWZlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/editmyprofile/editmyprofile.component.html":
/*!************************************************************!*\
  !*** ./src/app/editmyprofile/editmyprofile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"styleone\">\n\n    <!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n    <header class=\"headerone\">\n      <a routerLink = \"/feed\"><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n    </header>\n    <!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n  \n    <div style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;padding: 30px;\">\n      \n      <div class=\"card mt-0 mb-3\">\n        <div class=\"card-body\">\n          <h5>My Profile</h5>\n          <hr>\n          <br>\n          <form>\n          <div class=\"form-row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n              <label for=\"formGroupExampleInput\">Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder={{My_Profile.account_name}} readonly>\n            </div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n              <label for=\"formGroupExampleInput\">Bio</label>\n              <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" readonly>{{My_Profile.bio}}</textarea>\n            </div>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n              <label for=\"formGroupExampleInput\">Gender</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder={{My_Profile.sex}} readonly>\n            </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n              <label for=\"formGroupExampleInput\">Date of birth</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder={{My_Profile.dob}} readonly>\n            </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n              <label for=\"formGroupExampleInput\">Location</label>\n              <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder={{My_Profile.location}} readonly>\n            </div>\n            </div>\n          </div>\n        </form>\n        </div>\n      </div>\n  \n      <div class=\"card mt-0\">\n        <div class=\"card-body\">\n          <h5>Edit Profile</h5>\n          <hr>\n          <br>\n          <form>\n          <div class=\"form-group row\">\n            <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Name</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Change your name\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Bio</label>\n            <div class=\"col-sm-10\">\n              <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n            </div>\n          </div>\n          <fieldset class=\"form-group\">\n            <div class=\"row\">\n              <legend class=\"col-form-label col-sm-2 pt-0\">Gender</legend>\n              <div class=\"col-sm-10\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"Male\" checked>\n                  <label class=\"form-check-label\" for=\"gridRadios1\">\n                    Male\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"Female\">\n                  <label class=\"form-check-label\" for=\"gridRadios2\">\n                    Female\n                  </label>\n                </div>\n              </div>\n            </div>\n          </fieldset>\n          <div class=\"form-group row\">\n            <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">DOB</label>\n            <div class=\"col-sm-10\">\n              <input type=\"date\" class=\"form-control\" id=\"date1\" placeholder=\"Change your name\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Location</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" class=\"form-control\" id=\"location\" placeholder=\"Enter your location\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Upload Image</label>\n            <div class=\"col-sm-10\">\n              <input type=\"file\" class=\"form-control-file\" (change)=\"onFileChanged($event)\" id=\"exampleFormControlFile1\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-sm-10\">\n              <button (click)=\"update_profile()\" class=\"btn btn-primary\">Update</button>\n            </div>\n          </div>\n        </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/editmyprofile/editmyprofile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/editmyprofile/editmyprofile.component.ts ***!
  \**********************************************************/
/*! exports provided: EditmyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmyprofileComponent", function() { return EditmyprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditmyprofileComponent = /** @class */ (function () {
    function EditmyprofileComponent(ms, router) {
        this.ms = ms;
        this.router = router;
        this.selectedFile = {};
        this.My_Profile = {};
    }
    EditmyprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem(this.ms.Scatter_account_name) != null) {
            this.name = localStorage.getItem(this.ms.Scatter_account_name).split('-')[0];
            this.ms.getAccountProfile().then(function (res) {
                _this.My_Profile = res[0];
                console.log(res);
            });
            // console.log(this.name)
        }
        else
            this.router.navigate(['/']);
    };
    EditmyprofileComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = {};
        this.selectedFile = event.target.files[0];
    };
    EditmyprofileComponent.prototype.update_profile = function () {
        var accname = (document.getElementById("inputEmail3").value);
        var bio = (document.getElementById("exampleFormControlTextarea1").value);
        var date = (document.getElementById("date1").value);
        var gender = document.querySelector('input[name="gridRadios"]:checked').value;
        var location = (document.getElementById("location").value);
        var fd = new FormData();
        fd.append('account_name', this.name);
        fd.append('name', accname);
        fd.append('dob', date);
        fd.append('location', location);
        fd.append('bio', bio);
        fd.append('sex', gender);
        fd.append('profile_pic', this.selectedFile);
        console.log(this.name);
        this.ms.Post_user_profile(fd).then(function (res) {
            if (res)
                window.location.reload();
        });
    };
    EditmyprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editmyprofile',
            template: __webpack_require__(/*! ./editmyprofile.component.html */ "./src/app/editmyprofile/editmyprofile.component.html"),
            styles: [__webpack_require__(/*! ./editmyprofile.component.css */ "./src/app/editmyprofile/editmyprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditmyprofileComponent);
    return EditmyprofileComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n    /*display: flex;*/\n    /*flex-direction: column;*/\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    bottom: 0;\n    height: calc(100vh - 110px);\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 59px;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #a09fed;\n}\n\n.countdiv {\n\n\tpadding: 0;\n    margin: auto;\n    text-align: left;\n}\n\n.countdivp{\n\n\tmargin: 0;\n}\n\n.icon {\n\n\tmax-width: 80%;\n}\n\n.icondiv {\n\n\tpadding-right: 0;\n}\n\n.countselected {\n\tcolor: #a09fed;\n}\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0lBQ1YsNEJBQTRCO0NBQy9COztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFlBQVk7SUFDVCw0RUFBNEU7SUFDNUUsb0JBQW9COztDQUV2Qjs7QUFFRDs7Q0FFQyxZQUFZO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixpQkFBaUI7SUFDZCxZQUFZO0NBQ2Y7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQjs7QUFHRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZjs7QUFFRDs7Q0FFQyxXQUFXO0lBQ1IsYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjs7QUFFRDs7Q0FFQyxVQUFVO0NBQ1Y7O0FBRUQ7O0NBRUMsZUFBZTtDQUNmOztBQUVEOztDQUVDLGlCQUFpQjtDQUNqQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlb25le1xuICAgIC8qZGlzcGxheTogZmxleDsqL1xuICAgIC8qZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHgpO1xufVxuXG4uaGVhZGVyb25le1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdHBhZGRpbmc6IDEwcHggMTZweDtcblx0aGVpZ2h0OiA1OXB4O1xuXHR3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuXG4udXNlcmltYWdlIHtcblxuXHR3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZm9vdGVyb25lIHtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcblx0bWluLWhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1jb2xvcntcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZjdmOGZhO1xufVxuXG5cbi50aHJlZWljb25zIHtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4udGhyZWVpY29uczpob3ZlciB7XG5cdGNvbG9yOiAjYTA5ZmVkO1xufVxuXG4uY291bnRkaXYge1xuXG5cdHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb3VudGRpdnB7XG5cblx0bWFyZ2luOiAwO1xufVxuXG4uaWNvbiB7XG5cblx0bWF4LXdpZHRoOiA4MCU7XG59XG5cbi5pY29uZGl2IHtcblxuXHRwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4uY291bnRzZWxlY3RlZCB7XG5cdGNvbG9yOiAjYTA5ZmVkO1xufVxuXG4uY3Vyc29ye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\t<!-- This header is open header for User psersonal Profile. Starts Here -->\n\t<header class=\"headerone\">\n\t\t<div class=\"row mt-1\" style=\"float: right;\">\n\t\t\t<div class=\"mr-3\">\n\t\t\t\t<i class=\"material-icons\">search</i>\n\t\t\t</div>\n\t\t\t<div class=\"mr-3\">\n\t\t\t\t<button type=\"button\" routerLink=\"/create\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;\">murmur</button>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t<!-- This header is open header for User psersonal Profile. Ends Here -->\n\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\t<!-- <header class=\"headerone\">\n\t\t<a><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t</header> -->\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\n\t<div id = \"divscroll\" style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\" >\n\n\t\t<div class=\"card mt-0\" *ngFor=\"let mur of Murmur_Posts; let i = index\" >\n\t\t\t<div class=\"card-body\" *ngIf = \"mur.action_type == 'murmur'\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t<a class=\"cursor\" (click)=\"otherUser(mur.Acc_id)\"><img class=\"userimage\" src={{mur.image}}></a>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t<a><p>{{mur.murmur.message}}</p></a>\n\t\t\t\t\t\t\t<a *ngIf = \" mur.murmur.attached_url !== ''\" ><img style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src={{mur.murmur.attached_url}}></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\"><a (click)=\"snoop(i)\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">thumb_up</i></a>{{mur.murmur.snoop_count}}</div>\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"/share\" (click)=\"cmt_ID(i)\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">share</i></a>{{mur.murmur.yell_count}}</div>\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"/comment\" (click)=\"cmt_ID(i)\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">comment</i></a>{{mur.murmur.comment_count}}</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" (click)=\"snoop(i)\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a routerLink=\"/comment\" (click)=\"cmt_ID(i)\"><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a routerLink=\"/share\" (click)=\"cmt_ID(i)\"><img class=\"icon\" src=\"assets/img/share.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.yell_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"card-body\" *ngIf = \"mur.action_type == 'yell'\">\n\t\t\t\t<div class=\"row\">\n                    <div class=\"col-1\">\n                        <a class=\"cursor\" (click)=\"otherUser(mur.Acc_id)\"><img class=\"userimage\" src={{mur.image}}></a>\n                    </div>            \n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t<a><p>{{mur.yell.extra_comment}}</p></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 mb-4\">\n\t\t\t\t\t\t\t<div class=\"card mt-0\" style=\"border-radius: 10px;\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"cursor\" (click)=\"otherUser(mur.yell.mur_acc_id)\"><img class=\"userimage\" src={{mur.yell.mur_acc_image}}></a>\n\t\t\t\t\t\t\t\t\t</div>            \n\t\t\t\t\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.yell.mur_account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.yell.mur_acc_id}}</span></h6></a>\n\t\t\t\t\t\t\t\t\t\t\t<a><p>{{mur.yell.message}}</p></a>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf = \" mur.yell.attached_url !== ''\" ><img style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src={{mur.yell.attached_url}}></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\"><a (click)=\"snoop(i)\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">thumb_up</i></a>{{mur.yell.snoop_count}}</div>\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"/comment\" (click)=\"cmt_ID(i)\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">comment</i></a>{{mur.yell.comment_count}}</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" (click)=\"snoop(i)\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.yell.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a routerLink=\"/comment\" (click)=\"cmt_ID(i)\"><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.yell.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n                </div>\n\t\t\t</div>\n\t\t</div>\n\t\t<ngx-spinner\n\t\t\tbdColor=\"rgba(51,51,51,0.8)\"\n\t\t\tsize=\"medium\"\n\t\t\tcolor=\"#fff\"\n\t\t\tloadingText=\"Loading...\"\n\t\t\ttype=\"ball-scale-multiple\">\n\t\t</ngx-spinner>\n\t</div>\n\t<router-outlet></router-outlet>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedComponent = /** @class */ (function () {
    function FeedComponent(ms) {
        this.ms = ms;
        this.Murmur_Posts = [];
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.scrolling()
        if (this.ms.Murmur_Posts.length == 0) {
            this.Murmur_Posts = [];
            this.ms.getMurmurs().then(function (res) {
                _this.Murmur_Posts = res;
                // console.log(res)
            });
        }
        else {
            this.Murmur_Posts = this.ms.Murmur_Posts;
        }
    };
    FeedComponent.prototype.cmt_ID = function (id) {
        this.ms.setCommentID(id);
        this.ms.setCommentData(id, 'murmur');
    };
    FeedComponent.prototype.snoop = function (id) {
        var _this = this;
        this.ms.Snoop(id, 'murmur').then(function (res) {
            console.log(res);
            _this.Murmur_Posts = [];
            _this.ms.getMurmurs().then(function (res) {
                _this.Murmur_Posts = res;
                // console.log(res)
            });
        });
    };
    FeedComponent.prototype.otherUser = function (name) {
        this.ms.setOtherUserName(name.split('@')[1]);
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userimage {\n\n\tmax-width: 150px;\n    max-height: 150px;\n}\n\n\n.imagecontainer {\n\ttext-align: center;\n}\n\n\n.info {\n\n\tcolor: white;\n\ttext-align: center;\n}\n\n\n.handle {\n\ttext-align: center;\n\tcolor: black;\n}\n\n\n.righttext {\n\ttext-align: center;\n\tcolor: white;\n}\n\n\n.righttextblue {\n\tcolor: #a09fed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxpQkFBaUI7SUFDZCxrQkFBa0I7Q0FDckI7OztBQUdEO0NBQ0MsbUJBQW1CO0NBQ25COzs7QUFFRDs7Q0FFQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25COzs7QUFFRDtDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2I7OztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjs7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJpbWFnZSB7XG5cblx0bWF4LXdpZHRoOiAxNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcbn1cblxuXG4uaW1hZ2Vjb250YWluZXIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbmZvIHtcblxuXHRjb2xvcjogd2hpdGU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhhbmRsZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Y29sb3I6IGJsYWNrO1xufVxuXG4ucmlnaHR0ZXh0IHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5yaWdodHRleHRibHVlIHtcblx0Y29sb3I6ICNhMDlmZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n\t<div class=\"container imagecontainer mt-5\">\n\t\t<img class=\"userimage\" src=\"assets/img/favicon.png\">\n\t</div>\n\t<div class=\"info handle mt-4\">\n\t\t<h3>Welcome Back</h3>\n\t\t<p>Sign in to continue</p>\n\t</div>\n\t<form class=\"mt-5 mb-5\" style=\"text-align: center;\" >\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"text\" class=\"form-control\" id=\"accountname\"  placeholder=\"Enter account Name\" style=\"text-align: center;\">\n\t  </div>\n\t  <div class=\"form-group\">\n\t\t\t<!-- <label for=\"privateKey\">Import Private Key</label> -->\n\t    <input type=\"password\" class=\"form-control\" id=\"privateKey\"  placeholder=\"Import Private Key\" style=\"text-align: center;\">\n\t  </div>\n\t\t<button class=\"btn btn-primary\" style=\"width: 100%;\" (click)=\"PriKey_login()\">Import</button>\n\t</form>\n\t<hr>\n\t<form class=\"mt-5 mb-5\" style=\"text-align: center;\">\n\t  <div class=\"form-group\">\n\t    <label for=\"privateKey\">Scan QR Code</label>\n\t  </div>\n\t  <div class=\"form-group\">\n\t    <img class=\"userimage\" src=\"assets/img/qrcode.png\">\n\t  </div>\n\t</form>\n\t<hr>\n\t<!-- <form class=\"mt-5 mb-5\" style=\"text-align: center;\"> -->\n\t\t<button (click)=\"Scat_login()\" class=\"btn btn-primary\" style=\"width: 100%;\">Use Scatter</button>\n\t<!-- </form> -->\n</div>\n\t"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(ms, router) {
        this.ms = ms;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Scat_login = function () {
        var _this = this;
        this.ms.Scater_login().then(function (res) {
            if (res) {
                var set_int_1 = setInterval(function () {
                    if (localStorage.getItem(_this.ms.Scatter_account_name) != null) {
                        // console.log("Login Acc "+localStorage.getItem(this.ms.Scatter_account_name))
                        clearInterval(set_int_1);
                        _this.router.navigate(['/']);
                    }
                    else
                        _this.ms.Scater_login();
                }, 50);
            }
        });
    };
    LoginComponent.prototype.PriKey_login = function () {
        var _this = this;
        var Pri_key = (document.getElementById("privateKey").value);
        var Acc_name = (document.getElementById("accountname").value);
        if (Acc_name != '') {
            this.ms.isPri_Valid(Pri_key).then(function (res) {
                if (res) {
                    _this.ms.PKey_login(Acc_name, Pri_key).then(function (res) {
                        var set_int = setInterval(function () {
                            if (localStorage.getItem(_this.ms.Scatter_account_name) != null) {
                                clearInterval(set_int);
                                // console.log("Acc "+ localStorage.getItem(this.ms.Scatter_account_name))
                                _this.router.navigate(['/']);
                            }
                        }, 50);
                    });
                }
                else {
                    alert("Enter the valid private key");
                }
            });
        }
        else
            alert("Please Enter the account name");
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logincontent/logincontent.component.css":
/*!*********************************************************!*\
  !*** ./src/app/logincontent/logincontent.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n    /*display: flex;*/\n    /*flex-direction: column;*/\n    height: 100%;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 100px;\n    border: 0;\n}\n\n.headerone{\n\n    background-color: #ffffff;\n    padding: 10px 16px;\n    height: 59px;\n    width: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n    max-width: 100%;\n}\n\n.footerone {\n\n    background-color: #ffffff;\n    position: absolute;\n    bottom: 0;\n    min-height: 65px;\n    width: 100%;\n}\n\n.formcolor{\n\n    background-color: #f7f8fa;\n    border: 1px solid #f7f8fa;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5jb250ZW50L2xvZ2luY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZUFBZTtJQUNmLFVBQVU7Q0FDYjs7QUFFRDs7SUFFSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osNEVBQTRFO0lBQzVFLG9CQUFvQjs7Q0FFdkI7O0FBRUQ7O0lBRUksZ0JBQWdCO0NBQ25COztBQUVEOztJQUVJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2Y7O0FBRUQ7O0lBRUksMEJBQTBCO0lBQzFCLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luY29udGVudC9sb2dpbmNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZW9uZXtcblxuICAgIC8qZGlzcGxheTogZmxleDsqL1xuICAgIC8qZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTAwcHg7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4uaGVhZGVyb25le1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgaGVpZ2h0OiA1OXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cbi51c2VyaW1hZ2Uge1xuXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZm9vdGVyb25lIHtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBtaW4taGVpZ2h0OiA2NXB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybWNvbG9ye1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdmOGZhO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/logincontent/logincontent.component.html":
/*!**********************************************************!*\
  !*** ./src/app/logincontent/logincontent.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This sesction is for Detailed Chat Info of people. Starts Here -->\n<div class=\"styleone\">\n  <div class=\"container\" style=\"text-align: center;\">\n    <h1>Murmur</h1>\n    <div>\n      <img class=\"userimage\" src=\"assets/img/infomain.png\">\n    </div>\n  </div>\n</div>\n  \n<!-- This sesction is for Detailed Chat Info of people. Ends Here -->\n  "

/***/ }),

/***/ "./src/app/logincontent/logincontent.component.ts":
/*!********************************************************!*\
  !*** ./src/app/logincontent/logincontent.component.ts ***!
  \********************************************************/
/*! exports provided: LogincontentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogincontentComponent", function() { return LogincontentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogincontentComponent = /** @class */ (function () {
    function LogincontentComponent() {
    }
    LogincontentComponent.prototype.ngOnInit = function () {
    };
    LogincontentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logincontent',
            template: __webpack_require__(/*! ./logincontent.component.html */ "./src/app/logincontent/logincontent.component.html"),
            styles: [__webpack_require__(/*! ./logincontent.component.css */ "./src/app/logincontent/logincontent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogincontentComponent);
    return LogincontentComponent;
}());



/***/ }),

/***/ "./src/app/mainapp/mainapp.component.css":
/*!***********************************************!*\
  !*** ./src/app/mainapp/mainapp.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\tborder-radius: 3px;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin: 0 auto;\n    -webkit-animation: _104Un 0.3s cubic-bezier(0.1, 0.82, 0.25, 1);\n            animation: _104Un 0.3s cubic-bezier(0.1, 0.82, 0.25, 1);\n    background-position: top left;\n    left: 0;\n    background-color: #f7f8fa;\n    background-repeat: repeat-x;\n    /*transform-origin: center;*/\n    height: calc(100vh - 38px);\n    top: 19px;\n    /*display: -webkit-flex;*/\n    /*display: flex;*/\n    overflow: hidden;\n    position: relative;\n    /*width: 100%;*/\n}\n\n.styleleft{\n\n\t/*transform: translateZ(0);*/\n\t/*flex: 0 0 30%;*/\n\toverflow: hidden;\n    position: relative;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    /*border: 0;*/\n}\n\n.styleright{\n\n\t/*transform: translateZ(0);*/\n\t/*flex: 0 0 30%;*/\n\toverflow: hidden;\n    position: relative;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    /*border: 0;*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmFwcC9tYWluYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsbUJBQW1CO0lBQ2hCLDRFQUE0RTtJQUM1RSxlQUFlO0lBQ2YsZ0VBQXdEO1lBQXhELHdEQUF3RDtJQUN4RCw4QkFBOEI7SUFDOUIsUUFBUTtJQUNSLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjs7QUFFRDs7Q0FFQyw2QkFBNkI7Q0FDN0Isa0JBQWtCO0NBQ2xCLGlCQUFpQjtJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0NBQ2pCOztBQUVEOztDQUVDLDZCQUE2QjtDQUM3QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9tYWluYXBwL21haW5hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZW9uZXtcblxuXHRib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGFuaW1hdGlvbjogXzEwNFVuIDAuM3MgY3ViaWMtYmV6aWVyKDAuMSwgMC44MiwgMC4yNSwgMSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICAvKnRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjsqL1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDM4cHgpO1xuICAgIHRvcDogMTlweDtcbiAgICAvKmRpc3BsYXk6IC13ZWJraXQtZmxleDsqL1xuICAgIC8qZGlzcGxheTogZmxleDsqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qd2lkdGg6IDEwMCU7Ki9cbn1cblxuLnN0eWxlbGVmdHtcblxuXHQvKnRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTsqL1xuXHQvKmZsZXg6IDAgMCAzMCU7Ki9cblx0b3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLypib3JkZXI6IDA7Ki9cbn1cblxuLnN0eWxlcmlnaHR7XG5cblx0Lyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7Ki9cblx0LypmbGV4OiAwIDAgMzAlOyovXG5cdG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC8qYm9yZGVyOiAwOyovXG59Il19 */"

/***/ }),

/***/ "./src/app/mainapp/mainapp.component.html":
/*!************************************************!*\
  !*** ./src/app/mainapp/mainapp.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container styleone\">\n\t<div class=\"row\" style=\"height: 100%\">\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 styleleft\">\n\t\t\t<app-mainappone></app-mainappone>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 styleright\">\n\t\t\t<app-mainapptwo></app-mainapptwo>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/mainapp/mainapp.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mainapp/mainapp.component.ts ***!
  \**********************************************/
/*! exports provided: MainappComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainappComponent", function() { return MainappComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainappComponent = /** @class */ (function () {
    function MainappComponent() {
    }
    MainappComponent.prototype.ngOnInit = function () {
    };
    MainappComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainapp',
            template: __webpack_require__(/*! ./mainapp.component.html */ "./src/app/mainapp/mainapp.component.html"),
            styles: [__webpack_require__(/*! ./mainapp.component.css */ "./src/app/mainapp/mainapp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainappComponent);
    return MainappComponent;
}());



/***/ }),

/***/ "./src/app/mainappone/mainappone.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mainappone/mainappone.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: #232937;\n}\n\n.headerone{\n\n\tbackground-color: #000000;\n\tpadding: 10px 16px;\n\theight: 59px;\n\twidth: 100%;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmFwcG9uZS9tYWluYXBwb25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsY0FBYztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLG9CQUFvQjtDQUN2Qjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixZQUFZOztDQUVaOztBQUVEOztDQUVDLFlBQVk7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFpbmFwcG9uZS9tYWluYXBwb25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVvbmV7XG5cblx0LypkaXNwbGF5OiBmbGV4OyovXG5cdC8qZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMjMyOTM3O1xufVxuXG4uaGVhZGVyb25le1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG5cdHBhZGRpbmc6IDEwcHggMTZweDtcblx0aGVpZ2h0OiA1OXB4O1xuXHR3aWR0aDogMTAwJTtcblxufVxuXG4udXNlcmltYWdlIHtcblxuXHR3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY3Vyc29ye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mainappone/mainappone.component.html":
/*!******************************************************!*\
  !*** ./src/app/mainappone/mainappone.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"styleone\">\n\t\t<header class=\"headerone\" *ngIf = \"login\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-6\">\n\t\t\t\t\t<a (click)=\"otherUser()\" [routerLink]=\"[{outlets: {feed: ['userprofilelist']}}]\"><img class=\"userimage\" src={{My_Profile.profile_pic}}></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-6\" style=\"margin: auto;text-align: right;\">\n\t\t\t\t\t<a routerLink=\"feed\"><i class=\"material-icons mr-4\" style=\"color: white;\">timeline</i></a>\t\n\t\t\t\t\t<a [routerLink]=\"[{outlets: {feed: ['chat']}}]\"><i class=\"material-icons mr-4\" style=\"color: white;\">chat</i></a>\n\t\t\t\t\t<a class=\"cursor\" ><i class=\"material-icons mr-4\" style=\"color: white;\">notifications</i></a>\n\t\t\t\t\t<!-- <i (click) = \"logout()\" class=\"material-icons mr-4\" style=\"color: white;\">logout</i> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\t\n\t\t<!-- This section below is to be displayed when User cliks on Wisper. Starts Here. -->\n\t\n\t\t<!-- <app-wisperchatlist></app-wisperchatlist> -->\n\t\n\t\t<!-- This section below is to be displayed when User cliks on Wisper. Ends Here. -->\n\t\n\t\t<!-- This section below is to be displayed when User cliks on any User Profile Picture. Starts Here. -->\n\t\n\t\t<!-- <app-userprofilelist></app-userprofilelist> -->\n\t\t<!-- <app-userprofilelist></app-userprofilelist> -->\n\t\n\t\t<!-- This section below is to be displayed when User cliks on any User Profile Picture. Ends Here. -->\n\t\t\n\t\t<router-outlet  name='feed'></router-outlet>\n\t\n\t</div>\n\t"

/***/ }),

/***/ "./src/app/mainappone/mainappone.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mainappone/mainappone.component.ts ***!
  \****************************************************/
/*! exports provided: MainapponeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainapponeComponent", function() { return MainapponeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainapponeComponent = /** @class */ (function () {
    function MainapponeComponent(ms) {
        this.ms = ms;
        this.My_Profile = {};
    }
    MainapponeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.ms.Check_scatter().then(function (result) {
                if (_this.login != result) {
                    _this.login = result;
                    if (result) {
                        _this.ms.getAccountProfile().then(function (res) {
                            _this.My_Profile = res[0];
                            // console.log(res)
                        });
                    }
                    else {
                        _this.My_Profile = [];
                    }
                }
            });
        }, 50);
    };
    MainapponeComponent.prototype.otherUser = function () {
        this.ms.setOtherUserName(undefined);
    };
    MainapponeComponent.prototype.logout = function () {
        this.ms.Scater_logout();
    };
    MainapponeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainappone',
            template: __webpack_require__(/*! ./mainappone.component.html */ "./src/app/mainappone/mainappone.component.html"),
            styles: [__webpack_require__(/*! ./mainappone.component.css */ "./src/app/mainappone/mainappone.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"]])
    ], MainapponeComponent);
    return MainapponeComponent;
}());



/***/ }),

/***/ "./src/app/mainapptwo/mainapptwo.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mainapptwo/mainapptwo.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 59px;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #a09fed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbmFwcHR3by9tYWluYXBwdHdvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsY0FBYztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtDQUNiOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFlBQVk7SUFDVCw0RUFBNEU7SUFDNUUsb0JBQW9COztDQUV2Qjs7QUFFRDs7Q0FFQyxZQUFZO0lBQ1QsYUFBYTtDQUNoQjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixpQkFBaUI7SUFDZCxZQUFZO0NBQ2Y7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQjs7QUFHRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL21haW5hcHB0d28vbWFpbmFwcHR3by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlb25le1xuXG5cdC8qZGlzcGxheTogZmxleDsqL1xuXHQvKmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5oZWFkZXJvbmV7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cGFkZGluZzogMTBweCAxNnB4O1xuXHRoZWlnaHQ6IDU5cHg7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cbi51c2VyaW1hZ2Uge1xuXG5cdHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLmZvb3Rlcm9uZSB7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG5cdG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtY29sb3J7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y3ZjhmYTtcbn1cblxuXG4udGhyZWVpY29ucyB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRocmVlaWNvbnM6aG92ZXIge1xuXHRjb2xvcjogI2EwOWZlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mainapptwo/mainapptwo.component.html":
/*!******************************************************!*\
  !*** ./src/app/mainapptwo/mainapptwo.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- This sesction is for Detailed Chat Info of people. Starts Here -->\n\n<!-- <app-userchat></app-userchat> -->\n\n<!-- This sesction is for Detailed Chat Info of people. Ends Here -->\n\n\n\n<!-- This sesction is for Main Feed. Starts Here -->\n\n\t<!-- <app-feed></app-feed> -->\n\n<!-- This sesction is for Main Feed. Ends Here -->\n\n\n<!-- This sesction is for Detailed Other User Feed. Starts Here -->\n\n\t<!-- <app-otheruserpersonalfeed></app-otheruserpersonalfeed> -->\n\n<!-- This sesction is for Detailed Other User Feed. Ends Here -->\n\n\n<!-- This sesction is for Detailed User Perosnal Feed. Starts Here -->\n\n\t<!-- <app-userpersonalfeed></app-userpersonalfeed> -->\n\n<!-- This sesction is for Detailed User Personal Feed. Ends Here -->\n\n<!-- This sesction is for Share a post. Starts Here -->\n\n\t<!-- <app-sharepost></app-sharepost> -->\n\n<!-- This sesction is for Share a post. Ends Here -->\n\n<!-- This sesction is for Share a post. Starts Here -->\n\n\t<!-- <app-commentpost></app-commentpost> -->\n\n<!-- This sesction is for Share a post. Ends Here -->\n\n<!-- This sesction is for Posting a murmue. Starts Here -->\n\n\t<!-- <app-postmurmur></app-postmurmur> -->\n\n<!-- This sesction is for Posting a murmue. Ends Here -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/mainapptwo/mainapptwo.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mainapptwo/mainapptwo.component.ts ***!
  \****************************************************/
/*! exports provided: MainapptwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainapptwoComponent", function() { return MainapptwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainapptwoComponent = /** @class */ (function () {
    function MainapptwoComponent() {
    }
    MainapptwoComponent.prototype.ngOnInit = function () {
    };
    MainapptwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainapptwo',
            template: __webpack_require__(/*! ./mainapptwo.component.html */ "./src/app/mainapptwo/mainapptwo.component.html"),
            styles: [__webpack_require__(/*! ./mainapptwo.component.css */ "./src/app/mainapptwo/mainapptwo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainapptwoComponent);
    return MainapptwoComponent;
}());



/***/ }),

/***/ "./src/app/murmur.service.ts":
/*!***********************************!*\
  !*** ./src/app/murmur.service.ts ***!
  \***********************************/
/*! exports provided: MurmurService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MurmurService", function() { return MurmurService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! eosjs */ "./node_modules/eosjs/lib/index.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(eosjs__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var MurmurService = /** @class */ (function () {
    function MurmurService(http, spin, router) {
        this.http = http;
        this.spin = spin;
        this.router = router;
        this.image = "assets/img/pic1.png";
        this.Acc_Profile = [];
        this.Others_Acc_Profile = [];
        this.Murmur_Posts = [];
        this.My_Murmur_Posts = [];
        this.Murmur_Commetnts = [];
        this.Search_accounts = [];
        this.chatName = {};
        this.Cmt_data = {};
        this.Scatter_account_name = '';
        this.config = {};
        this.network = {
            blockchain: 'eos',
            protocol: 'http',
            host: "jungle.cryptolions.io",
            port: '18888',
            chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca'
        };
        this.config = {
            chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
            httpEndpoint: 'http://jungle.cryptolions.io:18888',
            broadcast: true,
            debug: true,
            sign: true
        };
        this.eos = eosjs__WEBPACK_IMPORTED_MODULE_4__(this.config);
    }
    MurmurService.prototype.SetConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ecc;
            var _this = this;
            return __generator(this, function (_a) {
                ecc = eosjs__WEBPACK_IMPORTED_MODULE_4__["modules"].ecc;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.config = {
                            chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
                            httpEndpoint: 'http://jungle.cryptolions.io:18888',
                            keyProvider: [localStorage.getItem(_this.Scatter_account_name).split('-')[1]],
                            authorization: localStorage.getItem(_this.Scatter_account_name).split('-')[0] + '@active',
                            sign: true,
                            broadcast: true,
                        };
                        _this.eos = eosjs__WEBPACK_IMPORTED_MODULE_4__(_this.config);
                        resolve(_this.eos);
                    })];
            });
        });
    };
    // Using Private Key
    MurmurService.prototype.isPri_Valid = function (privKey) {
        return __awaiter(this, void 0, void 0, function () {
            var ecc;
            return __generator(this, function (_a) {
                ecc = eosjs__WEBPACK_IMPORTED_MODULE_4__["modules"].ecc;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (ecc.isValidPrivate(privKey)) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.PriToPub = function (privKey) {
        return __awaiter(this, void 0, void 0, function () {
            var ecc;
            return __generator(this, function (_a) {
                ecc = eosjs__WEBPACK_IMPORTED_MODULE_4__["modules"].ecc;
                // privKey = "5J9UnE6rZ4EixYMoqsz1MVv3oUt5EXamitwozKRDb7AbkkCmhro";
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var pubKey = ecc.privateToPublic(privKey);
                        // console.log('pubKey: ', pubKey)
                        resolve(pubKey);
                    })];
            });
        });
    };
    MurmurService.prototype.AccToPub = function (acc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.eos.getAccount(acc).then(function (res) {
                            resolve(res.permissions[0].required_auth.keys[0].key);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.PKey_login = function (acc_name, privKey) {
        return __awaiter(this, void 0, void 0, function () {
            var config, eos, flag;
            var _this = this;
            return __generator(this, function (_a) {
                config = {
                    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
                    httpEndpoint: 'http://jungle.cryptolions.io:18888',
                    sign: true,
                    broadcast: true,
                };
                eos = eosjs__WEBPACK_IMPORTED_MODULE_4__(config);
                flag = 0;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.PriToPub(privKey).then(function (pubKey) {
                            eos.getKeyAccounts(pubKey, function (error, result) {
                                if (error)
                                    reject("error");
                                // console.log(result.account_names['length'])
                                for (var i = 0; i < result.account_names['length']; i++) {
                                    if (result.account_names[i] == acc_name) {
                                        // console.log(result.account_names[i])
                                        localStorage.setItem(_this.Scatter_account_name, result.account_names[i] + '-' + privKey);
                                        flag = 1;
                                        _this.SetConfig().then(function (res) { return console.log("Configuration successed"); });
                                        resolve(true);
                                    }
                                }
                                if (flag == 0)
                                    alert("Enter the valid account name");
                            });
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.PKey_logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        localStorage.removeItem(_this.Scatter_account_name);
                        _this.router.navigate([{ outlets: { primary: ['login'], feed: ['login'] } }]);
                        resolve(true);
                    })];
            });
        });
    };
    // Scatter
    MurmurService.prototype.Check_scatter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log(localStorage.getItem(this.Scatter_account_name))
                        resolve(localStorage.getItem(_this.Scatter_account_name) !== null);
                    })];
            });
        });
    };
    MurmurService.prototype.Scater_login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var my = _this;
                        my.scatter = window.scatter;
                        if (my.identity) {
                            my.scatter.useIdentity(my.identity.hash);
                        }
                        _this.scatter.getIdentity({ accounts: [my.network] }).then(function (identity) {
                            my.identity = identity;
                            localStorage.setItem(my.Scatter_account_name, my.identity.accounts[0].name);
                            my.Scatter_account_name = my.identity.accounts[0].name;
                            my.scatter.useIdentity(my.identity.hash);
                            resolve(true);
                        }).catch(function (error) {
                            console.log(error);
                            resolve(false);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.Scater_logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var my = _this;
                        my.scatter = window.scatter;
                        if (my.identity) {
                            my.scatter.useIdentity(my.identity.hash);
                        }
                        _this.scatter.getIdentity({ accounts: [my.network] }).then(function (identity) {
                            my.identity = identity;
                            my.scatter.forgetIdentity();
                            localStorage.removeItem(my.Scatter_account_name);
                            my.router.navigate([{ outlets: { primary: ['login'], feed: ['login'] } }]);
                            resolve(true);
                        }).catch(function (error) {
                            console.log(error);
                            resolve(false);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.setdata = function (user) {
        this.chatName = user;
        // console.log(this.chatName)
    };
    MurmurService.prototype.getdata = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.chatName;
                        // console.log(this.chatName)
                        resolve(_this.chatName);
                    })];
            });
        });
    };
    MurmurService.prototype.setCommentData = function (id, type) {
        this.Cmt_data = {
            id: id,
            type: type
        };
    };
    MurmurService.prototype.setOtherUserName = function (name) {
        this.Other_User_name = name;
    };
    MurmurService.prototype.getOtherUserName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        resolve(_this.Other_User_name);
                    })];
            });
        });
    };
    MurmurService.prototype.getCommentData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        resolve(_this.Cmt_data);
                    })];
            });
        });
    };
    MurmurService.prototype.setCommentID = function (id) {
        this.Cmt_Mur_ID = id;
    };
    MurmurService.prototype.getCommentID = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        resolve(_this.Cmt_Mur_ID);
                    })];
            });
        });
    };
    MurmurService.prototype.getMurmurByIndex = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        resolve(_this.Murmur_Posts[index]);
                    })];
            });
        });
    };
    MurmurService.prototype.getMyMurmurByIndex = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var arr = _this.My_Murmur_Posts;
                        resolve(arr[index]);
                    })];
            });
        });
    };
    // Get calls
    MurmurService.prototype.getMurmurs = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.spin.show();
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/murmurTimeline?account_name=" + localStorage.getItem(_this.Scatter_account_name).split('-')[0])
                            .subscribe(function (postData) {
                            var mur = Object.values(postData)[1];
                            _this.Murmur_Posts = [];
                            var my = [];
                            for (var i = 0; i < mur.length; i++) {
                                if (mur[i].action_type == 'murmur') {
                                    var mur_url = mur[i].murmur.attached_url;
                                    if (mur_url.split('.').length == 1 && mur_url !== '')
                                        mur[i].murmur.attached_url = 'https://ipfs.io/ipfs/' + mur_url;
                                    my.push({
                                        id: mur[i]._id,
                                        action_type: mur[i].action_type,
                                        account_name: mur[i].account_name,
                                        Acc_id: '@' + mur[i].account_name,
                                        image: _this.image,
                                        murmur: {
                                            id: mur[i].murmur._id,
                                            murmur_id: mur[i].murmur.murmur_id,
                                            message: mur[i].murmur.message,
                                            attached_url: mur[i].murmur.attached_url,
                                            visibility: mur[i].murmur.visibility,
                                            yell_count: mur[i].murmur.yell_count,
                                            comment_count: mur[i].murmur.comment_count,
                                            snoop_count: mur[i].murmur.snoop_count
                                        },
                                        createdAt: mur[i].createdAt,
                                        yell: {}
                                    });
                                }
                                else {
                                    var mur_url = mur[i].yell.murmur.attached_url;
                                    if (mur_url.split('.').length == 1 && mur_url !== '')
                                        mur[i].yell.murmur.attached_url = 'https://ipfs.io/ipfs/' + mur_url;
                                    my.push({
                                        id: mur[i]._id,
                                        action_type: mur[i].action_type,
                                        account_name: mur[i].account_name,
                                        Acc_id: '@' + mur[i].account_name,
                                        image: _this.image,
                                        yell: {
                                            id: mur[i].yell._id,
                                            yell_id: mur[i].yell.yell_id,
                                            extra_comment: mur[i].yell.extra_comment,
                                            murmur_id: mur[i].yell.murmur.murmur_id,
                                            mur_account_name: mur[i].yell.murmur.account_name,
                                            mur_acc_id: '@' + mur[i].yell.murmur.account_name,
                                            mur_acc_image: _this.image,
                                            message: mur[i].yell.murmur.message,
                                            attached_url: mur[i].yell.murmur.attached_url,
                                            visibility: mur[i].yell.visibility,
                                            comment_count: mur[i].yell.comment_count,
                                            snoop_count: mur[i].yell.snoop_count,
                                        },
                                        createdAt: mur[i].createdAt,
                                    });
                                }
                            }
                            var _loop_1 = function (i_1) {
                                _this.getOthersProfile(my[i_1].account_name).then(function (res) {
                                    // console.log(res)
                                    my[i_1].account_name = res[0].account_name;
                                    my[i_1].image = res[0].profile_pic;
                                    if (my[i_1].action_type == 'yell') {
                                        _this.getOthersProfile(my[i_1].yell.mur_account_name).then(function (res) {
                                            // console.log(res)
                                            my[i_1].yell.mur_account_name = res[0].account_name;
                                            my[i_1].yell.mur_acc_image = res[0].profile_pic;
                                        });
                                        // console.log(my)
                                    }
                                });
                                // console.log(my)
                            };
                            // console.log(my)
                            for (var i_1 = 0; i_1 < my.length; i_1++) {
                                _loop_1(i_1);
                            }
                            _this.Murmur_Posts = my;
                            resolve(_this.Murmur_Posts);
                            _this.spin.hide();
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getMyMurmurs = function (acc_name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var temparray = [];
                        var name, img;
                        _this.spin.show();
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getMurmursByAccountName?account_name=" + acc_name)
                            .subscribe(function (postData) {
                            var mur = Object.values(postData)[1];
                            for (var i = 0; i < mur.length; i++) {
                                var mur_url = mur[i].attached_url;
                                if (mur_url.split('.').length == 1 && mur_url !== '')
                                    mur[i].attached_url = 'https://ipfs.io/ipfs/' + mur_url;
                                if (_this.Other_User_name) {
                                    name = _this.Others_Acc_Profile[0].account_name;
                                    img = _this.Others_Acc_Profile[0].profile_pic;
                                }
                                else {
                                    name = _this.Acc_Profile[0].account_name;
                                    img = _this.Acc_Profile[0].profile_pic;
                                }
                                temparray.push({
                                    id: mur[i]._id,
                                    action_type: 'murmur',
                                    account_name: name,
                                    Acc_id: '@' + mur[i].account_name,
                                    image: img,
                                    murmur: {
                                        murmur_id: mur[i].murmur_id,
                                        message: mur[i].message,
                                        attached_url: mur[i].attached_url,
                                        visibility: mur[i].visibility,
                                        yell_count: mur[i].yell_count,
                                        comment_count: mur[i].comment_count,
                                        snoop_count: mur[i].snoop_count,
                                    },
                                    createdAt: mur[i].createdAt,
                                });
                            }
                            _this.My_Murmur_Posts = temparray.reverse();
                            console.log(_this.My_Murmur_Posts);
                            resolve(_this.My_Murmur_Posts);
                            _this.spin.hide();
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getMurmurComments = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var my = [];
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getCommentsByMurmurId?murmur_id=" + id)
                            .subscribe(function (postData) {
                            var mur = Object.values(postData)[1].comments;
                            for (var i = 0; i < mur.length; i++) {
                                my.push({
                                    id: mur[i]._id,
                                    comment_id: mur[i].comment_id,
                                    account_name: mur[i].account_name,
                                    Acc_id: '@' + mur[i].account_name,
                                    image: _this.image,
                                    comment: mur[i].comment,
                                    createdAt: mur[i].createdAt,
                                    yell: {}
                                });
                            }
                            var _loop_2 = function (i_2) {
                                _this.getOthersProfile(my[i_2].account_name).then(function (res) {
                                    // console.log(res)
                                    my[i_2].account_name = res[0].account_name;
                                    my[i_2].image = res[0].profile_pic;
                                });
                                // console.log(my)
                            };
                            // console.log(my)
                            for (var i_2 = 0; i_2 < my.length; i_2++) {
                                _loop_2(i_2);
                            }
                        });
                        // console.log(my)
                        _this.Murmur_Commetnts = my;
                        resolve(_this.Murmur_Commetnts);
                    })];
            });
        });
    };
    MurmurService.prototype.getYellComments = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var my = [];
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getCommentsByYellId?yell_id=" + id)
                            .subscribe(function (postData) {
                            var mur = Object.values(postData)[1].comments;
                            for (var i = 0; i < mur.length; i++) {
                                my.push({
                                    id: mur[i]._id,
                                    comment_id: mur[i].comment_id,
                                    account_name: mur[i].account_name,
                                    Acc_id: '@' + mur[i].account_name,
                                    image: _this.image,
                                    comment: mur[i].comment,
                                    createdAt: mur[i].createdAt,
                                    yell: {}
                                });
                            }
                            var _loop_3 = function (i_3) {
                                _this.getOthersProfile(my[i_3].account_name).then(function (res) {
                                    // console.log(res)
                                    my[i_3].account_name = res[0].account_name;
                                    my[i_3].image = res[0].profile_pic;
                                });
                                // console.log(my)
                            };
                            // console.log(my)
                            for (var i_3 = 0; i_3 < my.length; i_3++) {
                                _loop_3(i_3);
                            }
                        });
                        // console.log(my)
                        _this.Murmur_Commetnts = my;
                        resolve(_this.Murmur_Commetnts);
                    })];
            });
        });
    };
    MurmurService.prototype.getFollwersCount = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // this.Murmur_Commetnts = []
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getAccountFollowers?account_name=" + name)
                            .subscribe(function (postData) {
                            if (Object.values(postData)[1].followers == undefined)
                                resolve(0);
                            else
                                resolve(Object.values(postData)[1].followers.length);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getFollwingCount = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // this.Murmur_Commetnts = []
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getAccountFollowings?account_name=" + name)
                            .subscribe(function (postData) {
                            if (Object.values(postData)[1].following == undefined)
                                resolve(0);
                            else
                                resolve(Object.values(postData)[1].following.length);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getMurmursCount = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // this.Murmur_Commetnts = []
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getMurmursByAccountName?account_name=" + name)
                            .subscribe(function (postData) {
                            resolve(Object.values(postData)[1].length);
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getAccountProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var temparray = [];
                        // console.log("Acc Prof "+localStorage.getItem(this.Scatter_account_name))
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getAccountByID?account_name=" + localStorage.getItem(_this.Scatter_account_name).split('-')[0])
                            .subscribe(function (postData) {
                            // console.log(Object.values(postData))
                            var mur = Object.values(postData)[1];
                            if (mur.account_name == undefined || (mur.name == undefined && mur.profile_pic == undefined)) {
                                mur.account_name = localStorage.getItem(_this.Scatter_account_name).split('-')[0];
                                mur.name = localStorage.getItem(_this.Scatter_account_name).split('-')[0];
                                mur.profile_pic = _this.image;
                            }
                            temparray.push({
                                id: mur._id,
                                account_name: mur.name,
                                Acc_id: '@' + mur.account_name,
                                bio: mur.bio,
                                dob: mur.dob,
                                location: mur.location,
                                profile_pic: mur.profile_pic,
                                sex: mur.sex,
                            });
                            _this.Acc_Profile = temparray;
                            // console.log(this.Acc_Profile)
                            resolve(temparray);
                            _this.spin.hide();
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getOthersProfile = function (acc_name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var arr = [];
                        // console.log("Acc Prof "+localStorage.getItem(this.Scatter_account_name))
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/getAccountByID?account_name=" + acc_name)
                            .subscribe(function (postData) {
                            // console.log(Object.values(postData)[1])
                            var mur = Object.values(postData)[1];
                            if (mur.account_name == undefined)
                                mur.account_name = localStorage.getItem(_this.Scatter_account_name);
                            arr.push({
                                id: mur._id,
                                account_name: mur.name,
                                Acc_id: '@' + mur.account_name,
                                bio: mur.bio,
                                dob: mur.dob,
                                location: mur.location,
                                profile_pic: mur.profile_pic,
                                sex: mur.sex,
                            });
                            _this.Others_Acc_Profile = arr;
                            resolve(arr);
                            _this.spin.hide();
                        });
                    })];
            });
        });
    };
    MurmurService.prototype.getsearchProfile = function (acc_name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http
                            .get("http://murmurjapi.wandx.co/api/searchAccount?hint=" + acc_name)
                            .subscribe(function (response) {
                            var testarray = [];
                            // console.log(Object.values(response)[1])
                            for (var i = 0; i < Object.values(response)[1].length; i++) {
                                if (!Object.values(response)[1][i].profile_pic) {
                                    Object.values(response)[1][i].profile_pic = 'assets/img/pic1.png';
                                }
                                if (!Object.values(response)[1][i].name) {
                                    Object.values(response)[1][i].name = Object.values(response)[1][i].account_name;
                                }
                                testarray.push({
                                    "account_name": Object.values(response)[1][i].account_name,
                                    "Name": Object.values(response)[1][i].name,
                                    "profile_pic": Object.values(response)[1][i].profile_pic,
                                    "Time": "06:45PM",
                                    "msg": "Haliaeetus leucocephalus"
                                });
                            }
                            _this.Search_accounts = testarray;
                            resolve(_this.Search_accounts);
                        });
                    })];
            });
        });
    };
    // Post Calls
    MurmurService.prototype.Post_user_profile = function (fd) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.post("http://murmurjapi.wandx.co/api/update_profile", fd)
                            .subscribe(function (postData) {
                            console.log(postData);
                            var data = postData;
                            resolve(data['status']);
                        });
                    })];
            });
        });
    };
    // Contract Calls
    MurmurService.prototype.postMurmur = function (post, url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        console.log("Post: " + post + ", URL: " + url);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_1 = window.scatter;
                            scatter_1.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_1.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                console.log("Account: ", account);
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_1.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_4__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    // console.log("Account: "+ account.name)
                                    contract.murmur(account.name, post, url, 1, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.murmur(localStorage.getItem(_this.Scatter_account_name).split('-')[0], post, url, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.Snoop = function (id, type) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (type == '')
                            type = 'murmur';
                        if (type == 'murmur') {
                            if (_this.Murmur_Posts[id].action_type == 'murmur') {
                                id = _this.Murmur_Posts[id].murmur.murmur_id;
                                console.log("Mur id " + id);
                                _this.snoopmurmur(id).then(function (res) { return resolve(res); });
                            }
                            else {
                                id = _this.Murmur_Posts[id].yell.yell_id;
                                console.log("Yell id " + id);
                                _this.snoopyell(id).then(function (res) { return resolve(res); });
                            }
                        }
                        else {
                            id = _this.My_Murmur_Posts[id].murmur.murmur_id;
                            console.log("my mur " + id);
                            _this.snoopmurmur(id).then(function (res) { return resolve(res); });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.snoopmurmur = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("Snoop murmur "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_2 = window.scatter;
                            scatter_2.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_2.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                console.log("Account: ", account);
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_2.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_4__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    // console.log("Account: "+ account.name)
                                    contract.snoopmurmur(account.name, id, 1, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    // console.log("Account: "+ account.name)
                                    contract.snoopmurmur(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.snoopyell = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("Snoop yell "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_3 = window.scatter;
                            scatter_3.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_3.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                console.log("Account: ", account);
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_3.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_4__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    // console.log("Account: "+ account.name)
                                    contract.snoopyell(account.name, id, 1, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    // console.log("Account: "+ account.name)
                                    contract.snoopyell(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.yell = function (id, msg) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        console.log("yell contract call " + id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_4 = window.scatter;
                            scatter_4.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_4.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                console.log("Account: ", account);
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_4.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_4__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    // console.log("Account: "+ account.name)
                                    contract.yell(account.name, id, msg, 1, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.yell(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id, msg, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.commentmurmur = function (id, cmt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("comment murmur "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_5 = window.scatter;
                            scatter_5.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_5.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                console.log("Account: ", account);
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_5.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_4__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    // console.log("Account: "+ account.name)
                                    contract.comentmurmur(account.name, id, cmt, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    // console.log("Account: "+ account.name)
                                    contract.comentmurmur(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id, cmt);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.commentyell = function (id, cmt) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // console.log("Comment yell "+  id);
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_6 = window.scatter;
                            scatter_6.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_6.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                console.log("Account: ", account);
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_6.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_4__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    // console.log("Account: "+ account.name)
                                    contract.commentyell(account.name, id, cmt, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    // console.log("Account: "+ account.name)
                                    contract.commentyell(localStorage.getItem(_this.Scatter_account_name).split('-')[0], id, cmt);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.follow = function (facc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_7 = window.scatter;
                            scatter_7.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_7.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                console.log("Account: ", account);
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_7.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_4__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    // console.log("Account: "+ account.name)
                                    contract.follow(account.name, facc, 1, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.follow(localStorage.getItem(_this.Scatter_account_name).split('-')[0], facc, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.unfollow = function (facc) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 1) {
                            var scatter_8 = window.scatter;
                            scatter_8.getIdentity({ accounts: [_this.network] }).then(function () {
                                var account = scatter_8.identity.accounts.find(function (x) { return x.blockchain === 'eos'; });
                                console.log("Account: ", account);
                                var eosOptions = { expireInSeconds: 60 };
                                var eos = scatter_8.eos(_this.network, eosjs__WEBPACK_IMPORTED_MODULE_4__, eosOptions);
                                var transactionOptions = { authorization: [account.name + "@" + account.authority] };
                                eos.transaction('murmurdappco', function (contract) {
                                    // console.log("Account: "+ account.name)
                                    contract.unfollow(account.name, facc, transactionOptions);
                                }).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            }).catch(function (error) {
                                console.error("Error in Scatter: ", error);
                                reject(error);
                            });
                        }
                        else {
                            _this.SetConfig().then(function (eos) {
                                eos.transaction('murmurdappco', function (contract) {
                                    contract.unfollow(localStorage.getItem(_this.Scatter_account_name).split('-')[0], facc, 1);
                                }, _this.config).then(function (trx) {
                                    // console.log(`Transaction ID: ${trx.transaction_id}`);
                                    _this.Murmur_Posts.length = 0;
                                    resolve(trx.transaction_id);
                                }).catch(function (error) {
                                    console.error(error);
                                    reject(error);
                                });
                            });
                        }
                    })];
            });
        });
    };
    MurmurService.prototype.whisper = function (to_account_name, message) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 2) {
                            _this.AccToPub(localStorage.getItem(_this.Scatter_account_name).split('-')[0]).then(function (myPub) {
                                _this.AccToPub(to_account_name).then(function (toPub) {
                                    var ecc = eosjs__WEBPACK_IMPORTED_MODULE_4__["modules"].ecc;
                                    var encrypted_message = ecc.Aes.encrypt(localStorage.getItem(_this.Scatter_account_name).split('-')[1], toPub, message);
                                    encrypted_message.nonce = encrypted_message.nonce.toString();
                                    encrypted_message.message = encrypted_message.message.toString("binary");
                                    encrypted_message = JSON.stringify(encrypted_message);
                                    console.log(localStorage.getItem(_this.Scatter_account_name).split('-')[0], to_account_name, myPub, toPub, encrypted_message);
                                    if (localStorage.getItem(_this.Scatter_account_name).split('-').length == 2) {
                                        _this.SetConfig().then(function (eos) {
                                            eos.transaction('murmurdappco', function (contract) {
                                                contract.whisper(localStorage.getItem(_this.Scatter_account_name).split('-')[0], to_account_name, myPub, toPub, encrypted_message);
                                            }, _this.config).then(function (trx) {
                                                // console.log(`Transaction ID: ${trx.transaction_id}`);
                                                _this.Murmur_Posts.length = 0;
                                                resolve(trx.transaction_id);
                                            }).catch(function (error) {
                                                console.error(error);
                                                reject(error);
                                            });
                                        });
                                    }
                                });
                            });
                        }
                        else {
                            alert("Its only working in Privatekey login");
                        }
                    })];
            });
        });
    };
    MurmurService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MurmurService);
    return MurmurService;
}());



/***/ }),

/***/ "./src/app/otheruserpersonalfeed/otheruserpersonalfeed.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/otheruserpersonalfeed/otheruserpersonalfeed.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 59px;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #a09fed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RoZXJ1c2VycGVyc29uYWxmZWVkL290aGVydXNlcnBlcnNvbmFsZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLGtCQUFrQjtDQUNsQiwyQkFBMkI7Q0FDM0IsYUFBYTtDQUNiLGNBQWM7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7Q0FDYjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixZQUFZO0lBQ1QsNEVBQTRFO0lBQzVFLG9CQUFvQjs7Q0FFdkI7O0FBRUQ7O0NBRUMsWUFBWTtJQUNULGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsaUJBQWlCO0lBQ2QsWUFBWTtDQUNmOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUI7O0FBR0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9vdGhlcnVzZXJwZXJzb25hbGZlZWQvb3RoZXJ1c2VycGVyc29uYWxmZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVvbmV7XG5cblx0LypkaXNwbGF5OiBmbGV4OyovXG5cdC8qZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmhlYWRlcm9uZXtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRwYWRkaW5nOiAxMHB4IDE2cHg7XG5cdGhlaWdodDogNTlweDtcblx0d2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbn1cblxuLnVzZXJpbWFnZSB7XG5cblx0d2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmZvb3Rlcm9uZSB7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG5cdG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtY29sb3J7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2Y3ZjhmYTtcbn1cblxuXG4udGhyZWVpY29ucyB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRocmVlaWNvbnM6aG92ZXIge1xuXHRjb2xvcjogI2EwOWZlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/otheruserpersonalfeed/otheruserpersonalfeed.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/otheruserpersonalfeed/otheruserpersonalfeed.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\t<header class=\"headerone\">\n\t\t<a><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t</header>\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\n\t<div style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\">\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col-1\">\n\t\t    \t\t<a><img class=\"userimage\" src=\"assets/img/pic1.png\"></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">Roma Arora<span class=\"ml-2\" style=\"color: #a09fed;\">@roma_arora</span></h6></a>\n\t\t\t\t\t\t<a><p>This sesction is for Detailed Chat Info of people. Ends Here</p></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">thumb_up</i></a></div>\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">share</i></a></div>\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">comment</i></a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\">\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col-1\">\n\t\t    \t\t<a><img class=\"userimage\" src=\"assets/img/pic1.png\"></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">Roma Arora<span class=\"ml-2\" style=\"color: #a09fed;\">@roma_arora</span></h6></a>\n\t\t\t\t\t\t<a><p>This sesction is for Detailed Chat Info of people. Ends Here</p></a>\n\t\t\t\t\t\t<a><img style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src=\"assets/img/testimage.jpg\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">thumb_up</i></a></div>\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">share</i></a></div>\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">comment</i></a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\">\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col-1\">\n\t\t    \t\t<a><img class=\"userimage\" src=\"assets/img/pic1.png\"></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">Roma Arora<span class=\"ml-2\" style=\"color: #a09fed;\">@roma_arora</span></h6></a>\n\t\t\t\t\t\t<a><p>This sesction is for Detailed Chat Info of people. Ends Here</p></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">thumb_up</i></a></div>\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">share</i></a></div>\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">comment</i></a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\">\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col-1\">\n\t\t    \t\t<a><img class=\"userimage\" src=\"assets/img/pic1.png\"></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">Roma Arora<span class=\"ml-2\" style=\"color: #a09fed;\">@roma_arora</span></h6></a>\n\t\t\t\t\t\t<a><p>This sesction is for Detailed Chat Info of people. Ends Here</p></a>\n\t\t\t\t\t\t<a><img style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src=\"assets/img/testimage.jpg\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">thumb_up</i></a></div>\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">share</i></a></div>\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">comment</i></a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\">\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col-1\">\n\t\t    \t\t<a><img class=\"userimage\" src=\"assets/img/pic1.png\"></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">Roma Arora<span class=\"ml-2\" style=\"color: #a09fed;\">@roma_arora</span></h6></a>\n\t\t\t\t\t\t<a><p>This sesction is for Detailed Chat Info of people. Ends Here</p></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">thumb_up</i></a></div>\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">share</i></a></div>\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">comment</i></a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\">\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col-1\">\n\t\t    \t\t<a><img class=\"userimage\" src=\"assets/img/pic1.png\"></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t<a><h6 class=\"mb-1\" style=\"font-weight: 600;\">Roma Arora<span class=\"ml-2\" style=\"color: #a09fed;\">@roma_arora</span></h6></a>\n\t\t\t\t\t\t<a><p>This sesction is for Detailed Chat Info of people. Ends Here</p></a>\n\t\t\t\t\t\t<a><img style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src=\"assets/img/testimage.jpg\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">thumb_up</i></a></div>\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">share</i></a></div>\n\t\t\t\t\t\t<div class=\"col-4\"><a><i class=\"threeicons material-icons\">comment</i></a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->"

/***/ }),

/***/ "./src/app/otheruserpersonalfeed/otheruserpersonalfeed.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/otheruserpersonalfeed/otheruserpersonalfeed.component.ts ***!
  \**************************************************************************/
/*! exports provided: OtheruserpersonalfeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtheruserpersonalfeedComponent", function() { return OtheruserpersonalfeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtheruserpersonalfeedComponent = /** @class */ (function () {
    function OtheruserpersonalfeedComponent() {
    }
    OtheruserpersonalfeedComponent.prototype.ngOnInit = function () {
    };
    OtheruserpersonalfeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-otheruserpersonalfeed',
            template: __webpack_require__(/*! ./otheruserpersonalfeed.component.html */ "./src/app/otheruserpersonalfeed/otheruserpersonalfeed.component.html"),
            styles: [__webpack_require__(/*! ./otheruserpersonalfeed.component.css */ "./src/app/otheruserpersonalfeed/otheruserpersonalfeed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OtheruserpersonalfeedComponent);
    return OtheruserpersonalfeedComponent;
}());



/***/ }),

/***/ "./src/app/postmurmur/postmurmur.component.css":
/*!*****************************************************!*\
  !*** ./src/app/postmurmur/postmurmur.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 59px;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.userimage1 {\n\n\twidth: 25px;\n    height: 25px;\n    border-radius: 50%;\n}\n\n.footerone {\n\n\tbackground-color: #dcdcdc;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #a09fed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdG11cm11ci9wb3N0bXVybXVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsY0FBYztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtDQUNiOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFlBQVk7SUFDVCw0RUFBNEU7SUFDNUUsb0JBQW9COztDQUV2Qjs7QUFFRDs7Q0FFQyxZQUFZO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDs7Q0FFQyxZQUFZO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixpQkFBaUI7SUFDZCxZQUFZO0NBQ2Y7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQjs7QUFHRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RtdXJtdXIvcG9zdG11cm11ci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlb25le1xuXG5cdC8qZGlzcGxheTogZmxleDsqL1xuXHQvKmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cblx0aGVpZ2h0OiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5oZWFkZXJvbmV7XG5cblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0cGFkZGluZzogMTBweCAxNnB4O1xuXHRoZWlnaHQ6IDU5cHg7XG5cdHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG59XG5cbi51c2VyaW1hZ2Uge1xuXG5cdHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi51c2VyaW1hZ2UxIHtcblxuXHR3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZm9vdGVyb25lIHtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNkY2RjO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcblx0bWluLWhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1jb2xvcntcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZjdmOGZhO1xufVxuXG5cbi50aHJlZWljb25zIHtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4udGhyZWVpY29uczpob3ZlciB7XG5cdGNvbG9yOiAjYTA5ZmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/postmurmur/postmurmur.component.html":
/*!******************************************************!*\
  !*** ./src/app/postmurmur/postmurmur.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\t<header class=\"headerone\">\n\t\t<a routerLink = \"/feed\"><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t</header>\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\n\t<div style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\">\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col-1\">\n\t\t    \t\t<a><img class=\"userimage\" src={{My_Profile.profile_pic}}></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-9\" style=\"margin: auto;\">\n\t\t\t\t\t<textarea class=\"form-control formcolor\" [(ngModel)] = \"murmur\" id=\"exampleFormControlTextarea1\" type=\"text\" placeholder=\"Type a message here\" rows=\"3\"></textarea>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"fileToUpload\">\n\t\t\t\t\t\t\t<a><i class=\"material-icons mt-3\" style=\"color: #a09fed;\">image</i></a>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t{{selectedFile.name}}\n\t\t\t\t\t\t<label *ngIf = \"File_select\">\n\t\t\t\t\t\t\t<a><i class=\"material-icons mt-3\" (click)=\"file_clear()\" style=\"color: #a09fed;\">clear</i></a>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<input id=\"fileToUpload\" type=\"file\" (change)=\"onFileChanged($event)\" style=\"display:none;\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" style=\"margin: auto;\">\n\t\t\t\t\t<button type=\"button\" (click)=\"post()\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;\">murmur</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t</div>\n\t<ngx-spinner\n\t\tbdColor=\"rgba(51,51,51,0.8)\"\n\t\tsize=\"medium\"\n\t\tcolor=\"#fff\"\n\t\tloadingText=\"Loading...\"\n\t\ttype=\"ball-scale-multiple\">\n\t</ngx-spinner>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->"

/***/ }),

/***/ "./src/app/postmurmur/postmurmur.component.ts":
/*!****************************************************!*\
  !*** ./src/app/postmurmur/postmurmur.component.ts ***!
  \****************************************************/
/*! exports provided: PostmurmurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostmurmurComponent", function() { return PostmurmurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostmurmurComponent = /** @class */ (function () {
    function PostmurmurComponent(ms, router, http, spin) {
        this.ms = ms;
        this.router = router;
        this.http = http;
        this.spin = spin;
        this.murmur = '';
        this.selectedFile = {};
        this.My_Profile = {};
    }
    PostmurmurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ms.getAccountProfile().then(function (res) {
            _this.My_Profile = res[0];
            console.log(res);
        });
    };
    PostmurmurComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = {};
        this.selectedFile = event.target.files[0];
        this.File_select = true;
        // console.log(this.selectedFile)
    };
    PostmurmurComponent.prototype.file_clear = function () {
        this.selectedFile = {};
        this.File_select = false;
        console.log("Cleared");
    };
    PostmurmurComponent.prototype.post = function () {
        var _this = this;
        if (this.File_select && this.murmur != '') {
            this.spin.show();
            var fd = new FormData();
            fd.append('path', this.selectedFile);
            this.http.post("https://ipfs.infura.io:5001/api/v0/add?stream-channels=true", fd).subscribe(function (r) {
                console.log(r['Hash']);
                if (_this.murmur == '')
                    _this.murmur = "";
                _this.ms.postMurmur(_this.murmur, r['Hash']).then(function (res) {
                    console.log(res);
                    _this.spin.hide();
                    _this.router.navigate(['/feed']);
                }).catch(function (err) {
                    console.log(err);
                    _this.spin.hide();
                });
            });
        }
        else {
            if (this.murmur != '')
                this.ms.postMurmur(this.murmur, '').then(function (res) {
                    console.log(res);
                    _this.router.navigate(['/feed']);
                });
            else
                alert("Please fill Murmur field");
        }
        // this.ms.follow(this.murmur).then(res => { 
        //   console.log(res)
        //   this.router.navigate(['/feed']);
        // }).catch(err =>  {
        //   console.log(err)
        //   this.spin.hide()
        // })
    };
    PostmurmurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postmurmur',
            template: __webpack_require__(/*! ./postmurmur.component.html */ "./src/app/postmurmur/postmurmur.component.html"),
            styles: [__webpack_require__(/*! ./postmurmur.component.css */ "./src/app/postmurmur/postmurmur.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], PostmurmurComponent);
    return PostmurmurComponent;
}());



/***/ }),

/***/ "./src/app/sharepost/sharepost.component.css":
/*!***************************************************!*\
  !*** ./src/app/sharepost/sharepost.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n    /*display: flex;*/\n    /*flex-direction: column;*/\n    height: 100%;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n.headerone{\n    background-color: #ffffff;\n    padding: 10px 16px;\n    height: 59px;\n    width: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n}\n.userimage {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.userimage1{\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.footerone {\n    background-color: #ffffff;\n    position: absolute;\n    bottom: 0;\n    min-height: 80px;\n    width: 100%;\n}\n.formcolor{\n    background-color: #f7f8fa;\n    border: 1px solid #f7f8fa;\n}\n.threeicons {\n    font-size: 20px;\n}\n.threeicons:hover {\n    color: #a09fed;\n}\n.countdiv {\n    padding: 0;\n    margin: auto;\n    text-align: left;\n}\n.countdivp{\n    margin: 0;\n}\n.icon {\n    max-width: 80%;\n}\n.icondiv {\n    padding-right: 0;\n}\n.countselected {\n    color: #a09fed;\n}\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVwb3N0L3NoYXJlcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtDQUNiO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osNEVBQTRFO0lBQzVFLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxVQUFVO0NBQ2I7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVwb3N0L3NoYXJlcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0eWxlb25le1xuICAgIC8qZGlzcGxheTogZmxleDsqL1xuICAgIC8qZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG59XG4uaGVhZGVyb25le1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGhlaWdodDogNTlweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi51c2VyaW1hZ2Uge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udXNlcmltYWdlMXtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmZvb3Rlcm9uZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZm9ybWNvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4ZmE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjhmYTtcbn1cbi50aHJlZWljb25zIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4udGhyZWVpY29uczpob3ZlciB7XG4gICAgY29sb3I6ICNhMDlmZWQ7XG59XG4uY291bnRkaXYge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY291bnRkaXZwe1xuICAgIG1hcmdpbjogMDtcbn1cbi5pY29uIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbn1cbi5pY29uZGl2IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLmNvdW50c2VsZWN0ZWQge1xuICAgIGNvbG9yOiAjYTA5ZmVkO1xufVxuXG4uY3Vyc29ye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sharepost/sharepost.component.html":
/*!****************************************************!*\
  !*** ./src/app/sharepost/sharepost.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\t<header class=\"headerone\">\n\t\t<a routerLink = \"/feed\"><i class=\"material-icons mt-2\">keyboard_backspace</i></a>\n\t</header>\n\t<!-- This header is open header for Other Users psersonal Profile. Starts Here -->\n\n\t<div style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n\n\t\t<div class=\"card mt-0\" *ngFor=\"let mur of Murmur_Posts; let i = index\">\n\t\t\t<div class=\"card-body\" *ngIf = \"mur.action_type == 'murmur'\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t<a><img class=\"userimage\" src={{mur.image}}></a>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h5 class=\"mb-1\" style=\"font-weight: 600;\">{{mur.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span></h5></a>\n\t\t\t\t\t\t\t<a><p>{{mur.murmur.message}}</p></a>\n\t\t\t\t\t\t\t<a *ngIf = \" mur.murmur.attached_url !== ''\" ><img style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src={{mur.murmur.attached_url}}></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">thumb_up</i></a>{{mur.murmur.snoop_count}}</div>\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"/share\"  style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">share</i></a>{{mur.murmur.yell_count}}</div>\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"/comment\" (click)=\"cmt_ID(i)\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">comment</i></a>{{mur.murmur.comment_count}}</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" (click)=\"snoop(i)\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a routerLink=\"/comment\" ><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\"><img class=\"icon\" src=\"assets/img/share.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.yell_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"card mt-0\">\n\t\t  <div class=\"card-body\" style=\"background-color: #dcdcdc;\">\n\t\t    <div class=\"row\">\n\t\t    \t<div class=\"col-1\" style=\"margin: auto;text-align: right;padding: 0;\">\n\t\t    \t\t<a><img class=\"userimage1\" src={{My_Profile.profile_pic}}></a>\n\t\t    \t</div>\t\t\t\n\t\t\t\t<div class=\"col-9\" style=\"margin: auto;\">\n\t\t\t\t\t<input class=\"form-control form-control-lg formcolor\" type=\"text\" [(ngModel)]=\"yell\" placeholder=\"Type a message here\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-2\" style=\"margin: auto;\">\n\t\t\t\t\t<button type=\"button\" (click)=\"post_yell()\" class=\"btn btn-secondary\" style=\"background-color: #a09fed;border-color: #a09fed;\">Share</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t  </div>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->"

/***/ }),

/***/ "./src/app/sharepost/sharepost.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sharepost/sharepost.component.ts ***!
  \**************************************************/
/*! exports provided: SharepostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharepostComponent", function() { return SharepostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharepostComponent = /** @class */ (function () {
    function SharepostComponent(ms, router) {
        this.ms = ms;
        this.router = router;
        this.Murmur_Posts = [];
        this.yell = '';
        this.My_Profile = {};
    }
    SharepostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ms.getAccountProfile().then(function (res) {
            _this.My_Profile = res[0];
            // console.log(res)
        });
        this.ms.getCommentData().then(function (res) {
            if (res['id'] != undefined) {
                if (res['type'] == 'murmur') {
                    console.log("mur");
                    _this.ms.getMurmurByIndex(res['id']).then(function (mur) {
                        _this.Murmur_Posts.push(mur);
                    });
                }
                else {
                    console.log("mymur");
                    _this.ms.getMyMurmurByIndex(res['id']).then(function (mur) {
                        _this.Murmur_Posts.push(mur);
                    });
                }
            }
            else {
                _this.router.navigate(['/feed']);
            }
        });
    };
    SharepostComponent.prototype.cmt_ID = function (id) {
        var _this = this;
        this.ms.getCommentData().then(function (res) {
            _this.ms.setCommentData(id, res['type']);
        });
    };
    SharepostComponent.prototype.snoop = function (id) {
        var _this = this;
        this.ms.getCommentData().then(function (res) {
            _this.ms.Snoop(res['id'], res['type']).then(function (res) {
                console.log(res);
            });
        });
    };
    SharepostComponent.prototype.post_yell = function () {
        var _this = this;
        // console.log(this.Murmur_Posts[0].murmur.murmur_id)
        this.ms.yell(this.Murmur_Posts[0].murmur.murmur_id, this.yell).then(function (res) {
            console.log(res);
            _this.router.navigate(['/feed']);
        });
        this.ms.getCommentData().then(function (res) {
            var mur = [];
            if (res['id'] != undefined) {
                if (res['type'] == 'murmur') {
                    // console.log("mur")
                    _this.ms.getMurmurByIndex(res['id']).then(function (resp) {
                        mur.push(resp);
                        console.log(mur);
                        _this.ms.yell(mur[0].murmur.murmur_id, _this.yell).then(function (result) {
                            console.log(result);
                            _this.router.navigate(['/feed']);
                        });
                    });
                }
                else {
                    // console.log("mymur")
                    _this.ms.getMyMurmurByIndex(res['id']).then(function (resp) {
                        mur.push(resp);
                        console.log(mur);
                        _this.ms.yell(mur[0].murmur.murmur_id, _this.yell).then(function (result) {
                            console.log(result);
                            _this.router.navigate(['/feed']);
                        });
                    });
                }
            }
            else {
                _this.router.navigate(['/feed']);
            }
        });
    };
    SharepostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sharepost',
            template: __webpack_require__(/*! ./sharepost.component.html */ "./src/app/sharepost/sharepost.component.html"),
            styles: [__webpack_require__(/*! ./sharepost.component.css */ "./src/app/sharepost/sharepost.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SharepostComponent);
    return SharepostComponent;
}());



/***/ }),

/***/ "./src/app/userchat/userchat.component.css":
/*!*************************************************!*\
  !*** ./src/app/userchat/userchat.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 59px;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 65px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.inbox_people {\n\tbackground: #f8f8f8 none repeat scroll 0 0;\n\tfloat: left;\n\toverflow: hidden;\n\twidth: 40%; border-right:1px solid #c4c4c4;\n  }\n\n.inbox_msg {\n\tborder: 1px solid #c4c4c4;\n\tclear: both;\n\toverflow: hidden;\n  }\n\n.top_spac{ margin: 20px 0 0;}\n\n.recent_heading {float: left; width:40%;}\n\n.srch_bar {\n\tdisplay: inline-block;\n\ttext-align: right;\n\twidth: 60%;\n  }\n\n.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}\n\n.recent_heading h4 {\n\tcolor: #a09fed;\n\tfont-size: 21px;\n\tmargin: auto;\n  }\n\n.srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}\n\n.srch_bar .input-group-addon button {\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n\tborder: medium none;\n\tpadding: 0;\n\tcolor: #707070;\n\tfont-size: 18px;\n  }\n\n.srch_bar .input-group-addon { margin: 0 0 0 -27px;}\n\n.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}\n\n.chat_ib h5 span{ font-size:13px; float:right;}\n\n.chat_ib p{ font-size:14px; color:#989898; margin:auto}\n\n.chat_img {\n\tfloat: left;\n\twidth: 11%;\n  }\n\n.chat_ib {\n\tfloat: left;\n\tpadding: 0 0 0 15px;\n\twidth: 88%;\n  }\n\n.chat_people{ overflow:hidden; clear:both;}\n\n.chat_list {\n\tborder-bottom: 1px solid #c4c4c4;\n\tmargin: 0;\n\tpadding: 18px 16px 10px;\n  }\n\n.inbox_chat { height: 550px; overflow-y: scroll;}\n\n.active_chat{ background:#ebebeb;}\n\n.incoming_msg_img {\n\tdisplay: inline-block;\n\twidth: 6%;\n  }\n\n.received_msg {\n\tdisplay: inline-block;\n\tpadding: 0 0 0 10px;\n\tvertical-align: top;\n\twidth: 92%;\n   }\n\n.received_withd_msg p {\n\tbackground: #ebebeb none repeat scroll 0 0;\n\tborder-radius: 3px;\n\tcolor: #646464;\n\tfont-size: 14px;\n\tmargin: 0;\n\tpadding: 5px 10px 5px 12px;\n\twidth: 100%;\n  }\n\n.time_date {\n\tcolor: #747474;\n\tdisplay: block;\n\tfont-size: 12px;\n\tmargin: 8px 0 0;\n  }\n\n.received_withd_msg { width: 57%;}\n\n.mesgs {\n\tfloat: left;\n\tpadding: 30px 15px 0 25px;\n\twidth: 60%;\n  }\n\n.sent_msg p {\n\tbackground: #a09fed none repeat scroll 0 0;\n\tborder-radius: 3px;\n\tfont-size: 14px;\n\tmargin: 0; color:#fff;\n\tpadding: 5px 10px 5px 12px;\n\twidth:100%;\n  }\n\n.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}\n\n.sent_msg {\n\tfloat: right;\n\twidth: 46%;\n  }\n\n.input_msg_write input {\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n\tborder: medium none;\n\tcolor: #4c4c4c;\n\tfont-size: 15px;\n\tmin-height: 48px;\n\twidth: 100%;\n  }\n\n.type_msg {border-top: 1px solid #c4c4c4;position: relative;}\n\n.msg_send_btn {\n\tbackground: #a09fed none repeat scroll 0 0;\n\tborder: medium none;\n\tborder-radius: 50%;\n\tcolor: #fff;\n\tcursor: pointer;\n\tfont-size: 17px;\n\theight: 33px;\n\tposition: absolute;\n\tright: 0;\n\ttop: 11px;\n\twidth: 33px;\n  }\n\n.messaging { padding: 0 0 50px 0;}\n\n.msg_history {\n\theight: 516px;\n\toverflow-y: auto;\n  }\n\nimg {\n\t  max-width: 100%;\n  }  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmNoYXQvdXNlcmNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLGFBQWE7Q0FDYixjQUFjO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0NBQ2I7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsWUFBWTtJQUNULDRFQUE0RTtJQUM1RSxvQkFBb0I7O0NBRXZCOztBQUVEOztDQUVDLFlBQVk7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLGlCQUFpQjtJQUNkLFlBQVk7Q0FDZjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsMEJBQTBCO0NBQzFCOztBQUVEO0NBQ0MsMkNBQTJDO0NBQzNDLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsV0FBVyxDQUFDLCtCQUErQjtHQUN6Qzs7QUFDRDtDQUNELDBCQUEwQjtDQUMxQixZQUFZO0NBQ1osaUJBQWlCO0dBQ2Y7O0FBQ0QsV0FBVyxpQkFBaUIsQ0FBQzs7QUFHN0IsaUJBQWlCLFlBQVksQ0FBQyxVQUFVLENBQUM7O0FBQ3pDO0NBQ0Qsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixXQUFXO0dBQ1Q7O0FBQ0QsZUFBZSw0QkFBNEIsQ0FBQyxnQkFBZ0IsQ0FBQyxnQ0FBZ0MsQ0FBQzs7QUFFOUY7Q0FDRCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGFBQWE7R0FDWDs7QUFDRCxpQkFBaUIseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDOztBQUN0SDtDQUNELG9EQUFvRDtDQUNwRCxvQkFBb0I7Q0FDcEIsV0FBVztDQUNYLGVBQWU7Q0FDZixnQkFBZ0I7R0FDZDs7QUFDRCwrQkFBK0Isb0JBQW9CLENBQUM7O0FBRXBELGFBQWEsZUFBZSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQzs7QUFDOUQsa0JBQWtCLGVBQWUsQ0FBQyxZQUFZLENBQUM7O0FBQy9DLFlBQVksZUFBZSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7O0FBQ3ZEO0NBQ0QsWUFBWTtDQUNaLFdBQVc7R0FDVDs7QUFDRDtDQUNELFlBQVk7Q0FDWixvQkFBb0I7Q0FDcEIsV0FBVztHQUNUOztBQUVELGNBQWMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDOztBQUMzQztDQUNELGlDQUFpQztDQUNqQyxVQUFVO0NBQ1Ysd0JBQXdCO0dBQ3RCOztBQUNELGNBQWMsY0FBYyxDQUFDLG1CQUFtQixDQUFDOztBQUVqRCxjQUFjLG1CQUFtQixDQUFDOztBQUVsQztDQUNELHNCQUFzQjtDQUN0QixVQUFVO0dBQ1I7O0FBQ0Q7Q0FDRCxzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQixXQUFXO0lBQ1I7O0FBQ0Q7Q0FDRiwyQ0FBMkM7Q0FDM0MsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLDJCQUEyQjtDQUMzQixZQUFZO0dBQ1Y7O0FBQ0Q7Q0FDRCxlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixnQkFBZ0I7R0FDZDs7QUFDRCxzQkFBc0IsV0FBVyxDQUFDOztBQUNsQztDQUNELFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsV0FBVztHQUNUOztBQUVBO0NBQ0YsMkNBQTJDO0NBQzNDLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsVUFBVSxDQUFDLFdBQVc7Q0FDdEIsMkJBQTJCO0NBQzNCLFdBQVc7R0FDVDs7QUFDRCxlQUFlLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDOztBQUNwRDtDQUNELGFBQWE7Q0FDYixXQUFXO0dBQ1Q7O0FBQ0Q7Q0FDRCxvREFBb0Q7Q0FDcEQsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLFlBQVk7R0FDVjs7QUFFRCxXQUFXLDhCQUE4QixtQkFBbUIsQ0FBQzs7QUFDN0Q7Q0FDRCwyQ0FBMkM7Q0FDM0Msb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsWUFBWTtHQUNWOztBQUNELGFBQWEsb0JBQW9CLENBQUM7O0FBQ2xDO0NBQ0QsY0FBYztDQUNkLGlCQUFpQjtHQUNmOztBQUVEO0dBQ0MsZ0JBQWdCO0dBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlcmNoYXQvdXNlcmNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZW9uZXtcblxuXHQvKmRpc3BsYXk6IGZsZXg7Ki9cblx0LypmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovXG5cdGhlaWdodDogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4uaGVhZGVyb25le1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdHBhZGRpbmc6IDEwcHggMTZweDtcblx0aGVpZ2h0OiA1OXB4O1xuXHR3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuXG4udXNlcmltYWdlIHtcblxuXHR3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZm9vdGVyb25lIHtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcblx0bWluLWhlaWdodDogNjVweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1jb2xvcntcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZjdmOGZhO1xufVxuXG4uaW5ib3hfcGVvcGxlIHtcblx0YmFja2dyb3VuZDogI2Y4ZjhmOCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuXHRmbG9hdDogbGVmdDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0d2lkdGg6IDQwJTsgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjYzRjNGM0O1xuICB9XG4gIC5pbmJveF9tc2cge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuXHRjbGVhcjogYm90aDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAudG9wX3NwYWN7IG1hcmdpbjogMjBweCAwIDA7fVxuICBcbiAgXG4gIC5yZWNlbnRfaGVhZGluZyB7ZmxvYXQ6IGxlZnQ7IHdpZHRoOjQwJTt9XG4gIC5zcmNoX2JhciB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdHdpZHRoOiA2MCU7XG4gIH1cbiAgLmhlYWRpbmRfc3JjaHsgcGFkZGluZzoxMHB4IDI5cHggMTBweCAyMHB4OyBvdmVyZmxvdzpoaWRkZW47IGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjNGM0YzQ7fVxuICBcbiAgLnJlY2VudF9oZWFkaW5nIGg0IHtcblx0Y29sb3I6ICNhMDlmZWQ7XG5cdGZvbnQtc2l6ZTogMjFweDtcblx0bWFyZ2luOiBhdXRvO1xuICB9XG4gIC5zcmNoX2JhciBpbnB1dHsgYm9yZGVyOjFweCBzb2xpZCAjY2RjZGNkOyBib3JkZXItd2lkdGg6MCAwIDFweCAwOyB3aWR0aDo4MCU7IHBhZGRpbmc6MnB4IDAgNHB4IDZweDsgYmFja2dyb3VuZDpub25lO31cbiAgLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiBidXR0b24ge1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG5cdGJvcmRlcjogbWVkaXVtIG5vbmU7XG5cdHBhZGRpbmc6IDA7XG5cdGNvbG9yOiAjNzA3MDcwO1xuXHRmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLnNyY2hfYmFyIC5pbnB1dC1ncm91cC1hZGRvbiB7IG1hcmdpbjogMCAwIDAgLTI3cHg7fVxuICBcbiAgLmNoYXRfaWIgaDV7IGZvbnQtc2l6ZToxNXB4OyBjb2xvcjojNDY0NjQ2OyBtYXJnaW46MCAwIDhweCAwO31cbiAgLmNoYXRfaWIgaDUgc3BhbnsgZm9udC1zaXplOjEzcHg7IGZsb2F0OnJpZ2h0O31cbiAgLmNoYXRfaWIgcHsgZm9udC1zaXplOjE0cHg7IGNvbG9yOiM5ODk4OTg7IG1hcmdpbjphdXRvfVxuICAuY2hhdF9pbWcge1xuXHRmbG9hdDogbGVmdDtcblx0d2lkdGg6IDExJTtcbiAgfVxuICAuY2hhdF9pYiB7XG5cdGZsb2F0OiBsZWZ0O1xuXHRwYWRkaW5nOiAwIDAgMCAxNXB4O1xuXHR3aWR0aDogODglO1xuICB9XG4gIFxuICAuY2hhdF9wZW9wbGV7IG92ZXJmbG93OmhpZGRlbjsgY2xlYXI6Ym90aDt9XG4gIC5jaGF0X2xpc3Qge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0YzRjNDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAxOHB4IDE2cHggMTBweDtcbiAgfVxuICAuaW5ib3hfY2hhdCB7IGhlaWdodDogNTUwcHg7IG92ZXJmbG93LXk6IHNjcm9sbDt9XG4gIFxuICAuYWN0aXZlX2NoYXR7IGJhY2tncm91bmQ6I2ViZWJlYjt9XG4gIFxuICAuaW5jb21pbmdfbXNnX2ltZyB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0d2lkdGg6IDYlO1xuICB9XG4gIC5yZWNlaXZlZF9tc2cge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBhZGRpbmc6IDAgMCAwIDEwcHg7XG5cdHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdHdpZHRoOiA5MiU7XG4gICB9XG4gICAucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xuXHRiYWNrZ3JvdW5kOiAjZWJlYmViIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0Y29sb3I6ICM2NDY0NjQ7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcblx0d2lkdGg6IDEwMCU7XG4gIH1cbiAgLnRpbWVfZGF0ZSB7XG5cdGNvbG9yOiAjNzQ3NDc0O1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRtYXJnaW46IDhweCAwIDA7XG4gIH1cbiAgLnJlY2VpdmVkX3dpdGhkX21zZyB7IHdpZHRoOiA1NyU7fVxuICAubWVzZ3Mge1xuXHRmbG9hdDogbGVmdDtcblx0cGFkZGluZzogMzBweCAxNXB4IDAgMjVweDtcblx0d2lkdGg6IDYwJTtcbiAgfVxuICBcbiAgIC5zZW50X21zZyBwIHtcblx0YmFja2dyb3VuZDogI2EwOWZlZCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bWFyZ2luOiAwOyBjb2xvcjojZmZmO1xuXHRwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcblx0d2lkdGg6MTAwJTtcbiAgfVxuICAub3V0Z29pbmdfbXNneyBvdmVyZmxvdzpoaWRkZW47IG1hcmdpbjoyNnB4IDAgMjZweDt9XG4gIC5zZW50X21zZyB7XG5cdGZsb2F0OiByaWdodDtcblx0d2lkdGg6IDQ2JTtcbiAgfVxuICAuaW5wdXRfbXNnX3dyaXRlIGlucHV0IHtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuXHRib3JkZXI6IG1lZGl1bSBub25lO1xuXHRjb2xvcjogIzRjNGM0Yztcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRtaW4taGVpZ2h0OiA0OHB4O1xuXHR3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLnR5cGVfbXNnIHtib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtwb3NpdGlvbjogcmVsYXRpdmU7fVxuICAubXNnX3NlbmRfYnRuIHtcblx0YmFja2dyb3VuZDogI2EwOWZlZCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuXHRib3JkZXI6IG1lZGl1bSBub25lO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGNvbG9yOiAjZmZmO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMTdweDtcblx0aGVpZ2h0OiAzM3B4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDExcHg7XG5cdHdpZHRoOiAzM3B4O1xuICB9XG4gIC5tZXNzYWdpbmcgeyBwYWRkaW5nOiAwIDAgNTBweCAwO31cbiAgLm1zZ19oaXN0b3J5IHtcblx0aGVpZ2h0OiA1MTZweDtcblx0b3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICBcbiAgaW1nIHtcblx0ICBtYXgtd2lkdGg6IDEwMCU7XG4gIH0gICJdfQ== */"

/***/ }),

/***/ "./src/app/userchat/userchat.component.html":
/*!**************************************************!*\
  !*** ./src/app/userchat/userchat.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This sesction is for Detailed Chat Info of people. Starts Here -->\n<div class=\"styleone\">\n\t<header class=\"headerone\" style=\"display: inline-flex;\">\n\t\t<img class=\"userimage\" src={{name.profile_pic}}>\n\t\t<div class=\"ml-2\">\n\t\t\t<div><h6 class=\"mb-1\" style=\"font-weight: 600;\">{{name.Name}}</h6></div>\n\t\t\t<div><p class=\"mb-0\" style=\"font-style: italic;color: #97979a;font-size: 12px;\">Last Message sent on 09:45AM</p></div>\n\t\t</div>\n\t</header>\n\t<div class=\"container\" style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n\t    <div class=\"incoming_msg\">\n\t      <div class=\"incoming_msg_img\"> <img class=\"userimage\" src={{name.profile_pic}} alt=\"sunil\"> </div>\n\t      <div class=\"received_msg\">\n\t        <div class=\"received_withd_msg\">\n\t          <p>Test which is a new approach to have all\n\t            solutions</p>\n\t          <span class=\"time_date\"> 11:01 AM    |    June 9</span></div>\n\t      </div>\n\t    </div>\n\t    <div class=\"outgoing_msg\">\n\t      <div class=\"sent_msg\">\n\t        <p>Test which is a new approach to have all\n\t          solutions</p>\n\t        <span class=\"time_date\"> 11:01 AM    |    June 9</span> </div>\n\t    </div>\n\t    <div class=\"incoming_msg\">\n\t      <div class=\"incoming_msg_img\"> <img class=\"userimage\" src={{name.profile_pic}} alt=\"sunil\"> </div>\n\t      <div class=\"received_msg\">\n\t        <div class=\"received_withd_msg\">\n\t          <p>Test, which is a new approach to have</p>\n\t          <span class=\"time_date\"> 11:01 AM    |    Yesterday</span></div>\n\t      </div>\n\t    </div>\n\t    <div class=\"outgoing_msg\">\n\t      <div class=\"sent_msg\">\n\t        <p>Apollo University, Delhi, India Test</p>\n\t        <span class=\"time_date\"> 11:01 AM    |    Today</span> </div>\n\t    </div>\n\t    <div class=\"incoming_msg\">\n\t      <div class=\"incoming_msg_img\"> <img class=\"userimage\" src={{name.profile_pic}} alt=\"sunil\"> </div>\n\t      <div class=\"received_msg\">\n\t        <div class=\"received_withd_msg\">\n\t          <p>We work directly with our designers and suppliers,\n\t            and sell direct to you, which means quality, exclusive\n\t            products, at a price anyone can afford.</p>\n\t          <span class=\"time_date\"> 11:01 AM    |    Today</span></div>\n\t      </div>\n\t    </div>\n\t</div>\n\n\t<div class=\"container footerone\">\n\t\t<div class=\"row mt-3\">\n\t\t\t<div class=\"col-11\">\n\t\t\t\t<input class=\"form-control form-control-lg formcolor\" type=\"text\" placeholder=\"Type a message here\" [(ngModel)] = \"mesg\">\n\t\t\t</div>\n\t\t\t<div class=\"col-1\" style=\"margin: auto;\" (click)=\"send_whisper()\">\n\t\t\t\t<i class=\"material-icons\">send</i>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div> \n\n<!-- This sesction is for Detailed Chat Info of people. Ends Here -->"

/***/ }),

/***/ "./src/app/userchat/userchat.component.ts":
/*!************************************************!*\
  !*** ./src/app/userchat/userchat.component.ts ***!
  \************************************************/
/*! exports provided: UserchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserchatComponent", function() { return UserchatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserchatComponent = /** @class */ (function () {
    function UserchatComponent(ms) {
        this.ms = ms;
        this.name = {
            Name: "",
            profile_pic: ""
        };
    }
    UserchatComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.name != _this.ms.chatName)
                _this.name = _this.ms.chatName;
            if (Object.keys(_this.ms.chatName).length == 0) {
                _this.name = {
                    Name: "",
                    profile_pic: "assets/img/pic1.png",
                };
            }
        }, 500);
    };
    UserchatComponent.prototype.send_whisper = function () {
        var _this = this;
        if (this.name.Name != "") {
            if (this.mesg != undefined)
                this.ms.whisper(this.name.account_name, this.mesg).then(function (res) {
                    console.log(res);
                    _this.mesg = undefined;
                });
            else
                alert("Enter the message!");
        }
        else {
            alert("Please choose any receiver account");
        }
    };
    UserchatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userchat',
            template: __webpack_require__(/*! ./userchat.component.html */ "./src/app/userchat/userchat.component.html"),
            styles: [__webpack_require__(/*! ./userchat.component.css */ "./src/app/userchat/userchat.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"]])
    ], UserchatComponent);
    return UserchatComponent;
}());



/***/ }),

/***/ "./src/app/userpersonalfeed/userpersonalfeed.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/userpersonalfeed/userpersonalfeed.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: calc(100vh - 110px);\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n\tborder: 0;\n    bottom: 0;\n}\n\n.headerone{\n\n\tbackground-color: #ffffff;\n\tpadding: 10px 16px;\n\theight: 59px;\n\twidth: 100%;\n    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    margin-bottom: 10px;\n\n}\n\n.userimage {\n\n\twidth: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n\n.footerone {\n\n\tbackground-color: #ffffff;\n\tposition: absolute;\n\tbottom: 0;\n\tmin-height: 80px;\n    width: 100%;\n}\n\n.formcolor{\n\n\tbackground-color: #f7f8fa;\n\tborder: 1px solid #f7f8fa;\n}\n\n.threeicons {\n\tfont-size: 20px;\n}\n\n.threeicons:hover {\n\tcolor: #a09fed;\n}\n\n.icon {\n    max-width: 80%;\n}\n\n.countdiv {\n\n\tpadding: 0;\n    margin: auto;\n    text-align: left;\n}\n\n.countdivp{\n\tmargin: 0;\n}\n\n.icondiv {\n\tpadding-right: 0;\n}\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnBlcnNvbmFsZmVlZC91c2VycGVyc29uYWxmZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUMsa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUIsY0FBYztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0NBQ2QsVUFBVTtJQUNQLFVBQVU7Q0FDYjs7QUFFRDs7Q0FFQywwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixZQUFZO0lBQ1QsNEVBQTRFO0lBQzVFLG9CQUFvQjs7Q0FFdkI7O0FBRUQ7O0NBRUMsWUFBWTtJQUNULGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7O0FBRUQ7O0NBRUMsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsaUJBQWlCO0lBQ2QsWUFBWTtDQUNmOztBQUVEOztDQUVDLDBCQUEwQjtDQUMxQiwwQkFBMEI7Q0FDMUI7O0FBR0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCOztBQUVEOztDQUVDLFdBQVc7SUFDUixhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCOztBQUVEO0NBQ0MsVUFBVTtDQUNWOztBQUVEO0NBQ0MsaUJBQWlCO0NBQ2pCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlcnBlcnNvbmFsZmVlZC91c2VycGVyc29uYWxmZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVvbmV7XG5cblx0LypkaXNwbGF5OiBmbGV4OyovXG5cdC8qZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xuXHRoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XG5cdGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uaGVhZGVyb25le1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdHBhZGRpbmc6IDEwcHggMTZweDtcblx0aGVpZ2h0OiA1OXB4O1xuXHR3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxufVxuXG4udXNlcmltYWdlIHtcblxuXHR3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZm9vdGVyb25lIHtcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcblx0bWluLWhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1jb2xvcntcblxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZjdmOGZhO1xufVxuXG5cbi50aHJlZWljb25zIHtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG4udGhyZWVpY29uczpob3ZlciB7XG5cdGNvbG9yOiAjYTA5ZmVkO1xufVxuXG4uaWNvbiB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5jb3VudGRpdiB7XG5cblx0cGFkZGluZzogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvdW50ZGl2cHtcblx0bWFyZ2luOiAwO1xufVxuXG4uaWNvbmRpdiB7XG5cdHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5jdXJzb3J7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/userpersonalfeed/userpersonalfeed.component.html":
/*!******************************************************************!*\
  !*** ./src/app/userpersonalfeed/userpersonalfeed.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This sesction is for Detailed User Feed of people. Starts Here -->\n\n<div class=\"styleone\">\n\t<!-- This header is open header for User psersonal Profile. Starts Here -->\n\t<header class=\"headerone\"></header>\n\t<!-- This header is open header for User psersonal Profile. Ends Here -->\n\n\t<div style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n\n\t\t<div class=\"card mt-0\" *ngFor=\"let mur of My_Murmur_Posts; let i = index\">\n\t\t\t<div class=\"card-body\" >\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-1\">\n\t\t\t\t\t\t<a><img class=\"userimage\" src={{My_Profile.profile_pic}}></a>\n\t\t\t\t\t</div>\t\t\t\n\t\t\t\t\t<div class=\"col-11\" style=\"margin: auto;\">\n\t\t\t\t\t\t<div class=\"col-9\">\n\t\t\t\t\t\t\t<a><h5 class=\"mb-1\" style=\"font-weight: 600;\">{{My_Profile.account_name}}<span class=\"ml-2\" style=\"color: #a09fed;\">{{mur.Acc_id}}</span></h5></a>\n\t\t\t\t\t\t\t<a><p>{{mur.murmur.message}}</p></a>\n\t\t\t\t\t\t\t<a *ngIf = \" mur.murmur.attached_url !== ''\" ><img style=\"width: 100%;border-radius: 10px;\" class=\"mb-4\" src={{mur.murmur.attached_url}}></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">thumb_up</i></a>{{mur.snoop_count}}</div>\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"/share\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">share</i></a>{{mur.yell_count}}</div>\n\t\t\t\t\t\t\t<div class=\"col-4\"><a routerLink=\"/comment\" style=\"color: #0b0c0e;\"><i class=\"threeicons material-icons\">comment</i></a>{{mur.comment_count}}</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t<div class=\"row col-6\">\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a class=\"cursor\" (click)=\"snoop(i)\"><img class=\"icon\" src=\"assets/img/like.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.snoop_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a routerLink=\"/comment\" (click)=\"cmt_ID(i)\"><img class=\"icon\" src=\"assets/img/comment.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.comment_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 icondiv\"><a routerLink=\"/share\" (click)=\"cmt_ID(i)\"><img class=\"icon\" src=\"assets/img/share.svg\"></a></div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-6 countdiv\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"countdivp\">{{mur.murmur.yell_count}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t\t\n\t\t</div>\n\t\t<ngx-spinner\n\t\t\tbdColor=\"rgba(51,51,51,0.8)\"\n\t\t\tsize=\"medium\"\n\t\t\tcolor=\"#fff\"\n\t\t\tloadingText=\"Loading...\"\n\t\t\ttype=\"ball-scale-multiple\">\n\t\t</ngx-spinner>\n\t</div>\n\t<router-outlet></router-outlet>\n</div>\n\n<!-- This sesction is for Detailed User Feed of people. Ends Here -->"

/***/ }),

/***/ "./src/app/userpersonalfeed/userpersonalfeed.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/userpersonalfeed/userpersonalfeed.component.ts ***!
  \****************************************************************/
/*! exports provided: UserpersonalfeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpersonalfeedComponent", function() { return UserpersonalfeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserpersonalfeedComponent = /** @class */ (function () {
    function UserpersonalfeedComponent(ms) {
        this.ms = ms;
        // Murmur_Posts: any = [];
        this.My_Murmur_Posts = [];
        this.My_Profile = {};
        this.name = '';
    }
    UserpersonalfeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.ms.getOtherUserName().then(function (res) {
                if (_this.name != res) {
                    _this.name = res;
                    if (res == undefined) {
                        _this.ms.getAccountProfile().then(function (res) {
                            _this.My_Profile = res[0];
                            // console.log(res[0])
                        });
                        _this.ms.getMyMurmurs(localStorage.getItem(_this.ms.Scatter_account_name).split('-')[0]).then(function (resp) {
                            _this.My_Murmur_Posts = resp;
                            // console.log(res)
                        });
                    }
                    else {
                        _this.ms.getOthersProfile(res).then(function (res) {
                            _this.My_Profile = res[0];
                            // console.log(res)
                        });
                        _this.ms.getMyMurmurs(res).then(function (resp) {
                            _this.My_Murmur_Posts = resp;
                            // console.log(res)
                        });
                    }
                }
            });
        }, 50);
    };
    UserpersonalfeedComponent.prototype.cmt_ID = function (id) {
        this.ms.setCommentID(id);
        this.ms.setCommentData(id, 'mymurmur');
    };
    UserpersonalfeedComponent.prototype.snoop = function (id) {
        var _this = this;
        this.ms.Snoop(id, 'mymurmur').then(function (res) {
            console.log(res);
            _this.My_Murmur_Posts = [];
            _this.ms.getMyMurmurs(_this.name).then(function (res) {
                _this.My_Murmur_Posts = res;
            });
        });
    };
    UserpersonalfeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userpersonalfeed',
            template: __webpack_require__(/*! ./userpersonalfeed.component.html */ "./src/app/userpersonalfeed/userpersonalfeed.component.html"),
            styles: [__webpack_require__(/*! ./userpersonalfeed.component.css */ "./src/app/userpersonalfeed/userpersonalfeed.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"]])
    ], UserpersonalfeedComponent);
    return UserpersonalfeedComponent;
}());



/***/ }),

/***/ "./src/app/userprofilelist/userprofilelist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/userprofilelist/userprofilelist.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userimage {\n\twidth:180px;\n\theight: 180px;\n    border-radius: 50%;\n}\n\n\n.imagecontainer {\n\ttext-align: center;\n}\n\n\n.info {\n\n\tcolor: white;\n\ttext-align: center;\n}\n\n\n.handle {\n\n\tcolor: #a09fed;\n}\n\n\n.righttext {\n\ttext-align: center;\n\tcolor: white;\n}\n\n\n.list {\n\n\tcolor: white;\n    background-color: #ffffff00;\n}\n\n\n.righttextblue {\n\tcolor: #a09fed;\n}\n\n\n.cursor{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGVsaXN0L3VzZXJwcm9maWxlbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7SUFDWCxtQkFBbUI7Q0FDdEI7OztBQUdEO0NBQ0MsbUJBQW1CO0NBQ25COzs7QUFFRDs7Q0FFQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25COzs7QUFFRDs7Q0FFQyxlQUFlO0NBQ2Y7OztBQUVEO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjs7O0FBRUQ7O0NBRUMsYUFBYTtJQUNWLDRCQUE0QjtDQUMvQjs7O0FBRUQ7Q0FDQyxlQUFlO0NBQ2Y7OztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXNlcnByb2ZpbGVsaXN0L3VzZXJwcm9maWxlbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJpbWFnZSB7XG5cdHdpZHRoOjE4MHB4O1xuXHRoZWlnaHQ6IDE4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuXG4uaW1hZ2Vjb250YWluZXIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbmZvIHtcblxuXHRjb2xvcjogd2hpdGU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhhbmRsZSB7XG5cblx0Y29sb3I6ICNhMDlmZWQ7XG59XG5cbi5yaWdodHRleHQge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpc3Qge1xuXG5cdGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XG59XG5cbi5yaWdodHRleHRibHVlIHtcblx0Y29sb3I6ICNhMDlmZWQ7XG59XG5cbi5jdXJzb3J7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/userprofilelist/userprofilelist.component.html":
/*!****************************************************************!*\
  !*** ./src/app/userprofilelist/userprofilelist.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n\t<div class=\"container imagecontainer mt-5\">\n\t\t<img class=\"userimage\" src={{My_Profile.profile_pic}}>\n\t</div>\n\t<div class=\"info mt-4\" >\n\t\t<a routerLink=\"/userpost\" style=\"outline: none; text-decoration: none; color: white;\">\n\t\t\t<h5>{{My_Profile.account_name}}</h5>\n\t\t\t<h5 class=\"handle\">{{My_Profile.Acc_id}}</h5>\n\t\t</a>\n\t</div>\n\t<div class=\"container mt-4\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4 righttext\">\n\t\t\t\t<h5>Followers</h5>\n\t\t\t\t<h5 class=\"righttextblue\">{{Followers_Count}}</h5>\n\t\t\t</div>\n\t\t\t<div class=\"col-4 righttext\">\n\t\t\t\t<h5>Following</h5>\n\t\t\t\t<h5 class=\"righttextblue\">{{Following_count}}</h5>\n\t\t\t</div>\n\t\t\t<div class=\"col-4 righttext\">\n\t\t\t\t<h5>murmurs</h5>\n\t\t\t\t<h5 class=\"righttextblue\">{{Murmur_count}}</h5>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<hr>\n\t<div>\n\t\t<ul class=\"list-group list-group-flush\">\n\t\t\t<li class=\"list-group-item list\" *ngIf = \"!name\">\n\t\t\t\t<div class=\"row\" routerLink=\"/editprofile\" style=\"outline: none;\">\n\t\t\t\t\t<div class=\"col-2 cursor\"><i class=\"material-icons\">edit</i></div>\n\t\t\t\t\t<div class=\"col-10 cursor\" style=\"margin: auto;\">Edit Profile</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"list-group-item list\">\n\t\t\t\t<div class=\"row\" (click)=\"logout()\" style=\"outline: none;\">\n\t\t\t\t\t<div class=\"col-2 cursor\"><i class=\"material-icons\">power_settings_new</i></div>\n\t\t\t\t\t<div class=\"col-10 cursor\" style=\"margin: auto;\">Log Out</div>\n\t\t\t\t</div>\n\t\t\t</li>  \n\t\t</ul>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/userprofilelist/userprofilelist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/userprofilelist/userprofilelist.component.ts ***!
  \**************************************************************/
/*! exports provided: UserprofilelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofilelistComponent", function() { return UserprofilelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserprofilelistComponent = /** @class */ (function () {
    function UserprofilelistComponent(ms) {
        this.ms = ms;
        this.My_Profile = {};
        this.name = '';
    }
    UserprofilelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.ms.getOtherUserName().then(function (res) {
                if (_this.name != res) {
                    _this.name = res;
                    if (res == undefined) {
                        _this.ms.getAccountProfile().then(function (res) {
                            _this.My_Profile = res[0];
                            // console.log(res)
                        });
                        _this.ms.getFollwersCount(localStorage.getItem(_this.ms.Scatter_account_name).split('-')[0]).then(function (res) {
                            _this.Followers_Count = res;
                            // console.log(res)
                        });
                        _this.ms.getFollwingCount(localStorage.getItem(_this.ms.Scatter_account_name).split('-')[0]).then(function (res) {
                            _this.Following_count = res;
                            // console.log(res)
                        });
                        _this.ms.getMurmursCount(localStorage.getItem(_this.ms.Scatter_account_name).split('-')[0]).then(function (res) {
                            _this.Murmur_count = res;
                        });
                    }
                    else {
                        _this.ms.getOthersProfile(res).then(function (res) {
                            _this.My_Profile = res[0];
                            // console.log(res)
                        });
                        _this.ms.getFollwersCount(res).then(function (res) {
                            _this.Followers_Count = res;
                            // console.log(res)
                        });
                        _this.ms.getFollwingCount(res).then(function (res) {
                            _this.Following_count = res;
                            // console.log(res)
                        });
                        _this.ms.getMurmursCount(res).then(function (res) {
                            _this.Murmur_count = res;
                        });
                    }
                }
            });
        }, 50);
    };
    UserprofilelistComponent.prototype.logout = function () {
        if (localStorage.getItem(this.ms.Scatter_account_name).split('-').length == 1)
            this.ms.Scater_logout().then().catch(function (e) {
                console.log("error");
                console.log(e);
            });
        else
            this.ms.PKey_logout().then().catch(function (e) {
                console.log("error");
                console.log(e);
            });
    };
    UserprofilelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofilelist',
            template: __webpack_require__(/*! ./userprofilelist.component.html */ "./src/app/userprofilelist/userprofilelist.component.html"),
            styles: [__webpack_require__(/*! ./userprofilelist.component.css */ "./src/app/userprofilelist/userprofilelist.component.css")]
        }),
        __metadata("design:paramtypes", [_murmur_service__WEBPACK_IMPORTED_MODULE_1__["MurmurService"]])
    ], UserprofilelistComponent);
    return UserprofilelistComponent;
}());



/***/ }),

/***/ "./src/app/wisperchatlist/wisperchatlist.component.css":
/*!*************************************************************!*\
  !*** ./src/app/wisperchatlist/wisperchatlist.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".styleone{\n\n\t/*display: flex;*/\n\t/*flex-direction: column;*/\n\theight: 100%;\n\tfont: inherit;\n    font-size: 100%;\n    vertical-align: baseline;\n    outline: none;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: #232937;\n}\n\n.headerone{\n\n    /*background-color: #000000;*/\n    padding: 10px 16px;\n    height: 59px;\n    width: 100%;\n\n}\n\n.tablerowdata{\n\n    /*background-color: #000000;*/\n    /*padding: 10px 16px;*/\n    height: 72px;\n    width: 100%;\n\n}\n\n.inputone {\n    \n    width: 100%;\n}\n\n.form-control {\n\n    background-color: #171d2b;\n    border: 1px solid #171d2b;\n}\n\n.userimage {\n\n    width: 49px;\n    height: 49px;\n    border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzcGVyY2hhdGxpc3Qvd2lzcGVyY2hhdGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLGFBQWE7Q0FDYixjQUFjO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0JBQW9CO0NBQ3ZCOztBQUVEOztJQUVJLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7O0NBRWY7O0FBRUQ7O0lBRUksOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTs7Q0FFZjs7QUFFRDs7SUFFSSxZQUFZO0NBQ2Y7O0FBRUQ7O0lBRUksMEJBQTBCO0lBQzFCLDBCQUEwQjtDQUM3Qjs7QUFFRDs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL3dpc3BlcmNoYXRsaXN0L3dpc3BlcmNoYXRsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGVvbmV7XG5cblx0LypkaXNwbGF5OiBmbGV4OyovXG5cdC8qZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMjMyOTM3O1xufVxuXG4uaGVhZGVyb25le1xuXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyovXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIGhlaWdodDogNTlweDtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG4udGFibGVyb3dkYXRhe1xuXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwOyovXG4gICAgLypwYWRkaW5nOiAxMHB4IDE2cHg7Ki9cbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLmlucHV0b25lIHtcbiAgICBcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxZDJiO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNzFkMmI7XG59XG5cbi51c2VyaW1hZ2Uge1xuXG4gICAgd2lkdGg6IDQ5cHg7XG4gICAgaGVpZ2h0OiA0OXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/wisperchatlist/wisperchatlist.component.html":
/*!**************************************************************!*\
  !*** ./src/app/wisperchatlist/wisperchatlist.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"styleone\">\n\t<div class=\"headerone\">\n\t\t<form class=\"form-inline my-2 my-lg-0\">\n\t\t  <input class=\"form-control inputone\" type=\"search\" placeholder=\"Search or start a new conversation\" aria-label=\"Search\"\n\t\t  \t(input)=\"somevalue($event.target.value);\" >\n\t    </form>\n\t</div>  \n\t<div style=\"display: block;height: 100%;overflow-y: auto;-ms-overflow-style: -ms-autohiding-scrollbar;\">\n\t\t  <div *ngFor=\"let arr of ChatUserList; let i = index\">\n\t\t\t\t<div class=\"tablerowdata\" id={{i}} (click)=\"myfunction(i)\">\n\t\t\t\t\t<div class=\"container\" style=\"padding: 10px 16px;color: white;\">\n\t\t\t\t\t\t\n\t\t    \t\t<div class=\"row\">\n\t\t\t\t      <div class=\"col-3\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\t<img class=\"userimage\" src={{arr.profile_pic}}>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-9\" style=\"padding-left: 0px;\">\n\t\t\t\t\t\t\t\t<div class=\"row\" >\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-6\"><h6 class=\"h6\">{{arr.Name}}</h6></div>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-6\" style=\"text-align: right;\"><h6>{{arr.Time}}</h6></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<p>{{arr.msg}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t    \t</div>\t\t      \n\t\t\t\t</div>\n\t\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/wisperchatlist/wisperchatlist.component.ts":
/*!************************************************************!*\
  !*** ./src/app/wisperchatlist/wisperchatlist.component.ts ***!
  \************************************************************/
/*! exports provided: WisperchatlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WisperchatlistComponent", function() { return WisperchatlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _murmur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../murmur.service */ "./src/app/murmur.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WisperchatlistComponent = /** @class */ (function () {
    function WisperchatlistComponent(router, ms) {
        this.router = router;
        this.ms = ms;
        this.ChatUserList = [
            {
                "Name": "Bala Vignesh",
                "Time": "06:45PM",
                "msg": "Haliaeetus leucocephalus",
                "profile_pic": "assets/img/pic1.png",
                "account_name": "chainflux123"
            },
            {
                "Name": "Sixface Aru",
                "Time": "06:45PM",
                "msg": "Haliaeetus leucocephalus",
                "profile_pic": "assets/img/pic1.png",
                "account_name": "chainflux123"
            },
            {
                "Name": "Gowtham Varthan",
                "Time": "06:45PM",
                "msg": "Haliaeetus leucocephalus",
                "profile_pic": "assets/img/pic1.png",
                "account_name": "chainflux123"
            }
        ];
    }
    WisperchatlistComponent.prototype.myfunction = function (index) {
        var name = document.getElementsByClassName("h6")[index].textContent;
        this.ms.setdata(this.ChatUserList[index]);
        this.router.navigate(['/userchat']);
        document.getElementById(index).setAttribute("style", "border-left: 10px solid #a09fed;background: #171d2b;border-bottom: 1px solid #161c2b;");
        for (this.i = 0; this.i < this.ChatUserList.length; this.i++) {
            if (this.i !== index) {
                document.getElementById(this.i).removeAttribute("style");
            }
        }
    };
    WisperchatlistComponent.prototype.somevalue = function (text) {
        var _this = this;
        if (text != "") {
            this.ms.getsearchProfile(text).then(function (res) {
                _this.ChatUserList = res;
            });
        }
    };
    WisperchatlistComponent.prototype.ngOnInit = function () {
    };
    WisperchatlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wisperchatlist',
            template: __webpack_require__(/*! ./wisperchatlist.component.html */ "./src/app/wisperchatlist/wisperchatlist.component.html"),
            styles: [__webpack_require__(/*! ./wisperchatlist.component.css */ "./src/app/wisperchatlist/wisperchatlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _murmur_service__WEBPACK_IMPORTED_MODULE_2__["MurmurService"]])
    ], WisperchatlistComponent);
    return WisperchatlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chainflux/projects/New Murmur Angular/Scatter branch/murmur_web/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map