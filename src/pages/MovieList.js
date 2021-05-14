import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import { Button } from 'reactstrap';
import '../App.css';

import * as movieAPI from '../services/movieAPI';
import Header from '../components/Header';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.moviesRequest();
  }

  async moviesRequest() {
    const request = await movieAPI.getMovies();

    this.setState({
      movies: request,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return (<Loading />);

    return (
      <>
        <Header />
        <div data-testid="movie-list" className="card-container">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Link to="/movies/new"><Button color="primary" id="add">ADD CART</Button></Link>
      </>
    );
  }
}

export default MovieList;
