import React, { Component } from 'react'

class DisplayUserList extends Component {
    render() {

        return (
            <div>
                <ol>
                    {this.props.userList.map(user =>
                        (
                            <li key={user} >
                            
                            {user} has played {this.props.hidingGamesPlayed ? 0 : "*"} games
                            </li>
                        )
                    )}
                </ol>

            </div>

        )
    }

}

export default DisplayUserList