import React from 'react';
import axios from 'axios';

class SavedMovie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{textAlign: "center", border: "1px solid black", margin: "2px", height: "175px"}}>
        <p>Title: {this.props.movie.moviename}</p>
        <p>Vote Average: {this.props.movie.voteAvg}</p>
        <button onClick={() => {this.props.getInfo({id: this.props.movie.id})}} className="btn btn-secondary">Get More Info</button>
        <button onClick={() => {this.props.deleteMovie({id: this.props.movie.id})}} className="btn btn-danger">Delete</button>
      </div>
    )
  }
}

export default SavedMovie