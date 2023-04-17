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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/nextjs */ \"@clerk/nextjs\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home() {\n    const { userId  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function signin() {\n            if (userId) {\n                router.push(\"/todos\");\n            }\n        }\n        signin();\n    }, [\n        userId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid gap-16 grid-cols-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Welcome!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Welcome to the todo app!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Wanna make your todo list? please signin!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.SignedOut, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.SignInButton, {\n                                    className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                                    redirectUrl: \"/todos\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tanyiling/Desktop/sp23/3081/homework-2-Nat0110tan/src/pages/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ3lDO0FBQ2xDO0FBQ1g7QUFFZCxTQUFTTyxPQUFPO0lBQzdCLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdKLHNEQUFPQTtJQUMxQixNQUFNSyxTQUFTSixzREFBU0E7SUFFeEJMLGdEQUFTQSxDQUFDLElBQU07UUFDZCxlQUFlVSxTQUFTO1lBQ3RCLElBQUlGLFFBQVE7Z0JBQ1ZDLE9BQU9FLElBQUksQ0FBQztZQUNkLENBQUM7UUFDSDtRQUNBRDtJQUNGLEdBQUc7UUFBQ0Y7S0FBTztJQUVYLHFCQUNFLDhEQUFDSTtRQUFLQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ1Asa0RBQUlBOzhCQUNILDRFQUFDUztrQ0FBTTs7Ozs7Ozs7Ozs7OEJBRVQsOERBQUNEOzhCQUNDLDRFQUFDRjs7MENBQ0MsOERBQUNJOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDOzs7OzswQ0FDRCw4REFBQ0E7Ozs7OzBDQUNELDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDaEIsb0RBQVNBOzBDQUNSLDRFQUFDQyx1REFBWUE7b0NBQ1hVLFdBQVU7b0NBQ1ZNLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXdvcmt0ZXN0Ly4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge3VzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2lnbmVkSW4sIFNpZ25lZE91dCwgU2lnbkluQnV0dG9uLCB1c2VBdXRofSBmcm9tIFwiQGNsZXJrL25leHRqc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgdXNlcklkIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gc2lnbmluKCkge1xuICAgICAgaWYgKHVzZXJJZCkge1xuICAgICAgICByb3V0ZXIucHVzaChcIi90b2Rvc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2lnbmluKCk7XG4gIH0sIFt1c2VySWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xNiBncmlkLWNvbHMtZmx1aWRcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPldlbGNvbWUhPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gdGhlIHRvZG8gYXBwITwvaDE+XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPGgyPldhbm5hIG1ha2UgeW91ciB0b2RvIGxpc3Q/IHBsZWFzZSBzaWduaW4hPC9oMj5cbiAgICAgICAgICAgIDxTaWduZWRPdXQ+XG4gICAgICAgICAgICAgIDxTaWduSW5CdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICByZWRpcmVjdFVybD1cIi90b2Rvc1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NpZ25lZE91dD5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlNpZ25lZEluIiwiU2lnbmVkT3V0IiwiU2lnbkluQnV0dG9uIiwidXNlQXV0aCIsInVzZVJvdXRlciIsIkhlYWQiLCJIb21lIiwidXNlcklkIiwicm91dGVyIiwic2lnbmluIiwicHVzaCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJ0aXRsZSIsImgxIiwiYnIiLCJoMiIsInJlZGlyZWN0VXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

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