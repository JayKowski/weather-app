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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_clouds_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/clouds.jpg */ \"./src/images/clouds.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_clouds_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body,\\r\\nhtml {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  max-width: 400px;\\r\\n  margin: 50px auto;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.navi {\\r\\n  overflow: auto;\\r\\n\\r\\n  /* margin-bottom: 25px; */\\r\\n  margin: 0 auto;\\r\\n  width: 95%;\\r\\n}\\r\\n\\r\\n.locality {\\r\\n  text-align: center;\\r\\n  font-family: 'Lobster Two', cursive;\\r\\n}\\r\\n\\r\\n.locality .city {\\r\\n  font-size: 30px;\\r\\n  margin: 5px 0;\\r\\n}\\r\\n\\r\\n.weather {\\r\\n  border: 1px solid #cecece;\\r\\n  padding: 10px;\\r\\n  border-radius: 5px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-attachment: fixed;\\r\\n  background-position: center;\\r\\n  box-shadow: 5px 10px 11px 5px #888;\\r\\n}\\r\\n\\r\\n.weather hr {\\r\\n  border: 0;\\r\\n  height: 1px;\\r\\n  width: 90%;\\r\\n  background: #333;\\r\\n  background-image: linear-gradient(to right, #ccc, #333, #ccc);\\r\\n}\\r\\n\\r\\n.weather .navi .nav-item.left {\\r\\n  float: left;\\r\\n\\r\\n  /* padding-left: 10px; */\\r\\n\\r\\n  /* margin: 0 2%; */\\r\\n  width: 27%;\\r\\n  font-family: 'Open Sans Condensed', sans-serif;\\r\\n}\\r\\n\\r\\n.weather .navi .nav-item.center input {\\r\\n  float: left;\\r\\n\\r\\n  /* padding: 0 5px; */\\r\\n\\r\\n  /* margin: 0 0 0 4%; */\\r\\n  width: 75%;\\r\\n  padding: 3px;\\r\\n}\\r\\n\\r\\n.weather .navi .nav-item.center {\\r\\n  float: left;\\r\\n  width: 45%;\\r\\n  padding: 2px 0;\\r\\n}\\r\\n\\r\\n.weather .navi .nav-item.center button {\\r\\n  height: 22px;\\r\\n}\\r\\n\\r\\n.weather .navi .nav-item.right {\\r\\n  float: left;\\r\\n\\r\\n  /* padding-right: 10px; */\\r\\n  text-align: right;\\r\\n  margin: 5px 0%;\\r\\n  width: 27%;\\r\\n  font-family: 'Open Sans Condensed', sans-serif;\\r\\n}\\r\\n\\r\\n.weather .navi .nav-item {\\r\\n  margin: 5px 0;\\r\\n}\\r\\n\\r\\n.temp-data {\\r\\n  overflow: auto;\\r\\n  margin: 15px auto;\\r\\n  width: 60%;\\r\\n  text-align: center;\\r\\n  padding: 0px 0px 15px 0;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n}\\r\\n\\r\\n.temp-data .units {\\r\\n  border: 1px solid #aaa;\\r\\n  border-radius: 5px;\\r\\n  padding: 5px;\\r\\n  position: relative;\\r\\n  right: 25px;\\r\\n}\\r\\n\\r\\n.temp-data .temp {\\r\\n  margin-right: 3px;\\r\\n}\\r\\n\\r\\n.left-temp,\\r\\n.symbol,\\r\\n.right-temp {\\r\\n  float: left;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n/* .right-temp {\\r\\n  position: relative;\\r\\n  top: -28px;\\r\\n  margin: 0;\\r\\n} */\\r\\n\\r\\n.left-temp,\\r\\n.right-temp {\\r\\n  margin-top: 30%;\\r\\n}\\r\\n\\r\\n.symbol img {\\r\\n  width: 110px;\\r\\n  height: 110px;\\r\\n  display: block;\\r\\n\\r\\n  /* padding-bottom: 10px; */\\r\\n}\\r\\n\\r\\n.symbol .curr-temp {\\r\\n  border: 1px solid #fafafa;\\r\\n  padding: 5px;\\r\\n  border-radius: 3px;\\r\\n}\\r\\n\\r\\n.more-info {\\r\\n  text-align: center;\\r\\n  margin: 15px auto;\\r\\n  width: 85%;\\r\\n\\r\\n  /* padding-right: 6%; */\\r\\n  font-family: 'Comfortaa', cursive;\\r\\n}\\r\\n\\r\\n.more-info .desc {\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.more-info .time {\\r\\n  font-size: 23px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/datafix.js":
/*!************************!*\
  !*** ./src/datafix.js ***!
  \************************/
/*! exports provided: fixData, unitConvert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fixData\", function() { return fixData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unitConvert\", function() { return unitConvert; });\n/* harmony import */ var _timeconvert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeconvert */ \"./src/timeconvert.js\");\n\n\nconst mxTmp = document.querySelector('.right-temp .temp');\nconst mnTmp = document.querySelector('.left-temp .temp');\nconst tmp = document.querySelector('.curr-temp');\n\nfunction fixData(param) {\n  const dt = document.querySelector('.nav-item.left');\n  const cityCountry = document.querySelector('.nav-item.right');\n  const infCt = document.querySelector('.locality .city');\n  const wndSpd = document.querySelector('.more-info .wind');\n  const humidity = document.querySelector('.more-info .humi');\n  const descr = document.querySelector('.more-info .desc');\n  const image = document.querySelector('.symbol img');\n  const cityTime = document.querySelector('.more-info .time');\n  // ////\n  dt.innerHTML = `${Object(_timeconvert__WEBPACK_IMPORTED_MODULE_0__[\"dateToday\"])()}`;\n  cityCountry.innerHTML = `${param.city}, ${param.country}`;\n  tmp.innerHTML = `${param.temp}&deg;C`;\n  mxTmp.innerHTML = `${param.Max_Temp}&deg;C`;\n  mnTmp.innerHTML = `${param.Min_Temp}&deg;C`;\n  infCt.innerHTML = `${param.city}`;\n  cityTime.innerHTML = `local time: ${param.time}`;\n  wndSpd.innerHTML = `wind speed: ${param.wind} m/s`;\n  humidity.innerHTML = `Humidity: ${param.humid} &percnt;`;\n  descr.innerHTML = `${param.desc}`;\n  image.src = `http://openweathermap.org/img/wn/${param.icon}@2x.png`;\n}\n\n\nfunction farenheit(temp) {\n  const far = (temp * (9 / 5)) + 32;\n  return Math.ceil(far);\n}\n\nfunction unitConvert(par, targ) {\n  if (targ.innerHTML === 'units: °C') {\n    targ.innerHTML = 'units: F';\n    mxTmp.innerHTML = `${farenheit(par.Max_Temp)}F`;\n    mnTmp.innerHTML = `${farenheit(par.Min_Temp)}F`;\n    tmp.innerHTML = `${farenheit(par.temp)}F`;\n  } else {\n    targ.innerHTML = 'units: °C';\n    mxTmp.innerHTML = `${par.Max_Temp}&deg;C`;\n    mnTmp.innerHTML = `${par.Min_Temp}&deg;C`;\n    tmp.innerHTML = `${par.temp}&deg;C`;\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/datafix.js?");

/***/ }),

/***/ "./src/images/clouds.jpg":
/*!*******************************!*\
  !*** ./src/images/clouds.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/images/clouds.1c56110056c2f5f4e6672369390baad9.jpg\");\n\n//# sourceURL=webpack:///./src/images/clouds.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _timeconvert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeconvert */ \"./src/timeconvert.js\");\n/* harmony import */ var _datafix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datafix */ \"./src/datafix.js\");\n\n\n\n\nconst weatherData = {};\n\nconst dataAPI = async (input) => {\n  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=7248a4efe2e1d579af3b160607466f42`, { mode: 'cors' })\n    .then((result) => result.json())\n    .then((result) => {\n      if (result.cod === '404') {\n        // eslint-disable-next-line no-alert\n        alert('city not found');\n      } else {\n        weatherData.wind = result.wind.speed;\n        weatherData.temp = Math.floor(result.main.temp - 273);\n        weatherData.date = result.dt;\n        weatherData.country = result.sys.country;\n        weatherData.city = result.name;\n        weatherData.Min_Temp = Math.floor(result.main.temp_min - 273);\n        weatherData.Max_Temp = Math.floor(result.main.temp_max - 273);\n        weatherData.type = result.weather[0].main;\n        weatherData.desc = result.weather[0].description;\n        weatherData.humid = result.main.humidity;\n        weatherData.icon = result.weather[0].icon;\n        weatherData.time = Object(_timeconvert__WEBPACK_IMPORTED_MODULE_1__[\"timeUTC\"])(result.timezone);\n      }\n      return weatherData;\n    }).then((data) => {\n      Object(_datafix__WEBPACK_IMPORTED_MODULE_2__[\"fixData\"])(data);\n    })\n    .catch((error) => {\n      // eslint-disable-next-line no-alert\n      alert(`OOPS! : ${error}`);\n    });\n  return weatherData;\n};\n\nconst search = document.querySelector('.nav-item.center');\nsearch.addEventListener('click', (e) => {\n  if (e.target.className === 'srch-btn') {\n    const btn = e.target;\n    const val = btn.parentElement.children[0].value.toString().toLowerCase();\n    weatherData.kbInput = val;\n    dataAPI(weatherData.kbInput);\n  } else if (e.target.className === 'fas fa-search') {\n    const btn = e.target;\n    const val = btn.parentElement.parentElement.children[0].value\n      .toString()\n      .toLowerCase();\n    weatherData.kbInput = val;\n    dataAPI(weatherData.kbInput);\n  }\n});\n\nconst units = document.querySelector('.units');\n\nunits.addEventListener('click', (e) => {\n  Object(_datafix__WEBPACK_IMPORTED_MODULE_2__[\"unitConvert\"])(weatherData, e.target);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./src/timeconvert.js":
/*!****************************!*\
  !*** ./src/timeconvert.js ***!
  \****************************/
/*! exports provided: timeUTC, dateToday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeUTC\", function() { return timeUTC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateToday\", function() { return dateToday; });\nfunction timeUTC(zone) {\n  const t = new Date();\n  const rawDate = t.getUTCHours();\n  const calcDate = rawDate + zone / 3600;\n  const tUtc = `${calcDate}:${t.getUTCMinutes()}`;\n  return tUtc;\n}\n\nfunction dateToday() {\n  const day = new Date();\n  const today = day.toDateString().split(' ');\n  const actuDay = `${today[0]}, ${today[2]} ${today[1]}`;\n  return actuDay;\n}\n\n\n\n//# sourceURL=webpack:///./src/timeconvert.js?");

/***/ })

/******/ });