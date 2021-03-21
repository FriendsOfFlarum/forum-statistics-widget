<<<<<<< HEAD
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/ForumStatisticsWidget.js":
/*!*******************************************************!*\
  !*** ./src/forum/components/ForumStatisticsWidget.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForumStatisticsWidget; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/formatNumber */ "flarum/common/utils/formatNumber");
/* harmony import */ var flarum_common_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__);








var translationPrefix = 'fof-forum-statistics-widget.forum.navbar.';
var attributePrefix = 'fof-forum-statistics-widget.';

var ForumStatisticsWidget = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ForumStatisticsWidget, _Component);

  function ForumStatisticsWidget() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ForumStatisticsWidget.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _Component.prototype.oninit.call(this, vnode);

    var lastUserId = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute(attributePrefix + 'lastUserId');

    if (lastUserId) {
      this.loading = true;
      flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.store.find('users', lastUserId).then(function (user) {
        _this.user = user;
        _this.loading = false;
        m.redraw();
      });
    }
  };

  _proto.view = function view() {
    if (this.loading) {
      return m(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default.a, null);
    }

    var items = this.items().toArray();
    if (items.length === 0) return;
    return m("div", {
      "class": "ForumStatistics containerNarrow"
    }, m("div", {
      "class": "row"
    }, m("h2", null, m("i", {
      "class": "fas fa-chart-bar"
    }), " ", flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'widget_title')), m("div", null, m("ul", {
      id: "ForumStatisticsList"
    }, items))));
  };

  _proto.items = function items() {
    var items = new flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7___default.a();
    var discussionsCount = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute(attributePrefix + 'discussionsCount');
    var postsCount = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute(attributePrefix + 'postsCount');
    var usersCount = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute(attributePrefix + 'usersCount');
    var lastUserId = flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute(attributePrefix + 'lastUserId');

    if (discussionsCount) {
      items.add('discussions_count', m("li", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'discussions_count', {
        discussionsCount: flarum_common_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4___default()(discussionsCount)
      })));
    }

    if (postsCount) {
      items.add('posts_count', m("li", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'posts_count', {
        postsCount: flarum_common_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4___default()(postsCount)
      })));
    }

    if (usersCount) {
      items.add('users_count', m("li", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'users_count', {
        usersCount: flarum_common_utils_formatNumber__WEBPACK_IMPORTED_MODULE_4___default()(usersCount)
      })));
    }

    if (lastUserId) {
      items.add('latest_member', m("li", null, flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans(translationPrefix + 'latest_member'), m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: flarum_common_app__WEBPACK_IMPORTED_MODULE_1___default.a.route.user(this.user)
      }, m("strong", null, " ", flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(this.user)))));
    }

    return items;
  };

  return ForumStatisticsWidget;
}(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ForumStatisticsWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ForumStatisticsWidget */ "./src/forum/components/ForumStatisticsWidget.js");



app.initializers.add('fof/forum-statistics-widget', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'sidebarItems', function (items) {
    items.add('forumStatisticsWidget', _components_ForumStatisticsWidget__WEBPACK_IMPORTED_MODULE_2__["default"].component(), app.forum.attribute('fof-forum-statistics-widget.widget_order'));
  });
});

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/formatNumber":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/utils/formatNumber']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/utils/formatNumber'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ })

/******/ });
=======
module.exports=function(t){var o={};function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=t,r.c=o,r.d=function(t,o,n){r.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var e in t)r.d(n,e,function(o){return t[o]}.bind(null,e));return n},r.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="",r(r.s=8)}([function(t,o){t.exports=flarum.core.compat["common/app"]},function(t,o){t.exports=flarum.core.compat["common/utils/formatNumber"]},function(t,o){t.exports=flarum.core.compat["common/extend"]},function(t,o){t.exports=flarum.core.compat["forum/components/IndexPage"]},function(t,o){t.exports=flarum.core.compat["common/Component"]},function(t,o){t.exports=flarum.core.compat["common/helpers/username"]},function(t,o){t.exports=flarum.core.compat["common/components/Link"]},function(t,o){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,o,r){"use strict";r.r(o);var n=r(2),e=r(3),u=r.n(e);function a(t,o){return(a=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}var i=r(0),s=r.n(i),c=r(4),f=r.n(c),l=r(5),p=r.n(l),d=r(1),b=r.n(d),v=r(6),y=r.n(v),g=r(7),x=r.n(g),_="fof-forum-statistics-widget.forum.navbar.",h="fof-forum-statistics-widget.",w=function(t){var o,r;function n(){return t.apply(this,arguments)||this}r=t,(o=n).prototype=Object.create(r.prototype),o.prototype.constructor=o,a(o,r);var e=n.prototype;return e.oninit=function(o){var r=this;t.prototype.oninit.call(this,o),this.loading=!0;var n=s.a.forum.attribute(h+"lastUserId");s.a.store.find("users",n).then((function(t){r.user=t,r.loading=!1,m.redraw()}))},e.view=function(){if(this.loading)return m(x.a,null);var t=b()(s.a.forum.attribute(h+"discussionsCount")),o=b()(s.a.forum.attribute(h+"postsCount")),r=b()(s.a.forum.attribute(h+"usersCount"));return m("div",{class:"ForumStatistics containerNarrow"},m("div",{class:"row"},m("h2",null,m("i",{class:"fas fa-chart-bar"})," ",s.a.translator.trans(_+"widget_title")),m("div",null,m("ul",{id:"ForumStatisticsList"},m("li",null,s.a.translator.trans(_+"discussions_count",{discussionsCount:t})),m("li",null,s.a.translator.trans(_+"posts_count",{postsCount:o})),m("li",null,s.a.translator.trans(_+"users_count",{usersCount:r})),m("li",null,s.a.translator.trans(_+"latest_member"),m(y.a,{href:s.a.route.user(this.user)},m("strong",null," ",p()(this.user))))))))},n}(f.a);app.initializers.add("fof/forum-statistics-widget",(function(){Object(n.extend)(u.a.prototype,"sidebarItems",(function(t){t.add("forumStatisticsWidget",w.component(),app.forum.attribute("fof-forum-statistics-widget.widget_order"))}))}))}]);
>>>>>>> 7c951e4da078e805a3ed6c7295ba50af0609b16c
//# sourceMappingURL=forum.js.map