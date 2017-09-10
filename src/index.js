// <h1>Hello World</h1>
var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createElement('h1', null, 'Hello World');

ReactDOM.render(
    App,
    document.getElementById('root')
);
