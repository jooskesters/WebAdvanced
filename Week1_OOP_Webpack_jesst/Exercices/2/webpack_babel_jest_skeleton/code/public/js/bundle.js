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
eval("\n\nvar _Course = __webpack_require__(/*! ./school/Course */ \"./src/js/school/Course.js\");\n\nvar _Course2 = _interopRequireDefault(_Course);\n\nvar _Student = __webpack_require__(/*! ./school/Student */ \"./src/js/school/Student.js\");\n\nvar _Student2 = _interopRequireDefault(_Student);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.addEventListener(\"load\", function () {\n\tvar student = new _Student2.default(1);\n\tvar course = new _Course2.default(101);\n\tcourse.completed = true;\n\tcourse.grade = 12;\n\tstudent.addCourse(course);\n\tvar course2 = new _Course2.default(111);\n\tcourse2.completed = true;\n\tcourse2.grade = 13;\n\tstudent.addCourse(course2);\n\tvar course3 = new _Course2.default(121);\n\tstudent.addCourse(course3);\n\tvar grade = student.calculateGrade();\n\tdocument.getElementById(\"output\").appendChild(document.createTextNode(grade));\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/school/Course.js":
/*!*********************************!*\
  !*** ./src/js/school/Course.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// naam: joos kesters\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Course = function () {\n    function Course(id) {\n        _classCallCheck(this, Course);\n\n        if (isNaN(id)) {\n            throw new Error(\"Parameter is not a number!\");\n        } else {\n            this._id = id;\n            this._grade = 0;\n            this._completed = false;\n        }\n    }\n\n    _createClass(Course, [{\n        key: \"setGrade\",\n        value: function setGrade(grade) {\n            this._grade = grade;\n        }\n    }, {\n        key: \"setCompleted\",\n        value: function setCompleted(completed) {\n            this._completed = completed;\n        }\n    }, {\n        key: \"setId\",\n        set: function set(id) {\n            this._id = id;\n        }\n    }, {\n        key: \"getId\",\n        get: function get() {\n            return this._id;\n        }\n    }, {\n        key: \"getGrade\",\n        get: function get() {\n            return this._grade;\n        }\n    }, {\n        key: \"getCompleted\",\n        get: function get() {\n            return this._completed;\n        }\n    }]);\n\n    return Course;\n}();\n\nexports.default = Course;\n\n//# sourceURL=webpack:///./src/js/school/Course.js?");

/***/ }),

/***/ "./src/js/school/Student.js":
/*!**********************************!*\
  !*** ./src/js/school/Student.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Course = __webpack_require__(/*! ./Course */ \"./src/js/school/Course.js\");\n\nvar _Course2 = _interopRequireDefault(_Course);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// naam: joos kesters\nvar Student = function () {\n    function Student(id) {\n        _classCallCheck(this, Student);\n\n        if (isNaN(id)) {\n            throw new Error(\"Parameter is not a number!\");\n        } else {\n            this._id = id;\n            this._courses = [];\n        }\n    }\n\n    _createClass(Student, [{\n        key: \"addCourse\",\n        value: function addCourse(course) {\n            if (!course instanceof _Course2.default) {\n                throw new Error(\"input variable is not of type course\");\n            } else {\n                this._courses.push(course);\n            }\n        }\n    }, {\n        key: \"calculateGrade\",\n        value: function calculateGrade() {\n            var total = 0;\n            var completes = 0;\n            for (var i = 0; i < this._courses.length; i++) {\n                var course = this._courses[i];\n                if (course.getCompleted) {\n                    total += course.getGrade;\n                    completes += 1;\n                }\n            }\n            if (completes === 0) {\n                throw new Error('there were no completed courses');\n            }\n            return total / completes;\n        }\n    }]);\n\n    return Student;\n}();\n\nexports.default = Student;\n\n//# sourceURL=webpack:///./src/js/school/Student.js?");

/***/ })

/******/ });