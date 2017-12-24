'use strict';

let React = require('react');
let ReactDOM = require('react-dom');

let ReactLogo = require('../lib');
let LayoutComponent = require('./layout');

ReactDOM.render(<LayoutComponent><ReactLogo /></LayoutComponent>, document.querySelector('#app'));
