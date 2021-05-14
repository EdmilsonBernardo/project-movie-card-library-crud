import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <FormGroup row>
        <Label for="movieTitle" sm={ 2 }>Title:</Label>
        <Col sm={ 10 }>
          <Input
            type="text"
            name="movieTitle"
            id="movieTitle"
            placeholder="Enter the title"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
        </Col>
      </FormGroup>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <FormGroup row>
        <Label for="subtitle" sm={ 2 }>Subtitle:</Label>
        <Col sm={ 10 }>
          <Input
            type="text"
            name="subtitle"
            id="subtitle"
            placeholder="Enter the subtitle"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
        </Col>
      </FormGroup>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <FormGroup row>
        <Label for="image" sm={ 2 }>Image:</Label>
        <Col sm={ 10 }>
          <Input
            type="text"
            name="image"
            id="image"
            placeholder="Enter image path"
            value={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
        </Col>
      </FormGroup>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <FormGroup row>
        <Label for="storyline" sm={ 2 }>Storyline:</Label>
        <Col sm={ 10 }>
          <Input
            type="textarea"
            name="storyline"
            id="storyline"
            value={ storyline }
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
        </Col>
      </FormGroup>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <FormGroup row>
        <Label for="gender" sm={ 2 }>gender:</Label>
        <Col sm={ 10 }>
          <Input
            type="select"
            name="gender"
            id="gender"
            value={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
          >
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="thriller">Thriller</option>
            <option value="fantasy">Fantasy</option>
          </Input>
        </Col>
      </FormGroup>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <FormGroup row>
        <Label for="rating" sm={ 2 }>rating:</Label>
        <Col sm={ 10 }>
          <Input
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            name="rating"
            id="rating"
            placeholder="Give the rating of the film"
            value={ rating }
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
          />
        </Col>
      </FormGroup>
    );
  }

  renderSubmitButton() {
    return (
      <FormGroup check row>
        <Col sm={ { size: 10, offset: 2 } }>
          <Button onClick={ this.handleSubmit } id="button-submit">Submit</Button>
        </Col>
      </FormGroup>
    );
  }

  render() {
    return (
      <div id="form-container">
        <Form id="form">
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </Form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({}).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
