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

let React = require('react');
let ReactLogo = require('..');
let Util = require('./util');

Util.ready(function() {
  React.render(<ReactLogo/>, Util.find('#logo')[0]);
});
