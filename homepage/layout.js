'use strict';

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
        <div className="footer">
          &copy;&nbsp;<a href="//github.com/xudafeng">xdf</a> {new Date().getFullYear()}
        </div>
        <ForkmeonComponent {...this.getForkmeonProps()}/>
      </div>
    );
  }
}

module.exports = LayoutComponent;
