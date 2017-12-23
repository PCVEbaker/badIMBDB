import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import MovieList from './components/MovieList.jsx';
import SavedMovieList from './components/SavedMovieList.jsx';
import FeaturedMovie from './components/FeaturedMovie.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      savedMovies: [],
      featuredMovie: null,
      loggedIn: false,
      signUp: true,
      username: null
    }
    this.getSavedMovies = this.getSavedMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.getMoreInfo = this.getMoreInfo.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.getSimilarMovies = this.getSimilarMovies.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.saveUser = this.saveUser.bind(this);
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

  saveUser(user) {
    axios.post('/signup', user)
      .then(response => {
        if (response.data) {
          this.setState({
            signUp: true
          })
        } else {
          alert('Username taken!!!');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  checkUser(user) {
    axios.post('/login', user)
      .then(response => {
        if (response.data[0]) {
          this.setState({
            loggedIn: response.data[0],
            username: response.data[1]
          }, () => {this.getSavedMovies({"username": this.state.username})})
        } else {
          this.setState({
            signUp: false
          })
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  getSavedMovies() {
    axios.post('/updatedatabase', {"username": this.state.username})
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
      })
      .catch(err => {
        console.log(err)
      })
  }

  getSimilarMovies(id) {
    axios.post('/similar', id)
      .then(response => {
        this.setState({
          movies: response.data
        })
      })
      .catch(err => {
        console.log(err);
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
  }

  render() {
    if (this.state.loggedIn) {
      return(
        <div>
          <h1 style={{textAlign: "center"}}>Bad IMDB</h1>
          <div style={{marginTop: "10px"}}>
            <MovieList movies={this.state.movies} username={this.state.username} saveMovie={this.saveMovie} getInfo={this.getMoreInfo}/>
            <FeaturedMovie featuredMovie={this.state.featuredMovie} getSimilarMovies={this.getSimilarMovies}/>
            <SavedMovieList movies={this.state.savedMovies} getInfo={this.getMoreInfo} deleteMovie={this.deleteMovie}/>
          </div>
        </div>
      )
    } 
    
    if (this.state.loggedIn === false && this.state.signUp === true){
      return (
        <Login checkUser={this.checkUser}/>
      )
    } 

    if (this.state.signUp === false) {
      return (
        <Signup saveUser={this.saveUser}/>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));