import React from 'react';

const style = {
  textAlign: "center", 
  border: "1px solid black", 
  margin: "2px", 
  height: "20%",
  paddingBottom: "2%"
}

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  saveMovie() {
    const movie = {
      id: this.props.movie.id,
      title: this.props.movie.title,
      vote_average: this.props.movie.vote_average,
      poster_path: this.props.movie.poster_path,
      vote_count: this.props.movie.vote_count,
      username: this.props.username
    }

    this.props.saveMovie(movie);
  }

  render() {
    return (
      <div style={style}>
        <p>{this.props.movie.title}</p>
        <p>Vote Average: {this.props.movie.vote_average}</p>
        <p>Vote Count: {this.props.movie.vote_count}</p>
        <button onClick={() => {this.saveMovie()}} className="btn btn-primary" >Save Movie</button>
        <button onClick={() => {this.props.getInfo({id: this.props.movie.id})}} className="btn btn-secondary">More Info</button>
      </div>
    )
  }
}

export default Movie