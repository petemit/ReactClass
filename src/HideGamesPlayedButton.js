import React, { Component } from 'react'

class HideGamesPlayedButton extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={(event) => this.props.onHideButton(event)}
                >{this.props.hideState ? "Hide Games Played" : "Show Games Played"}</button>
            </div>
        )
    }
}

export default HideGamesPlayedButton