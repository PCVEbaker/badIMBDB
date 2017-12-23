import React from 'react';
import SavedMovie from './SavedMovie.jsx';

class SavedMovieList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{border: "2px solid black", width: "20%", float: "left", maxHeight: "100vh", overflowY: "scroll", marginRight: "2.5%"}}>
        {this.props.movies.map((movie, index) => {
          return <SavedMovie movie={movie} key={index} getInfo={this.props.getInfo} deleteMovie={this.props.deleteMovie}/>
        })}
      </div>
    )
  }
}

export default SavedMovieList