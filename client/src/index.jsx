import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import MovieList from './components/MovieList.jsx'
import SavedMovieList from './components/SavedMovieList.jsx'
import FeaturedMovie from './components/FeaturedMovie.jsx'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      savedMovies: [],
      featuredMovie: null
    }
    this.getSavedMovies = this.getSavedMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.getMoreInfo = this.getMoreInfo.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  getPopularMovies() {
    axios.get('/movies')
      .then(response => {
        this.setState({
          movies: response.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  saveMovie(movie) {
    axios.post('/database', movie)
      .then(response => {
        this.getSavedMovies();
      })
      .catch(err => {
        console.log(err);
      })
  }

  getSavedMovies() {
    axios.get('/database')
      .then(response => {
        this.setState({
          savedMovies: response.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  getMoreInfo(id) {
    axios.post('/info', id)
      .then(response => {
        this.setState({
          featuredMovie: response.data
        });
        console.log(this.state.featuredMovie);
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteMovie(id) {
    axios.post('/delete', id)
      .then(response => {
        this.getSavedMovies();
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getPopularMovies()
    this.getSavedMovies()
  }

  render() {
    return(
      <div>
        <h1 style={{textAlign: "center"}}>Bad IMDB</h1>
        <div style={{marginTop: "10px"}}>
          <MovieList movies={this.state.movies} saveMovie={this.saveMovie} getInfo={this.getMoreInfo}/>
          <FeaturedMovie featuredMovie={this.state.featuredMovie}/>
          <SavedMovieList movies={this.state.savedMovies} getInfo={this.getMoreInfo} deleteMovie={this.deleteMovie}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));