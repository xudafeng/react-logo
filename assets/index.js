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

	var React = __webpack_require__(1);
	var ReactLogo = __webpack_require__(2);
	var Util = __webpack_require__(4);

	Util.ready(function () {
	  React.render(React.createElement(ReactLogo, null), Util.find('#logo')[0]);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
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

	module.exports = __webpack_require__(3);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* ================================================================
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

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var data = {
	  path1: {
	    d: 'M231.7,200c0,17.4-1.7,88-31.7,88s-31.7-70.6-31.7-88s1.7-88,31.7-88S231.7,182.6,231.7,200z'
	  },
	  path2: {
	    d: 'M216.1,227.7c-15,8.9-76.6,43.4-91.9,17.6s44.6-63.2,59.6-72.1s76.6-43.4,91.9-17.6S231.1,218.8,216.1,227.7z'
	  },
	  path3: {
	    d: 'M183.9,227.7c15,8.9,76.6,43.4,91.9,17.6s-44.6-63.2-59.6-72.1s-76.6-43.4-91.9-17.6S168.9,218.8,183.9,227.7z'
	  }
	};

	var requestAnimationFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || function (callback) {
	  global.setTimeout(callback, 1000 / 60);
	};

	var animate = function animate(handle) {
	  handle();
	  requestAnimationFrame(function () {
	    animate(handle);
	  });
	};

	var ReactLogo = (function (_React$Component) {
	  function ReactLogo(props) {
	    _classCallCheck(this, ReactLogo);

	    _get(Object.getPrototypeOf(ReactLogo.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      length: 0
	    };
	  }

	  _inherits(ReactLogo, _React$Component);

	  _createClass(ReactLogo, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.animation) {
	        animate((function () {
	          this.tweenLoop();
	        }).bind(this));
	      }
	    }
	  }, {
	    key: 'getPathTotalLength',
	    value: function getPathTotalLength() {
	      return this.pathTotalLength || React.findDOMNode(this.refs.path1).getTotalLength();
	    }
	  }, {
	    key: 'tweenLoop',
	    value: function tweenLoop() {
	      this.current = this.current || 0;
	      this.pathTotalLength = this.getPathTotalLength();

	      if (this.current >= this.pathTotalLength) {
	        this.current = 0;
	      }
	      this.current += this.pathTotalLength / this.props.duration;
	      this.setState({
	        length: this.current
	      });
	    }
	  }, {
	    key: 'getTransforms',
	    value: function getTransforms() {
	      var state = this.state;
	      var refs = this.refs;

	      if (!refs.path1) {
	        return [];
	      }
	      return Object.keys(data).map(function (ref) {
	        var pos = React.findDOMNode(refs[ref]).getPointAtLength(state.length);
	        return 'translate(' + pos.x + 'px, ' + pos.y + 'px)';
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var transforms = this.getTransforms();
	      return React.createElement(
	        'div',
	        { className: props.prefixClassName + '-svg' },
	        React.createElement(
	          'svg',
	          { viewBox: '0 0 400 400' },
	          React.createElement('path', { ref: 'path1', fill: props.pathFillColor, stroke: props.pathStrokeColor, strokeWidth: props.pathStrokeWidth, d: data['path1'].d }),
	          React.createElement('path', { ref: 'path2', fill: props.pathFillColor, stroke: props.pathStrokeColor, strokeWidth: props.pathStrokeWidth, d: data['path2'].d }),
	          React.createElement('path', { ref: 'path3', fill: props.pathFillColor, stroke: props.pathStrokeColor, strokeWidth: props.pathStrokeWidth, d: data['path3'].d }),
	          React.createElement('circle', { fill: props.bigCircleFillColor, cx: '200', cy: '200', r: props.bigCircleRadius }),
	          React.createElement('circle', { ref: 'circle1', fill: props.smallCircleFillColor, cx: '0', cy: '0', r: props.smallCircleRadius, style: { transform: transforms[0], WebkitTransform: transforms[0] } }),
	          React.createElement('circle', { ref: 'circle2', fill: props.smallCircleFillColor, cx: '0', cy: '0', r: props.smallCircleRadius, style: { transform: transforms[1], WebkitTransform: transforms[1] } }),
	          React.createElement('circle', { ref: 'circle3', fill: props.smallCircleFillColor, cx: '0', cy: '0', r: props.smallCircleRadius, style: { transform: transforms[2], WebkitTransform: transforms[2] } })
	        )
	      );
	    }
	  }]);

	  return ReactLogo;
	})(React.Component);

	ReactLogo.defaultProps = {
	  prefixClassName: 'react-logo',
	  pathStrokeWidth: 4,
	  pathFillColor: 'none',
	  pathStrokeColor: '#61dafb',
	  bigCircleFillColor: '#61dafb',
	  smallCircleFillColor: '#8e4a3a',
	  bigCircleRadius: 16,
	  smallCircleRadius: 6,
	  animation: true,
	  duration: 200
	};

	module.exports = ReactLogo;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
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

	var Util = {};

	Util.ajax = function (url, successCallback, failCallback) {
	  var request = new XMLHttpRequest();
	  request.open('GET', url, true);

	  request.onreadystatechange = function () {
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

	Util.find = function (selector) {
	  return document.querySelectorAll(selector);
	};

	Util.ready = function (callback) {
	  if (document.readyState !== 'loading') {
	    callback();
	  } else if (document.addEventListener) {
	    document.addEventListener('DOMContentLoaded', callback);
	  } else {
	    document.attachEvent('onreadystatechange', function () {
	      if (document.readyState !== 'loading') callback();
	    });
	  }
	};

	Util.mixin = function (dest) {
	  var sources = Array.prototype.slice.call(arguments, 1);

	  for (var i = 0; i < sources.length; i++) {
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