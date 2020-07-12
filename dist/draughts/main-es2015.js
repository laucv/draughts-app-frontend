(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_register_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/register/registration.component */ "./src/app/users/register/registration.component.ts");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/profile/profile.component */ "./src/app/users/profile/profile.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _game_controllers_dialog_DialogGameBoard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/controllers/dialog/DialogGameBoard.component */ "./src/app/game/controllers/dialog/DialogGameBoard.component.ts");
/* harmony import */ var _playGame_openGame_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playGame/openGame.component */ "./src/app/playGame/openGame.component.ts");










const routes = [
    { path: 'signup', component: _users_register_registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"] },
    { path: 'login', component: _users_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'play', component: _game_controllers_dialog_DialogGameBoard_component__WEBPACK_IMPORTED_MODULE_6__["DialogGameBoard"] },
    { path: 'playGame', component: _playGame_openGame_component__WEBPACK_IMPORTED_MODULE_7__["OpenGame"] },
    { path: 'profile', component: _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"] },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










function AppComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Play Game!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.userService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(userService) {
        this.userService = userService;
        this.title = 'draughts';
        this.apiEndPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 5, consts: [["color", "primary"], ["routerLink", "", 1, "draughs"], ["class", "menuLogin", "mat-menu-item", "", "routerLink", "profile", 4, "ngIf"], ["class", "menuLogin", "mat-menu-item", "", "routerLink", "playGame", 4, "ngIf"], ["mat-flat-button", "", 1, "menuButton", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", "routerLink", "signup", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "profile", 1, "menuLogin"], ["mat-menu-item", "", "routerLink", "playGame", 1, "menuLogin"], ["mat-menu-item", "", "routerLink", "signup"], ["mat-menu-item", "", "routerLink", "/", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Draughts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_button_4_Template, 5, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_button_5_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_button_14_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_button_15_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.isUserActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.isUserActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userService.isUserActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.isUserActive());
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["main[_ngcontent-%COMP%]{\r\n  margin-top: 1.5rem;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n.menuButton[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 10px;\r\n  border: 3px;\r\n  padding: 10px;\r\n}\r\n.draughs[_ngcontent-%COMP%]{\r\n  color: white;\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1lbnVCdXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDtcclxuICBib3JkZXI6IDNweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5kcmF1Z2hze1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_register_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/register/registration.component */ "./src/app/users/register/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users/login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/profile/profile.component */ "./src/app/users/profile/profile.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _game_controllers_dialog_DialogGameBoard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./game/controllers/dialog/DialogGameBoard.component */ "./src/app/game/controllers/dialog/DialogGameBoard.component.ts");
/* harmony import */ var _game_controllers_mySquare_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./game/controllers/mySquare.component */ "./src/app/game/controllers/mySquare.component.ts");
/* harmony import */ var _game_controllers_pieces_draught_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./game/controllers/pieces/draught.component */ "./src/app/game/controllers/pieces/draught.component.ts");
/* harmony import */ var _game_controllers_pieces_pawn_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./game/controllers/pieces/pawn.component */ "./src/app/game/controllers/pieces/pawn.component.ts");
/* harmony import */ var _game_game_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./game/game.service */ "./src/app/game/game.service.ts");
/* harmony import */ var _services_draughts_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/draughts.service */ "./src/app/services/draughts.service.ts");
/* harmony import */ var _game_controllers_dialog_DialogGameName_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./game/controllers/dialog/DialogGameName.component */ "./src/app/game/controllers/dialog/DialogGameName.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _playGame_openGame_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./playGame/openGame.component */ "./src/app/playGame/openGame.component.ts");




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
        _game_game_service__WEBPACK_IMPORTED_MODULE_22__["GameService"],
        _services_draughts_service__WEBPACK_IMPORTED_MODULE_23__["DraughtsService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _users_register_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
        _users_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
        _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_17__["WelcomeComponent"],
        _game_controllers_dialog_DialogGameBoard_component__WEBPACK_IMPORTED_MODULE_18__["DialogGameBoard"],
        _game_controllers_mySquare_component__WEBPACK_IMPORTED_MODULE_19__["MySquareComponent"],
        _game_controllers_pieces_draught_component__WEBPACK_IMPORTED_MODULE_20__["DraughtComponent"],
        _game_controllers_pieces_pawn_component__WEBPACK_IMPORTED_MODULE_21__["PawnComponent"],
        _game_controllers_dialog_DialogGameName_component__WEBPACK_IMPORTED_MODULE_24__["DialogGameName"],
        _playGame_openGame_component__WEBPACK_IMPORTED_MODULE_26__["OpenGame"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _users_register_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
                    _users_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                    _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_17__["WelcomeComponent"],
                    _game_controllers_dialog_DialogGameBoard_component__WEBPACK_IMPORTED_MODULE_18__["DialogGameBoard"],
                    _game_controllers_mySquare_component__WEBPACK_IMPORTED_MODULE_19__["MySquareComponent"],
                    _game_controllers_pieces_draught_component__WEBPACK_IMPORTED_MODULE_20__["DraughtComponent"],
                    _game_controllers_pieces_pawn_component__WEBPACK_IMPORTED_MODULE_21__["PawnComponent"],
                    _game_controllers_dialog_DialogGameName_component__WEBPACK_IMPORTED_MODULE_24__["DialogGameName"],
                    _playGame_openGame_component__WEBPACK_IMPORTED_MODULE_26__["OpenGame"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"]
                ],
                entryComponents: [
                    _game_controllers_dialog_DialogGameName_component__WEBPACK_IMPORTED_MODULE_24__["DialogGameName"],
                    _game_controllers_dialog_DialogGameBoard_component__WEBPACK_IMPORTED_MODULE_18__["DialogGameBoard"]
                ],
                providers: [
                    _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                    _game_game_service__WEBPACK_IMPORTED_MODULE_22__["GameService"],
                    _services_draughts_service__WEBPACK_IMPORTED_MODULE_23__["DraughtsService"]
                ],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/game/controllers/dialog/DialogGameBoard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/game/controllers/dialog/DialogGameBoard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DialogGameBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogGameBoard", function() { return DialogGameBoard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Color */ "./src/app/game/models/Color.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _DialogGameName_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DialogGameName.component */ "./src/app/game/controllers/dialog/DialogGameName.component.ts");
/* harmony import */ var _models_Pawn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Pawn */ "./src/app/game/models/Pawn.ts");
/* harmony import */ var _models_Draught__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/Draught */ "./src/app/game/models/Draught.ts");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../game.service */ "./src/app/game/game.service.ts");
/* harmony import */ var _services_draughts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/draughts.service */ "./src/app/services/draughts.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mySquare_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mySquare.component */ "./src/app/game/controllers/mySquare.component.ts");














function DialogGameBoard_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} }
function DialogGameBoard_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} }
function DialogGameBoard_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.gameName, "");
} }
function DialogGameBoard_div_15_app_board_square_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-board-square", 11);
} if (rf & 2) {
    const column_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("square", column_r6);
} }
function DialogGameBoard_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogGameBoard_div_15_app_board_square_1_Template, 1, 1, "app-board-square", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r4);
} }
class DialogGameBoard {
    constructor(gameService, draughtsService, userService, dialog, dialogRef, data) {
        this.gameService = gameService;
        this.draughtsService = draughtsService;
        this.userService = userService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.gameName = null;
    }
    ngOnInit() {
        if (this.data.gameName !== null) {
            this.setBoard(this.data.board);
            this.gameName = this.data.gameName;
        }
        else {
            this.gameService.resetGame();
        }
        this.boardDimension = this.gameService.getBoardView();
    }
    setBoard(board) {
        let position = 0;
        for (let row = 0; row < this.gameService.getDimension(); row++) {
            for (let column = 0; column < this.gameService.getDimension(); column++) {
                if (board.charAt(position) === '_') {
                    this.gameService.setPiece(null, row, column);
                }
                else if (board.charAt(position) === 'r') {
                    this.gameService.setPiece(new _models_Pawn__WEBPACK_IMPORTED_MODULE_4__["Pawn"](_models_Color__WEBPACK_IMPORTED_MODULE_1__["Color"].RED), row, column);
                }
                else if (board.charAt(position) === 'R') {
                    this.gameService.setPiece(new _models_Draught__WEBPACK_IMPORTED_MODULE_5__["Draught"](_models_Color__WEBPACK_IMPORTED_MODULE_1__["Color"].RED), row, column);
                }
                else if (board.charAt(position) === 'n') {
                    this.gameService.setPiece(new _models_Pawn__WEBPACK_IMPORTED_MODULE_4__["Pawn"](_models_Color__WEBPACK_IMPORTED_MODULE_1__["Color"].BLACK), row, column);
                }
                else if (board.charAt(position) === 'N') {
                    this.gameService.setPiece(new _models_Draught__WEBPACK_IMPORTED_MODULE_5__["Draught"](_models_Color__WEBPACK_IMPORTED_MODULE_1__["Color"].BLACK), row, column);
                }
                position++;
            }
        }
    }
    getTurnColor() {
        return this.gameService.getTurnColor();
    }
    saveGame() {
        if (this.gameName === null) {
            this.openDialog();
        }
        else {
            this.draughtsService.put(this.gameName, this.gameService.toStringBoard(), this.gameService.getTurnColor()).subscribe(data => {
                alert('Game update');
            });
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(_DialogGameName_component__WEBPACK_IMPORTED_MODULE_3__["DialogGameName"], {
            height: '250px',
            width: '250px',
            data: { gameName: this.gameName }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.gameName = result;
            this.draughtsService.post(this.gameName, this.gameService.toStringBoard(), this.gameService.getTurnColor()).subscribe(data => {
                alert('Game saved');
            });
        });
    }
    logout() {
        this.dialog.closeAll();
        this.userService.logout();
    }
}
DialogGameBoard.ɵfac = function DialogGameBoard_Factory(t) { return new (t || DialogGameBoard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_draughts_service__WEBPACK_IMPORTED_MODULE_7__["DraughtsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
DialogGameBoard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogGameBoard, selectors: [["app-draughts"]], decls: 16, vars: 4, consts: [["src", "./assets/images/red.png", "class", "turn", "alt", "Red pieces turn", 4, "ngIf"], ["src", "./assets/images/black.png", "class", "turn", "alt", "Black pieces turn", 4, "ngIf"], ["routerLink", "/", 3, "click"], [4, "ngIf"], [3, "click"], [1, "board"], ["class", "fila", 4, "ngFor", "ngForOf"], ["src", "./assets/images/red.png", "alt", "Red pieces turn", 1, "turn"], ["src", "./assets/images/black.png", "alt", "Black pieces turn", 1, "turn"], [1, "fila"], [3, "square", 4, "ngFor", "ngForOf"], [3, "square"]], template: function DialogGameBoard_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Mueve: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogGameBoard_img_3_Template, 1, 0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DialogGameBoard_img_4_Template, 1, 0, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogGameBoard_Template_button_click_7_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Logout!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DialogGameBoard_p_10_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogGameBoard_Template_button_click_12_listener() { return ctx.saveGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Save Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DialogGameBoard_div_15_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getTurnColor() === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getTurnColor() === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameName !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boardDimension);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _mySquare_component__WEBPACK_IMPORTED_MODULE_11__["MySquareComponent"]], styles: [".board[_ngcontent-%COMP%] {\r\n  height: 400px;\r\n  width: 400px;\r\n  margin-left: 20%;\r\n  border: 1px solid black;\r\n}\r\n\r\n.fila[_ngcontent-%COMP%]{\r\n  height: 12.5%;\r\n  width: 100%;\r\n  background-color: #FDFFD3;\r\n}\r\n\r\n.turn[_ngcontent-%COMP%]{\r\n  width: 5%;\r\n  height: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS92aWV3cy9kaWFsb2cvZGlhbG9nLWdhbWUtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvdmlld3MvZGlhbG9nL2RpYWxvZy1nYW1lLWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmQge1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5maWxhe1xyXG4gIGhlaWdodDogMTIuNSU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkZEMztcclxufVxyXG5cclxuLnR1cm57XHJcbiAgd2lkdGg6IDUlO1xyXG4gIGhlaWdodDogNSU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogGameBoard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-draughts',
                templateUrl: '../../views/dialog/dialog-game-board.component.html',
                styleUrls: ['../../views/dialog/dialog-game-board.component.css']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] }, { type: _services_draughts_service__WEBPACK_IMPORTED_MODULE_7__["DraughtsService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/controllers/dialog/DialogGameName.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/game/controllers/dialog/DialogGameName.component.ts ***!
  \*********************************************************************/
/*! exports provided: DialogGameName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogGameName", function() { return DialogGameName; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








class DialogGameName {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogGameName.ɵfac = function DialogGameName_Factory(t) { return new (t || DialogGameName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DialogGameName.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogGameName, selectors: [["dialog-game-name"]], decls: 14, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogGameName_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Game name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name your game!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Game name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogGameName_Template_input_ngModelChange_8_listener($event) { return ctx.data.gameName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogGameName_Template_button_click_10_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.gameName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data.gameName);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogGameName, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dialog-game-name',
                templateUrl: '../../views/dialog/dialog-game-name.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/game/controllers/mySquare.component.ts":
/*!********************************************************!*\
  !*** ./src/app/game/controllers/mySquare.component.ts ***!
  \********************************************************/
/*! exports provided: MySquareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySquareComponent", function() { return MySquareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game.service */ "./src/app/game/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pieces_pawn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pieces/pawn.component */ "./src/app/game/controllers/pieces/pawn.component.ts");
/* harmony import */ var _pieces_draught_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pieces/draught.component */ "./src/app/game/controllers/pieces/draught.component.ts");






function MySquareComponent_div_1_pawn_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "pawn", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pawn", ctx_r1.square.getPiece());
} }
function MySquareComponent_div_1_draught_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "draught", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("draught", ctx_r2.square.getPiece());
} }
function MySquareComponent_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} }
function MySquareComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MySquareComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.userMoves(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MySquareComponent_div_1_pawn_1_Template, 1, 1, "pawn", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MySquareComponent_div_1_draught_2_Template, 1, 1, "draught", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MySquareComponent_div_1_img_3_Template, 1, 0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.square.getPieceType() === "n" || ctx_r0.square.getPieceType() === "r");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.square.getPieceType() === "N" || ctx_r0.square.getPieceType() === "R");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.square.getPieceType() === "");
} }
class MySquareComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    userMoves() {
        return this.gameService.userClicks(this.square.getPiece(), this.square.getRow(), this.square.getColumn());
    }
}
MySquareComponent.ɵfac = function MySquareComponent_Factory(t) { return new (t || MySquareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"])); };
MySquareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MySquareComponent, selectors: [["app-board-square"]], inputs: { square: "square" }, decls: 2, vars: 7, consts: [[3, "click", 4, "ngIf"], [3, "click"], [3, "pawn", 4, "ngIf"], [3, "draught", 4, "ngIf"], ["src", "../../../assets/images/noPiece.png", "class", "noPawn", "alt", "Empty square", 4, "ngIf"], [3, "pawn"], [3, "draught"], ["src", "../../../assets/images/noPiece.png", "alt", "Empty square", 1, "noPawn"]], template: function MySquareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MySquareComponent_div_1_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("playable", ctx.square.getRow() % 2 !== ctx.square.getColumn() % 2)("notplayable", ctx.square.getRow() % 2 === ctx.square.getColumn() % 2)("highlight", ctx.square.isSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.square.getRow() % 2 !== ctx.square.getColumn() % 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _pieces_pawn_component__WEBPACK_IMPORTED_MODULE_3__["PawnComponent"], _pieces_draught_component__WEBPACK_IMPORTED_MODULE_4__["DraughtComponent"]], styles: [".playable[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 12.5%;\r\n  display: inline-block;\r\n  background-color: #256f80;\r\n}\r\n.notplayable[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 12.5%;\r\n  display: inline-block;\r\n  background-color: #FDFFD3;\r\n}\r\n.noPawn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.highlight[_ngcontent-%COMP%]{\r\n  background-color: yellow;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS92aWV3cy9teVNxdWFyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvdmlld3MvbXlTcXVhcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5YWJsZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMi41JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1NmY4MDtcclxufVxyXG4ubm90cGxheWFibGUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTIuNSU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGREZGRDM7XHJcbn1cclxuLm5vUGF3biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5oaWdobGlnaHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MySquareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board-square',
                templateUrl: '../views/mySquare.component.html',
                styleUrls: ['../views/mySquare.component.css']
            }]
    }], function () { return [{ type: _game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"] }]; }, { square: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/game/controllers/pieces/draught.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/game/controllers/pieces/draught.component.ts ***!
  \**************************************************************/
/*! exports provided: DraughtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraughtComponent", function() { return DraughtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Color */ "./src/app/game/models/Color.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DraughtComponent_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} }
function DraughtComponent_div_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} }
function DraughtComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DraughtComponent_div_0_img_1_Template, 1, 0, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DraughtComponent_div_0_img_2_Template, 1, 0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.draught.getColor() === ctx_r0.RED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.draught.getColor() === ctx_r0.BLACK);
} }
class DraughtComponent {
    constructor() {
        this.BLACK = _models_Color__WEBPACK_IMPORTED_MODULE_1__["Color"].BLACK;
        this.RED = _models_Color__WEBPACK_IMPORTED_MODULE_1__["Color"].RED;
    }
}
DraughtComponent.ɵfac = function DraughtComponent_Factory(t) { return new (t || DraughtComponent)(); };
DraughtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DraughtComponent, selectors: [["draught"]], inputs: { draught: "draught" }, decls: 1, vars: 1, consts: [["class", "divPiece", 4, "ngIf"], [1, "divPiece"], ["src", "./assets/images/red_draught.png", "class", "piece", "alt", "Red Draught", 4, "ngIf"], ["src", "./assets/images/black_draught.png", "class", "piece", "alt", "Black Draught", 4, "ngIf"], ["src", "./assets/images/red_draught.png", "alt", "Red Draught", 1, "piece"], ["src", "./assets/images/black_draught.png", "alt", "Black Draught", 1, "piece"]], template: function DraughtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DraughtComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.draught !== null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".piece[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.divPiece[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS92aWV3cy9waWVjZXMvcGllY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3ZpZXdzL3BpZWNlcy9waWVjZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpZWNlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmRpdlBpZWNle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DraughtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'draught',
                templateUrl: '../../views/pieces/draught.component.html',
                styleUrls: ['../../views/pieces/piece.component.css']
            }]
    }], null, { draught: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/game/controllers/pieces/pawn.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/game/controllers/pieces/pawn.component.ts ***!
  \***********************************************************/
/*! exports provided: PawnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PawnComponent", function() { return PawnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Color */ "./src/app/game/models/Color.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PawnComponent_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} }
function PawnComponent_div_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
} }
function PawnComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PawnComponent_div_0_img_1_Template, 1, 0, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PawnComponent_div_0_img_2_Template, 1, 0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pawn.getColor() === ctx_r0.RED);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pawn.getColor() === ctx_r0.BLACK);
} }
class PawnComponent {
    constructor() {
        this.BLACK = _models_Color__WEBPACK_IMPORTED_MODULE_1__["Color"].BLACK;
        this.RED = _models_Color__WEBPACK_IMPORTED_MODULE_1__["Color"].RED;
    }
}
PawnComponent.ɵfac = function PawnComponent_Factory(t) { return new (t || PawnComponent)(); };
PawnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PawnComponent, selectors: [["pawn"]], inputs: { pawn: "pawn" }, decls: 1, vars: 1, consts: [["class", "divPiece", 4, "ngIf"], [1, "divPiece"], ["src", "./assets/images/red.png", "class", "piece", "alt", "Red Pawn", 4, "ngIf"], ["src", "./assets/images/black.png", "class", "piece", "alt", "Black Pawn", 4, "ngIf"], ["src", "./assets/images/red.png", "alt", "Red Pawn", 1, "piece"], ["src", "./assets/images/black.png", "alt", "Black Pawn", 1, "piece"]], template: function PawnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PawnComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pawn !== null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".piece[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.divPiece[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS92aWV3cy9waWVjZXMvcGllY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3ZpZXdzL3BpZWNlcy9waWVjZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpZWNlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmRpdlBpZWNle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PawnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pawn',
                templateUrl: '../../views/pieces/pawn.component.html',
                styleUrls: ['../../views/pieces/piece.component.css']
            }]
    }], null, { pawn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/game/game.service.ts":
/*!**************************************!*\
  !*** ./src/app/game/game.service.ts ***!
  \**************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Coordinate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Coordinate */ "./src/app/game/models/Coordinate.ts");
/* harmony import */ var _models_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Game */ "./src/app/game/models/Game.ts");
/* harmony import */ var _models_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/Error */ "./src/app/game/models/Error.ts");
/* harmony import */ var _models_mySquare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/mySquare */ "./src/app/game/models/mySquare.ts");
/* harmony import */ var _models_Pawn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Pawn */ "./src/app/game/models/Pawn.ts");
/* harmony import */ var _models_Color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/Color */ "./src/app/game/models/Color.ts");
/* harmony import */ var _models_Draught__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/Draught */ "./src/app/game/models/Draught.ts");









class GameService {
    constructor() {
        this.game = new _models_Game__WEBPACK_IMPORTED_MODULE_2__["Game"]();
        this.piece = null;
        this.coordinate = null;
        this.pieceIsSelected = false;
        this.resetGame();
        this.multiJump = false;
    }
    getBoardView() {
        return this.boardView;
    }
    resetGame() {
        this.initBoard();
        this.initTurn();
    }
    initTurn() {
        this.game.resetTurn();
    }
    initBoard() {
        this.boardView = [];
        for (let i = 0; i < _models_Coordinate__WEBPACK_IMPORTED_MODULE_1__["Coordinate"].getDimension(); i++) {
            this.boardView[i] = [];
            for (let j = 0; j < _models_Coordinate__WEBPACK_IMPORTED_MODULE_1__["Coordinate"].getDimension(); j++) {
                if (i % 2 !== j % 2) {
                    this.initialize(i, j);
                }
                else {
                    this.boardView[i][j] = new _models_mySquare__WEBPACK_IMPORTED_MODULE_4__["MySquare"](null, i, j);
                    this.setPiece(null, i, j);
                }
            }
        }
    }
    initialize(row, column) {
        if (row < 3) {
            this.boardView[row][column] = new _models_mySquare__WEBPACK_IMPORTED_MODULE_4__["MySquare"](new _models_Pawn__WEBPACK_IMPORTED_MODULE_5__["Pawn"](_models_Color__WEBPACK_IMPORTED_MODULE_6__["Color"].BLACK), row, column);
            this.setPiece(new _models_Pawn__WEBPACK_IMPORTED_MODULE_5__["Pawn"](_models_Color__WEBPACK_IMPORTED_MODULE_6__["Color"].BLACK), row, column);
        }
        else if (row > 4) {
            this.boardView[row][column] = new _models_mySquare__WEBPACK_IMPORTED_MODULE_4__["MySquare"](new _models_Pawn__WEBPACK_IMPORTED_MODULE_5__["Pawn"](_models_Color__WEBPACK_IMPORTED_MODULE_6__["Color"].RED), row, column);
            this.setPiece(new _models_Pawn__WEBPACK_IMPORTED_MODULE_5__["Pawn"](_models_Color__WEBPACK_IMPORTED_MODULE_6__["Color"].RED), row, column);
        }
        else {
            this.boardView[row][column] = new _models_mySquare__WEBPACK_IMPORTED_MODULE_4__["MySquare"](null, row, column);
            this.setPiece(null, row, column);
        }
    }
    clearHighlightedPiece() {
        if (this.coordinate !== null && !this.multiJump) {
            this.boardView[this.coordinate.getRow()][this.coordinate.getColumn()].setSelected(false);
        }
    }
    userClicks(piece, row, column) {
        this.clearHighlightedPiece();
        if (piece !== null && !this.multiJump) {
            this.boardView[row][column].setSelected(true);
            this.piece = piece;
            this.coordinate = new _models_Coordinate__WEBPACK_IMPORTED_MODULE_1__["Coordinate"](row, column);
            this.pieceIsSelected = true;
        }
        else if (piece === null && this.pieceIsSelected) {
            return this.movePiece(new _models_Coordinate__WEBPACK_IMPORTED_MODULE_1__["Coordinate"](row, column));
        }
        else if (this.multiJump) {
            this.boardView[this.coordinate.getRow()][this.coordinate.getColumn()].setSelected(true);
        }
        else {
            this.pieceIsSelected = false;
        }
        return null;
    }
    getSquarePiece() {
        let mySquare = null;
        this.boardView.forEach(row => row.forEach(square => {
            if (square.getPiece() === this.piece) {
                mySquare = square;
            }
        }));
        return mySquare;
    }
    putPiece(coordinate) {
        this.boardView[coordinate.getRow()][coordinate.getColumn()].put(this.piece);
    }
    movePiece(target) {
        let error = this.game.move([this.coordinate, target]);
        if (error === null) {
            this.getSquarePiece().clearPiece();
            this.putPiece(target);
            let direction = this.coordinate.getDirection(target);
            if (this.coordinate.getDiagonalCoordinate(direction, 2).equals(target)) {
                this.clearJumpedPiece(this.coordinate.getDiagonalCoordinate(direction, 1));
            }
            this.multiJump = this.game.isMultiJumpPossible(target) && this.coordinate.getDiagonalDistance(target) === 2;
            if (this.multiJump) {
                this.prepareForMultiJump(target);
                return;
            }
            else {
                this.transformPawnToDraught(target);
                this.prepareForNextMovement();
            }
        }
        else {
            alert(Object(_models_Error__WEBPACK_IMPORTED_MODULE_3__["getErrorValues"])()[error]);
        }
        this.checkGameIsFinished();
        return error;
    }
    prepareForNextMovement() {
        this.pieceIsSelected = false;
        this.boardView[this.coordinate.getRow()][this.coordinate.getColumn()].setSelected(false);
    }
    checkGameIsFinished() {
        if (this.game.isBlocked()) {
            alert('Fin del juego, el ganador es: ' + Object(_models_Color__WEBPACK_IMPORTED_MODULE_6__["colorValues"])()[this.game.getOppositeTurnColor()]);
        }
    }
    prepareForMultiJump(target) {
        this.boardView[this.coordinate.getRow()][this.coordinate.getColumn()].setSelected(false);
        this.boardView[target.getRow()][target.getColumn()].setSelected(true);
        this.game.changeTurnToAllowMultiJump();
        this.coordinate = target;
    }
    transformPawnToDraught(coordinate) {
        if (this.game.getPiece(coordinate).getCode() === 'N' && coordinate.isLast()) {
            this.boardView[coordinate.getRow()][coordinate.getColumn()].put(new _models_Draught__WEBPACK_IMPORTED_MODULE_7__["Draught"](_models_Color__WEBPACK_IMPORTED_MODULE_6__["Color"].BLACK));
        }
        else if (this.game.getPiece(coordinate).getCode() === 'R' && coordinate.isFirst()) {
            this.boardView[coordinate.getRow()][coordinate.getColumn()].put(new _models_Draught__WEBPACK_IMPORTED_MODULE_7__["Draught"](_models_Color__WEBPACK_IMPORTED_MODULE_6__["Color"].RED));
        }
    }
    clearJumpedPiece(coordinate) {
        this.boardView[coordinate.getRow()][coordinate.getColumn()].put(null);
    }
    getPiece() {
        return this.piece;
    }
    getTurnColor() {
        return this.game.getTurnColor();
    }
    isPieceSelected() {
        return this.pieceIsSelected;
    }
    isMultiJump() {
        return this.multiJump;
    }
    setPiece(piece, row, column) {
        this.boardView[row][column].setPiece(piece);
        this.game.changePiece(piece, row, column);
    }
    getNumberOfPieces(color) {
        return this.game.getNumberOfPieces(color);
    }
    getDimension() {
        return _models_Coordinate__WEBPACK_IMPORTED_MODULE_1__["Coordinate"].getDimension();
    }
    toStringBoard() {
        let string = '';
        for (let i = 0; i < _models_Coordinate__WEBPACK_IMPORTED_MODULE_1__["Coordinate"].getDimension(); i++) {
            for (let j = 0; j < _models_Coordinate__WEBPACK_IMPORTED_MODULE_1__["Coordinate"].getDimension(); j++) {
                if (this.boardView[i][j].getPiece() === null) {
                    string += '_';
                }
                else {
                    string += this.boardView[i][j].getPiece().getCode();
                }
            }
        }
        return string;
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/game/models/Board.ts":
/*!**************************************!*\
  !*** ./src/app/game/models/Board.ts ***!
  \**************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var _Coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coordinate */ "./src/app/game/models/Coordinate.ts");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color */ "./src/app/game/models/Color.ts");
/* harmony import */ var _DirectionClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DirectionClass */ "./src/app/game/models/DirectionClass.ts");



class Board {
    constructor() {
        this.pieces = [];
        for (let i = 0; i < _Coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"].getDimension(); i++) {
            this.pieces[i] = [];
            for (let j = 0; j < _Coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"].getDimension(); j++) {
                this.pieces[i][j] = null;
            }
        }
    }
    getPiece(coordinate) {
        if (coordinate === null) {
            return null;
        }
        return this.pieces[coordinate.getRow()][coordinate.getColumn()];
    }
    setPiece(piece, row, column) {
        this.pieces[row][column] = piece;
    }
    put(coordinate, piece) {
        if (coordinate !== null) {
            this.pieces[coordinate.getRow()][coordinate.getColumn()] = piece;
        }
    }
    remove(coordinate) {
        if (this.getPiece(coordinate) === null) {
            return null;
        }
        let piece = this.getPiece(coordinate);
        this.put(coordinate, null);
        return piece;
    }
    move(origin, target) {
        if (this.getPiece(origin) !== null) {
            this.put(target, this.remove(origin));
        }
    }
    getBetweenDiagonalPieces(origin, target) {
        let betweenDiagonalPieces = new Array();
        if (origin.isOnDiagonal(target)) {
            for (let coordinate of origin.getBetweenDiagonalCoordinates(target)) {
                let piece = this.getPiece(coordinate);
                if (piece != null) {
                    betweenDiagonalPieces.push(piece);
                }
            }
        }
        return betweenDiagonalPieces;
    }
    getColor(coordinate) {
        const piece = this.getPiece(coordinate);
        if (piece === null) {
            return null;
        }
        return piece.getColor();
    }
    isEmpty(coordinate) {
        return this.getPiece(coordinate) === null;
    }
    getAvailablePiecesToJump(coordinate) {
        let availablePiecesToJump = new Array();
        let color = this.getPiece(coordinate).getColor();
        this.checkDiagonals(availablePiecesToJump, color, coordinate);
        return availablePiecesToJump;
    }
    checkDiagonals(availablePiecesToJump, color, coordinate) {
        if (color === _Color__WEBPACK_IMPORTED_MODULE_1__["Color"].RED && coordinate.getRow() > Board.MINIMUM_LIMIT_TO_JUMP) {
            if (coordinate.getColumn() < Board.MAXIMUM_LIMIT_TO_JUMP && this.jumpIsPossible(coordinate, _DirectionClass__WEBPACK_IMPORTED_MODULE_2__["DirectionClass"].SE)) {
                availablePiecesToJump.push(coordinate);
            }
            if (coordinate.getColumn() > Board.MINIMUM_LIMIT_TO_JUMP && this.jumpIsPossible(coordinate, _DirectionClass__WEBPACK_IMPORTED_MODULE_2__["DirectionClass"].SW)) {
                availablePiecesToJump.push(coordinate);
            }
        }
        if (color === _Color__WEBPACK_IMPORTED_MODULE_1__["Color"].BLACK && coordinate.getRow() < Board.MAXIMUM_LIMIT_TO_JUMP) {
            if (coordinate.getColumn() > Board.MINIMUM_LIMIT_TO_JUMP && this.jumpIsPossible(coordinate, _DirectionClass__WEBPACK_IMPORTED_MODULE_2__["DirectionClass"].NW)) {
                availablePiecesToJump.push(coordinate);
            }
            if (coordinate.getColumn() < Board.MAXIMUM_LIMIT_TO_JUMP && this.jumpIsPossible(coordinate, _DirectionClass__WEBPACK_IMPORTED_MODULE_2__["DirectionClass"].NE)) {
                availablePiecesToJump.push(coordinate);
            }
        }
    }
    jumpIsPossible(coordinate, direction) {
        return this.getPiece(coordinate.getDiagonalCoordinate(direction, 1)) !== null
            && this.getColor(coordinate.getDiagonalCoordinate(direction, 1)) !== this.getColor(coordinate)
            && this.getPiece(coordinate.getDiagonalCoordinate(direction, 2)) === null;
    }
    getNumberOfPieces(color) {
        let result = 0;
        for (let i = 0; i < _Coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"].getDimension(); i++) {
            for (let j = 0; j < _Coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"].getDimension(); j++) {
                if (this.pieces[i][j] != null) {
                    if (this.pieces[i][j].getColor() === color) {
                        result++;
                    }
                }
            }
        }
        return result;
    }
    impresion() {
        let string = '';
        for (let i = 0; i < _Coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"].getDimension(); i++) {
            for (let j = 0; j < _Coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"].getDimension(); j++) {
                if (this.pieces[i][j] === null) {
                    string += '_';
                }
                else {
                    string += this.pieces[i][j].getCode();
                }
            }
        }
        return string;
    }
}
Board.MAXIMUM_LIMIT_TO_JUMP = _Coordinate__WEBPACK_IMPORTED_MODULE_0__["Coordinate"].getDimension() - 2;
Board.MINIMUM_LIMIT_TO_JUMP = 1;


/***/ }),

/***/ "./src/app/game/models/Color.ts":
/*!**************************************!*\
  !*** ./src/app/game/models/Color.ts ***!
  \**************************************/
/*! exports provided: Color, colorGetInitialColor, getColorValue, colorValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorGetInitialColor", function() { return colorGetInitialColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColorValue", function() { return getColorValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorValues", function() { return colorValues; });
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLACK"] = 1] = "BLACK";
})(Color || (Color = {}));
const LIMITS = [5, 2];
const StringIsNumber = value => isNaN(Number(value)) === false;
function getColor(row) {
    if (row >= LIMITS[Color.RED.valueOf()]) {
        return Color.RED;
    }
    else if (row <= LIMITS[Color.BLACK.valueOf()]) {
        return Color.BLACK;
    }
    return null;
}
function colorGetInitialColor(coordinate) {
    if (coordinate.isBlack()) {
        return getColor(coordinate.getRow());
    }
    return null;
}
function getColorValue(color) {
    if (color === 0) {
        return Color.RED;
    }
    if (color === 1) {
        return Color.BLACK;
    }
    return null;
}
function colorValues() {
    return Object.keys(Color)
        .filter(StringIsNumber)
        .map(key => Color[key]);
}


/***/ }),

/***/ "./src/app/game/models/Coordinate.ts":
/*!*******************************************!*\
  !*** ./src/app/game/models/Coordinate.ts ***!
  \*******************************************/
/*! exports provided: Coordinate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coordinate", function() { return Coordinate; });
/* harmony import */ var _DirectionClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DirectionClass */ "./src/app/game/models/DirectionClass.ts");

class Coordinate {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
    isWithIn() {
        return Coordinate.LOWER_LIMIT <= this.row && this.row <= Coordinate.UPPER_LIMIT
            && Coordinate.LOWER_LIMIT <= this.column && this.column <= Coordinate.UPPER_LIMIT;
    }
    subtract(coordinate) {
        return new Coordinate(this.row - coordinate.row, this.column - coordinate.column);
    }
    plus(coordinate) {
        return new Coordinate(this.row + coordinate.row, this.column + coordinate.column);
    }
    getDirection(coordinate) {
        if (coordinate === null) {
            return null;
        }
        let substract = coordinate.subtract(this);
        for (let direction of _DirectionClass__WEBPACK_IMPORTED_MODULE_0__["DirectionClass"].values()) {
            if (direction.isOnDirection(substract)) {
                return direction;
            }
        }
        return null;
    }
    isOnDiagonal(coordinate) {
        return this.getDirection(coordinate) != null;
    }
    getDiagonalDistance(coordinate) {
        if (!this.isOnDiagonal(coordinate)) {
            return null;
        }
        return Math.abs(this.subtract(coordinate).getRow());
    }
    getDistanceCoordinate(direction, distance) {
        return new Coordinate(direction.getDistanceCoordinateRow(distance), direction.getDistanceCoordinateColumn(distance));
    }
    getBetweenDiagonalCoordinates(coordinate) {
        if (!this.isOnDiagonal(coordinate)) {
            return null;
        }
        let coordinates = new Array();
        let direction = this.getDirection(coordinate);
        let cursor = this.plus(this.getDistanceCoordinate(direction, 1));
        while (!cursor.equals(coordinate)) {
            coordinates.push(cursor);
            cursor = cursor.plus(this.getDistanceCoordinate(direction, 1));
        }
        return coordinates;
    }
    equals(coordinate) {
        return this.getRow() === coordinate.getRow() && this.getColumn() === coordinate.getColumn();
    }
    getDiagonalCoordinates(level) {
        let diagonalCoordinates = new Array();
        for (let direction of _DirectionClass__WEBPACK_IMPORTED_MODULE_0__["DirectionClass"].values()) {
            let diagonalCoordinate = this.plus(this.getDistanceCoordinate(direction, level));
            if (diagonalCoordinate !== null && diagonalCoordinate.isWithIn()) {
                diagonalCoordinates.push(diagonalCoordinate);
            }
        }
        return diagonalCoordinates;
    }
    getDiagonalCoordinate(direction, level) {
        return this.plus(this.getDistanceCoordinate(direction, level));
    }
    isBlack() {
        return (this.row + this.column) % 2 != 0;
    }
    isLast() {
        return this.row == Coordinate.UPPER_LIMIT;
    }
    isFirst() {
        return this.row == Coordinate.LOWER_LIMIT;
    }
    getRow() {
        return this.row;
    }
    getColumn() {
        return this.column;
    }
    static getDimension() {
        return Coordinate.DIMENSION;
    }
}
Coordinate.LOWER_LIMIT = 0;
Coordinate.UPPER_LIMIT = 7;
Coordinate.DIMENSION = Coordinate.UPPER_LIMIT + 1;


/***/ }),

/***/ "./src/app/game/models/DirectionClass.ts":
/*!***********************************************!*\
  !*** ./src/app/game/models/DirectionClass.ts ***!
  \***********************************************/
/*! exports provided: DirectionClass, Direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionClass", function() { return DirectionClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
class DirectionClass {
    constructor(horizontalShift, verticalShift) {
        this.horizontalShift = horizontalShift;
        this.verticalShift = verticalShift;
    }
    isOnDirection(coordinate) {
        if (Math.abs(coordinate.getRow()) != Math.abs(coordinate.getColumn()))
            return false;
        if (coordinate.getRow() == 0)
            return false;
        if (this.horizontalShift * coordinate.getRow() < 0)
            return false;
        if (this.verticalShift * coordinate.getColumn() < 0)
            return false;
        return true;
    }
    getDistanceCoordinateRow(distance) {
        return this.horizontalShift * distance;
    }
    getDistanceCoordinateColumn(distance) {
        return this.verticalShift * distance;
    }
    static values() {
        return [DirectionClass.NE, DirectionClass.SE, DirectionClass.SW, DirectionClass.NW];
    }
}
DirectionClass.NE = new DirectionClass(1, 1);
DirectionClass.SE = new DirectionClass(-1, 1);
DirectionClass.SW = new DirectionClass(-1, -1);
DirectionClass.NW = new DirectionClass(1, -1);
var EnumDirection;
(function (EnumDirection) {
    EnumDirection[EnumDirection["NE"] = 0] = "NE";
    EnumDirection[EnumDirection["SE"] = 1] = "SE";
    EnumDirection[EnumDirection["SW"] = 2] = "SW";
    EnumDirection[EnumDirection["NW"] = 3] = "NW";
})(EnumDirection || (EnumDirection = {}));
const Direction = new Map([
    [DirectionClass.NE, EnumDirection.NE],
    [DirectionClass.SE, EnumDirection.SE],
    [DirectionClass.SW, EnumDirection.SW],
    [DirectionClass.NW, EnumDirection.NW]
]);


/***/ }),

/***/ "./src/app/game/models/Draught.ts":
/*!****************************************!*\
  !*** ./src/app/game/models/Draught.ts ***!
  \****************************************/
/*! exports provided: Draught */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draught", function() { return Draught; });
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ "./src/app/game/models/Piece.ts");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error */ "./src/app/game/models/Error.ts");


class Draught extends _Piece__WEBPACK_IMPORTED_MODULE_0__["Piece"] {
    isCorrectDiagonalMovement(pieceAmountBetweenCoordinates, pair, coordinates) {
        let distance = Number(coordinates[pair].getDiagonalDistance(coordinates[pair + 1]));
        if (distance > Draught.MAX_DISTANCE_JUMP && pieceAmountBetweenCoordinates === 1) {
            return _Error__WEBPACK_IMPORTED_MODULE_1__["Error"].TOO_MUCH_DISTANCE_TO_JUMP;
        }
        if (pieceAmountBetweenCoordinates > 1) {
            return _Error__WEBPACK_IMPORTED_MODULE_1__["Error"].TOO_MUCH_EATINGS;
        }
        return null;
    }
    getCode() {
        return Draught.CODES[this.color.valueOf()];
    }
}
Draught.CODES = ['R', 'N'];
Draught.MAX_DISTANCE_JUMP = 2;


/***/ }),

/***/ "./src/app/game/models/Error.ts":
/*!**************************************!*\
  !*** ./src/app/game/models/Error.ts ***!
  \**************************************/
/*! exports provided: Error, getErrorValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorValues", function() { return getErrorValues; });
var Error;
(function (Error) {
    Error[Error["BAD_FORMAT"] = 0] = "BAD_FORMAT";
    Error[Error["EMPTY_ORIGIN"] = 1] = "EMPTY_ORIGIN";
    Error[Error["OPPOSITE_PIECE"] = 2] = "OPPOSITE_PIECE";
    Error[Error["NOT_DIAGONAL"] = 3] = "NOT_DIAGONAL";
    Error[Error["NOT_EMPTY_TARGET"] = 4] = "NOT_EMPTY_TARGET";
    Error[Error["NOT_ADVANCED"] = 5] = "NOT_ADVANCED";
    Error[Error["WITHOUT_EATING"] = 6] = "WITHOUT_EATING";
    Error[Error["COLLEAGUE_EATING"] = 7] = "COLLEAGUE_EATING";
    Error[Error["TOO_MUCH_ADVANCED"] = 8] = "TOO_MUCH_ADVANCED";
    Error[Error["TOO_MUCH_EATINGS"] = 9] = "TOO_MUCH_EATINGS";
    Error[Error["TOO_MUCH_JUMPS"] = 10] = "TOO_MUCH_JUMPS";
    Error[Error["TOO_MUCH_DISTANCE_TO_JUMP"] = 11] = "TOO_MUCH_DISTANCE_TO_JUMP";
})(Error || (Error = {}));
const StringIsNumber = value => isNaN(Number(value)) === false;
function getErrorValues() {
    return Object.keys(Error)
        .filter(StringIsNumber)
        .map(key => Error[key]);
}


/***/ }),

/***/ "./src/app/game/models/Game.ts":
/*!*************************************!*\
  !*** ./src/app/game/models/Game.ts ***!
  \*************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ "./src/app/game/models/Board.ts");
/* harmony import */ var _Turn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Turn */ "./src/app/game/models/Turn.ts");
/* harmony import */ var _Coordinate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Coordinate */ "./src/app/game/models/Coordinate.ts");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Color */ "./src/app/game/models/Color.ts");
/* harmony import */ var _Pawn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pawn */ "./src/app/game/models/Pawn.ts");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Error */ "./src/app/game/models/Error.ts");
/* harmony import */ var _Draught__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Draught */ "./src/app/game/models/Draught.ts");







class Game {
    constructor() {
        this.board = new _Board__WEBPACK_IMPORTED_MODULE_0__["Board"]();
        this.turn = new _Turn__WEBPACK_IMPORTED_MODULE_1__["Turn"]();
        this.reset();
    }
    reset() {
        for (let i = 0; i < _Coordinate__WEBPACK_IMPORTED_MODULE_2__["Coordinate"].getDimension(); i++) {
            for (let j = 0; j < _Coordinate__WEBPACK_IMPORTED_MODULE_2__["Coordinate"].getDimension(); j++) {
                let coordinate = new _Coordinate__WEBPACK_IMPORTED_MODULE_2__["Coordinate"](i, j);
                let color = Object(_Color__WEBPACK_IMPORTED_MODULE_3__["colorGetInitialColor"])(coordinate);
                let piece = null;
                if (color != null) {
                    piece = new _Pawn__WEBPACK_IMPORTED_MODULE_4__["Pawn"](color);
                }
                this.board.put(coordinate, piece);
            }
        }
        if (this.turn.getColor() !== _Color__WEBPACK_IMPORTED_MODULE_3__["Color"].RED) {
            this.turn.change();
        }
    }
    move(coordinates) {
        let error = null;
        let removedCoordinates = new Array();
        let pair = 0;
        do {
            error = this.isCorrectPairMove(pair, coordinates);
            if (error == null) {
                this.pairMove(removedCoordinates, pair, coordinates);
                pair++;
            }
        } while (pair < coordinates.length - 1 && error == null);
        error = this.isCorrectGlobalMove(error, removedCoordinates, coordinates);
        if (error == null) {
            this.turn.change();
        }
        else {
            this.unMovesUntilPair(removedCoordinates, pair, coordinates);
        }
        return error;
    }
    isCorrectPairMove(pair, coordinates) {
        if (coordinates[pair] === null || coordinates[pair + 1] === null) {
            return _Error__WEBPACK_IMPORTED_MODULE_5__["Error"].BAD_FORMAT;
        }
        if (this.board.isEmpty(coordinates[pair])) {
            return _Error__WEBPACK_IMPORTED_MODULE_5__["Error"].EMPTY_ORIGIN;
        }
        if (this.turn.getOppositeColor() === this.board.getColor(coordinates[pair])) {
            return _Error__WEBPACK_IMPORTED_MODULE_5__["Error"].OPPOSITE_PIECE;
        }
        if (!this.board.isEmpty(coordinates[pair + 1])) {
            return _Error__WEBPACK_IMPORTED_MODULE_5__["Error"].NOT_EMPTY_TARGET;
        }
        let betweenDiagonalPieces = this.board.getBetweenDiagonalPieces(coordinates[pair], coordinates[pair + 1]);
        return this.board.getPiece(coordinates[pair]).isCorrectMovement(betweenDiagonalPieces, pair, coordinates);
    }
    pairMove(removedCoordinates, pair, coordinates) {
        let forRemoving = this.getBetweenDiagonalPiece(pair, coordinates);
        if (forRemoving !== null) {
            removedCoordinates.unshift(forRemoving);
            this.board.remove(forRemoving);
        }
        this.board.move(coordinates[pair], coordinates[pair + 1]);
        if (this.board.getPiece(coordinates[pair + 1]).isLimit(coordinates[pair + 1])) {
            let color = this.board.getColor(coordinates[pair + 1]);
            this.board.remove(coordinates[pair + 1]);
            this.board.put(coordinates[pair + 1], new _Draught__WEBPACK_IMPORTED_MODULE_6__["Draught"](color));
        }
    }
    getBetweenDiagonalPiece(pair, coordinates) {
        if (!coordinates[pair].isOnDiagonal(coordinates[pair + 1])) {
            return null;
        }
        let betweenCoordinates = coordinates[pair].getBetweenDiagonalCoordinates(coordinates[pair + 1]);
        if (betweenCoordinates.length === 0) {
            return null;
        }
        for (let coordinate of betweenCoordinates) {
            if (this.getPiece(coordinate) !== null) {
                return coordinate;
            }
        }
        return null;
    }
    isCorrectGlobalMove(error, removedCoordinates, coordinates) {
        if (error !== null) {
            return error;
        }
        if (coordinates.length > 2 && coordinates.length > removedCoordinates.length + 1) {
            return _Error__WEBPACK_IMPORTED_MODULE_5__["Error"].TOO_MUCH_JUMPS;
        }
        return null;
    }
    unMovesUntilPair(removedCoordinates, pair, coordinates) {
        for (let j = pair; j > 0; j--) {
            this.board.move(coordinates[j], coordinates[j - 1]);
        }
        for (let removedPiece of removedCoordinates) {
            this.board.put(removedPiece, new _Pawn__WEBPACK_IMPORTED_MODULE_4__["Pawn"](this.getOppositeTurnColor()));
        }
    }
    isBlocked() {
        for (let coordinate of this.getCoordinatesWithActualColor()) {
            if (!this.isBlockedCoordinate(coordinate)) {
                return false;
            }
        }
        return true;
    }
    getCoordinatesWithActualColor() {
        let coordinates = new Array();
        for (let i = 0; i < this.getDimension(); i++) {
            for (let j = 0; j < this.getDimension(); j++) {
                let coordinate = new _Coordinate__WEBPACK_IMPORTED_MODULE_2__["Coordinate"](i, j);
                let piece = this.getPiece(coordinate);
                if (piece != null && piece.getColor() == this.getTurnColor()) {
                    coordinates.push(coordinate);
                }
            }
        }
        return coordinates;
    }
    isBlockedCoordinate(coordinate) {
        for (let i = 1; i <= 2; i++) {
            for (let target of coordinate.getDiagonalCoordinates(i)) {
                if (this.isCorrectPairMove(0, [coordinate, target]) === null) {
                    return false;
                }
            }
        }
        return true;
    }
    cancel() {
        for (let coordinate of this.getCoordinatesWithActualColor()) {
            this.board.remove(coordinate);
        }
        this.turn.change();
    }
    getColor(coordinate) {
        if (coordinate === null) {
            return null;
        }
        return this.board.getColor(coordinate);
    }
    getTurnColor() {
        return this.turn.getColor();
    }
    resetTurn() {
        this.turn.resetColor();
    }
    getOppositeTurnColor() {
        return this.turn.getOppositeColor();
    }
    getPiece(coordinate) {
        if (coordinate === null) {
            return null;
        }
        return this.board.getPiece(coordinate);
    }
    isMultiJumpPossible(coordinate) {
        if (this.board.getAvailablePiecesToJump(coordinate).length === 0) {
            return false;
        }
        return true;
    }
    getNumberOfPieces(color) {
        return this.board.getNumberOfPieces(color);
    }
    getDimension() {
        return _Coordinate__WEBPACK_IMPORTED_MODULE_2__["Coordinate"].getDimension();
    }
    changeTurnToAllowMultiJump() {
        this.turn.change();
    }
    changePiece(piece, row, column) {
        this.board.setPiece(piece, row, column);
    }
    imprimir() {
        this.board.impresion();
    }
}


/***/ }),

/***/ "./src/app/game/models/Pawn.ts":
/*!*************************************!*\
  !*** ./src/app/game/models/Pawn.ts ***!
  \*************************************/
/*! exports provided: Pawn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pawn", function() { return Pawn; });
/* harmony import */ var _Piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Piece */ "./src/app/game/models/Piece.ts");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error */ "./src/app/game/models/Error.ts");


class Pawn extends _Piece__WEBPACK_IMPORTED_MODULE_0__["Piece"] {
    constructor(color) {
        super(color);
    }
    isCorrectDiagonalMovement(pieceAmountBetweenCoordinates, pair, coordinates) {
        if (!this.isAdvanced(coordinates[pair], coordinates[pair + 1]))
            return _Error__WEBPACK_IMPORTED_MODULE_1__["Error"].NOT_ADVANCED;
        let distance = Number(coordinates[pair].getDiagonalDistance(coordinates[pair + 1]));
        if (distance > Pawn.MAX_DISTANCE)
            return _Error__WEBPACK_IMPORTED_MODULE_1__["Error"].TOO_MUCH_ADVANCED;
        if (distance === Pawn.MAX_DISTANCE && pieceAmountBetweenCoordinates !== 1)
            return _Error__WEBPACK_IMPORTED_MODULE_1__["Error"].WITHOUT_EATING;
        return null;
    }
    getCode() {
        return Pawn.CODES[this.color.valueOf()];
    }
}
Pawn.CODES = ['r', 'n'];
Pawn.MAX_DISTANCE = 2;


/***/ }),

/***/ "./src/app/game/models/Piece.ts":
/*!**************************************!*\
  !*** ./src/app/game/models/Piece.ts ***!
  \**************************************/
/*! exports provided: Piece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Piece", function() { return Piece; });
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ "./src/app/game/models/Color.ts");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error */ "./src/app/game/models/Error.ts");


class Piece {
    constructor(color) {
        if (color !== null)
            this.color = color;
    }
    isCorrectMovement(betweenDiagonalPieces, pair, coordinates) {
        if (coordinates[pair] === null)
            if (coordinates[pair + 1] === null)
                return _Error__WEBPACK_IMPORTED_MODULE_1__["Error"].BAD_FORMAT;
        if (!coordinates[pair].isOnDiagonal(coordinates[pair + 1]))
            return _Error__WEBPACK_IMPORTED_MODULE_1__["Error"].NOT_DIAGONAL;
        for (let piece of betweenDiagonalPieces)
            if (this.color == piece.getColor())
                return _Error__WEBPACK_IMPORTED_MODULE_1__["Error"].COLLEAGUE_EATING;
        return this.isCorrectDiagonalMovement(betweenDiagonalPieces.length, pair, coordinates);
    }
    isAdvanced(origin, target) {
        if (origin === null || target === null)
            return false;
        let difference = origin.getRow() - target.getRow();
        if (this.color == _Color__WEBPACK_IMPORTED_MODULE_0__["Color"].RED)
            return difference > 0;
        return difference < 0;
    }
    isLimit(coordinate) {
        return coordinate.isFirst() && this.getColor() === _Color__WEBPACK_IMPORTED_MODULE_0__["Color"].RED
            || coordinate.isLast() && this.getColor() === _Color__WEBPACK_IMPORTED_MODULE_0__["Color"].BLACK;
    }
    getColor() {
        return this.color;
    }
}


/***/ }),

/***/ "./src/app/game/models/Turn.ts":
/*!*************************************!*\
  !*** ./src/app/game/models/Turn.ts ***!
  \*************************************/
/*! exports provided: Turn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Turn", function() { return Turn; });
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ "./src/app/game/models/Color.ts");

class Turn {
    constructor() {
        this.color = _Color__WEBPACK_IMPORTED_MODULE_0__["Color"].RED;
    }
    change() {
        this.color = this.getOppositeColor();
    }
    getOppositeColor() {
        return Object(_Color__WEBPACK_IMPORTED_MODULE_0__["getColorValue"])(Number(this.color.valueOf() + 1) % 2);
    }
    getColor() {
        return this.color;
    }
    resetColor() {
        this.color = _Color__WEBPACK_IMPORTED_MODULE_0__["Color"].RED;
    }
}


/***/ }),

/***/ "./src/app/game/models/mySquare.ts":
/*!*****************************************!*\
  !*** ./src/app/game/models/mySquare.ts ***!
  \*****************************************/
/*! exports provided: MySquare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySquare", function() { return MySquare; });
class MySquare {
    constructor(piece, row, column) {
        this.row = row;
        this.column = column;
        this.piece = piece;
        this.selected = false;
    }
    getRow() {
        return this.row;
    }
    getColumn() {
        return this.column;
    }
    getPiece() {
        return this.piece;
    }
    getPieceType() {
        if (this.piece === null) {
            return '';
        }
        return this.piece.getCode();
    }
    setSelected(value) {
        this.selected = value;
    }
    isSelected() {
        return this.selected;
    }
    clearPiece() {
        this.piece = null;
    }
    put(piece) {
        this.piece = piece;
    }
    setPiece(piece) {
        this.piece = piece;
    }
}


/***/ }),

/***/ "./src/app/playGame/openGame.component.ts":
/*!************************************************!*\
  !*** ./src/app/playGame/openGame.component.ts ***!
  \************************************************/
/*! exports provided: OpenGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenGame", function() { return OpenGame; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _game_controllers_dialog_DialogGameBoard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/controllers/dialog/DialogGameBoard.component */ "./src/app/game/controllers/dialog/DialogGameBoard.component.ts");
/* harmony import */ var _services_draughts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/draughts.service */ "./src/app/services/draughts.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function OpenGame_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpenGame_tr_14_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const game_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectGame(game_r1.game_name, game_r1.board); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r1.game_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", game_r1.date, "");
} }
class OpenGame {
    constructor(draughtsService, dialog) {
        this.draughtsService = draughtsService;
        this.dialog = dialog;
        this.userId = this.draughtsService.parseJwt()['_id'];
        this.draughtsService.getAllByUser(this.userId).subscribe(data => {
            this.games = data;
        });
    }
    selectGame(gameName, board) {
        const dialogRef = this.dialog.open(_game_controllers_dialog_DialogGameBoard_component__WEBPACK_IMPORTED_MODULE_1__["DialogGameBoard"], {
            height: '600px',
            width: '1500px',
            data: { gameName: gameName, board: board }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.draughtsService.getAllByUser(this.userId).subscribe(data => {
                this.games = data;
            });
        });
    }
}
OpenGame.ɵfac = function OpenGame_Factory(t) { return new (t || OpenGame)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_draughts_service__WEBPACK_IMPORTED_MODULE_2__["DraughtsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
OpenGame.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpenGame, selectors: [["app-open-game"]], decls: 15, vars: 1, consts: [[3, "click"], ["scope", "col"], [4, "ngFor", "ngForOf"]], template: function OpenGame_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New game!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpenGame_Template_button_click_3_listener() { return ctx.selectGame(null, null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Games to Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Game Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OpenGame_tr_14_Template, 8, 2, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.games);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenGame, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-open-game',
                templateUrl: './openGame.component.html'
            }]
    }], function () { return [{ type: _services_draughts_service__WEBPACK_IMPORTED_MODULE_2__["DraughtsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/draughts.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/draughts.service.ts ***!
  \**********************************************/
/*! exports provided: DraughtsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraughtsService", function() { return DraughtsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");





class DraughtsService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    get() {
        return this.http.get(DraughtsService.API_END_POINT + '/draughts');
    }
    getAllByUser(userId) {
        return this.http.get(DraughtsService.API_END_POINT + '/draughts/user/' + userId);
    }
    post(game_name, board, turn) {
        const creator = this.parseJwt()['_id'];
        const game = '{' +
            '"game_name": "' + game_name + '", ' +
            '"board": "' + board + '", ' +
            '"creator": "' + creator + '", ' +
            '"turn":"' + turn + '"}';
        return this.http.post(DraughtsService.API_END_POINT + '/draughts', JSON.parse(game));
    }
    put(game_name, board, turn) {
        const game = '{' +
            '"board": "' + board + '", ' +
            '"turn":"' + turn + '"}';
        return this.http.put(DraughtsService.API_END_POINT + '/draughts/' + game_name, JSON.parse(game));
    }
    parseJwt() {
        const token = this.userService.getToken();
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }
}
DraughtsService.API_END_POINT = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API;
DraughtsService.ɵfac = function DraughtsService_Factory(t) { return new (t || DraughtsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
DraughtsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DraughtsService, factory: DraughtsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DraughtsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





class UserService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get(UserService.API_END_POINT + '/users');
    }
    login(email, password) {
        const user = '{' +
            '"email": "' + email + '", ' +
            '"password":"' + password + '"}';
        return this.http.post(UserService.API_END_POINT + '/users/login', JSON.parse(user));
    }
    getUserProfile() {
        return this.http.get(UserService.API_END_POINT + '/users/profile', {
            headers: this.getHeaders()
        });
    }
    isUserActive() {
        if (window.sessionStorage.getItem('token') !== null) {
            return true;
        }
        else {
            return false;
        }
    }
    registration(username, email, password) {
        const user = '{' +
            '"username": "' + username + '", ' +
            '"email": "' + email + '", ' +
            '"password":"' + password + '"}';
        return this.http.post(UserService.API_END_POINT + '/users', JSON.parse(user));
    }
    saveToken(token) {
        window.sessionStorage.setItem('token', token);
    }
    getToken() {
        return window.sessionStorage.getItem('token');
    }
    deleteUser() {
        return this.http.delete(UserService.API_END_POINT + '/users/profile', {
            headers: this.getHeaders()
        });
    }
    getHeaders() {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('auth-token', this.getToken());
    }
    updateUser(username) {
        const user = '{' +
            '"username": "' + username + '"}';
        return this.http.put(UserService.API_END_POINT + '/users/profile', JSON.parse(user), {
            headers: this.getHeaders()
        });
    }
    logout() {
        window.sessionStorage.removeItem('token');
        alert('Thanks for playing Draughts');
    }
}
UserService.API_END_POINT = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API;
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.email = '';
        this.password = '';
        this.message = '';
    }
    login() {
        this.userService.login(this.email, this.password).subscribe(data => {
            this.userService.saveToken(data['token']);
            this.router.navigate(['/']);
        }, error => {
            this.message = error.statusText;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-user-login"]], decls: 9, vars: 3, consts: [["matInput", "", "type", "email", "placeholder", "email", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "placeholder", "password", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_2_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_4_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_7_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function ProfileComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
} }
function ProfileComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Are you sure?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_16_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.undo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_div_16_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userId = '';
        this.username = '';
        this.email = '';
        this.confirmDelete = false;
        this.message = '';
    }
    ngOnInit() {
        this.userService.getUserProfile().subscribe(data => {
            this.user = data;
            this.username = this.user.username;
            this.email = this.user.email;
        });
    }
    updateProfile() {
        this.userService.updateUser(this.username).subscribe(data => {
            this.user = data;
            this.message = '';
        }, error => {
            this.message = error.statusText;
        });
    }
    undo() {
        this.confirmDelete = false;
    }
    deleteUser() {
        this.confirmDelete = true;
    }
    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
    deleteAccount() {
        this.userService.deleteUser().subscribe(data => {
            alert('Account deleted');
            this.router.navigate(['']);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-user-profile"]], decls: 21, vars: 5, consts: [["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "email", "disabled", "", 3, "value"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_6_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileComponent_p_11_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_12_listener() { return ctx.updateProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Update profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_14_listener() { return ctx.deleteUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_div_16_Template, 7, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_19_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user.username, "'s Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmDelete);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/users/register/registration.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/register/registration.component.ts ***!
  \**********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class RegistrationComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.username = '';
        this.email = '';
        this.password = '';
        this.repetedPassword = '';
    }
    register() {
        if (this.password === this.repetedPassword)
            this.userService.registration(this.username, this.email, this.password).subscribe(data => {
                this.router.navigate(['']);
            });
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-user-registration"]], decls: 11, vars: 4, consts: [["matInput", "", "type", "text", "placeholder", "username", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "email", "placeholder", "email", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "placeholder", "password", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "placeholder", "repit password", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_2_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_4_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_6_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_8_listener($event) { return ctx.repetedPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_9_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.repetedPassword);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvcmVnaXN0ZXIvcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3JlZ2lzdGVyL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function WelcomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WelcomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Play!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.userService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log out!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WelcomeComponent {
    constructor(userService) {
        this.userService = userService;
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 4, vars: 2, consts: [[4, "ngIf"], ["mat-raised-button", "", "routerLink", "/signup"], [1, "signup"], ["mat-raised-button", "", "routerLink", "/login"], [1, "login"], ["mat-raised-button", "", "routerLink", "/playGame"], [1, "openGame"], ["mat-raised-button", "", "routerLink", "/", 3, "click"], [1, "logout"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to draughts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WelcomeComponent_div_2_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WelcomeComponent_div_3_Template, 7, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userService.isUserActive());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.isUserActive());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html'
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


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
const environment = {
    production: false,
    API: 'http://localhost:4600'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Laura\Desktop\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map