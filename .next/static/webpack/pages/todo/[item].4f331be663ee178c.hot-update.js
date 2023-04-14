"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todo/[item]",{

/***/ "./src/pages/todo/[item].js":
/*!**********************************!*\
  !*** ./src/pages/todo/[item].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Item() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { item  } = router.query;\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [updatedContent, setUpdatedContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const API_ENDPOINT = \"https://back-x5hb.api.codehooks.io/dev\";\n    const API_KEY = \"bed32666-b5b7-4998-97e1-21046bd9cfd2\";\n    const url = API_ENDPOINT + \"/todolist\" + \"/\" + item;\n    const getItem = async ()=>{\n        // const url = process.env.API_ENDPOINT + \"/\" + id;\n        const response = await fetch(url, {\n            method: \"GET\",\n            headers: {\n                \"x-apikey\": API_KEY\n            }\n        });\n        const re = await response.json();\n        setData(re);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getItem();\n    }, []);\n    const handleEdit = ()=>{\n        console.log(\"clicked on edit!\");\n        setIsEditing(true);\n    };\n    const handleCancel = ()=>{\n        setIsEditing(false);\n        setUpdatedContent(data.content);\n    };\n    const handleUpdate = async (e)=>{\n        e.preventDefault();\n        const response = await fetch(url, {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-apikey\": API_KEY\n            },\n            body: JSON.stringify({\n                category: data.category,\n                content: updatedContent,\n                _id: data._id,\n                createdOn: data.createdOn,\n                completed: data.completed\n            })\n        });\n        setIsEditing(false);\n        getItem();\n    };\n    const handleContentChange = (event)=>{\n        setUpdatedContent(event.target.value);\n    };\n    const handleDoneButton = async (e)=>{\n        // e.preventDefault();\n        const url = API_ENDPOINT + \"/todolist\" + \"/\" + item;\n        await fetch(url, {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-apikey\": API_KEY\n            },\n            body: JSON.stringify({\n                content: data.content,\n                category: data.category,\n                createdOn: data.createdOn,\n                _id: data.id,\n                completed: true\n            })\n        });\n        getItem();\n    };\n    const isCompleted = data.completed;\n    var button = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    if (!isCompleted) {\n        button = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleDoneButton,\n            className: \"text-center bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full\",\n            children: \"Done\"\n        }, void 0, false, {\n            fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, this);\n    }\n    // const edititngbox = <></>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/todos\",\n                    className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                    children: \"All Todos\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Content: \",\n                            data.content\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Category: \",\n                            data.category\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Created date \",\n                            data.createdOn\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: data.completed\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            button,\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                        value: updatedContent,\n                        onChange: handleContentChange\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 136,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                        onClick: handleUpdate,\n                        children: \"Update\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 141,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                        onClick: handleCancel,\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 147,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                lineNumber: 135,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                    onClick: handleEdit,\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                    lineNumber: 156,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                lineNumber: 155,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, this);\n} // \"use client\";\n // import Link from \"next/link\";\n // import { useState } from \"react\";\n // import { useRouter } from \"next/router\";\n // export default async function Item() {\n // const [isEditing, setIsEditing] = useState(false);\n // const [updatedContent, setUpdatedContent] = useState(\"\");\n //   const router = useRouter();\n //   const { item } = router.query;\n //   console.log(item);\n // const API_ENDPOINT = \"https://back-x5hb.api.codehooks.io/dev/todolist\";\n // const API_KEY = \"bed32666-b5b7-4998-97e1-21046bd9cfd2\";\n // const url = API_ENDPOINT + \"/\" + id\n // const response = await fetch(url, {\n //   method: \"GET\",\n //   headers: { \"x-apikey\": API_KEY },\n // });\n // const data = await response.json();\n // const handleEdit = () => {\n //   console.log(\"clicked on edit!\");\n //   setIsEditing(true);\n // };\n // const handleCancel = () => {\n //   setIsEditing(false);\n //   setUpdatedContent(data.content);\n // };\n // const handleUpdate = async (e) => {\n //   e.preventDefault();\n //   const response = await fetch(url, {\n //     method: \"PATCH\",\n //     headers: {\n //       \"Content-Type\": \"application/json\",\n //       \"x-apikey\": API_KEY,\n //     },\n //     body: JSON.stringify({\n //       ...data,\n //       content: updatedContent,\n //     }),\n //   });\n //   console.log(response);\n //   setIsEditing(false);\n // };\n // const handleContentChange = (event) => {\n //   setUpdatedContent(event.target.value);\n // };\n // // const edititngbox = <></>;\n // return (\n //   <div>\n //     <h2>Content: {data.content}</h2>\n //     <h2>Category: {data.category}</h2>\n //     <h2>Created date {data.createdOn}</h2>\n //     <h2>{data.completed}</h2>\n //     <Link\n //       href={\"/todos\"}\n //       className=\"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"\n //     >\n //       All Todos\n //     </Link>\n //     {/* <button\n //       className=\"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"\n //       onClick={() => setIsEditing(true)}\n //     >\n //       Edit\n //     </button> */}\n //     {/* <form style=\"display: none;\">\n //       <input type=\"hidden\" ClassName=\"hidden\" value=\"{{data.post_id}}\" />\n //       <input type=\"hidden\" id=\"update{{data.post_id}}\" name=\"update\" />\n //       <div id=\"editor{{data.post_id}}\" style=\"height: 50vh;\"></div>\n //       <button className=\"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\" id =\"update-btn\">Update</button>\n //       <button class=\"pure-button\" type=\"button\" id=\"cancel-btn\">Cancel</button>\n //     </form> */}\n //     {/* <h2>Content: {data.content}</h2> */}\n //     {isEditing ? (\n //       <div>\n //         <input\n //           className=\"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\"\n //           value={updatedContent}\n //           onChange={handleContentChange}\n //         />\n //         <button\n //           className=\"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"\n //           onClick={handleUpdate}\n //         >\n //           Update\n //         </button>\n //         <button\n //           className=\"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"\n //           onClick={handleCancel}\n //         >\n //           Cancel\n //         </button>\n //       </div>\n //     ) : (\n //       <div>\n //         <button\n //           className=\"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"\n //           onClick={handleEdit}\n //         >\n //           Edit\n //         </button>\n //       </div>\n //     )}\n //   </div>\n // );\n // }\n_s(Item, \"vm/BO8H9ESFg5rXfto/WG1LTVWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L1tpdGVtXS5qcz8yMmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VBdXRoLCBVc2VyQnV0dG9uLCBTaWduSW4gfSBmcm9tIFwiQGNsZXJrL25leHRqc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaXRlbSB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXBkYXRlZENvbnRlbnQsIHNldFVwZGF0ZWRDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgQVBJX0VORFBPSU5UID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UO1xuICBjb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWTtcbiAgY29uc3QgdXJsID0gQVBJX0VORFBPSU5UICsgXCIvdG9kb2xpc3RcIiArIFwiL1wiICsgaXRlbTtcbiAgY29uc3QgZ2V0SXRlbSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5BUElfRU5EUE9JTlQgKyBcIi9cIiArIGlkO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwieC1hcGlrZXlcIjogQVBJX0tFWX1cbiAgICB9KTtcbiAgICBjb25zdCByZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBzZXREYXRhKHJlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0SXRlbSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRWRpdCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWQgb24gZWRpdCFcIik7XG4gICAgc2V0SXNFZGl0aW5nKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAgIHNldFVwZGF0ZWRDb250ZW50KGRhdGEuY29udGVudCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJ4LWFwaWtleVwiOiBBUElfS0VZLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIGNvbnRlbnQ6IHVwZGF0ZWRDb250ZW50LFxuICAgICAgICBfaWQ6IGRhdGEuX2lkLFxuICAgICAgICBjcmVhdGVkT246IGRhdGEuY3JlYXRlZE9uLFxuICAgICAgICBjb21wbGV0ZWQ6IGRhdGEuY29tcGxldGVkLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgICBnZXRJdGVtKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29udGVudENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFVwZGF0ZWRDb250ZW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRG9uZUJ1dHRvbiA9IGFzeW5jIChlKSA9PiB7XG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVybCA9IEFQSV9FTkRQT0lOVCArIFwiL3RvZG9saXN0XCIgKyBcIi9cIiArIGl0ZW07XG4gICAgYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwieC1hcGlrZXlcIjogQVBJX0tFWSxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIGNyZWF0ZWRPbjogZGF0YS5jcmVhdGVkT24sXG4gICAgICAgIF9pZDogZGF0YS5pZCxcbiAgICAgICAgY29tcGxldGVkOiB0cnVlLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgZ2V0SXRlbSgpO1xuICB9O1xuXG4gIGNvbnN0IGlzQ29tcGxldGVkID0gZGF0YS5jb21wbGV0ZWQ7XG4gIHZhciBidXR0b24gPSA8PjwvPjtcbiAgaWYgKCFpc0NvbXBsZXRlZCkge1xuICAgIGJ1dHRvbiA9IChcbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlRG9uZUJ1dHRvbn1cbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC1ibGFjayBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiXG4gICAgICA+XG4gICAgICAgIERvbmVcbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBcblxuXG5cblxuICAvLyBjb25zdCBlZGl0aXRuZ2JveCA9IDw+PC8+O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9e1wiL3RvZG9zXCJ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgID5cbiAgICAgICAgICBBbGwgVG9kb3NcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+Q29udGVudDoge2RhdGEuY29udGVudH08L2gyPlxuICAgICAgICA8aDI+Q2F0ZWdvcnk6IHtkYXRhLmNhdGVnb3J5fTwvaDI+XG4gICAgICAgIDxoMj5DcmVhdGVkIGRhdGUge2RhdGEuY3JlYXRlZE9ufTwvaDI+XG4gICAgICAgIDxoMj57ZGF0YS5jb21wbGV0ZWR9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAge2J1dHRvbn1cblxuICAgICAgey8qIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIlxuICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKHRydWUpfVxuICAgID5cbiAgICAgIEVkaXRcbiAgICA8L2J1dHRvbj4gKi99XG4gICAgICB7LyogPGZvcm0gc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBDbGFzc05hbWU9XCJoaWRkZW5cIiB2YWx1ZT1cInt7ZGF0YS5wb3N0X2lkfX1cIiAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBpZD1cInVwZGF0ZXt7ZGF0YS5wb3N0X2lkfX1cIiBuYW1lPVwidXBkYXRlXCIgLz5cbiAgICAgIDxkaXYgaWQ9XCJlZGl0b3J7e2RhdGEucG9zdF9pZH19XCIgc3R5bGU9XCJoZWlnaHQ6IDUwdmg7XCI+PC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIiBpZCA9XCJ1cGRhdGUtYnRuXCI+VXBkYXRlPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicHVyZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWwtYnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgPC9mb3JtPiAqL31cbiAgICAgIHsvKiA8aDI+Q29udGVudDoge2RhdGEuY29udGVudH08L2gyPiAqL31cbiAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgIHZhbHVlPXt1cGRhdGVkQ29udGVudH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDb250ZW50Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGRhdGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUVkaXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRWRpdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9tYWluPlxuICApO1xufVxuLy8gXCJ1c2UgY2xpZW50XCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBJdGVtKCkge1xuXG4gIC8vIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IFt1cGRhdGVkQ29udGVudCwgc2V0VXBkYXRlZENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuLy8gICBjb25zdCB7IGl0ZW0gfSA9IHJvdXRlci5xdWVyeTtcbi8vICAgY29uc29sZS5sb2coaXRlbSk7XG5cbiAgLy8gY29uc3QgQVBJX0VORFBPSU5UID0gXCJodHRwczovL2JhY2steDVoYi5hcGkuY29kZWhvb2tzLmlvL2Rldi90b2RvbGlzdFwiO1xuICAvLyBjb25zdCBBUElfS0VZID0gXCJiZWQzMjY2Ni1iNWI3LTQ5OTgtOTdlMS0yMTA0NmJkOWNmZDJcIjtcbiAgLy8gY29uc3QgdXJsID0gQVBJX0VORFBPSU5UICsgXCIvXCIgKyBpZFxuICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAvLyAgIG1ldGhvZDogXCJHRVRcIixcbiAgLy8gICBoZWFkZXJzOiB7IFwieC1hcGlrZXlcIjogQVBJX0tFWSB9LFxuICAvLyB9KTtcbiAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAvLyBjb25zdCBoYW5kbGVFZGl0ID0gKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCBvbiBlZGl0IVwiKTtcbiAgLy8gICBzZXRJc0VkaXRpbmcodHJ1ZSk7XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAvLyAgIHNldElzRWRpdGluZyhmYWxzZSk7XG4gIC8vICAgc2V0VXBkYXRlZENvbnRlbnQoZGF0YS5jb250ZW50KTtcbiAgLy8gfTtcblxuICAvLyBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAoZSkgPT4ge1xuICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAvLyAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gIC8vICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAvLyAgICAgICBcIngtYXBpa2V5XCI6IEFQSV9LRVksXG4gIC8vICAgICB9LFxuICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAvLyAgICAgICAuLi5kYXRhLFxuICAvLyAgICAgICBjb250ZW50OiB1cGRhdGVkQ29udGVudCxcbiAgLy8gICAgIH0pLFxuICAvLyAgIH0pO1xuICAvLyAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgLy8gICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAvLyB9O1xuXG4gIC8vIGNvbnN0IGhhbmRsZUNvbnRlbnRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgLy8gICBzZXRVcGRhdGVkQ29udGVudChldmVudC50YXJnZXQudmFsdWUpO1xuICAvLyB9O1xuXG4gIC8vIC8vIGNvbnN0IGVkaXRpdG5nYm94ID0gPD48Lz47XG5cbiAgLy8gcmV0dXJuIChcbiAgLy8gICA8ZGl2PlxuICAvLyAgICAgPGgyPkNvbnRlbnQ6IHtkYXRhLmNvbnRlbnR9PC9oMj5cbiAgLy8gICAgIDxoMj5DYXRlZ29yeToge2RhdGEuY2F0ZWdvcnl9PC9oMj5cbiAgLy8gICAgIDxoMj5DcmVhdGVkIGRhdGUge2RhdGEuY3JlYXRlZE9ufTwvaDI+XG4gIC8vICAgICA8aDI+e2RhdGEuY29tcGxldGVkfTwvaDI+XG4gIC8vICAgICA8TGlua1xuICAvLyAgICAgICBocmVmPXtcIi90b2Rvc1wifVxuICAvLyAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgLy8gICAgID5cbiAgLy8gICAgICAgQWxsIFRvZG9zXG4gIC8vICAgICA8L0xpbms+XG4gIC8vICAgICB7LyogPGJ1dHRvblxuICAvLyAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgLy8gICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKHRydWUpfVxuICAvLyAgICAgPlxuICAvLyAgICAgICBFZGl0XG4gIC8vICAgICA8L2J1dHRvbj4gKi99XG4gIC8vICAgICB7LyogPGZvcm0gc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAvLyAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIENsYXNzTmFtZT1cImhpZGRlblwiIHZhbHVlPVwie3tkYXRhLnBvc3RfaWR9fVwiIC8+XG4gIC8vICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJ1cGRhdGV7e2RhdGEucG9zdF9pZH19XCIgbmFtZT1cInVwZGF0ZVwiIC8+XG4gIC8vICAgICAgIDxkaXYgaWQ9XCJlZGl0b3J7e2RhdGEucG9zdF9pZH19XCIgc3R5bGU9XCJoZWlnaHQ6IDUwdmg7XCI+PC9kaXY+XG4gIC8vICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiIGlkID1cInVwZGF0ZS1idG5cIj5VcGRhdGU8L2J1dHRvbj5cbiAgLy8gICAgICAgPGJ1dHRvbiBjbGFzcz1cInB1cmUtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsLWJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAvLyAgICAgPC9mb3JtPiAqL31cbiAgLy8gICAgIHsvKiA8aDI+Q29udGVudDoge2RhdGEuY29udGVudH08L2gyPiAqL31cbiAgLy8gICAgIHtpc0VkaXRpbmcgPyAoXG4gIC8vICAgICAgIDxkaXY+XG4gIC8vICAgICAgICAgPGlucHV0XG4gIC8vICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgLy8gICAgICAgICAgIHZhbHVlPXt1cGRhdGVkQ29udGVudH1cbiAgLy8gICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDb250ZW50Q2hhbmdlfVxuICAvLyAgICAgICAgIC8+XG4gIC8vICAgICAgICAgPGJ1dHRvblxuICAvLyAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiXG4gIC8vICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGRhdGV9XG4gIC8vICAgICAgICAgPlxuICAvLyAgICAgICAgICAgVXBkYXRlXG4gIC8vICAgICAgICAgPC9idXR0b24+XG4gIC8vICAgICAgICAgPGJ1dHRvblxuICAvLyAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiXG4gIC8vICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYW5jZWx9XG4gIC8vICAgICAgICAgPlxuICAvLyAgICAgICAgICAgQ2FuY2VsXG4gIC8vICAgICAgICAgPC9idXR0b24+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgKSA6IChcbiAgLy8gICAgICAgPGRpdj5cbiAgLy8gICAgICAgICA8YnV0dG9uXG4gIC8vICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgLy8gICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUVkaXR9XG4gIC8vICAgICAgICAgPlxuICAvLyAgICAgICAgICAgRWRpdFxuICAvLyAgICAgICAgIDwvYnV0dG9uPlxuICAvLyAgICAgICA8L2Rpdj5cbiAgLy8gICAgICl9XG4gIC8vICAgPC9kaXY+XG4gIC8vICk7XG4vLyB9XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidXNlQXV0aCIsIlVzZXJCdXR0b24iLCJTaWduSW4iLCJJdGVtIiwicm91dGVyIiwiaXRlbSIsInF1ZXJ5IiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwidXBkYXRlZENvbnRlbnQiLCJzZXRVcGRhdGVkQ29udGVudCIsImRhdGEiLCJzZXREYXRhIiwiQVBJX0VORFBPSU5UIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsIkFQSV9LRVkiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwidXJsIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicmUiLCJqc29uIiwiaGFuZGxlRWRpdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYW5jZWwiLCJjb250ZW50IiwiaGFuZGxlVXBkYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXRlZ29yeSIsIl9pZCIsImNyZWF0ZWRPbiIsImNvbXBsZXRlZCIsImhhbmRsZUNvbnRlbnRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRG9uZUJ1dHRvbiIsImlkIiwiaXNDb21wbGV0ZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwibWFpbiIsImRpdiIsImhyZWYiLCJoMiIsImlucHV0Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/todo/[item].js\n"));

/***/ })

});