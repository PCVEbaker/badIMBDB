import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>{this.props.movie.title}</p>
      </div>
    )
  }
}

export default Movie