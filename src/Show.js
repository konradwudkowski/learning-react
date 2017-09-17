var React = require('react')

class Title extends React.Component {
    render() {
        return (
            <h3>{this.props.showTitle}</h3>
        )
    }
}

class Poster extends React.Component {
    render() {
        return(
            <img 
                src={this.props.showPoster}
                alt="Show Poster"
                style={{height: 300}}
            />
        )
    }
}

class ShowInfo extends React.Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.showPlot}
                </p>
                <h5>IMDB Rating: {this.props.showRating}</h5>
            </div>
        )
    }
}

class Show extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showIndex: this.props.showIndex
        }
    }
    static defaultProps = {
        showIndex: 0
    }
    getInitialState() {
        return {
            showIndex: this.props.showIndex
        }
    }
    handleButtonClick() {
        var totalShows = this.props.shows.length;
        this.setState(function(prevState) {
            return {
                showIndex: (prevState.showIndex + 1) % totalShows
            };
        })
    }
    render() {
        var show = this.props.shows[this.state.showIndex]
        return (
            <div className="text-center" >
                <Title showTitle={show.title} />
                <Poster showPoster={show.poster} />
                <ShowInfo showPlot={show.plot} showRating={show.imdbRating} />
                <button onClick={this.handleButtonClick.bind(this)}>Next Show</button>
            </div>
        )
    }
}


module.exports = Show;