import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import MovieList from './components/MovieList.jsx'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      savedMovies: []
    }
  }

  getPopularMovies() {
    axios.get('/movies')
      .then(response => {
        this.setState({
          movies: response.data
        })
        console.log(this.state.movies);
      })
      .catch(err => {
        console.log(err);
      })
  }

  saveMovie(movie) {
    axios.post('/database', movie)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return(
      <div>
        <button onClick={this.getPopularMovies.bind(this)}>Get Popular Movies</button>
        <MovieList movies={this.state.movies} saveMovie={this.saveMovie}/>
        <SavedMovieList movies={this.state.savedMovies}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));