import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  saveMovie() {
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
      <div style={{textAlign: "center", border: "1px solid black", margin: "2px", height: "175px"}}>
        <p>Title: {this.props.movie.title}</p>
        <p>Vote Average: {this.props.movie.vote_average}</p>
        <p>Vote Count: {this.props.movie.vote_count}</p>
        <button onClick={() => {this.saveMovie()}} className="btn btn-primary" >Save Movie</button>
        <button onClick={() => {this.props.getInfo({id: this.props.movie.id})}} className="btn btn-secondary">More Info</button>
      </div>
    )
  }
}

export default Movie