var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class'); // npm i -S create-react-class

var Component = createClass({
    getInitialState: function() {
        return {
            color: "blue"
        }
    },
    handleButtonClick: function() {
        this.setState(function(prevState) {
            return {
                color: (prevState.color === "blue") ? "green" : "blue"
            }
        })
    },
    render : function() {
        return (
            <div>
                <div style={{color: this.state.color}}>
                    <h1> {this.props.greeting} </h1>  
                </div>
                <button onClick={this.handleButtonClick}>ClickMe</button>
            </div>
        )        
    }
})

ReactDOM.render(
    <Component greeting='hey there' />,
    document.getElementById('root')
)


