webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>{{title}}</h1>\n  <p>{{text}}</p>\n</div>\n<app-comment-list></app-comment-list>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'QuickStart';
        this.text = 'Good tools make application development quicker and easier to maintain than if you did everything by hand.' +
            'The Angular CLI is a command line interface tool that can create a project, add files, ' +
            'and perform a variety of ongoing development tasks such as testing, bundling, and deployment.' +
            'The goal in this guide is to build and run a simple Angular application in TypeScript, ' +
            'using the Angular CLI while adhering to the Style Guide recommendations that benefit every Angular project.' +
            'By the end of the chapter, you\'ll have a basic understanding of development with the CLI and' +
            'a foundation for both these documentation samples and for real world applications.';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comment_list_component__ = __webpack_require__("./src/app/comment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comment_form_component__ = __webpack_require__("./src/app/comment-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comment_component__ = __webpack_require__("./src/app/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comment_service__ = __webpack_require__("./src/app/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__comment_list_component__["a" /* CommentListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__comment_form_component__["a" /* CommentFormComponent */],
                __WEBPACK_IMPORTED_MODULE_6__comment_component__["a" /* CommentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__comment_service__["a" /* CommentService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comment-form.component.css":
/***/ (function(module, exports) {

module.exports = ".comment-form .row {\r\n  padding: 5px 5px;\r\n}\r\n\r\n.comment-form .row div {\r\n  display: inline-block;\r\n}\r\n\r\n.comment-form .col1 {\r\n  width: 200px;\r\n  vertical-align: top;\r\n}\r\n\r\n.comment-form .input-name {\r\n  width: 200px;\r\n}\r\n\r\n.comment-form .input-mail {\r\n  width: 200px;\r\n}\r\n\r\n.comment-form .input-text {\r\n  width: 400px;\r\n  height: 100px;\r\n  resize: none;\r\n}\r\n\r\n.comment-form .add-button {\r\n  margin-left: 205px;\r\n  background-color: #075391;\r\n  outline: none;\r\n  border: 1px solid black;\r\n  color: white;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border: 1px solid black;\r\n  border-left: 5px solid green;\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border: 1px solid black;\r\n  border-left: 5px solid red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/comment-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <fieldset>\r\n    <legend>Добавить комментарий</legend>\r\n    <div class=\"comment-form\">\r\n      <div class=\"row\">\r\n        <div class=\"col1\">Имя</div>\r\n        <div style=\"display: inline\">\r\n          <input class=\"input-name\" [(ngModel)]=\"authorName\" required />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col1\">E-mail</div>\r\n        <div>\r\n          <input class=\"input-mail\" [(ngModel)]=\"authorEmail\" required email/>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col1\">Текст комментария</div>\r\n        <div>\r\n          <textarea class=\"input-text\" [(ngModel)]=\"authorText\" required></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"add-button\" (click)=\"addComment()\">Добавить комментарий</button>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/comment-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_service__ = __webpack_require__("./src/app/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent(commentService) {
        this.commentService = commentService;
        this.commentAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    CommentFormComponent.prototype.addComment = function () {
        if (!this.authorName || !this.authorEmail || !this.authorText) {
            return;
        }
        this.commentService.addComment(this.authorName, this.authorEmail, this.authorText, this.parentId);
        this.authorName = this.authorEmail = this.authorText = '';
        this.commentAdd.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], CommentFormComponent.prototype, "parentId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], CommentFormComponent.prototype, "commentAdd", void 0);
    CommentFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-comment-form',
            template: __webpack_require__("./src/app/comment-form.component.html"),
            styles: [__webpack_require__("./src/app/comment-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */]])
    ], CommentFormComponent);
    return CommentFormComponent;
}());



/***/ }),

/***/ "./src/app/comment-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comment-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Комментарии:</h2>\r\n<app-comment *ngFor=\"let comment of comments\" [comment]=\"comment\" (commentAdd)=\"getComments()\" [(formId)]=\"formId\" ></app-comment>\r\n<app-comment-form *ngIf=\"formId === 0\" [parentId]=\"0\" (commentAdd)=\"getComments()\"></app-comment-form>\r\n"

/***/ }),

/***/ "./src/app/comment-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_service__ = __webpack_require__("./src/app/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentListComponent = /** @class */ (function () {
    function CommentListComponent(commentService) {
        this.commentService = commentService;
        this.formIdChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.comments = [];
        this.formId = 0;
    }
    CommentListComponent.prototype.getComments = function () {
        var _this = this;
        this.commentService
            .getRootComments()
            .then(function (comments) { return _this.comments = comments; });
    };
    CommentListComponent.prototype.ngOnInit = function () {
        this.getComments();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], CommentListComponent.prototype, "formId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], CommentListComponent.prototype, "formIdChange", void 0);
    CommentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-comment-list',
            template: __webpack_require__("./src/app/comment-list.component.html"),
            styles: [__webpack_require__("./src/app/comment-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */]])
    ], CommentListComponent);
    return CommentListComponent;
}());



/***/ }),

/***/ "./src/app/comment.component.css":
/***/ (function(module, exports) {

module.exports = ".comment {\r\n  min-width: 700px;\r\n}\r\n\r\n.comment img {\r\n  float: left;\r\n  margin: 0 5px 5px 0;\r\n}\r\n\r\n.header {\r\n  margin: 10px 0;\r\n  vertical-align: center;\r\n}\r\n\r\n.header a {\r\n  float: right;\r\n  color: #075391;\r\n  text-decoration: underline;\r\n  cursor: default;\r\n  margin: 0 5px;\r\n}\r\n\r\n.header .author-name {\r\n  color: #075391;\r\n  margin: 0 5px;\r\n  text-decoration: underline;\r\n}\r\n\r\n.header .time-period {\r\n  font-size: small;\r\n  margin: 0 5px;\r\n}\r\n\r\n.header .rating {\r\n  background-color: #dedede;\r\n  display: inline-block;\r\n  border: 1px solid black;\r\n  margin: 0 5px;\r\n}\r\n\r\n.header .rating button {\r\n  width: 25px;\r\n  border-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  outline: none;\r\n  background-color: inherit;\r\n}\r\n\r\n.header .rating div {\r\n  width: 50px;\r\n  border-left: 1px solid black;\r\n  border-right: 1px solid black;\r\n  background-color: inherit;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.blocker {\r\n  cursor: default;\r\n  background-color: gray;\r\n  opacity: 0.5;\r\n  padding: 5px 0;\r\n  margin: 5px 0;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"comment.rating < -10 && !isShowComment\" class=\"blocker\" (click)=\"isShowComment = true\"\r\n     [style.margin-left.px]=\"comment.level === 0 ? 0 : 100\">\r\n  Показать комментарий\r\n</div>\r\n\r\n<div *ngIf=\"comment.rating >= -10 || isShowComment\" class=\"comment\" [style.margin-left.px]=\"comment.level === 0 ? 0 : 100\" >\r\n  <img src=\"./assets/user.png\"/>\r\n  <div class=\"header\">\r\n    <span class=\"author-name\">{{comment.name}}</span>\r\n    <span class=\"time-period\">{{getTimePeriod()}}</span>\r\n    <div class=\"rating\">\r\n      <button (click)=\"dec()\">-</button>\r\n      <div>{{comment.rating > 0 ? '+' + comment.rating: comment.rating}}</div>\r\n      <button (click)=\"inc()\">+</button>\r\n    </div>\r\n    <a *ngIf=\"comment.level < 2\" (click)=\"setFormId(comment.timestamp)\">Ответить</a>\r\n    <a *ngIf=\"comment.children.length > 0\" (click)=\"isShowAnswers=!isShowAnswers\">\r\n      {{isShowAnswers ? 'Скрыть ответы' : 'Показать ответы'}}\r\n    </a>\r\n  </div>\r\n\r\n  <div>{{comment.text}}</div>\r\n  <br clear=\"left\">\r\n\r\n  <app-comment-form *ngIf=\"comment.timestamp === formId\" [parentId]=\"comment.timestamp\" (commentAdd)=\"onCommentAdd()\"></app-comment-form>\r\n  <div [style.display]=\"isShowAnswers ? 'block' : 'none'\">\r\n    <app-comment *ngFor=\"let comment of comment.children\" [comment]=\"comment\" [formId]=\"formId\" (formIdChange)=\"setFormId($event)\">\r\n    </app-comment>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment__ = __webpack_require__("./src/app/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment_service__ = __webpack_require__("./src/app/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentComponent = /** @class */ (function () {
    function CommentComponent(commentService) {
        this.commentService = commentService;
        this.commentAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.formIdChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.isShowComment = true;
        this.isShowAnswers = true;
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.isShowComment = (this.comment.rating >= -10);
        this.comment.children.sort(function (a, b) {
            return a.timestamp - b.timestamp;
        });
    };
    CommentComponent.prototype.dec = function () {
        this.comment.rating -= 1;
        this.commentService.updateRating(this.comment.timestamp, this.comment.rating);
        this.isShowComment = (this.comment.rating >= -10);
    };
    CommentComponent.prototype.inc = function () {
        this.comment.rating += 1;
        this.commentService.updateRating(this.comment.timestamp, this.comment.rating);
        this.isShowComment = (this.comment.rating >= -10);
    };
    CommentComponent.prototype.convertMS = function (ms) {
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        return { d: d, h: h, m: m, s: s };
    };
    CommentComponent.prototype.getTimePeriod = function () {
        var period = this.convertMS(Date.now() - this.comment.timestamp);
        var result = '';
        if (period.m === 0) {
            result = 'Меньше минуты назад';
        }
        else if (period.m < 60) {
            result = period.m + ' мин. назад';
        }
        else if (period.m < (60 * 12)) {
            result = period.h + ' час(а) назад';
        }
        else if (period.m > (60 * 12)) {
            result = period.d + ' дня назад';
        }
        return result;
    };
    CommentComponent.prototype.onCommentAdd = function () {
        this.setFormId(0);
        this.commentAdd.emit();
    };
    CommentComponent.prototype.setFormId = function (id) {
        this.formId = id;
        this.formIdChange.emit(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__comment__["a" /* Comment */])
    ], CommentComponent.prototype, "comment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "commentAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], CommentComponent.prototype, "formId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "formIdChange", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-comment',
            template: __webpack_require__("./src/app/comment.component.html"),
            styles: [__webpack_require__("./src/app/comment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__comment_service__["a" /* CommentService */]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommentService = /** @class */ (function () {
    function CommentService() {
        this.comments = [];
    }
    CommentService.prototype.getRootComments = function () {
        this.comments.sort(function (a, b) { return a.timestamp - b.timestamp; });
        return Promise.resolve(this.comments.filter(function (item) { return item.level === 0; }));
    };
    CommentService.prototype.addComment = function (name, email, text, parentId) {
        var comment = {
            timestamp: Date.now(),
            name: name,
            email: email,
            text: text,
            level: 0,
            rating: 0,
            children: []
        };
        if (parentId !== 0) {
            for (var i = 0; i < this.comments.length; i += 1) {
                if (parentId === this.comments[i].timestamp) {
                    comment.level = this.comments[i].level + 1;
                    this.comments[i].children.push(comment);
                    break;
                }
            }
            this.comments.push(comment);
        }
        else {
            this.comments.push(comment);
        }
    };
    CommentService.prototype.updateRating = function (id, rating) {
        for (var i = 0; i < this.comments.length; i += 1) {
            if (id === this.comments[i].timestamp) {
                this.comments[i].rating = rating;
                break;
            }
        }
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map