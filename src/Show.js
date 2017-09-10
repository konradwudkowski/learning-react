var React = require('react')
var createClass = require('create-react-class')

var Title = createClass({
    render: function() {
        return (
            <h3>Title: Friends</h3>
        )
    }
})

var Poster = createClass({
    render: function() {
        return(
            <img 
                src="https://www.movieposter.com/posters/archive/main/52/MPW-26106"
                alt="Show Poster"
                style={{height: 400, width: 400}}
            />
        )
    }
})

var ShowInfo = createClass({
    render: function() {
        return (
            <div>
                <p>
                    Follows the personal and professional lives of six 20 to 30-something-year-old friends living in Manhattan.
                </p>
                <h5>IMDB Rating: 9.0</h5>
            </div>
        )
    }
})

var Show = createClass({
    render: function() {
        return (
            <div className="text-center" >
                <Title />
                <Poster />
                <ShowInfo />
            </div>
        )
    }
})

module.exports = Show;