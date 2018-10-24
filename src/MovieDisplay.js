import React, { Component } from 'react'
                  
class MovieDisplay extends Component {
  render() {
  	return (
      
    <h2>{this.props.movie.name}</h2>
 	     
    )
  
  }
  
}

export default MovieDisplay