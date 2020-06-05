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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _User = __webpack_require__(/*! ./users/User */ \"./src/js/users/User.js\");\n\nvar _User2 = _interopRequireDefault(_User);\n\nvar _Item = __webpack_require__(/*! ./shopping/Item */ \"./src/js/shopping/Item.js\");\n\nvar _Item2 = _interopRequireDefault(_Item);\n\nvar _ShoppingCart = __webpack_require__(/*! ./shopping/ShoppingCart */ \"./src/js/shopping/ShoppingCart.js\");\n\nvar _ShoppingCart2 = _interopRequireDefault(_ShoppingCart);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.addEventListener('load', function (event) {\n    var user = new _User2.default('geert');\n    var item = new _Item2.default(1, 2.333);\n    var item2 = new _Item2.default(2, 3.32);\n    var shoppingCart = new _ShoppingCart2.default(user);\n    shoppingCart.addItem(item);\n    shoppingCart.addItem(item);\n    shoppingCart.addItem(item2);\n\n    var preElement = document.createElement(\"pre\");\n    var textNode = document.createTextNode(shoppingCart.toString());\n\n    preElement.appendChild(textNode);\n\n    document.getElementById('output').appendChild(preElement);\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/shopping/Item.js":
/*!*********************************!*\
  !*** ./src/js/shopping/Item.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// naam: joos kesters\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Item = function () {\n    function Item(id, price) {\n        _classCallCheck(this, Item);\n\n        this._id = id;\n        this._price = price;\n    }\n\n    _createClass(Item, [{\n        key: \"toString\",\n        value: function toString() {\n            return this._id + \"_\" + this._price;\n        }\n    }, {\n        key: \"price\",\n        get: function get() {\n            return this._price;\n        }\n    }]);\n\n    return Item;\n}();\n\nexports.default = Item;\n\n//# sourceURL=webpack:///./src/js/shopping/Item.js?");

/***/ }),

/***/ "./src/js/shopping/ShoppingCart.js":
/*!*****************************************!*\
  !*** ./src/js/shopping/ShoppingCart.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// naam: joos kesters\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _User = __webpack_require__(/*! ../users/User */ \"./src/js/users/User.js\");\n\nvar _User2 = _interopRequireDefault(_User);\n\nvar _Item = __webpack_require__(/*! ../shopping/Item */ \"./src/js/shopping/Item.js\");\n\nvar _Item2 = _interopRequireDefault(_Item);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ShoppingCart = function () {\n    function ShoppingCart(user) {\n        _classCallCheck(this, ShoppingCart);\n\n        if (!user instanceof _User2.default) throw new Error(\"name was not a string or has a to short length\");else {\n            this._user = user;\n            this._items = [];\n        }\n    }\n\n    _createClass(ShoppingCart, [{\n        key: 'addItem',\n        value: function addItem(item) {\n            if (!item instanceof _Item2.default) {\n                throw new Error(\"the item was not of type item\");\n            } else {\n                this._items.push(item);\n            }\n        }\n    }, {\n        key: 'toString',\n        value: function toString() {\n            var itemsString = '';\n            for (var i = 0; i < this._items.length; i++) {\n                if (i == this._items.length - 1) itemsString += this._items[i].toString();else itemsString += this._items[i].toString() + \",\";\n            }\n\n            return '(' + this._user.toString() + ')[' + itemsString + ']';\n        }\n    }, {\n        key: 'calculatePrice',\n        get: function get() {\n            var price = 0;\n            for (var i = 0; i < this._items.length; i++) {\n                price += this._items[i].price;\n            }\n            return price;\n        }\n    }]);\n\n    return ShoppingCart;\n}();\n\nexports.default = ShoppingCart;\n\n//# sourceURL=webpack:///./src/js/shopping/ShoppingCart.js?");

/***/ }),

/***/ "./src/js/users/User.js":
/*!******************************!*\
  !*** ./src/js/users/User.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// naam: joos kesters\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar User = function () {\n    function User(name) {\n        _classCallCheck(this, User);\n\n        if (!(typeof name === \"undefined\" ? \"undefined\" : _typeof(name)) == \"string\" || name.length < 3) throw new Error(\"name was not a string or has a to short length\");else {\n            this._name = name;\n        }\n    }\n\n    _createClass(User, [{\n        key: \"toString\",\n        value: function toString() {\n            return \"(\" + this._name + \")\";\n        }\n    }]);\n\n    return User;\n}();\n\nexports.default = User;\n\n//# sourceURL=webpack:///./src/js/users/User.js?");

/***/ })

/******/ });