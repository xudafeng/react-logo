'use strict';

let React = require('react');
let ReactDOM = require('react-dom');

const data = {
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

let requestAnimationFrame =
  global.requestAnimationFrame ||
  global.webkitRequestAnimationFrame ||
  global.mozRequestAnimationFrame ||
  function(callback) {
    global.setTimeout(callback, 1000 / 60);
  };

let animate = function(handle) {
  handle();
  requestAnimationFrame(() => {
    animate(handle);
  });
};

class ReactLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0
    };
  }

  componentDidMount() {
    if (this.props.animation) {
      animate(() => {
        this.tweenLoop();
      });
    }

    Object.keys(data).map(ref => {
      this[ref] = ReactDOM.findDOMNode(this.refs[ref]);
    });
  }

  getPathTotalLength() {
    return this.pathTotalLength || ReactDOM.findDOMNode(this.refs.path1).getTotalLength();
  }

  tweenLoop() {
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

  getTransforms() {
    if (!this.refs.path1) {
      return [];
    }

    return Object.keys(data).map(ref => {
      let pos = this[ref].getPointAtLength(this.state.length);
      return `translate(${pos.x}px, ${pos.y}px)`;
    });
  }

  render() {
    let props = this.props;
    let transforms = this.getTransforms();

    return (
      <div className={`${props.prefixClassName}-svg`}>
        <svg viewBox="0 0 400 400">
          <path ref="path1" fill={props.pathFillColor} stroke={props.pathStrokeColor} strokeWidth={props.pathStrokeWidth} d={data['path1'].d}></path>
          <path ref="path2" fill={props.pathFillColor} stroke={props.pathStrokeColor} strokeWidth={props.pathStrokeWidth} d={data['path2'].d}></path>
          <path ref="path3" fill={props.pathFillColor} stroke={props.pathStrokeColor} strokeWidth={props.pathStrokeWidth} d={data['path3'].d}></path>
          <circle fill={props.bigCircleFillColor} cx="200" cy="200" r={props.bigCircleRadius}></circle>
          <circle ref="circle1" fill={props.smallCircleFillColor} cx="0" cy="0" r={props.smallCircleRadius} style={{transform: transforms[0], WebkitTransform: transforms[0]}}></circle>
          <circle ref="circle2" fill={props.smallCircleFillColor} cx="0" cy="0" r={props.smallCircleRadius} style={{transform: transforms[1], WebkitTransform: transforms[1]}}></circle>
          <circle ref="circle3" fill={props.smallCircleFillColor} cx="0" cy="0" r={props.smallCircleRadius} style={{transform: transforms[2], WebkitTransform: transforms[2]}}></circle>
        </svg>
      </div>
    );
  }
}

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
