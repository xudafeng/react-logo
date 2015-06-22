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

var ReactLogo = require('./lib');

if (typeof window !== 'undefined') {
  window.ReactLogo = ReactLogo;
} else if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = ReactLogo;
  }
  exports.ReactLogo = ReactLogo;
} else if (typeof define === 'function') {
  define(function() {
    return ReactLogo;
  });
}
