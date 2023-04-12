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

/***/ "./src/components/todolist.js":
/*!************************************!*\
  !*** ./src/components/todolist.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction TodoItem(param) {\n    let { content , category , createdOn , id , completed , fetchData  } = param;\n    const API_ENDPOINT = \"https://back-x5hb.api.codehooks.io/dev/todolist\";\n    const API_KEY = \"bed32666-b5b7-4998-97e1-21046bd9cfd2\";\n    const handleDeleteButton = async (e)=>{\n        const url = API_ENDPOINT + \"/\" + id;\n        await fetch(url, {\n            method: \"DELETE\",\n            headers: {\n                \"x-apikey\": API_KEY\n            }\n        });\n        fetchData();\n    };\n    const handleDoneButton = async (e)=>{\n        // e.preventDefault();\n        const url = API_ENDPOINT + \"/\" + id;\n        await fetch(url, {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-apikey\": API_KEY\n            },\n            body: JSON.stringify({\n                content: content,\n                category: category,\n                createdOn: createdOn,\n                _id: id,\n                completed: true\n            })\n        });\n        fetchData();\n    };\n    const isCompleted = completed;\n    var button = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    if (!isCompleted) {\n        button = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleDoneButton,\n            className: \"text-center bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full\",\n            children: \"Done\"\n        }, void 0, false, {\n            fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/components/todolist.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this);\n    }\n    const preview = content.length > 30 ? \"\".concat(content.substring(0, 30), \"...\") : content;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"todo/\".concat(id),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: preview\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/components/todolist.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Created date: \",\n                            createdOn\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/components/todolist.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Category: \",\n                            category\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/components/todolist.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/components/todolist.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleDeleteButton,\n                className: \"text-center bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full\",\n                children: \"Delete\"\n            }, void 0, false, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/components/todolist.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            button\n        ]\n    }, id, true, {\n        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/components/todolist.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90b2RvbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFDZCxTQUFTQyxTQUFTLEtBT2hDLEVBQUU7UUFQOEIsRUFDL0JDLFFBQU8sRUFDUEMsU0FBUSxFQUNSQyxVQUFTLEVBQ1RDLEdBQUUsRUFDRkMsVUFBUyxFQUNUQyxVQUFTLEVBQ1YsR0FQZ0M7SUFRL0IsTUFBTUMsZUFBZTtJQUNyQixNQUFNQyxVQUFVO0lBRWhCLE1BQU1DLHFCQUFxQixPQUFPQyxJQUFNO1FBQ3RDLE1BQU1DLE1BQU1KLGVBQWUsTUFBTUg7UUFDakMsTUFBTVEsTUFBTUQsS0FBSztZQUNmRSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsWUFBWU47WUFBUTtRQUNqQztRQUNBRjtJQUNGO0lBRUEsTUFBTVMsbUJBQW1CLE9BQU9MLElBQU07UUFDcEMsc0JBQXNCO1FBQ3RCLE1BQU1DLE1BQU1KLGVBQWUsTUFBTUg7UUFDakMsTUFBTVEsTUFBTUQsS0FBSztZQUNmRSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixZQUFZTjtZQUNkO1lBQ0FRLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJqQixTQUFTQTtnQkFDVEMsVUFBVUE7Z0JBQ1ZDLFdBQVdBO2dCQUNYZ0IsS0FBS2Y7Z0JBQ0xDLFdBQVcsSUFBSTtZQUNqQjtRQUNGO1FBQ0FDO0lBQ0Y7SUFFQSxNQUFNYyxjQUFjZjtJQUNwQixJQUFJZ0IsdUJBQVM7SUFDYixJQUFJLENBQUNELGFBQWE7UUFDaEJDLHVCQUNFLDhEQUFDQTtZQUNDQyxTQUFTUDtZQUNUUSxXQUFVO3NCQUNYOzs7Ozs7SUFJTCxDQUFDO0lBRUQsTUFBTUMsVUFBVXZCLFFBQVF3QixNQUFNLEdBQUcsS0FBSyxHQUE0QixPQUF6QnhCLFFBQVF5QixTQUFTLENBQUMsR0FBRyxLQUFJLFNBQU96QixPQUFPO0lBQ2hGLHFCQUNFLDhEQUFDMEI7OzBCQUNDLDhEQUFDNUIsa0RBQUlBO2dCQUFDNkIsTUFBTSxRQUFXLE9BQUh4Qjs7a0NBQ2xCLDhEQUFDeUI7a0NBQUlMOzs7Ozs7a0NBQ0wsOERBQUNNOzs0QkFBRzs0QkFBZTNCOzs7Ozs7O2tDQUNuQiw4REFBQzJCOzs0QkFBRzs0QkFBVzVCOzs7Ozs7Ozs7Ozs7OzBCQUVqQiw4REFBQ21CO2dCQUNDQyxTQUFTYjtnQkFDVGMsV0FBVTswQkFDWDs7Ozs7O1lBR0FGOztPQVpPakI7Ozs7O0FBZWQsQ0FBQztLQXRFdUJKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RvZG9saXN0LmpzPzkwZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0l0ZW0oe1xuICBjb250ZW50LFxuICBjYXRlZ29yeSxcbiAgY3JlYXRlZE9uLFxuICBpZCxcbiAgY29tcGxldGVkLFxuICBmZXRjaERhdGEsXG59KSB7XG4gIGNvbnN0IEFQSV9FTkRQT0lOVCA9IFwiaHR0cHM6Ly9iYWNrLXg1aGIuYXBpLmNvZGVob29rcy5pby9kZXYvdG9kb2xpc3RcIjtcbiAgY29uc3QgQVBJX0tFWSA9IFwiYmVkMzI2NjYtYjViNy00OTk4LTk3ZTEtMjEwNDZiZDljZmQyXCI7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQnV0dG9uID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCB1cmwgPSBBUElfRU5EUE9JTlQgKyBcIi9cIiArIGlkO1xuICAgIGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogeyBcIngtYXBpa2V5XCI6IEFQSV9LRVkgfSxcbiAgICB9KTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb25lQnV0dG9uID0gYXN5bmMgKGUpID0+IHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXJsID0gQVBJX0VORFBPSU5UICsgXCIvXCIgKyBpZDtcbiAgICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJ4LWFwaWtleVwiOiBBUElfS0VZLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgICAgICBjcmVhdGVkT246IGNyZWF0ZWRPbixcbiAgICAgICAgX2lkOiBpZCxcbiAgICAgICAgY29tcGxldGVkOiB0cnVlLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH07XG5cbiAgY29uc3QgaXNDb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIHZhciBidXR0b24gPSA8PjwvPjtcbiAgaWYgKCFpc0NvbXBsZXRlZCkge1xuICAgIGJ1dHRvbiA9IChcbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlRG9uZUJ1dHRvbn1cbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC1ibGFjayBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiXG4gICAgICA+XG4gICAgICAgIERvbmVcbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBjb25zdCBwcmV2aWV3ID0gY29udGVudC5sZW5ndGggPiAzMCA/IGAke2NvbnRlbnQuc3Vic3RyaW5nKDAsIDMwKX0uLi5gIDogY29udGVudDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aWR9PlxuICAgICAgPExpbmsgaHJlZj17YHRvZG8vJHtpZH1gfT5cbiAgICAgICAgPGgxPntwcmV2aWV3fTwvaDE+XG4gICAgICAgIDxoMj5DcmVhdGVkIGRhdGU6IHtjcmVhdGVkT259PC9oMj5cbiAgICAgICAgPGgyPkNhdGVnb3J5OiB7Y2F0ZWdvcnl9PC9oMj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlQnV0dG9ufVxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgICAgID5cbiAgICAgICAgRGVsZXRlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtidXR0b259XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIlRvZG9JdGVtIiwiY29udGVudCIsImNhdGVnb3J5IiwiY3JlYXRlZE9uIiwiaWQiLCJjb21wbGV0ZWQiLCJmZXRjaERhdGEiLCJBUElfRU5EUE9JTlQiLCJBUElfS0VZIiwiaGFuZGxlRGVsZXRlQnV0dG9uIiwiZSIsInVybCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImhhbmRsZURvbmVCdXR0b24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIl9pZCIsImlzQ29tcGxldGVkIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsInByZXZpZXciLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJkaXYiLCJocmVmIiwiaDEiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/todolist.js\n"));

/***/ }),

/***/ "./src/pages/todos/[category].js":
/*!***************************************!*\
  !*** ./src/pages/todos/[category].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ category; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_todolist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/todolist */ \"./src/components/todolist.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction category() {\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { category  } = router.query;\n    console.log(category);\n    const API_ENDPOINT = \"https://back-x5hb.api.codehooks.io/dev/todolist\";\n    const API_KEY = \"bed32666-b5b7-4998-97e1-21046bd9cfd2\";\n    const getCategoryData = async ()=>{\n        // const response = await fetch(`${API_ENDPOINT}?${queryParams.toString()}`, {\n        const response = await fetch(API_ENDPOINT + \"?category=\".concat(category), {\n            method: \"GET\",\n            headers: {\n                \"x-apikey\": API_KEY\n            }\n        });\n        console.log(API_ENDPOINT + \"?category=\".concat(category));\n        const data = await response.json();\n        console.log(data);\n        // update state -- configured earlier.\n        setItems(data);\n        setLoading(false);\n        console.log(\"it's a get category get request todos\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"we are geting data!\");\n        getCategoryData();\n    }, []);\n    console.log(items);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/todos\",\n                    className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                    children: \"All Todos\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todos/[category].js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todos/[category].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"LOADING...\"\n            }, void 0, false, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todos/[category].js\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"All Todos:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todos/[category].js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this),\n                    items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_todolist__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            content: item.content,\n                            category: item.category,\n                            createdOn: item.createdOn,\n                            id: item._id,\n                            completed: item.completed,\n                            fetchData: fetchData\n                        }, item._id, false, {\n                            fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todos/[category].js\",\n                            lineNumber: 53,\n                            columnNumber: 15\n                        }, this))\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todos/[category].js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(category, \"NRa5PQTe78R0XZuW3zS8A8DrM/g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9kb3MvW2NhdGVnb3J5XS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDYztBQUNIO0FBQ0s7QUFFOUIsU0FBU0ssV0FBVzs7SUFDakMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDLElBQUk7SUFDdkMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTVMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU0sRUFBQ0UsU0FBUSxFQUFDLEdBQUdLLE9BQU9DLEtBQUs7SUFDL0JDLFFBQVFDLEdBQUcsQ0FBQ1I7SUFFWixNQUFNUyxlQUFlQyxpREFBb0M7SUFDekQsTUFBTUcsVUFBVUgsc0NBQStCO0lBRS9DLE1BQU1LLGtCQUFrQixVQUFZO1FBQ2xDLDhFQUE4RTtRQUM5RSxNQUFNQyxXQUFXLE1BQU1DLE1BQU1SLGVBQWUsYUFBc0IsT0FBVFQsV0FBWTtZQUNuRWtCLFFBQVE7WUFDUkMsU0FBUztnQkFBRSxZQUFZTjtZQUFRO1FBQ2pDO1FBQ0FOLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZSxhQUFzQixPQUFUVDtRQUN4QyxNQUFNb0IsT0FBTyxNQUFNSixTQUFTSyxJQUFJO1FBQ2hDZCxRQUFRQyxHQUFHLENBQUNZO1FBQ1osc0NBQXNDO1FBQ3RDbEIsU0FBU2tCO1FBQ1RoQixXQUFXLEtBQUs7UUFDaEJHLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBQ0FYLGdEQUFTQSxDQUFDLElBQU07UUFDZFUsUUFBUUMsR0FBRyxDQUFDO1FBQ1pPO0lBQ0YsR0FBRyxFQUFFO0lBQ0xSLFFBQVFDLEdBQUcsQ0FBQ1A7SUFFWixxQkFDRSw4REFBQ3FCO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQzswQkFDQyw0RUFBQzdCLGtEQUFJQTtvQkFDSDhCLE1BQU07b0JBQ05GLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7O1lBS0ZwQix3QkFDRyw4REFBQ3VCOzBCQUFLOzs7OztxQ0FFTjs7a0NBQ0UsOERBQUNDO2tDQUFFOzs7Ozs7b0JBQ0YxQixNQUFNMkIsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDOUIsNERBQVFBOzRCQUVQK0IsU0FBU0QsS0FBS0MsT0FBTzs0QkFDckI5QixVQUFVNkIsS0FBSzdCLFFBQVE7NEJBQ3ZCK0IsV0FBV0YsS0FBS0UsU0FBUzs0QkFDekJDLElBQUlILEtBQUtJLEdBQUc7NEJBQ1pDLFdBQVdMLEtBQUtLLFNBQVM7NEJBQ3pCQyxXQUFXQTsyQkFOTk4sS0FBS0ksR0FBRzs7Ozs7OzRCQVVwQjs7Ozs7OztBQUdULENBQUM7R0E3RHVCakM7O1FBR1BGLGtEQUFTQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdG9kb3MvW2NhdGVnb3J5XS5qcz9hMThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy90b2RvbGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXRlZ29yeSgpIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7Y2F0ZWdvcnl9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zb2xlLmxvZyhjYXRlZ29yeSk7XG5cbiAgY29uc3QgQVBJX0VORFBPSU5UID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UO1xuICBjb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWTtcblxuICBjb25zdCBnZXRDYXRlZ29yeURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfRU5EUE9JTlR9PyR7cXVlcnlQYXJhbXMudG9TdHJpbmcoKX1gLCB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQgKyBgP2NhdGVnb3J5PSR7Y2F0ZWdvcnl9YCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczogeyBcIngtYXBpa2V5XCI6IEFQSV9LRVkgfSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhBUElfRU5EUE9JTlQgKyBgP2NhdGVnb3J5PSR7Y2F0ZWdvcnl9YCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyB1cGRhdGUgc3RhdGUgLS0gY29uZmlndXJlZCBlYXJsaWVyLlxuICAgIHNldEl0ZW1zKGRhdGEpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIGNvbnNvbGUubG9nKFwiaXQncyBhIGdldCBjYXRlZ29yeSBnZXQgcmVxdWVzdCB0b2Rvc1wiKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIndlIGFyZSBnZXRpbmcgZGF0YSFcIik7XG4gICAgZ2V0Q2F0ZWdvcnlEYXRhKCk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2coaXRlbXMpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9e1wiL3RvZG9zXCJ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgID5cbiAgICAgICAgICBBbGwgVG9kb3NcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxzcGFuPkxPQURJTkcuLi48L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPkFsbCBUb2Rvczo8L3A+XG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxUb2RvSXRlbVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5faWR9XG4gICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgIGNyZWF0ZWRPbj17aXRlbS5jcmVhdGVkT259XG4gICAgICAgICAgICAgICAgaWQ9e2l0ZW0uX2lkfVxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17aXRlbS5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgZmV0Y2hEYXRhPXtmZXRjaERhdGF9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICA8L21haW4+XG4gICk7XG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIlRvZG9JdGVtIiwiY2F0ZWdvcnkiLCJpdGVtcyIsInNldEl0ZW1zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJBUElfRU5EUE9JTlQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UIiwiQVBJX0tFWSIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJnZXRDYXRlZ29yeURhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJzcGFuIiwicCIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3JlYXRlZE9uIiwiaWQiLCJfaWQiLCJjb21wbGV0ZWQiLCJmZXRjaERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/todos/[category].js\n"));

/***/ })

});