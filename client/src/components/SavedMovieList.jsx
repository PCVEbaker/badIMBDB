import React from 'react';
import SavedMovie from './SavedMovies.jsx';

class SavedMovieList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.savedMovies.map((movie, index) => {
          return <SavedMovie movie={movie} key={index}/>
        })}
      </div>
    )
  }
}

export default SavedMovieList