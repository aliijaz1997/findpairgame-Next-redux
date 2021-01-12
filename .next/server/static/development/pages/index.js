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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Control.jsx":
/*!********************************!*\
  !*** ./components/Control.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../react-redux/actions/index */ "./react-redux/actions/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Documents\\Full stack project\\findpairgame-Next-redux\\components\\Control.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const menu = props => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(127);
      props.changeNumberOfPairs(6);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "6 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(127);
      props.changeNumberOfPairs(8);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "8 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(102);
      props.changeNumberOfPairs(10);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "10 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(12);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "12 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(15);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "15 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(85.33);
      props.changeNumberOfPairs(18);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "18 pairs"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    onClick: () => {
      props.changeWidth(73.42);
      props.changeNumberOfPairs(21);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "21 pairs"));
};

function gameStatus(props) {
  const tryString = props.numberOfAttempts === 1 ? "try" : "tries";

  if (props.numberOfAttempts > 0) {
    return __jsx(StyledStatus, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, "You found ", props.numberOfFoundPairs, " out of ", props.numberOfPairs, " pairs with", props.numberOfAttempts, " ", tryString, ".");
  } else {
    return __jsx(StyledStatus, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 12
      }
    }, "Gues the two Pairs");
  }
}

function Control(props) {
  return __jsx(ControlContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    overlay: menu(props),
    placement: "bottomCenter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, props.numberOfPairs, " pairs")), gameStatus(props), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      display: "block",
      margin: "20px auto"
    },
    onClick: () => {
      props.resetGame();
      props.resetCards();
      props.shuffleCards();
      props.limitCards();
      props.duplicateCards();
      props.shuffleCards();
      setTimeout(() => {
        props.flipAllCards();
      }, 1500);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "Restart Game"));
}

const mapStateToProps = state => ({
  numberOfPairs: state.numberOfPairs,
  numberOfFoundPairs: state.numberOfFoundPairs,
  numberOfAttempts: state.numberOfAttempts
});

const mapDispatchToProps = dispatch => ({
  changeNumberOfPairs: number => dispatch(Object(_react_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["changeNumberOfPairs"])(number)),
  changeWidth: width => dispatch(Object(_react_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["changeWidth"])(width)),
  resetGame: () => dispatch(Object(_react_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["resetGame"])()),
  resetCards: () => dispatch(Object(_react_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["resetCards"])()),
  shuffleCards: () => dispatch(Object(_react_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["shuffleCards"])()),
  duplicateCards: () => dispatch(Object(_react_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["duplicateCards"])()),
  limitCards: () => dispatch(Object(_react_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["limitCards"])()),
  flipAllCards: () => dispatch(Object(_react_redux_actions_index__WEBPACK_IMPORTED_MODULE_2__["flipAllCards"])())
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Control));
const ControlContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Control__ControlContainer",
  componentId: "c4l1my-0"
})(["position:relative;top:25%;transform:translateY(-25%);"]);
const StyledStatus = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p.withConfig({
  displayName: "Control__StyledStatus",
  componentId: "c4l1my-1"
})(["display:block;margin:20px auto;padding:0 1rem;"]);

/***/ }),

/***/ "./components/Grid.jsx":
/*!*****************************!*\
  !*** ./components/Grid.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../react-redux/constants/action-types */ "./react-redux/constants/action-types.js");
/* harmony import */ var _react_redux_actions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../react-redux/actions/index */ "./react-redux/actions/index.js");
var _jsxFileName = "D:\\Documents\\Full stack project\\findpairgame-Next-redux\\components\\Grid.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Grid(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.resetCards();
    props.shuffleCards();
    props.limitCards();
    props.duplicateCards();
    props.shuffleCards();
    setTimeout(() => {
      props.flipAllCards();
    }, 1500);
  }, [props.numberOfPairs]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.matching) {
      setTimeout(() => {
        props.flipAllCards();
      }, 1000);
    }
  }, [props.matching]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (props.numberOfFoundPairs === props.numberOfPairs) {
      setTimeout(() => {
        alert(" This time you matched ");
      }, 500);
    }
  }, [props.numberOfFoundPairs]);
  return (// How images are displayed
    __jsx(GridContainer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }
    }, props.cards.map((card, index) => {
      if (card.isActive || card.timed) {
        return __jsx(ImageWrapper, {
          color: "#bbb",
          width: props.width,
          key: "div" + index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }
        }, __jsx("img", {
          key: card.src + index,
          "data-index": card.index,
          src: card.src,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }
        }));
      } else if (card.match) {
        return __jsx(ImageWrapper, {
          color: "transparent",
          width: props.width,
          key: "div" + index,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }
        });
      } else {
        return __jsx(ImageWrapper, {
          color: "#bbb",
          width: props.width,
          key: "div" + index,
          onClick: () => {
            if (!props.matching) {
              props.flipCard(card.index);
            }
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }
        });
      }
    }))
  );
}

const mapStateToProps = state => ({
  numberOfPairs: state.numberOfPairs,
  numberOfAttempts: state.numberOfAttempts,
  numberOfFoundPairs: state.numberOfFoundPairs,
  cards: state.cards,
  clickCounter: state.clickCounter,
  matching: state.matching,
  width: state.width,
  matching: state.matching
});

const mapDispatchToProps = dispatch => ({
  shuffleCards: () => dispatch({
    type: _react_redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["SHUFFLE"]
  }),
  limitCards: () => dispatch({
    type: _react_redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["LIMIT_CARDS"]
  }),
  duplicateCards: () => dispatch({
    type: _react_redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["DUPLICATE_CARDS"]
  }),
  resetCards: () => dispatch({
    type: _react_redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["RESET_CARDS"]
  }),
  flipAllCards: () => dispatch({
    type: _react_redux_constants_action_types__WEBPACK_IMPORTED_MODULE_3__["FLIP_ALL_CARDS"]
  }),
  flipCard: index => dispatch(Object(_react_redux_actions_index__WEBPACK_IMPORTED_MODULE_4__["flipCard"])(index))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Grid)); // ---------------------------------

const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Grid__GridContainer",
  componentId: "v3z7jl-0"
})(["width:520px;height:100vh;margin:0 auto;text-align:center;padding-top:5%;"]);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Grid__ImageWrapper",
  componentId: "v3z7jl-1"
})(["display:inline-block;margin-right:1px;margin-top:2px;width:", ";height:", ";background-color:", ";overflow:auto;img,.blank{width:", ";height:", ";padding:1px;transform:scaleY(-1);}"], props => props.width + "px", props => props.width + "px", props => props.color, props => props.width + "px", props => props.width + "px");
ImageWrapper.defaultProps = {
  width: 125
};

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Control */ "./components/Control.jsx");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Grid */ "./components/Grid.jsx");
/* harmony import */ var _react_redux_constants_action_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../react-redux/constants/action-types */ "./react-redux/constants/action-types.js");
var _jsxFileName = "D:\\Documents\\Full stack project\\findpairgame-Next-redux\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  Content,
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];

function App(props) {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    style: {
      width: "100%",
      margin: "0 auto",
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx(Sider, {
    align: "center",
    theme: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_components_Control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })));
}

const mapStateToProps = state => ({
  cards: state.cards,
  numberOfPairs: state.numberOfPairs
});

const mapDispatchToProps = dispatch => ({
  limitCards: () => dispatch({
    type: _react_redux_constants_action_types__WEBPACK_IMPORTED_MODULE_5__["LIMIT_CARDS"]
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./react-redux/actions/index.js":
/*!**************************************!*\
  !*** ./react-redux/actions/index.js ***!
  \**************************************/
/*! exports provided: changeNumberOfPairs, startGame, resetGame, shuffleCards, limitCards, duplicateCards, resetCards, flipAllCards, flipCard, changeWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeNumberOfPairs", function() { return changeNumberOfPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetGame", function() { return resetGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleCards", function() { return shuffleCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limitCards", function() { return limitCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateCards", function() { return duplicateCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCards", function() { return resetCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipAllCards", function() { return flipAllCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flipCard", function() { return flipCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeWidth", function() { return changeWidth; });
/* harmony import */ var _constants_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/action-types */ "./react-redux/constants/action-types.js");

function changeNumberOfPairs(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_NUMBER_OF_PAIRS"],
    payload
  };
}
function startGame(paylaod) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["START_GAME"],
    payload
  };
}
function resetGame(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_GAME"],
    payload
  };
}
function shuffleCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["SHUFFLE"],
    payload
  };
}
function limitCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["LIMIT_CARDS"],
    payload
  };
}
function duplicateCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["DUPLICATE_CARDS"],
    payload
  };
}
function resetCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["RESET_CARDS"],
    payload
  };
}
function flipAllCards(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_ALL_CARDS"],
    payload
  };
}
function flipCard(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["FLIP_CARD"],
    payload
  };
}
function changeWidth(payload) {
  return {
    type: _constants_action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_WIDTH"],
    payload
  };
}

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

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\Full stack project\findpairgame-Next-redux\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cm9sLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWQuanN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9yZWFjdC1yZWR1eC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlYWN0LXJlZHV4L2NvbnN0YW50cy9hY3Rpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIm1lbnUiLCJwcm9wcyIsImNoYW5nZVdpZHRoIiwiY2hhbmdlTnVtYmVyT2ZQYWlycyIsImdhbWVTdGF0dXMiLCJ0cnlTdHJpbmciLCJudW1iZXJPZkF0dGVtcHRzIiwibnVtYmVyT2ZGb3VuZFBhaXJzIiwibnVtYmVyT2ZQYWlycyIsIkNvbnRyb2wiLCJkaXNwbGF5IiwibWFyZ2luIiwicmVzZXRHYW1lIiwicmVzZXRDYXJkcyIsInNodWZmbGVDYXJkcyIsImxpbWl0Q2FyZHMiLCJkdXBsaWNhdGVDYXJkcyIsInNldFRpbWVvdXQiLCJmbGlwQWxsQ2FyZHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibnVtYmVyIiwid2lkdGgiLCJjb25uZWN0IiwiQ29udHJvbENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZFN0YXR1cyIsInAiLCJHcmlkIiwidXNlRWZmZWN0IiwibWF0Y2hpbmciLCJhbGVydCIsImNhcmRzIiwibWFwIiwiY2FyZCIsImluZGV4IiwiaXNBY3RpdmUiLCJ0aW1lZCIsInNyYyIsIm1hdGNoIiwiZmxpcENhcmQiLCJjbGlja0NvdW50ZXIiLCJ0eXBlIiwiU0hVRkZMRSIsIkxJTUlUX0NBUkRTIiwiRFVQTElDQVRFX0NBUkRTIiwiUkVTRVRfQ0FSRFMiLCJGTElQX0FMTF9DQVJEUyIsIkdyaWRDb250YWluZXIiLCJJbWFnZVdyYXBwZXIiLCJjb2xvciIsImRlZmF1bHRQcm9wcyIsIkNvbnRlbnQiLCJTaWRlciIsIkxheW91dCIsIkFwcCIsInBheWxvYWQiLCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTIiwic3RhcnRHYW1lIiwicGF5bGFvZCIsIlNUQVJUX0dBTUUiLCJSRVNFVF9HQU1FIiwiRkxJUF9DQVJEIiwiQ0hBTkdFX1dJRFRIIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7O0FBRUEsTUFBTUEs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLE1BQU1HLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1qQixPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTWUsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTWQsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1lLFNBQVMsR0FBRyxXQUFsQjtBQUVBLE1BQU1DLFlBQVksR0FBRyxjQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge1xyXG4gIGNoYW5nZU51bWJlck9mUGFpcnMsXHJcbiAgY2hhbmdlV2lkdGgsXHJcbiAgcmVzZXRHYW1lLFxyXG4gIHJlc2V0Q2FyZHMsXHJcbiAgc2h1ZmZsZUNhcmRzLFxyXG4gIGxpbWl0Q2FyZHMsXHJcbiAgZHVwbGljYXRlQ2FyZHMsXHJcbiAgZmxpcEFsbENhcmRzLFxyXG59IGZyb20gXCIuLi9yZWFjdC1yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcbmltcG9ydCB7IE1lbnUsIEJ1dHRvbiwgRHJvcGRvd24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgbWVudSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudT5cclxuICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZVdpZHRoKDEyNyk7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VOdW1iZXJPZlBhaXJzKDYpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA2IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoMTI3KTtcclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoOCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDggcGFpcnNcclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5jaGFuZ2VXaWR0aCgxMDIpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygxMCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDEwIHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoODUuMzMpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygxMik7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDEyIHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoODUuMzMpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygxNSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDE1IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoODUuMzMpO1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlTnVtYmVyT2ZQYWlycygxOCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDE4IHBhaXJzXHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgcHJvcHMuY2hhbmdlV2lkdGgoNzMuNDIpO1xyXG5cclxuICAgICAgICAgIHByb3BzLmNoYW5nZU51bWJlck9mUGFpcnMoMjEpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICAyMSBwYWlyc1xyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2FtZVN0YXR1cyhwcm9wcykge1xyXG4gIGNvbnN0IHRyeVN0cmluZyA9IHByb3BzLm51bWJlck9mQXR0ZW1wdHMgPT09IDEgPyBcInRyeVwiIDogXCJ0cmllc1wiO1xyXG4gIGlmIChwcm9wcy5udW1iZXJPZkF0dGVtcHRzID4gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZFN0YXR1cz5cclxuICAgICAgICBZb3UgZm91bmQge3Byb3BzLm51bWJlck9mRm91bmRQYWlyc30gb3V0IG9mIHtwcm9wcy5udW1iZXJPZlBhaXJzfSBwYWlyc1xyXG4gICAgICAgIHdpdGhcclxuICAgICAgICB7cHJvcHMubnVtYmVyT2ZBdHRlbXB0c30ge3RyeVN0cmluZ30uXHJcbiAgICAgIDwvU3R5bGVkU3RhdHVzPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxTdHlsZWRTdGF0dXM+R3VlcyB0aGUgdHdvIFBhaXJzPC9TdHlsZWRTdGF0dXM+O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ29udHJvbChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udHJvbENvbnRhaW5lcj5cclxuICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnUocHJvcHMpfSBwbGFjZW1lbnQ9XCJib3R0b21DZW50ZXJcIj5cclxuICAgICAgICA8QnV0dG9uPntwcm9wcy5udW1iZXJPZlBhaXJzfSBwYWlyczwvQnV0dG9uPlxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICB7Z2FtZVN0YXR1cyhwcm9wcyl9XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW46IFwiMjBweCBhdXRvXCIgfX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBwcm9wcy5yZXNldEdhbWUoKTtcclxuICAgICAgICAgIHByb3BzLnJlc2V0Q2FyZHMoKTtcclxuICAgICAgICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG4gICAgICAgICAgcHJvcHMubGltaXRDYXJkcygpO1xyXG4gICAgICAgICAgcHJvcHMuZHVwbGljYXRlQ2FyZHMoKTtcclxuICAgICAgICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBSZXN0YXJ0IEdhbWVcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0NvbnRyb2xDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIG51bWJlck9mUGFpcnM6IHN0YXRlLm51bWJlck9mUGFpcnMsXHJcbiAgbnVtYmVyT2ZGb3VuZFBhaXJzOiBzdGF0ZS5udW1iZXJPZkZvdW5kUGFpcnMsXHJcbiAgbnVtYmVyT2ZBdHRlbXB0czogc3RhdGUubnVtYmVyT2ZBdHRlbXB0cyxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgY2hhbmdlTnVtYmVyT2ZQYWlyczogKG51bWJlcikgPT4gZGlzcGF0Y2goY2hhbmdlTnVtYmVyT2ZQYWlycyhudW1iZXIpKSxcclxuICBjaGFuZ2VXaWR0aDogKHdpZHRoKSA9PiBkaXNwYXRjaChjaGFuZ2VXaWR0aCh3aWR0aCkpLFxyXG4gIHJlc2V0R2FtZTogKCkgPT4gZGlzcGF0Y2gocmVzZXRHYW1lKCkpLFxyXG4gIHJlc2V0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKHJlc2V0Q2FyZHMoKSksXHJcbiAgc2h1ZmZsZUNhcmRzOiAoKSA9PiBkaXNwYXRjaChzaHVmZmxlQ2FyZHMoKSksXHJcbiAgZHVwbGljYXRlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKGR1cGxpY2F0ZUNhcmRzKCkpLFxyXG4gIGxpbWl0Q2FyZHM6ICgpID0+IGRpc3BhdGNoKGxpbWl0Q2FyZHMoKSksXHJcbiAgZmxpcEFsbENhcmRzOiAoKSA9PiBkaXNwYXRjaChmbGlwQWxsQ2FyZHMoKSksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ29udHJvbCk7XHJcbmNvbnN0IENvbnRyb2xDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1JSk7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTdGF0dXMgPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIExJTUlUX0NBUkRTLFxyXG4gIFNIVUZGTEUsXHJcbiAgRFVQTElDQVRFX0NBUkRTLFxyXG4gIFJFU0VUX0NBUkRTLFxyXG4gIEZMSVBfQUxMX0NBUkRTLFxyXG59IGZyb20gXCIuLi9yZWFjdC1yZWR1eC9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcblxyXG5pbXBvcnQgeyBmbGlwQ2FyZCB9IGZyb20gXCIuLi9yZWFjdC1yZWR1eC9hY3Rpb25zL2luZGV4XCI7XHJcblxyXG5mdW5jdGlvbiBHcmlkKHByb3BzKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLnJlc2V0Q2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG4gICAgcHJvcHMubGltaXRDYXJkcygpO1xyXG4gICAgcHJvcHMuZHVwbGljYXRlQ2FyZHMoKTtcclxuICAgIHByb3BzLnNodWZmbGVDYXJkcygpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwcm9wcy5mbGlwQWxsQ2FyZHMoKTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH0sIFtwcm9wcy5udW1iZXJPZlBhaXJzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocHJvcHMubWF0Y2hpbmcpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcHJvcHMuZmxpcEFsbENhcmRzKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy5tYXRjaGluZ10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb3BzLm51bWJlck9mRm91bmRQYWlycyA9PT0gcHJvcHMubnVtYmVyT2ZQYWlycykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBhbGVydChcIiBUaGlzIHRpbWUgeW91IG1hdGNoZWQgXCIpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9wcy5udW1iZXJPZkZvdW5kUGFpcnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIEhvdyBpbWFnZXMgYXJlIGRpc3BsYXllZFxyXG4gICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGNhcmQuaXNBY3RpdmUgfHwgY2FyZC50aW1lZCkge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEltYWdlV3JhcHBlciBjb2xvcj1cIiNiYmJcIiB3aWR0aD17cHJvcHMud2lkdGh9IGtleT17XCJkaXZcIiArIGluZGV4fT5cclxuICAgICAgICAgICAgICA8aW1nIGtleT17Y2FyZC5zcmMgKyBpbmRleH0gZGF0YS1pbmRleD17Y2FyZC5pbmRleH0gc3JjPXtjYXJkLnNyY30gLz5cclxuICAgICAgICAgICAgPC9JbWFnZVdyYXBwZXI+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjYXJkLm1hdGNoKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9e3Byb3BzLndpZHRofVxyXG4gICAgICAgICAgICAgIGtleT17XCJkaXZcIiArIGluZGV4fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VXcmFwcGVyXHJcbiAgICAgICAgICAgICAgY29sb3I9XCIjYmJiXCJcclxuICAgICAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtcImRpdlwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwcm9wcy5tYXRjaGluZykge1xyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5mbGlwQ2FyZChjYXJkLmluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pfVxyXG4gICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBudW1iZXJPZlBhaXJzOiBzdGF0ZS5udW1iZXJPZlBhaXJzLFxyXG4gIG51bWJlck9mQXR0ZW1wdHM6IHN0YXRlLm51bWJlck9mQXR0ZW1wdHMsXHJcbiAgbnVtYmVyT2ZGb3VuZFBhaXJzOiBzdGF0ZS5udW1iZXJPZkZvdW5kUGFpcnMsXHJcbiAgY2FyZHM6IHN0YXRlLmNhcmRzLFxyXG4gIGNsaWNrQ291bnRlcjogc3RhdGUuY2xpY2tDb3VudGVyLFxyXG4gIG1hdGNoaW5nOiBzdGF0ZS5tYXRjaGluZyxcclxuICB3aWR0aDogc3RhdGUud2lkdGgsXHJcbiAgbWF0Y2hpbmc6IHN0YXRlLm1hdGNoaW5nLFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzaHVmZmxlQ2FyZHM6ICgpID0+IGRpc3BhdGNoKHsgdHlwZTogU0hVRkZMRSB9KSxcclxuICBsaW1pdENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IExJTUlUX0NBUkRTIH0pLFxyXG4gIGR1cGxpY2F0ZUNhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IERVUExJQ0FURV9DQVJEUyB9KSxcclxuICByZXNldENhcmRzOiAoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFJFU0VUX0NBUkRTIH0pLFxyXG4gIGZsaXBBbGxDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBGTElQX0FMTF9DQVJEUyB9KSxcclxuICBmbGlwQ2FyZDogKGluZGV4KSA9PiBkaXNwYXRjaChmbGlwQ2FyZChpbmRleCkpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyaWQpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1MjBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy53aWR0aCArIFwicHhcIn07XHJcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XHJcblxyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICBpbWcsXHJcbiAgLmJsYW5rIHtcclxuICAgIHdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gICAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMud2lkdGggKyBcInB4XCJ9O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoLTEpO1xyXG4gIH1cclxuYDtcclxuXHJcbkltYWdlV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgd2lkdGg6IDEyNSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBDb250cm9sIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRyb2xcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvR3JpZFwiO1xyXG5pbXBvcnQgeyBMSU1JVF9DQVJEUyB9IGZyb20gXCIuLi9yZWFjdC1yZWR1eC9jb25zdGFudHMvYWN0aW9uLXR5cGVzXCI7XHJcbmNvbnN0IHsgQ29udGVudCwgU2lkZXIgfSA9IExheW91dDtcclxuXHJcbmZ1bmN0aW9uIEFwcChwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luOiBcIjAgYXV0b1wiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgPEdyaWQgLz5cclxuICAgICAgPC9Db250ZW50PlxyXG4gICAgICA8U2lkZXIgYWxpZ249XCJjZW50ZXJcIiB0aGVtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgPENvbnRyb2wgLz5cclxuICAgICAgPC9TaWRlcj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjYXJkczogc3RhdGUuY2FyZHMsXHJcbiAgbnVtYmVyT2ZQYWlyczogc3RhdGUubnVtYmVyT2ZQYWlycyxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgbGltaXRDYXJkczogKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBMSU1JVF9DQVJEUyB9KSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xyXG4iLCJpbXBvcnQge1xyXG4gIENIQU5HRV9OVU1CRVJfT0ZfUEFJUlMsXHJcbiAgU0hVRkZMRSxcclxuICBEVVBMSUNBVEVfQ0FSRFMsXHJcbiAgUkVTRVRfQ0FSRFMsXHJcbiAgU1RBUlRfR0FNRSxcclxuICBGTElQX0FMTF9DQVJEUyxcclxuICBGTElQX0NBUkQsXHJcbiAgQ0hBTkdFX1dJRFRILFxyXG4gIFJFU0VUX0dBTUUsXHJcbiAgTElNSVRfQ0FSRFMsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VOdW1iZXJPZlBhaXJzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBDSEFOR0VfTlVNQkVSX09GX1BBSVJTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUocGF5bGFvZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IFNUQVJUX0dBTUUsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R2FtZShwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUkVTRVRfR0FNRSwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUNhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBTSFVGRkxFLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW1pdENhcmRzKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBMSU1JVF9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHVwbGljYXRlQ2FyZHMocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IERVUExJQ0FURV9DQVJEUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUkVTRVRfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsaXBBbGxDYXJkcyhwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHsgdHlwZTogRkxJUF9BTExfQ0FSRFMsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsaXBDYXJkKHBheWxvYWQpIHtcclxuICByZXR1cm4geyB0eXBlOiBGTElQX0NBUkQsIHBheWxvYWQgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlV2lkdGgocGF5bG9hZCkge1xyXG4gIHJldHVybiB7IHR5cGU6IENIQU5HRV9XSURUSCwgcGF5bG9hZCB9O1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBDSEFOR0VfTlVNQkVSX09GX1BBSVJTID0gXCJDSEFOR0VfTlVNQkVSX09GX1BBSVJTXCI7XHJcbmV4cG9ydCBjb25zdCBTVEFSVF9HQU1FID0gXCJTVEFSVF9HQU1FXCI7XHJcbmV4cG9ydCBjb25zdCBTSFVGRkxFID0gXCJTSFVGRkxFXCI7XHJcbmV4cG9ydCBjb25zdCBMSU1JVF9DQVJEUyA9IFwiTElNSVRfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IERVUExJQ0FURV9DQVJEUyA9IFwiRFVQTElDQVRFX0NBUkRTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVNFVF9DQVJEUyA9IFwiUkVTRVRfQ0FSRFNcIjtcclxuZXhwb3J0IGNvbnN0IFJFU0VUX0dBTUUgPSBcIlJFU0VUX0dBTUVcIjtcclxuZXhwb3J0IGNvbnN0IEZMSVBfQUxMX0NBUkRTID0gXCJGTElQX0FMTF9DQVJEU1wiO1xyXG5leHBvcnQgY29uc3QgRkxJUF9DQVJEID0gXCJGTElQX0NBUkRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfV0lEVEggPSBcIkNIQU5HRV9XSURUSFwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=