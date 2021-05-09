import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';
import './bootstrap/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="movie-card-header">Movie Card Library CRUD</div>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
