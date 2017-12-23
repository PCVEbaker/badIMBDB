import React from 'react';
import SavedMovie from './SavedMovie.jsx';

const style = {
  border: "2px solid black", 
  maxHeight: "100vp", 
  overflowY: "scroll", 
  width: "20%", 
  float: "left", 
  marginRight: "2.5%"
}

class SavedMovieList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={style}>
        {this.props.movies.map((movie, index) => {
          return <SavedMovie movie={movie} key={index} getInfo={this.props.getInfo} deleteMovie={this.props.deleteMovie}/>
        })}
      </div>
    )
  }
}

export default SavedMovieList