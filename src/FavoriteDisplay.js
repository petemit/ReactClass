import React, { Component } from 'react'
                  
class FavoriteDisplay extends Component {

  render() {
  const movieKey = this.props.movieKey
  const profiles = this.props.profiles
  const users = this.props.users
  const profile = profiles.find( profile => profile.favoriteMovieID === movieKey)

  if (profile == null) {
    return (
    <h5> sorry!  nobody likes this movie </h5>
    )
  }
     else {
  	return (
      <div>
      <h4> Liked By </h4>
      <ul>
      {
        profiles.filter( profile =>  {
        return profile.favoriteMovieID === movieKey
  }
    
    ).map(profile => {                                        
      return <li> {(users[profile.userID]).name}</li>
         
          })
          
        
      }
      </ul>
</div>
    
    )
}
  
  }
  
}

export default FavoriteDisplay