import React, { Component } from 'react'

class DisplayUserList extends Component {
    render() {

        return (
            <div>
                <ol>
                    {this.props.userList.map(user =>
                        (
                            <li key={user} >{user}</li>
                        )
                    )}
                </ol>

            </div>

        )
    }

}

export default DisplayUserList