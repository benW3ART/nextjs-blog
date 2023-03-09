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
exports.id = "pages/index2";
exports.ids = ["pages/index2"];
exports.modules = {

/***/ "./pages/index2.js":
/*!*************************!*\
  !*** ./pages/index2.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Moralis = (__webpack_require__(/*! moralis */ \"moralis\")[\"default\"]);\nconst { EvmChain  } = __webpack_require__(/*! @moralisweb3/common-evm-utils */ \"@moralisweb3/common-evm-utils\");\nconst runApp = async ()=>{\n    await Moralis.start({\n        apiKey: \"YOUR_API_KEY\"\n    });\n    const address = \"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599\";\n    const chain = EvmChain.ETHEREUM;\n    const response = await Moralis.EvmApi.token.getTokenPrice({\n        address,\n        chain\n    });\n    console.log(response.toJSON());\n};\nrunApp();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleDIuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVUMsMERBQTBCO0FBQzFDLE1BQU0sRUFBRUUsU0FBUSxFQUFFLEdBQUdGLG1CQUFPQSxDQUFDO0FBQzdCLE1BQU1HLFNBQVMsVUFBWTtJQUN6QixNQUFNSixRQUFRSyxLQUFLLENBQUM7UUFDbEJDLFFBQVE7SUFFVjtJQUVBLE1BQU1DLFVBQVU7SUFDaEIsTUFBTUMsUUFBUUwsU0FBU00sUUFBUTtJQUMvQixNQUFNQyxXQUFXLE1BQU1WLFFBQVFXLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxhQUFhLENBQUM7UUFDeEROO1FBQ0FDO0lBQ0Y7SUFFQU0sUUFBUUMsR0FBRyxDQUFDTCxTQUFTTSxNQUFNO0FBQzdCO0FBQ0FaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgyLmpzPzEyMTUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW9yYWxpcyA9IHJlcXVpcmUoJ21vcmFsaXMnKS5kZWZhdWx0O1xuY29uc3QgeyBFdm1DaGFpbiB9ID0gcmVxdWlyZSgnQG1vcmFsaXN3ZWIzL2NvbW1vbi1ldm0tdXRpbHMnKTtcbmNvbnN0IHJ1bkFwcCA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgTW9yYWxpcy5zdGFydCh7XG4gICAgYXBpS2V5OiBcIllPVVJfQVBJX0tFWVwiLFxuICAgIC8vIC4uLmFuZCBhbnkgb3RoZXIgY29uZmlndXJhdGlvblxuICB9KTtcbiAgXG4gIGNvbnN0IGFkZHJlc3MgPSAnMHgyMjYwZmFjNWU1NTQyYTc3M2FhNDRmYmNmZWRmN2MxOTNiYzJjNTk5JztcbiAgY29uc3QgY2hhaW4gPSBFdm1DaGFpbi5FVEhFUkVVTTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBNb3JhbGlzLkV2bUFwaS50b2tlbi5nZXRUb2tlblByaWNlKHtcbiAgICBhZGRyZXNzLFxuICAgIGNoYWluLFxuICB9KTtcbiAgXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlLnRvSlNPTigpKTtcbn1cbnJ1bkFwcCgpO1xuIl0sIm5hbWVzIjpbIk1vcmFsaXMiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIkV2bUNoYWluIiwicnVuQXBwIiwic3RhcnQiLCJhcGlLZXkiLCJhZGRyZXNzIiwiY2hhaW4iLCJFVEhFUkVVTSIsInJlc3BvbnNlIiwiRXZtQXBpIiwidG9rZW4iLCJnZXRUb2tlblByaWNlIiwiY29uc29sZSIsImxvZyIsInRvSlNPTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index2.js\n");

/***/ }),

/***/ "@moralisweb3/common-evm-utils":
/*!************************************************!*\
  !*** external "@moralisweb3/common-evm-utils" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@moralisweb3/common-evm-utils");

/***/ }),

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("moralis");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index2.js"));
module.exports = __webpack_exports__;

})();