module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./antd.css":
/*!******************!*\
  !*** ./antd.css ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_redux_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../react-redux/index */ "./react-redux/index.js");
/* harmony import */ var _antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../antd.css */ "./antd.css");
/* harmony import */ var _antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antd_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Documents\\Full stack project\\findpairgame-Next-redux\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const MyApp = ({
  Component,
  pageProps
}) => __jsx(Component, _extends({}, pageProps, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 45
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (_react_redux_index__WEBPACK_IMPORTED_MODULE_1__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./react-redux/constants/action-types.js":
/*!***********************************************!*\
  !*** ./react-redux/constants/action-types.js ***!
  \***********************************************/
/*! exports provided: CHANGE_NUMBER_OF_PAIRS, START_GAME, SHUFFLE, LIMIT_CARDS, DUPLICATE_CARDS, RESET_CARDS, RESET_GAME, FLIP_ALL_CARDS, FLIP_CARD, CHANGE_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NUMBER_OF_PAIRS", function() { return CHANGE_NUMBER_OF_PAIRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_GAME", function() { return START_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHUFFLE", function() { return SHUFFLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMIT_CARDS", function() { return LIMIT_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUPLICATE_CARDS", function() { return DUPLICATE_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CARDS", function() { return RESET_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_GAME", function() { return RESET_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_ALL_CARDS", function() { return FLIP_ALL_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIP_CARD", function() { return FLIP_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_WIDTH", function() { return CHANGE_WIDTH; });
const CHANGE_NUMBER_OF_PAIRS = "CHANGE_NUMBER_OF_PAIRS";
const START_GAME = "START_GAME";
const SHUFFLE = "SHUFFLE";
const LIMIT_CARDS = "LIMIT_CARDS";
const DUPLICATE_CARDS = "DUPLICATE_CARDS";
const RESET_CARDS = "RESET_CARDS";
const RESET_GAME = "RESET_GAME";
const FLIP_ALL_CARDS = "FLIP_ALL_CARDS";
const FLIP_CARD = "FLIP_CARD";
const CHANGE_WIDTH = "CHANGE_WIDTH";

/***/ }),

/***/ "./react-redux/index.js":
/*!******************************!*\
  !*** ./react-redux/index.js ***!
  \******************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/index */ "./react-redux/reducers/index.js");


 // create a makeStore function

const makeStore = context => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"]); // export an assembled wrapper


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./react-redux/reducers/index.js":
/*!***************************************!*\
  !*** ./react-redux/reducers/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ "./react-redux/constants/action-types.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let clone = __webpack_require__(/*! rfdc */ "rfdc")();

const initialState = {
  width: 127,
  numberOfPairs: 6,
  numberOfFoundPairs: 0,
  numberOfAttempts: 0,
  isLoading: true,
  clickCounter: 0,
  matching: false,
  matchingCard: null,
  cards: [{
    src: "/images/pair-1.jpg",
    isActive: false
  }, {
    src: "/images/pair-2.jpg",
    isActive: false
  }, {
    src: "/images/pair-3.jpg",
    isActive: false
  }, {
    src: "/images/pair-4.jpg",
    isActive: false
  }, {
    src: "/images/pair-5.jpg",
    isActive: false
  }, {
    src: "/images/pair-6.jpg",
    isActive: false
  }, {
    src: "/images/pair-7.jpg",
    isActive: false
  }, {
    src: "/images/pair-8.jpg",
    isActive: false
  }, {
    src: "/images/pair-9.jpg",
    isActive: false
  }, {
    src: "/images/pair-10.jpg",
    isActive: false
  }, {
    src: "/images/pair-11.jpg",
    isActive: false
  }, {
    src: "/images/pair-12.jpg",
    isActive: false
  }, {
    src: "/images/pair-13.jpg",
    isActive: false
  }, {
    src: "/images/pair-14.jpg",
    isActive: false
  }, {
    src: "/images/pair-15.jpg",
    isActive: false
  }, {
    src: "/images/pair-16.jpg",
    isActive: false
  }, {
    src: "/images/pair-17.jpg",
    isActive: false
  }, {
    src: "/images/pair-18.jpg",
    isActive: false
  }, {
    src: "/images/pair-19.jpg",
    isActive: false
  }, {
    src: "/images/pair-20.jpg",
    isActive: false
  }, {
    src: "/images/pair-21.jpg",
    isActive: false
  }]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NUMBER_OF_PAIRS"]:
      let numberOfPairs = action.payload;
      return Object.assign({}, state, {
        numberOfPairs
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_WIDTH"]:
      let width = action.payload;
      return Object.assign({}, state, {
        width
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_GAME"]:
      {
        let numberOfPairs = state.numberOfPairs;
        return Object.assign({}, initialState, {
          numberOfPairs
        });
      }
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["START_GAME"]:
      return Object.assign({}, state, {
        isPlaying: true
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_CARDS"]:
      let initialCards = initialState.cards;
      return Object.assign({}, state, {
        cards: initialCards
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SHUFFLE"]:
      let array = state.cards;
      let len = array.length - 1;

      for (let i = len; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return Object.assign({}, state, {
        cards: [...array]
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["LIMIT_CARDS"]:
      let limitedCards = state.cards;
      limitedCards.splice(state.numberOfPairs);
      return Object.assign({}, state, {
        cards: [...limitedCards]
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["DUPLICATE_CARDS"]:
      let duplicatedCards1 = clone(state.cards);
      let duplicatedCards2 = clone(state.cards);
      let newDuplicatedCards = [...duplicatedCards1, ...duplicatedCards2];
      newDuplicatedCards.forEach((el, index) => {
        el.index = index;
        el.isActive = true;
        el.match = false;
      });
      return Object.assign({}, state, {
        cards: newDuplicatedCards
      });
      break;

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_ALL_CARDS"]:
      let flipedCards = state.cards;
      flipedCards.forEach((el, index) => {
        if (el.match === false) {
          el.isActive = false;
        } else if (el.match === true) {
          el.timed = false;
        }
      });
      return Object.assign({}, state, {
        cards: [...flipedCards],
        matching: false,
        isPlaying: true
      });

    case _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_CARD"]:
      let flippedCardIndex = state.cards.findIndex(el => el.index === action.payload);
      let numberOfFoundPairs = state.numberOfFoundPairs;
      let allCards = clone(state.cards); // flip first card and remember it

      if (state.clickCounter === 0) {
        let newCounter = state.clickCounter;
        newCounter++;
        let allCards = clone(state.cards);
        allCards.forEach(el => {
          if (el.index === action.payload) {
            el.isActive = true;
          }
        });
        let firstFlippedCard = allCards[flippedCardIndex];
        return Object.assign({}, state, {
          cards: [...allCards],
          clickCounter: newCounter,
          matchingCard: firstFlippedCard
        });
      } else if (state.clickCounter === 1) {
        let newCounter = 0;
        let numberOfAttempts = state.numberOfAttempts;
        numberOfAttempts++; // flip Second Card

        allCards.forEach(el => {
          if (el.index === action.payload) {
            el.isActive = true;
          }
        }); // does the two cards match ?

        if (state.matchingCard.src === allCards[flippedCardIndex].src) {
          allCards.forEach(el => {
            if (el.src === state.matchingCard.src) {
              el.match = true;
              el.isActive = false;
              el.timed = true;
            }
          });
          numberOfFoundPairs++;
        }

        return Object.assign({}, state, {
          cards: [...allCards],
          clickCounter: newCounter,
          matching: true,
          matchingCard: initialState.matchingCard,
          numberOfFoundPairs,
          numberOfAttempts,
          isPlaying: false
        });
      } // flip second card and change match:true for both


      break;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rfdc":
/*!***********************!*\
  !*** external "rfdc" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rfdc");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWFjdC1yZWR1eC9jb25zdGFudHMvYWN0aW9uLXR5cGVzLmpzIiwid2VicGFjazovLy8uL3JlYWN0LXJlZHV4L2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlYWN0LXJlZHV4L3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZmRjXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwiQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyIsIlNUQVJUX0dBTUUiLCJTSFVGRkxFIiwiTElNSVRfQ0FSRFMiLCJEVVBMSUNBVEVfQ0FSRFMiLCJSRVNFVF9DQVJEUyIsIlJFU0VUX0dBTUUiLCJGTElQX0FMTF9DQVJEUyIsIkZMSVBfQ0FSRCIsIkNIQU5HRV9XSURUSCIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiY2xvbmUiLCJyZXF1aXJlIiwiaW5pdGlhbFN0YXRlIiwid2lkdGgiLCJudW1iZXJPZlBhaXJzIiwibnVtYmVyT2ZGb3VuZFBhaXJzIiwibnVtYmVyT2ZBdHRlbXB0cyIsImlzTG9hZGluZyIsImNsaWNrQ291bnRlciIsIm1hdGNoaW5nIiwibWF0Y2hpbmdDYXJkIiwiY2FyZHMiLCJzcmMiLCJpc0FjdGl2ZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiT2JqZWN0IiwiYXNzaWduIiwiaXNQbGF5aW5nIiwiaW5pdGlhbENhcmRzIiwiYXJyYXkiLCJsZW4iLCJsZW5ndGgiLCJpIiwiaiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRlbXAiLCJsaW1pdGVkQ2FyZHMiLCJzcGxpY2UiLCJkdXBsaWNhdGVkQ2FyZHMxIiwiZHVwbGljYXRlZENhcmRzMiIsIm5ld0R1cGxpY2F0ZWRDYXJkcyIsImZvckVhY2giLCJlbCIsImluZGV4IiwibWF0Y2giLCJmbGlwZWRDYXJkcyIsInRpbWVkIiwiZmxpcHBlZENhcmRJbmRleCIsImZpbmRJbmRleCIsImFsbENhcmRzIiwibmV3Q291bnRlciIsImZpcnN0RmxpcHBlZENhcmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FB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LEVBQUU7QUFQbUIsU0FBekIsQ0FBUDtBQVNELE9BN0RILENBK0RFOzs7QUFFQTs7QUFDRjtBQUNFLGFBQU9QLEtBQVA7QUFoSko7QUFrSkQ7O0FBRWNqQiwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JRQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9yZWFjdC1yZWR1eC9pbmRleFwiO1xyXG5pbXBvcnQgXCIuLi9hbnRkLmNzc1wiO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iLCJleHBvcnQgY29uc3QgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUyA9IFwiQ0hBTkdFX05VTUJFUl9PRl9QQUlSU1wiO1xyXG5leHBvcnQgY29uc3QgU1RBUlRfR0FNRSA9IFwiU1RBUlRfR0FNRVwiO1xyXG5leHBvcnQgY29uc3QgU0hVRkZMRSA9IFwiU0hVRkZMRVwiO1xyXG5leHBvcnQgY29uc3QgTElNSVRfQ0FSRFMgPSBcIkxJTUlUX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBEVVBMSUNBVEVfQ0FSRFMgPSBcIkRVUExJQ0FURV9DQVJEU1wiO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSRFMgPSBcIlJFU0VUX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVNFVF9HQU1FID0gXCJSRVNFVF9HQU1FXCI7XHJcbmV4cG9ydCBjb25zdCBGTElQX0FMTF9DQVJEUyA9IFwiRkxJUF9BTExfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IEZMSVBfQ0FSRCA9IFwiRkxJUF9DQVJEXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1dJRFRIID0gXCJDSEFOR0VfV0lEVEhcIjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzL2luZGV4XCI7XHJcblxyXG4vLyBjcmVhdGUgYSBtYWtlU3RvcmUgZnVuY3Rpb25cclxuY29uc3QgbWFrZVN0b3JlID0gKGNvbnRleHQpID0+IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyKTtcclxuXHJcbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iLCJpbXBvcnQge1xyXG4gIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsXHJcbiAgU0hVRkZMRSxcclxuICBMSU1JVF9DQVJEUyxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgU1RBUlRfR0FNRSxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbiAgQ0hBTkdFX1dJRFRILFxyXG4gIFJFU0VUX0dBTUUsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxubGV0IGNsb25lID0gcmVxdWlyZShcInJmZGNcIikoKTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB3aWR0aDogMTI3LFxyXG4gIG51bWJlck9mUGFpcnM6IDYsXHJcbiAgbnVtYmVyT2ZGb3VuZFBhaXJzOiAwLFxyXG4gIG51bWJlck9mQXR0ZW1wdHM6IDAsXHJcbiAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gIGNsaWNrQ291bnRlcjogMCxcclxuICBtYXRjaGluZzogZmFsc2UsXHJcbiAgbWF0Y2hpbmdDYXJkOiBudWxsLFxyXG4gIGNhcmRzOiBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMS5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci0yLmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9wYWlyLTMuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItNC5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci01LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9wYWlyLTYuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItNy5qcGdcIixcclxuICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBcIi9pbWFnZXMvcGFpci04LmpwZ1wiLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiL2ltYWdlcy9wYWlyLTkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMTAuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMTEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMTIuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMTMuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMTQuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMTUuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMTYuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMTcuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMTguanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMTkuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMjAuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCIvaW1hZ2VzL3BhaXItMjEuanBnXCIsXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJvb3RSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05VTUJFUl9PRl9QQUlSUzpcclxuICAgICAgbGV0IG51bWJlck9mUGFpcnMgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgbnVtYmVyT2ZQYWlycyxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfV0lEVEg6XHJcbiAgICAgIGxldCB3aWR0aCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICB3aWR0aCxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRVNFVF9HQU1FOlxyXG4gICAgICB7XHJcbiAgICAgICAgbGV0IG51bWJlck9mUGFpcnMgPSBzdGF0ZS5udW1iZXJPZlBhaXJzO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUsIHsgbnVtYmVyT2ZQYWlycyB9KTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU1RBUlRfR0FNRTpcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGlzUGxheWluZzogdHJ1ZSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFU0VUX0NBUkRTOlxyXG4gICAgICBsZXQgaW5pdGlhbENhcmRzID0gaW5pdGlhbFN0YXRlLmNhcmRzO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBpbml0aWFsQ2FyZHMgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSFVGRkxFOlxyXG4gICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5jYXJkcztcclxuICAgICAgbGV0IGxlbiA9IGFycmF5Lmxlbmd0aCAtIDE7XHJcbiAgICAgIGZvciAobGV0IGkgPSBsZW47IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGFycmF5W2ldO1xyXG4gICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XHJcbiAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBjYXJkczogWy4uLmFycmF5XSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJTUlUX0NBUkRTOlxyXG4gICAgICBsZXQgbGltaXRlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcblxyXG4gICAgICBsaW1pdGVkQ2FyZHMuc3BsaWNlKHN0YXRlLm51bWJlck9mUGFpcnMpO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGNhcmRzOiBbLi4ubGltaXRlZENhcmRzXSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIERVUExJQ0FURV9DQVJEUzpcclxuICAgICAgbGV0IGR1cGxpY2F0ZWRDYXJkczEgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcbiAgICAgIGxldCBkdXBsaWNhdGVkQ2FyZHMyID0gY2xvbmUoc3RhdGUuY2FyZHMpO1xyXG5cclxuICAgICAgbGV0IG5ld0R1cGxpY2F0ZWRDYXJkcyA9IFsuLi5kdXBsaWNhdGVkQ2FyZHMxLCAuLi5kdXBsaWNhdGVkQ2FyZHMyXTtcclxuICAgICAgbmV3RHVwbGljYXRlZENhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGVsLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgZWwuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGVsLm1hdGNoID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgY2FyZHM6IG5ld0R1cGxpY2F0ZWRDYXJkcyxcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGTElQX0FMTF9DQVJEUzpcclxuICAgICAgbGV0IGZsaXBlZENhcmRzID0gc3RhdGUuY2FyZHM7XHJcbiAgICAgIGZsaXBlZENhcmRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChlbC5tYXRjaCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGVsLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbC5tYXRjaCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgZWwudGltZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBjYXJkczogWy4uLmZsaXBlZENhcmRzXSxcclxuICAgICAgICBtYXRjaGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNQbGF5aW5nOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgIGNhc2UgRkxJUF9DQVJEOlxyXG4gICAgICBsZXQgZmxpcHBlZENhcmRJbmRleCA9IHN0YXRlLmNhcmRzLmZpbmRJbmRleChcclxuICAgICAgICAoZWwpID0+IGVsLmluZGV4ID09PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICApO1xyXG5cclxuICAgICAgbGV0IG51bWJlck9mRm91bmRQYWlycyA9IHN0YXRlLm51bWJlck9mRm91bmRQYWlycztcclxuXHJcbiAgICAgIGxldCBhbGxDYXJkcyA9IGNsb25lKHN0YXRlLmNhcmRzKTtcclxuICAgICAgLy8gZmxpcCBmaXJzdCBjYXJkIGFuZCByZW1lbWJlciBpdFxyXG4gICAgICBpZiAoc3RhdGUuY2xpY2tDb3VudGVyID09PSAwKSB7XHJcbiAgICAgICAgbGV0IG5ld0NvdW50ZXIgPSBzdGF0ZS5jbGlja0NvdW50ZXI7XHJcbiAgICAgICAgbmV3Q291bnRlcisrO1xyXG5cclxuICAgICAgICBsZXQgYWxsQ2FyZHMgPSBjbG9uZShzdGF0ZS5jYXJkcyk7XHJcblxyXG4gICAgICAgIGFsbENhcmRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZWwuaW5kZXggPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIGVsLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0RmxpcHBlZENhcmQgPSBhbGxDYXJkc1tmbGlwcGVkQ2FyZEluZGV4XTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICAgIGNhcmRzOiBbLi4uYWxsQ2FyZHNdLFxyXG4gICAgICAgICAgY2xpY2tDb3VudGVyOiBuZXdDb3VudGVyLFxyXG4gICAgICAgICAgbWF0Y2hpbmdDYXJkOiBmaXJzdEZsaXBwZWRDYXJkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmNsaWNrQ291bnRlciA9PT0gMSkge1xyXG4gICAgICAgIGxldCBuZXdDb3VudGVyID0gMDtcclxuICAgICAgICBsZXQgbnVtYmVyT2ZBdHRlbXB0cyA9IHN0YXRlLm51bWJlck9mQXR0ZW1wdHM7XHJcbiAgICAgICAgbnVtYmVyT2ZBdHRlbXB0cysrO1xyXG5cclxuICAgICAgICAvLyBmbGlwIFNlY29uZCBDYXJkXHJcbiAgICAgICAgYWxsQ2FyZHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgIGlmIChlbC5pbmRleCA9PT0gYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgZWwuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBkb2VzIHRoZSB0d28gY2FyZHMgbWF0Y2ggP1xyXG4gICAgICAgIGlmIChzdGF0ZS5tYXRjaGluZ0NhcmQuc3JjID09PSBhbGxDYXJkc1tmbGlwcGVkQ2FyZEluZGV4XS5zcmMpIHtcclxuICAgICAgICAgIGFsbENhcmRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbC5zcmMgPT09IHN0YXRlLm1hdGNoaW5nQ2FyZC5zcmMpIHtcclxuICAgICAgICAgICAgICBlbC5tYXRjaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgZWwuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBlbC50aW1lZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIG51bWJlck9mRm91bmRQYWlycysrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICBjYXJkczogWy4uLmFsbENhcmRzXSxcclxuICAgICAgICAgIGNsaWNrQ291bnRlcjogbmV3Q291bnRlcixcclxuICAgICAgICAgIG1hdGNoaW5nOiB0cnVlLFxyXG4gICAgICAgICAgbWF0Y2hpbmdDYXJkOiBpbml0aWFsU3RhdGUubWF0Y2hpbmdDYXJkLFxyXG4gICAgICAgICAgbnVtYmVyT2ZGb3VuZFBhaXJzLFxyXG4gICAgICAgICAgbnVtYmVyT2ZBdHRlbXB0cyxcclxuICAgICAgICAgIGlzUGxheWluZzogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGZsaXAgc2Vjb25kIGNhcmQgYW5kIGNoYW5nZSBtYXRjaDp0cnVlIGZvciBib3RoXHJcblxyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmZkY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9