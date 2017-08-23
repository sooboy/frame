/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar user_1 = __webpack_require__(1);\nvar u = new user_1.User(\"Regan\", \"https://avatars1.githubusercontent.com/u/848440?v=4&s=460\");\nconsole.log(u, u.avatar.print());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvdHMvbWFpbi50cz82ZWNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQWtDO0FBRWxDLElBQUksQ0FBQyxHQUFFLElBQUksV0FBSSxDQUFDLE9BQU8sRUFBQywyREFBMkQsQ0FBQztBQUVwRixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VzZXJ9ICBmcm9tICcuL3VzZXIvdXNlcic7XG5cbmxldCB1ID1uZXcgVXNlcihcIlJlZ2FuXCIsXCJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91Lzg0ODQ0MD92PTQmcz00NjBcIilcblxuY29uc29sZS5sb2codSx1LmF2YXRhci5wcmludCgpKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Rldi90cy9tYWluLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar image_1 = __webpack_require__(2);\nvar User = (function () {\n    function User(name, avatarUrl) {\n        this.name = name;\n        this.avatar = new image_1.Images(avatarUrl);\n    }\n    return User;\n}());\nexports.User = User;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kZXYvdHMvdXNlci91c2VyLnRzP2RjYjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBc0M7QUFFdEM7SUFFSSxjQUNXLElBQVcsRUFDbEIsU0FBZ0I7UUFEVCxTQUFJLEdBQUosSUFBSSxDQUFPO1FBR3RCLElBQUksQ0FBQyxNQUFNLEdBQUUsSUFBSSxjQUFNLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQztBQUVPLG9CQUFJIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7SW1hZ2VzfSBmcm9tICdzbW1pdC9kaXN0L2ltYWdlJ1xuXG5jbGFzcyBVc2Vye1xuICAgIGF2YXRhcjpJbWFnZXNcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIG5hbWU6c3RyaW5nLFxuICAgICAgICBhdmF0YXJVcmw6c3RyaW5nXG4gICAgKXtcbiAgICB0aGlzLmF2YXRhciA9bmV3IEltYWdlcyhhdmF0YXJVcmwpXG4gICAgfVxufVxuXG5leHBvcnQge1VzZXJ9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGV2L3RzL3VzZXIvdXNlci50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Images = (function () {\n    function Images(image) {\n        this.url = image;\n    }\n    Images.prototype.print = function () {\n        console.log(this.url);\n    };\n    return Images;\n}());\nexports.Images = Images;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc21taXQvZGlzdC9pbWFnZS5qcz8wMTgwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgSW1hZ2VzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbWFnZXMoaW1hZ2UpIHtcbiAgICAgICAgdGhpcy51cmwgPSBpbWFnZTtcbiAgICB9XG4gICAgSW1hZ2VzLnByb3RvdHlwZS5wcmludCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51cmwpO1xuICAgIH07XG4gICAgcmV0dXJuIEltYWdlcztcbn0oKSk7XG5leHBvcnRzLkltYWdlcyA9IEltYWdlcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NtbWl0L2Rpc3QvaW1hZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);