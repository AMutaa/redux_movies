import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovie, resetMovie } from './actions'
import Overdrive from 'react-overdrive';
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';


class MovieDetail extends Component {
    componentDidMount() {
        const { getMovie, match } = this.props;
        getMovie(match.params.id);
    }
    componentWillMount() {
        this.props.resetMovie();
    }

    render() {
        const { movie } = this.props;
        if (!movie.id) return null;
        return (
            <div backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
                <img className="backdrop" src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
                <div className="movieInfo">
                    <Overdrive id={`${movie.id}`}>
                        <img className="poster" src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                    </Overdrive>
                    <div className="desc">
                        <h2>{movie.title}</h2>
                        <h3>{movie.release_date}</h3>
                        <p>{movie.overview}</p>
                    </div>
                </div >
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    movie: state.movies.movie,
    isLoaded: state.movies.movieLoaded,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getMovie,
    resetMovie,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

