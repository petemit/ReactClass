import React, { Component } from 'react'

class AddNewMessage extends Component {
    state = {
        newMessage: ""
    }

    isNewMessageBlank = () => (
        newMessage.length == 0
    )

    handleAddMessage = () => (
        this.props.handleAddMessage(newMessage)
    )

    handleTextEntry = (event) => {
        this.setState(oldState => {
            newMessage: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your message..."
                        onChange={(event) => handleTextEntry}
                    />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={() => this.isNewMessageBlank
                        }
                            onClick={() => handleAddMessage}
                            >
                            SEND
        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNewMessage