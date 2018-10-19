import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Movie from './Movie';
import { getMovies } from './actions'

class MoviesList extends Component {
  async componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
    // this.props.getMovies();
  }
  render() {
    const { movies } = this.props;
    return (
      <div className="movie_grid">
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
