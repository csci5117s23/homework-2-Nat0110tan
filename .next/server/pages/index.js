"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/nextjs */ \"@clerk/nextjs\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\"use client\";\n\n\n\n\n\nfunction Home() {\n    const { userId  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function signin() {\n            if (userId) {\n                router.push(\"/todos\");\n            }\n        }\n        signin();\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid gap-16 grid-cols-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Welcome!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Welcome to the todo app!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Wanna make your todo list? please signin!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.SignedOut, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.SignInButton, {\n                                    className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                                    redirectUrl: \"/todos\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDaUM7QUFDeUM7QUFDbEM7QUFDWDtBQUVkLFNBQVNPLE9BQU87SUFDN0IsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0osc0RBQU9BO0lBQzFCLE1BQU1LLFNBQVNKLHNEQUFTQTtJQUV4QkwsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGVBQWVVLFNBQVM7WUFDdEIsSUFBSUYsUUFBUTtnQkFDVkMsT0FBT0UsSUFBSSxDQUFDO1lBQ2QsQ0FBQztRQUNIO1FBQ0FEO0lBQ0YsR0FBRztRQUFDRjtLQUFPO0lBRVgscUJBQ0UsOERBQUNJO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDUCxrREFBSUE7OEJBQ0gsNEVBQUNTO2tDQUFNOzs7Ozs7Ozs7Ozs4QkFFVCw4REFBQ0Q7OEJBQ0MsNEVBQUNGOzswQ0FDQyw4REFBQ0k7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7Ozs7OzBDQUNELDhEQUFDQTs7Ozs7MENBQ0QsOERBQUNDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNoQixvREFBU0E7MENBQ1IsNEVBQUNDLHVEQUFZQTtvQ0FDWFUsV0FBVTtvQ0FDVk0sYUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21ld29ya3Rlc3QvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7dXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTaWduZWRJbiwgU2lnbmVkT3V0LCBTaWduSW5CdXR0b24sIHVzZUF1dGh9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyB1c2VySWQgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBzaWduaW4oKSB7XG4gICAgICBpZiAodXNlcklkKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3RvZG9zXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBzaWduaW4oKTtcbiAgfSwgW3VzZXJJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTE2IGdyaWQtY29scy1mbHVpZFwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+V2VsY29tZSE8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aDE+V2VsY29tZSB0byB0aGUgdG9kbyBhcHAhPC9oMT5cbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8aDI+V2FubmEgbWFrZSB5b3VyIHRvZG8gbGlzdD8gcGxlYXNlIHNpZ25pbiE8L2gyPlxuICAgICAgICAgICAgPFNpZ25lZE91dD5cbiAgICAgICAgICAgICAgPFNpZ25JbkJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsPVwiL3RvZG9zXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2lnbmVkT3V0PlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiU2lnbmVkSW4iLCJTaWduZWRPdXQiLCJTaWduSW5CdXR0b24iLCJ1c2VBdXRoIiwidXNlUm91dGVyIiwiSGVhZCIsIkhvbWUiLCJ1c2VySWQiLCJyb3V0ZXIiLCJzaWduaW4iLCJwdXNoIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInRpdGxlIiwiaDEiLCJiciIsImgyIiwicmVkaXJlY3RVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "@clerk/nextjs":
/*!********************************!*\
  !*** external "@clerk/nextjs" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@clerk/nextjs");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();