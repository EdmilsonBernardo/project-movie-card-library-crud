import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../App.css';
import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;

    this.state = {
      loading: true,
      movie: {},
      id,
    };
  }

  componentDidMount() {
    this.movieRequest();
  }

  async movieRequest() {
    const { id } = this.state;
    const request = await movieAPI.getMovie(id);

    this.setState({
      loading: false,
      movie: request,
    });
  }

  render() {
    const { loading, movie } = this.state;

    if (loading) return (<Loading />);

    const { id, title, subtitle, genre, rating, storyline } = movie;

    return (
      <div id="card-details-container">
        <Card id="card-details">
          <CardBody>
            <CardTitle tag="h5">{ title }</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              { subtitle }
            </CardSubtitle>
          </CardBody>
          <CardImg width="100%" src={ `/${movie.imagePath}` } alt="Movie Cover" />
          <CardBody>
            <CardText>
              Storyline:
              { storyline }
            </CardText>
            <CardText>
              Genre:
              { genre }
            </CardText>
            <CardText>
              rating:
              { rating }
            </CardText>
          </CardBody>
        </Card>
        <div className="buttons-container">
          <Link to="/">
            <Button className="buttons-details-page">
              COME BACK
            </Button>
          </Link>
          <Link to={ `/movies/${id}/edit` }>
            <Button className="buttons-details-page">
              EDIT
            </Button>
          </Link>
          <Link to="/" onClick={ async () => movieAPI.deleteMovie(id) }>
            <Button className="buttons-details-page">DELETE</Button>
          </Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
