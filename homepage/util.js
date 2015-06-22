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
