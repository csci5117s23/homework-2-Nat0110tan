"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todos",{

/***/ "./src/components/catesFilter.js":
/*!***************************************!*\
  !*** ./src/components/catesFilter.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CatesFilter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clerk/nextjs */ \"./node_modules/@clerk/nextjs/dist/index.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction CatesFilter(param) {\n    let { cate , fetchCates , id  } = param;\n    _s();\n    const API_ENDPOINT = \"https://back-x5hb.api.codehooks.io/dev\";\n    const API_KEY = \"bed32666-b5b7-4998-97e1-21046bd9cfd2\";\n    const { isLoaded , userId , sessionId , getToken  } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const handleFilterDelete = async (e)=>{\n        const token = await getToken({\n            template: \"codehooks\"\n        });\n        const url = API_ENDPOINT + \"/cateslist\" + \"/\" + id;\n        await fetch(url, {\n            method: \"DELETE\",\n            headers: {\n                \"x-apikey\": API_KEY\n            }\n        });\n        fetchCates();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/todos/\".concat(cate),\n                className: \"text-center bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                children: cate\n            }, void 0, false, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/components/catesFilter.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleFilterDelete,\n                className: \"text-center bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full\",\n                children: \"❌\"\n            }, void 0, false, {\n                fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/components/catesFilter.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tanyiling/Desktop/sp23/5117/homework-2-Nat0110tan/src/components/catesFilter.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(CatesFilter, \"jaKFCdVK/L44SKVtBID43U8n/mk=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_2__.useAuth\n    ];\n});\n_c = CatesFilter;\nvar _c;\n$RefreshReg$(_c, \"CatesFilter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXRlc0ZpbHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDK0I7QUFDN0MsU0FBU0ksWUFBWSxLQUF1QixFQUFFO1FBQXpCLEVBQUVDLEtBQUksRUFBRUMsV0FBVSxFQUFFQyxHQUFFLEVBQUMsR0FBdkI7O0lBQ2xDLE1BQU1DLGVBQWVDLHdDQUFvQztJQUN6RCxNQUFNRyxVQUFVSCxzQ0FBK0I7SUFDL0MsTUFBTSxFQUFFSyxTQUFRLEVBQUVDLE9BQU0sRUFBRUMsVUFBUyxFQUFFQyxTQUFRLEVBQUUsR0FBR2hCLHNEQUFPQTtJQUN6RCxNQUFNaUIscUJBQXFCLE9BQU9DLElBQU07UUFDdEMsTUFBTUMsUUFBUSxNQUFNSCxTQUFTO1lBQUVJLFVBQVU7UUFBWTtRQUNyRCxNQUFNQyxNQUFNZCxlQUFlLGVBQWUsTUFBTUQ7UUFDaEQsTUFBTWdCLE1BQU1ELEtBQUs7WUFDZkUsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLFlBQVliO1lBQVE7UUFDakM7UUFDQU47SUFDRjtJQUVBLHFCQUNFLDhEQUFDb0I7OzBCQUNDLDhEQUFDMUIsa0RBQUlBO2dCQUNIMkIsTUFBTSxVQUFlLE9BQUx0QjtnQkFDaEJ1QixXQUFVOzBCQUVUdkI7Ozs7OzswQkFHSCw4REFBQ3dCO2dCQUNDQyxTQUFTWjtnQkFDVFUsV0FBVTswQkFDWDs7Ozs7Ozs7Ozs7O0FBS1AsQ0FBQztHQS9CdUJ4Qjs7UUFHNEJILGtEQUFPQTs7O0tBSG5DRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jYXRlc0ZpbHRlci5qcz8zYTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZUF1dGgsIFVzZXJCdXR0b24sIFNpZ25JbiB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlc0ZpbHRlcih7IGNhdGUsIGZldGNoQ2F0ZXMsIGlkfSkge1xuICBjb25zdCBBUElfRU5EUE9JTlQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRU5EUE9JTlQ7XG4gIGNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZO1xuICBjb25zdCB7IGlzTG9hZGVkLCB1c2VySWQsIHNlc3Npb25JZCwgZ2V0VG9rZW4gfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgaGFuZGxlRmlsdGVyRGVsZXRlID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgdGVtcGxhdGU6IFwiY29kZWhvb2tzXCIgfSk7XG4gICAgY29uc3QgdXJsID0gQVBJX0VORFBPSU5UICsgXCIvY2F0ZXNsaXN0XCIgKyBcIi9cIiArIGlkO1xuICAgIGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogeyBcIngtYXBpa2V5XCI6IEFQSV9LRVkgfSxcbiAgICB9KTtcbiAgICBmZXRjaENhdGVzKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17YC90b2Rvcy8ke2NhdGV9YH1cbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiXG4gICAgICA+XG4gICAgICAgIHtjYXRlfVxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZpbHRlckRlbGV0ZX1cbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctYmx1ZS00MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC1ibGFjayBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiXG4gICAgICA+XG4gICAgICAgIOKdjFxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZUF1dGgiLCJVc2VyQnV0dG9uIiwiU2lnbkluIiwiQ2F0ZXNGaWx0ZXIiLCJjYXRlIiwiZmV0Y2hDYXRlcyIsImlkIiwiQVBJX0VORFBPSU5UIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9FTkRQT0lOVCIsIkFQSV9LRVkiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwiaXNMb2FkZWQiLCJ1c2VySWQiLCJzZXNzaW9uSWQiLCJnZXRUb2tlbiIsImhhbmRsZUZpbHRlckRlbGV0ZSIsImUiLCJ0b2tlbiIsInRlbXBsYXRlIiwidXJsIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiZGl2IiwiaHJlZiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/catesFilter.js\n"));

/***/ })

});