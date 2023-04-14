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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Item; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Item() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { item  } = router.query;\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [updatedContent, setUpdatedContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const API_ENDPOINT = \"https://back-x5hb.api.codehooks.io/dev\";\n    const API_KEY = \"bed32666-b5b7-4998-97e1-21046bd9cfd2\";\n    const { isLoaded , userId , sessionId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const url = API_ENDPOINT + \"/todolist\" + \"/\" + item;\n    const getItem = async ()=>{\n        // const url = process.env.API_ENDPOINT + \"/\" + id;\n        const response = await fetch(url, {\n            method: \"GET\",\n            headers: {\n                \"x-apikey\": API_KEY\n            }\n        });\n        const re = await response.json();\n        setData(re);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getItem();\n    }, []);\n    const handleEdit = ()=>{\n        console.log(\"clicked on edit!\");\n        setIsEditing(true);\n    };\n    const handleCancel = ()=>{\n        setIsEditing(false);\n        setUpdatedContent(data.content);\n    };\n    const handleUpdate = async (e)=>{\n        e.preventDefault();\n        const response = await fetch(url, {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-apikey\": API_KEY\n            },\n            body: JSON.stringify({\n                category: data.category,\n                content: updatedContent,\n                _id: data._id,\n                createdOn: data.createdOn,\n                completed: data.completed\n            })\n        });\n        setIsEditing(false);\n        getItem();\n    };\n    const handleContentChange = (event)=>{\n        setUpdatedContent(event.target.value);\n    };\n    const handleDoneButton = async (e)=>{\n        // e.preventDefault();\n        const url = API_ENDPOINT + \"/todolist\" + \"/\" + item;\n        await fetch(url, {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"x-apikey\": API_KEY\n            },\n            body: JSON.stringify({\n                content: data.content,\n                category: data.category,\n                createdOn: data.createdOn,\n                _id: data.id,\n                completed: true\n            })\n        });\n        getItem();\n    };\n    const isCompleted = data.completed;\n    var button = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    if (!isCompleted) {\n        button = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleDoneButton,\n            className: \"text-center bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full\",\n            children: \"Done\"\n        }, void 0, false, {\n            fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n            lineNumber: 88,\n            columnNumber: 7\n        }, this);\n    }\n    // const edititngbox = <></>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/todos\",\n                    className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                    children: \"All Todos\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Content: \",\n                            data.content\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Category: \",\n                            data.category\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Created date \",\n                            data.createdOn\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: data.completed\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            button,\n            isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                        value: updatedContent,\n                        onChange: handleContentChange\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 138,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                        onClick: handleUpdate,\n                        children: \"Update\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 143,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                        onClick: handleCancel,\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                        lineNumber: 149,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                lineNumber: 137,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                    onClick: handleEdit,\n                    children: \"Edit\"\n                }, void 0, false, {\n                    fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                    lineNumber: 158,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n                lineNumber: 157,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/pages/todo/[item].js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n} // \"use client\";\n // import Link from \"next/link\";\n // import { useState } from \"react\";\n // import { useRouter } from \"next/router\";\n // export default async function Item() {\n // const [isEditing, setIsEditing] = useState(false);\n // const [updatedContent, setUpdatedContent] = useState(\"\");\n //   const router = useRouter();\n //   const { item } = router.query;\n //   console.log(item);\n // const API_ENDPOINT = \"https://back-x5hb.api.codehooks.io/dev/todolist\";\n // const API_KEY = \"bed32666-b5b7-4998-97e1-21046bd9cfd2\";\n // const url = API_ENDPOINT + \"/\" + id\n // const response = await fetch(url, {\n //   method: \"GET\",\n //   headers: { \"x-apikey\": API_KEY },\n // });\n // const data = await response.json();\n // const handleEdit = () => {\n //   console.log(\"clicked on edit!\");\n //   setIsEditing(true);\n // };\n // const handleCancel = () => {\n //   setIsEditing(false);\n //   setUpdatedContent(data.content);\n // };\n // const handleUpdate = async (e) => {\n //   e.preventDefault();\n //   const response = await fetch(url, {\n //     method: \"PATCH\",\n //     headers: {\n //       \"Content-Type\": \"application/json\",\n //       \"x-apikey\": API_KEY,\n //     },\n //     body: JSON.stringify({\n //       ...data,\n //       content: updatedContent,\n //     }),\n //   });\n //   console.log(response);\n //   setIsEditing(false);\n // };\n // const handleContentChange = (event) => {\n //   setUpdatedContent(event.target.value);\n // };\n // // const edititngbox = <></>;\n // return (\n //   <div>\n //     <h2>Content: {data.content}</h2>\n //     <h2>Category: {data.category}</h2>\n //     <h2>Created date {data.createdOn}</h2>\n //     <h2>{data.completed}</h2>\n //     <Link\n //       href={\"/todos\"}\n //       className=\"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"\n //     >\n //       All Todos\n //     </Link>\n //     {/* <button\n //       className=\"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"\n //       onClick={() => setIsEditing(true)}\n //     >\n //       Edit\n //     </button> */}\n //     {/* <form style=\"display: none;\">\n //       <input type=\"hidden\" ClassName=\"hidden\" value=\"{{data.post_id}}\" />\n //       <input type=\"hidden\" id=\"update{{data.post_id}}\" name=\"update\" />\n //       <div id=\"editor{{data.post_id}}\" style=\"height: 50vh;\"></div>\n //       <button className=\"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\" id =\"update-btn\">Update</button>\n //       <button class=\"pure-button\" type=\"button\" id=\"cancel-btn\">Cancel</button>\n //     </form> */}\n //     {/* <h2>Content: {data.content}</h2> */}\n //     {isEditing ? (\n //       <div>\n //         <input\n //           className=\"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\"\n //           value={updatedContent}\n //           onChange={handleContentChange}\n //         />\n //         <button\n //           className=\"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"\n //           onClick={handleUpdate}\n //         >\n //           Update\n //         </button>\n //         <button\n //           className=\"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"\n //           onClick={handleCancel}\n //         >\n //           Cancel\n //         </button>\n //       </div>\n //     ) : (\n //       <div>\n //         <button\n //           className=\"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\"\n //           onClick={handleEdit}\n //         >\n //           Edit\n //         </button>\n //       </div>\n //     )}\n //   </div>\n // );\n // }\n_s(Item, \"06QK7P7IRVnPNzNJgTaFXHxpKPc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = Item;\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO0dBcFJvQjVCOztRQUNQSixrREFBU0E7UUFPMEJDLGtEQUFPQTs7O0tBUm5DRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdG9kby9baXRlbV0uanM/MjJiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQXV0aCwgVXNlckJ1dHRvbiwgU2lnbkluIH0gZnJvbSBcIkBjbGVyay9uZXh0anNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGl0ZW0gfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VwZGF0ZWRDb250ZW50LCBzZXRVcGRhdGVkQ29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IEFQSV9FTkRQT0lOVCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVDtcbiAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVk7XG4gIGNvbnN0IHsgaXNMb2FkZWQsIHVzZXJJZCwgc2Vzc2lvbklkLCBnZXRUb2tlbiB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB1cmwgPSBBUElfRU5EUE9JTlQgKyBcIi90b2RvbGlzdFwiICsgXCIvXCIgKyBpdGVtO1xuICBjb25zdCBnZXRJdGVtID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52LkFQSV9FTkRQT0lOVCArIFwiL1wiICsgaWQ7XG4gICAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJ4LWFwaWtleVwiOiBBUElfS0VZfVxuICAgIH0pO1xuICAgIGNvbnN0IHJlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHNldERhdGEocmUpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRJdGVtKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVFZGl0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZCBvbiBlZGl0IVwiKTtcbiAgICBzZXRJc0VkaXRpbmcodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIHNldElzRWRpdGluZyhmYWxzZSk7XG4gICAgc2V0VXBkYXRlZENvbnRlbnQoZGF0YS5jb250ZW50KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIngtYXBpa2V5XCI6IEFQSV9LRVksXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgY29udGVudDogdXBkYXRlZENvbnRlbnQsXG4gICAgICAgIF9pZDogZGF0YS5faWQsXG4gICAgICAgIGNyZWF0ZWRPbjogZGF0YS5jcmVhdGVkT24sXG4gICAgICAgIGNvbXBsZXRlZDogZGF0YS5jb21wbGV0ZWQsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAgIGdldEl0ZW0oKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDb250ZW50Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0VXBkYXRlZENvbnRlbnQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb25lQnV0dG9uID0gYXN5bmMgKGUpID0+IHtcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdXJsID0gQVBJX0VORFBPSU5UICsgXCIvdG9kb2xpc3RcIiArIFwiL1wiICsgaXRlbTtcbiAgICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJ4LWFwaWtleVwiOiBBUElfS0VZLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxuICAgICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgICAgY3JlYXRlZE9uOiBkYXRhLmNyZWF0ZWRPbixcbiAgICAgICAgX2lkOiBkYXRhLmlkLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWUsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBnZXRJdGVtKCk7XG4gIH07XG5cbiAgY29uc3QgaXNDb21wbGV0ZWQgPSBkYXRhLmNvbXBsZXRlZDtcbiAgdmFyIGJ1dHRvbiA9IDw+PC8+O1xuICBpZiAoIWlzQ29tcGxldGVkKSB7XG4gICAgYnV0dG9uID0gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb25lQnV0dG9ufVxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgICAgID5cbiAgICAgICAgRG9uZVxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIFxuXG5cblxuXG4gIC8vIGNvbnN0IGVkaXRpdG5nYm94ID0gPD48Lz47XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj17XCIvdG9kb3NcIn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgPlxuICAgICAgICAgIEFsbCBUb2Rvc1xuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5Db250ZW50OiB7ZGF0YS5jb250ZW50fTwvaDI+XG4gICAgICAgIDxoMj5DYXRlZ29yeToge2RhdGEuY2F0ZWdvcnl9PC9oMj5cbiAgICAgICAgPGgyPkNyZWF0ZWQgZGF0ZSB7ZGF0YS5jcmVhdGVkT259PC9oMj5cbiAgICAgICAgPGgyPntkYXRhLmNvbXBsZXRlZH08L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICB7YnV0dG9ufVxuXG4gICAgICB7LyogPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9XG4gICAgPlxuICAgICAgRWRpdFxuICAgIDwvYnV0dG9uPiAqL31cbiAgICAgIHsvKiA8Zm9ybSBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIENsYXNzTmFtZT1cImhpZGRlblwiIHZhbHVlPVwie3tkYXRhLnBvc3RfaWR9fVwiIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGlkPVwidXBkYXRle3tkYXRhLnBvc3RfaWR9fVwiIG5hbWU9XCJ1cGRhdGVcIiAvPlxuICAgICAgPGRpdiBpZD1cImVkaXRvcnt7ZGF0YS5wb3N0X2lkfX1cIiBzdHlsZT1cImhlaWdodDogNTB2aDtcIj48L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiIGlkID1cInVwZGF0ZS1idG5cIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwdXJlLWJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbC1idG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICA8L2Zvcm0+ICovfVxuICAgICAgey8qIDxoMj5Db250ZW50OiB7ZGF0YS5jb250ZW50fTwvaDI+ICovfVxuICAgICAge2lzRWRpdGluZyA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgdmFsdWU9e3VwZGF0ZWRDb250ZW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvbnRlbnRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRWRpdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBFZGl0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L21haW4+XG4gICk7XG59XG4vLyBcInVzZSBjbGllbnRcIjtcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbi8vIGV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIEl0ZW0oKSB7XG5cbiAgLy8gY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gY29uc3QgW3VwZGF0ZWRDb250ZW50LCBzZXRVcGRhdGVkQ29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4vLyAgIGNvbnN0IHsgaXRlbSB9ID0gcm91dGVyLnF1ZXJ5O1xuLy8gICBjb25zb2xlLmxvZyhpdGVtKTtcblxuICAvLyBjb25zdCBBUElfRU5EUE9JTlQgPSBcImh0dHBzOi8vYmFjay14NWhiLmFwaS5jb2RlaG9va3MuaW8vZGV2L3RvZG9saXN0XCI7XG4gIC8vIGNvbnN0IEFQSV9LRVkgPSBcImJlZDMyNjY2LWI1YjctNDk5OC05N2UxLTIxMDQ2YmQ5Y2ZkMlwiO1xuICAvLyBjb25zdCB1cmwgPSBBUElfRU5EUE9JTlQgKyBcIi9cIiArIGlkXG4gIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gIC8vICAgbWV0aG9kOiBcIkdFVFwiLFxuICAvLyAgIGhlYWRlcnM6IHsgXCJ4LWFwaWtleVwiOiBBUElfS0VZIH0sXG4gIC8vIH0pO1xuICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIC8vIGNvbnN0IGhhbmRsZUVkaXQgPSAoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCJjbGlja2VkIG9uIGVkaXQhXCIpO1xuICAvLyAgIHNldElzRWRpdGluZyh0cnVlKTtcbiAgLy8gfTtcblxuICAvLyBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gIC8vICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgLy8gICBzZXRVcGRhdGVkQ29udGVudChkYXRhLmNvbnRlbnQpO1xuICAvLyB9O1xuXG4gIC8vIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jIChlKSA9PiB7XG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gIC8vICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgLy8gICAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIC8vICAgICAgIFwieC1hcGlrZXlcIjogQVBJX0tFWSxcbiAgLy8gICAgIH0sXG4gIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gIC8vICAgICAgIC4uLmRhdGEsXG4gIC8vICAgICAgIGNvbnRlbnQ6IHVwZGF0ZWRDb250ZW50LFxuICAvLyAgICAgfSksXG4gIC8vICAgfSk7XG4gIC8vICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAvLyAgIHNldElzRWRpdGluZyhmYWxzZSk7XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgaGFuZGxlQ29udGVudENoYW5nZSA9IChldmVudCkgPT4ge1xuICAvLyAgIHNldFVwZGF0ZWRDb250ZW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIC8vIH07XG5cbiAgLy8gLy8gY29uc3QgZWRpdGl0bmdib3ggPSA8PjwvPjtcblxuICAvLyByZXR1cm4gKFxuICAvLyAgIDxkaXY+XG4gIC8vICAgICA8aDI+Q29udGVudDoge2RhdGEuY29udGVudH08L2gyPlxuICAvLyAgICAgPGgyPkNhdGVnb3J5OiB7ZGF0YS5jYXRlZ29yeX08L2gyPlxuICAvLyAgICAgPGgyPkNyZWF0ZWQgZGF0ZSB7ZGF0YS5jcmVhdGVkT259PC9oMj5cbiAgLy8gICAgIDxoMj57ZGF0YS5jb21wbGV0ZWR9PC9oMj5cbiAgLy8gICAgIDxMaW5rXG4gIC8vICAgICAgIGhyZWY9e1wiL3RvZG9zXCJ9XG4gIC8vICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIlxuICAvLyAgICAgPlxuICAvLyAgICAgICBBbGwgVG9kb3NcbiAgLy8gICAgIDwvTGluaz5cbiAgLy8gICAgIHsvKiA8YnV0dG9uXG4gIC8vICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIlxuICAvLyAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9XG4gIC8vICAgICA+XG4gIC8vICAgICAgIEVkaXRcbiAgLy8gICAgIDwvYnV0dG9uPiAqL31cbiAgLy8gICAgIHsvKiA8Zm9ybSBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gIC8vICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgQ2xhc3NOYW1lPVwiaGlkZGVuXCIgdmFsdWU9XCJ7e2RhdGEucG9zdF9pZH19XCIgLz5cbiAgLy8gICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBpZD1cInVwZGF0ZXt7ZGF0YS5wb3N0X2lkfX1cIiBuYW1lPVwidXBkYXRlXCIgLz5cbiAgLy8gICAgICAgPGRpdiBpZD1cImVkaXRvcnt7ZGF0YS5wb3N0X2lkfX1cIiBzdHlsZT1cImhlaWdodDogNTB2aDtcIj48L2Rpdj5cbiAgLy8gICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCIgaWQgPVwidXBkYXRlLWJ0blwiPlVwZGF0ZTwvYnV0dG9uPlxuICAvLyAgICAgICA8YnV0dG9uIGNsYXNzPVwicHVyZS1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWwtYnRuXCI+Q2FuY2VsPC9idXR0b24+XG4gIC8vICAgICA8L2Zvcm0+ICovfVxuICAvLyAgICAgey8qIDxoMj5Db250ZW50OiB7ZGF0YS5jb250ZW50fTwvaDI+ICovfVxuICAvLyAgICAge2lzRWRpdGluZyA/IChcbiAgLy8gICAgICAgPGRpdj5cbiAgLy8gICAgICAgICA8aW5wdXRcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAvLyAgICAgICAgICAgdmFsdWU9e3VwZGF0ZWRDb250ZW50fVxuICAvLyAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNvbnRlbnRDaGFuZ2V9XG4gIC8vICAgICAgICAgLz5cbiAgLy8gICAgICAgICA8YnV0dG9uXG4gIC8vICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgLy8gICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZX1cbiAgLy8gICAgICAgICA+XG4gIC8vICAgICAgICAgICBVcGRhdGVcbiAgLy8gICAgICAgICA8L2J1dHRvbj5cbiAgLy8gICAgICAgICA8YnV0dG9uXG4gIC8vICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBiZy1ibHVlLTQwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCJcbiAgLy8gICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbH1cbiAgLy8gICAgICAgICA+XG4gIC8vICAgICAgICAgICBDYW5jZWxcbiAgLy8gICAgICAgICA8L2J1dHRvbj5cbiAgLy8gICAgICAgPC9kaXY+XG4gIC8vICAgICApIDogKFxuICAvLyAgICAgICA8ZGl2PlxuICAvLyAgICAgICAgIDxidXR0b25cbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJnLWJsdWUtNDAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIlxuICAvLyAgICAgICAgICAgb25DbGljaz17aGFuZGxlRWRpdH1cbiAgLy8gICAgICAgICA+XG4gIC8vICAgICAgICAgICBFZGl0XG4gIC8vICAgICAgICAgPC9idXR0b24+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgKX1cbiAgLy8gICA8L2Rpdj5cbiAgLy8gKTtcbi8vIH1cbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoIiwiVXNlckJ1dHRvbiIsIlNpZ25JbiIsIkl0ZW0iLCJyb3V0ZXIiLCJpdGVtIiwicXVlcnkiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJ1cGRhdGVkQ29udGVudCIsInNldFVwZGF0ZWRDb250ZW50IiwiZGF0YSIsInNldERhdGEiLCJBUElfRU5EUE9JTlQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0VORFBPSU5UIiwiQVBJX0tFWSIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJpc0xvYWRlZCIsInVzZXJJZCIsInNlc3Npb25JZCIsImdldFRva2VuIiwidXJsIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicmUiLCJqc29uIiwiaGFuZGxlRWRpdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYW5jZWwiLCJjb250ZW50IiwiaGFuZGxlVXBkYXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXRlZ29yeSIsIl9pZCIsImNyZWF0ZWRPbiIsImNvbXBsZXRlZCIsImhhbmRsZUNvbnRlbnRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRG9uZUJ1dHRvbiIsImlkIiwiaXNDb21wbGV0ZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwibWFpbiIsImRpdiIsImhyZWYiLCJoMiIsImlucHV0Iiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/todo/[item].js\n"));

/***/ })

});