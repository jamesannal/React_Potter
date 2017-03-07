var React = require('react');
var ReactDOM = require('react-dom');

var PotterContainer = require('./containers/PotterContainer.jsx');

window.onload = function () {
  ReactDOM.render(
    <PotterContainer />,
    document.getElementById('app')
  );
};
