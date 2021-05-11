import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading'

class MovieList extends Component {
  constructor() {
    super();
    this.ComeToMeMovies = this.ComeToMeMovies.bind(this)
    this.state = {
      movies: [],
      loading: true,
    };
  }

componentDidMount() {
  this.ComeToMeMovies()
}

async ComeToMeMovies() {
  const allMovies  = await movieAPI.getMovies()
    this.setState({
      movies: allMovies,
      loading: false,
    })
}

  render() {
    const { movies } = this.state;
    if (this.state.loading){
      return <Loading />
      }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
