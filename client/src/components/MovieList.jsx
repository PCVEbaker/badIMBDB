import React from 'react';
import Movie from './Movies.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.movies.map((movie, index) => {
          return <Movie movie={movie} key={index}/>
        })}
      </div>
    )
  }
}

export default MovieList