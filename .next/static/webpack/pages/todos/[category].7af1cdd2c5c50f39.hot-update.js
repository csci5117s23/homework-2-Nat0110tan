"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todos/[category]",{

/***/ "./src/pages/todos/[category].js":
/*!***************************************!*\
  !*** ./src/pages/todos/[category].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ category; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction category() {\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { category  } = router.query;\n    const API_ENDPOINT = \"https://back-x5hb.api.codehooks.io/dev/todolist\";\n    const API_KEY = \"bed32666-b5b7-4998-97e1-21046bd9cfd2\";\n    const getCategoryData = async ()=>{\n        // const response = await fetch(`${API_ENDPOINT}?${queryParams.toString()}`, {\n        const response = await fetch(API_ENDPOINT + \"?category=\".concat(category), {\n            method: \"GET\",\n            headers: {\n                \"x-apikey\": API_KEY\n            }\n        });\n        const data = await response.json();\n        setLoading;\n        // update state -- configured earlier.\n        setItems(data);\n        setLoading(false);\n        console.log(\"it's a get category get request todos\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"we are geting data!\");\n        getCategoryData();\n    }, []);\n    console.log(items);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/todos\",\n                    className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                    children: \"All Todos\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todos/[category].js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todos/[category].js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"LOADING...\"\n            }, void 0, false, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todos/[category].js\",\n                lineNumber: 45,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"All Todos:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todos/[category].js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this),\n                    items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TodoItem, {\n                            content: item.content,\n                            category: item.category,\n                            createdOn: item.createdOn,\n                            id: item._id,\n                            completed: item.completed,\n                            fetchData: fetchData\n                        }, item._id, false, {\n                            fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todos/[category].js\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this))\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todos/[category].js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(category, \"NRa5PQTe78R0XZuW3zS8A8DrM/g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kb3MvW2NhdGVnb3J5XS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNjO0FBQ0g7QUFFekIsU0FBU0ksV0FBVzs7SUFDakMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDLElBQUk7SUFDdkMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTVEsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU0sRUFBQ0MsU0FBUSxFQUFDLEdBQUdLLE9BQU9DLEtBQUs7SUFFL0IsTUFBTUMsZUFBZUMsaURBQW9DO0lBQ3pELE1BQU1HLFVBQVVILHNDQUErQjtJQUUvQyxNQUFNSyxrQkFBa0IsVUFBWTtRQUNsQyw4RUFBOEU7UUFDOUUsTUFBTUMsV0FBVyxNQUFNQyxNQUFNUixlQUFlLGFBQXNCLE9BQVRQLFdBQVk7WUFDbkVnQixRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsWUFBWU47WUFBUTtRQUNqQztRQUNBLE1BQU1PLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtRQUNoQ2Y7UUFDQSxzQ0FBc0M7UUFDdENGLFNBQVNnQjtRQUNUZCxXQUFXLEtBQUs7UUFDaEJnQixRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUNBdkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkc0IsUUFBUUMsR0FBRyxDQUFDO1FBQ1pSO0lBQ0YsR0FBRyxFQUFFO0lBQ0xPLFFBQVFDLEdBQUcsQ0FBQ3BCO0lBRVoscUJBQ0UsOERBQUNxQjtRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7MEJBQ0MsNEVBQUM1QixrREFBSUE7b0JBQ0g2QixNQUFNO29CQUNORixXQUFVOzhCQUNYOzs7Ozs7Ozs7OztZQUtGcEIsd0JBQ0csOERBQUN1QjswQkFBSzs7Ozs7cUNBRU47O2tDQUNFLDhEQUFDQztrQ0FBRTs7Ozs7O29CQUNGMUIsTUFBTTJCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7NEJBRUNDLFNBQVNGLEtBQUtFLE9BQU87NEJBQ3JCL0IsVUFBVTZCLEtBQUs3QixRQUFROzRCQUN2QmdDLFdBQVdILEtBQUtHLFNBQVM7NEJBQ3pCQyxJQUFJSixLQUFLSyxHQUFHOzRCQUNaQyxXQUFXTixLQUFLTSxTQUFTOzRCQUN6QkMsV0FBV0E7MkJBTk5QLEtBQUtLLEdBQUc7Ozs7Ozs0QkFVcEI7Ozs7Ozs7QUFHVCxDQUFDO0dBM0R1QmxDOztRQUdQRCxrREFBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RvZG9zL1tjYXRlZ29yeV0uanM/YTE4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXRlZ29yeSgpIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7Y2F0ZWdvcnl9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IEFQSV9FTkRQT0lOVCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVDtcbiAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVk7XG5cbiAgY29uc3QgZ2V0Q2F0ZWdvcnlEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0VORFBPSU5UfT8ke3F1ZXJ5UGFyYW1zLnRvU3RyaW5nKCl9YCwge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX0VORFBPSU5UICsgYD9jYXRlZ29yeT0ke2NhdGVnb3J5fWAsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJ4LWFwaWtleVwiOiBBUElfS0VZIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBzZXRMb2FkaW5nXG4gICAgLy8gdXBkYXRlIHN0YXRlIC0tIGNvbmZpZ3VyZWQgZWFybGllci5cbiAgICBzZXRJdGVtcyhkYXRhKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcIml0J3MgYSBnZXQgY2F0ZWdvcnkgZ2V0IHJlcXVlc3QgdG9kb3NcIik7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ3ZSBhcmUgZ2V0aW5nIGRhdGEhXCIpO1xuICAgIGdldENhdGVnb3J5RGF0YSgpO1xuICB9LCBbXSk7XG4gIGNvbnNvbGUubG9nKGl0ZW1zKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPXtcIi90b2Rvc1wifVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICA+XG4gICAgICAgICAgQWxsIFRvZG9zXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8c3Bhbj5MT0FESU5HLi4uPC9zcGFuPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cD5BbGwgVG9kb3M6PC9wPlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8VG9kb0l0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uX2lkfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cbiAgICAgICAgICAgICAgICBjYXRlZ29yeT17aXRlbS5jYXRlZ29yeX1cbiAgICAgICAgICAgICAgICBjcmVhdGVkT249e2l0ZW0uY3JlYXRlZE9ufVxuICAgICAgICAgICAgICAgIGlkPXtpdGVtLl9pZH1cbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2l0ZW0uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgIGZldGNoRGF0YT17ZmV0Y2hEYXRhfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgPC9tYWluPlxuICApO1xufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJjYXRlZ29yeSIsIml0ZW1zIiwic2V0SXRlbXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInF1ZXJ5IiwiQVBJX0VORFBPSU5UIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsIkFQSV9LRVkiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwiZ2V0Q2F0ZWdvcnlEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsInNwYW4iLCJwIiwibWFwIiwiaXRlbSIsIlRvZG9JdGVtIiwiY29udGVudCIsImNyZWF0ZWRPbiIsImlkIiwiX2lkIiwiY29tcGxldGVkIiwiZmV0Y2hEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/todos/[category].js\n"));

/***/ })

});