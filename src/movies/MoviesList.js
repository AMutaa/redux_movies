import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Movie from './Movie';
import { getMovies } from './actions'

class MoviesList extends Component {
  componentDidMount() {
    const { getMovies, isLoaded, moviesLoadedAt } = this.props;
    const oneHour = 60 * 60 * 1000
    if (!isLoaded || ((new Date()) - new Date(moviesLoadedAt)) > oneHour) {
      getMovies();
    }
    // this.props.getMovies();
  }
  render() {
    const { movies, isLoaded } = this.props;
    if (!isLoaded) return <h1>Loading</h1>
    return (
      <div className="movie_grid">
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded,
  moviesLoadedAt: state.movies.moviesLoadedAt,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
