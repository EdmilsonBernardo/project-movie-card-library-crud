import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
// import { Loading } from '../components';
// import { render } from 'enzyme';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchMovie = this.fetchMovie.bind(this);
    const { match: { params: { id } } } = this.props;
    this.state = {
      movie: '',
      status: false,
      id,
    };

    console.log(this.props);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    this.setState({
      status: true,
    }, async () => {
      const { id } = this.state;
      const fetchMovie = await movieAPI.getMovie(id);
      this.setState({
        movie: fetchMovie,
        status: false,
      });
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { status, movie } = this.state;
    if (status) { return <Loading />; }

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    console.log('Props', this.props);
    console.log('State', this.state);
    const { id } = this.state;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Title: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/"> VOLTAR </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
