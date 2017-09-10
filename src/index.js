// <h1>Hello World</h1>
var React = require('react')
var ReactDOM = require('react-dom')

// var App = React.createElement('h1', null, 'Hello World')

// var App = (
//     <ul>
//         <li>Apple</li>
//         <li>Orange</li>
//         <li>Mango</li>
//     </ul>
// )

var App = <h1>Hello World</h1>

var Component = function() {
    return (
      <h1>Hello World</h1>  
    )
}

// var Component = () => <h1>Hello World</h1> 

// ReactDOM.render(
//     App,
//     document.getElementById('root')
// )

ReactDOM.render(
    // React.createElement(Component),
    // Component(),
    <Component />,
    document.getElementById('root')
)


