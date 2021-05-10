import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';
// import movies from '../services/movieData';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const getMovie = await movieAPI.getMovies();
    this.setState({
      movies: getMovie,
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {movies.length === 0
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
