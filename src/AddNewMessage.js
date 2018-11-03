import React, { Component } from 'react'

class AddNewMessage extends Component {
    state = {
        newMessage: ""
    }

    isNewMessageBlank = () => (
        this.state.newMessage.length === 0
    )

    handleAddMessage = (event) => {
        event.preventDefault();
        this.props.handleAddMessage(this.state.newMessage);
        this.setState({
            newMessage : ""
        });
        console.log("hey what?");
    }

    handleTextEntry = (event => {
        this.setState({ newMessage: event.target.value });
    })

    render() {
        return (
            <div>
                <form className="input-group"
                    onSubmit={this.handleAddMessage}>
                    <input type="text" className="form-control" placeholder="Enter your message..."
                    value = {this.state.newMessage}
                        onChange={(event) => this.handleTextEntry(event)}
                    />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isNewMessageBlank()}


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