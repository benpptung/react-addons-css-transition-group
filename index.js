'use strict';

var React = require('react');

if (React) {
  module.exports = React.addons.CSSTransitionGroup;
}
else {
  var g;

  if (typeof window != 'undefined') {
    g = window;
  } else if (typeof global != 'undefined') {
    g = global;
  } else {
    g = this;
  }

  if (g.React) {
    module.exports = React.addons.CSSTransitionGroup;
  }
}

