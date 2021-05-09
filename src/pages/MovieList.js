import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.getDataApi = this.getDataApi.bind(this);
    this.modifiedRender = this.modifiedRender.bind(this);
  }

  componentDidMount() {
    this.getDataApi();
  }

  async getDataApi() {
    const { getMovies } = movieAPI;
    this.setState({
      loading: true,
    });
    const res = await getMovies();
    this.setState({
      movies: res,
      loading: false,
    });
  }

  modifiedRender = () => {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;
    // console.log(movies);
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }

  render() {
    // Render Loading here if the request is still happening

    return (
      <div data-testeid="movie-list">
        { this.modifiedRender()}
      </div>
    );
  }
}

export default MovieList;
