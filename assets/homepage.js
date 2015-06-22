/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* ================================================================
	 * react-logo by xdf(xudafeng[at]126.com)
	 *
	 * first created at : Mon Jun 02 2014 20:15:51 GMT+0800 (CST)
	 *
	 * ================================================================
	 * Copyright 2014 xdf
	 *
	 * Licensed under the MIT License
	 * You may not use this file except in compliance with the License.
	 *
	 * ================================================================ */

	'use strict';

	let React = __webpack_require__(1);
	let ReactLogo = __webpack_require__(2);
	let Util = __webpack_require__(3);

	Util.ready(function() {
	  React.render(React.createElement(ReactLogo, null), Util.find('#logo')[0]);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactLogo;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* ================================================================
	 * react-logo by xdf(xudafeng[at]126.com)
	 *
	 * first created at : Mon Jun 02 2014 20:15:51 GMT+0800 (CST)
	 *
	 * ================================================================
	 * Copyright 2014 xdf
	 *
	 * Licensed under the MIT License
	 * You may not use this file except in compliance with the License.
	 *
	 * ================================================================ */

	'use strict';

	let Util = {};

	Util.ajax = function(url, successCallback, failCallback) {
	  var request = new XMLHttpRequest();
	  request.open('GET', url, true);

	  request.onreadystatechange = function() {
	    if (this.readyState === 4) {
	      if (this.status >= 200 && this.status < 400) {
	        callback(this.responseText);
	      } else {
	        failCallback();
	      }
	    }
	  };

	  request.send();
	  request = null;
	};

	Util.find = function(selector) {
	  return document.querySelectorAll(selector);
	};

	Util.ready = function(callback) {
	  if (document.readyState !== 'loading'){
	    callback();
	  } else if (document.addEventListener) {
	    document.addEventListener('DOMContentLoaded', callback);
	  } else {
	    document.attachEvent('onreadystatechange', function() {
	      if (document.readyState !== 'loading')
	        callback();
	    });
	  }
	};

	Util.mixin = function(dest) {
	  var sources = Array.prototype.slice.call(arguments, 1);

	  for (var i=0; i<sources.length; i++) {
	    var src = sources[i];
	    for (var key in src) {
	      if (!dest[key]) {
	        dest[key] = src[key];
	      }
	    }
	  }
	};

	module.exports = Util;


/***/ }
/******/ ]);