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

let React = require('react');
let ForkmeonComponent = require('forkmeon.github.io');
let pkg = require('../package');

const noop = function() {};

class LayoutComponent extends React.Component {
  getForkmeonProps() {
    return {
      fixed: true,
      text: 'Fork me on Github',
      linkUrl: pkg.repository.url,
      onDemoUpdateDid: noop,
      flat: true
    };
  }

  render() {
    return (
      <div>
        <div className="header"></div>
        <div className="logo">
        {this.props.children}
        </div>
        <div id="editor"></div>
        <div className="footer">
          &copy;&nbsp;<a href="http://github.com/xudafeng">xdf</a> {new Date().getFullYear()}
          <span style={{display: 'none'}}>
            <script src="http://s4.cnzz.com/stat.php?id=1642323&web_id=1642323"></script>
          </span>
        </div>
        <ForkmeonComponent {...this.getForkmeonProps()}/>
      </div>
    );
  }
}

module.exports = LayoutComponent;
