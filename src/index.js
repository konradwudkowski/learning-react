var React = require('react');
var ReactDOM = require('react-dom');
var Show = require('./Show')
var shows = require('./shows')

ReactDOM.render(
    <div>
        <Show shows={shows} showIndex={1}/>
    </div>,
    document.getElementById('root')
)


