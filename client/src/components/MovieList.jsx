import React from 'react';
import Movie from './Movies.jsx';

const styles = {
  border: "2px solid black", 
  maxHeight: "100vh", 
  overflowY: "scroll", 
  width: "20%", 
  float: "left", 
  marginLeft: "2.5%"
}

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles}>
        {this.props.movies.map((movie, index) => {
          return <Movie movie={movie} key={index} username={this.props.username} saveMovie={this.props.saveMovie} getInfo={this.props.getInfo}/>
        })}
      </div>
    )
  }
}

export default MovieList