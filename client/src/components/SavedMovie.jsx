import React from 'react';
import axios from 'axios';

const style = {
  textAlign: "center", 
  border: "1px solid black", 
  margin: "2px", 
  minHeight: "20%",
  paddingBottom: "2%"
}

class SavedMovie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={style}>
        <p>{this.props.movie.moviename}</p>
        <p>Vote Average: {this.props.movie.voteAvg}</p>
        <p>Vote Count: {this.props.movie.voteCount}</p>
        <button onClick={() => {this.props.getInfo({id: this.props.movie.id})}} className="btn btn-secondary">Get More Info</button>
        <button onClick={() => {this.props.deleteMovie({id: this.props.movie.id})}} className="btn btn-danger">Delete</button>
      </div>
    )
  }
}

export default SavedMovie