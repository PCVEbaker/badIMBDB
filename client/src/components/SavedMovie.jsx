import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>Title: {this.props.movie.moviename}</p>
        <p>Vote Average: {this.props.movie.voteAvg}</p>
      </div>
    )
  }
}

export default Movie