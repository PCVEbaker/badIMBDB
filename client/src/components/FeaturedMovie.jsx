import React from 'react';

class FeaturedMovie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.featuredMovie) {
      return (
        <div style={{width: "50%", float: "left", marginLeft: "2.5%", marginRight: "2.5%", textAlign: "center"}}>
          <h1>{this.props.featuredMovie.title}</h1>
          <p>{this.props.featuredMovie.tagline}</p>
          <img src={"http://image.tmdb.org/t/p/w150" + this.props.featuredMovie.poster_path} alt="" style={{width: "40%"}}/>
          <p>{this.props.featuredMovie.overview}</p>
          <button>See Similar Movies</button>  
        </div>
      ) 
    } else {
      return (
        <p style={{maxHeight: "100vp",width: "50%", float: "left", marginLeft: "2.5%", marginRight: "2.5%", textAlign: "center"}}>Click On A Movie To Learn More</p>
      )
    }
  }
}

export default FeaturedMovie