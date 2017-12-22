import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  saveMovie() {
    console.log('inside function')
    const movie = {
      id: this.props.movie.id,
      title: this.props.movie.title,
      vote_average: this.props.movie.vote_average,
      poster_path: this.props.movie.poster_path
    }

    this.props.saveMovie(movie);
  }

  render() {
    return (
      <div>
        <p>Title: {this.props.movie.title}</p>
        <p>Vote Average: {this.props.movie.vote_average}</p>
        <p>Vote Count: {this.props.movie.vote_count}</p>
        <button onClick={() => {this.saveMovie()}}>Save Movie</button>
      </div>
    )
  }
}

export default Movie