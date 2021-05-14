import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card className="card">
        <CardImg
          top
          width="100%"
          src={ movie.imagePath }
          alt={ `image of ${movie.title}` }
        />
        <CardBody className="card-body">
          <CardTitle tag="h5">{ movie.title }</CardTitle>
          <CardSubtitle
            tag="h6"
            className="mb-2 text-muted"
          >
            { movie.subtitle }
          </CardSubtitle>
          <CardText>{ movie.storyline }</CardText>
          <Link to={ `/movies/${movie.id}` }>
            <Button color="secondary" className="details">SEE DETAILS</Button>
          </Link>
        </CardBody>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
