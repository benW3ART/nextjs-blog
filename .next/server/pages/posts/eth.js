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
exports.id = "pages/posts/eth";
exports.ids = ["pages/posts/eth"];
exports.modules = {

/***/ "./pages/posts/eth.js":
/*!****************************!*\
  !*** ./pages/posts/eth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Moralis = (__webpack_require__(/*! moralis */ \"moralis\")[\"default\"]);\nconst { EvmChain  } = __webpack_require__(/*! @moralisweb3/common-evm-utils */ \"@moralisweb3/common-evm-utils\");\nconst runApp = async ()=>{\n    await Moralis.start({\n        apiKey: \"8cfnAMXapppjnzklEwGR2rraBT4eWpSM4TGG0mJNTHRrE89vqEeWSHI71m9lIyt2\"\n    });\n    const address = \"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599\";\n    const chain = EvmChain.ETHEREUM;\n    const response = await Moralis.EvmApi.token.getTokenPrice({\n        address,\n        chain\n    });\n    console.log(response.toJSON());\n};\nrunApp();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9ldGguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsVUFBVUMsMERBQTBCO0FBQzFDLE1BQU0sRUFBRUUsU0FBUSxFQUFFLEdBQUdGLG1CQUFPQSxDQUFDO0FBQzdCLE1BQU1HLFNBQVMsVUFBWTtJQUN6QixNQUFNSixRQUFRSyxLQUFLLENBQUM7UUFDbEJDLFFBQVE7SUFFVjtJQUVBLE1BQU1DLFVBQVU7SUFDaEIsTUFBTUMsUUFBUUwsU0FBU00sUUFBUTtJQUMvQixNQUFNQyxXQUFXLE1BQU1WLFFBQVFXLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxhQUFhLENBQUM7UUFDeEROO1FBQ0FDO0lBQ0Y7SUFFQU0sUUFBUUMsR0FBRyxDQUFDTCxTQUFTTSxNQUFNO0FBQzdCO0FBQ0FaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdHMvZXRoLmpzP2FjMGQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW9yYWxpcyA9IHJlcXVpcmUoJ21vcmFsaXMnKS5kZWZhdWx0O1xuY29uc3QgeyBFdm1DaGFpbiB9ID0gcmVxdWlyZSgnQG1vcmFsaXN3ZWIzL2NvbW1vbi1ldm0tdXRpbHMnKTtcbmNvbnN0IHJ1bkFwcCA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgTW9yYWxpcy5zdGFydCh7XG4gICAgYXBpS2V5OiBcIjhjZm5BTVhhcHBwam56a2xFd0dSMnJyYUJUNGVXcFNNNFRHRzBtSk5USFJyRTg5dnFFZVdTSEk3MW05bEl5dDJcIixcbiAgICAvLyAuLi5hbmQgYW55IG90aGVyIGNvbmZpZ3VyYXRpb25cbiAgfSk7XG4gIFxuICBjb25zdCBhZGRyZXNzID0gJzB4MjI2MGZhYzVlNTU0MmE3NzNhYTQ0ZmJjZmVkZjdjMTkzYmMyYzU5OSc7XG4gIGNvbnN0IGNoYWluID0gRXZtQ2hhaW4uRVRIRVJFVU07XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgTW9yYWxpcy5Fdm1BcGkudG9rZW4uZ2V0VG9rZW5QcmljZSh7XG4gICAgYWRkcmVzcyxcbiAgICBjaGFpbixcbiAgfSk7XG4gIFxuICBjb25zb2xlLmxvZyhyZXNwb25zZS50b0pTT04oKSk7XG59XG5ydW5BcHAoKTtcbiJdLCJuYW1lcyI6WyJNb3JhbGlzIiwicmVxdWlyZSIsImRlZmF1bHQiLCJFdm1DaGFpbiIsInJ1bkFwcCIsInN0YXJ0IiwiYXBpS2V5IiwiYWRkcmVzcyIsImNoYWluIiwiRVRIRVJFVU0iLCJyZXNwb25zZSIsIkV2bUFwaSIsInRva2VuIiwiZ2V0VG9rZW5QcmljZSIsImNvbnNvbGUiLCJsb2ciLCJ0b0pTT04iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/eth.js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/eth.js"));
module.exports = __webpack_exports__;

})();