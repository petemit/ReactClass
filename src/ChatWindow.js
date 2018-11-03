import React, {Component} from 'react'
import AddNewMessage from './AddNewMessage';
import PropTypes from 'prop-types'
class ChatWindow extends Component {
    render() {
        return (
            <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.username}</div>
            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === this.props.username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <AddNewMessage handleAddMessage = {this.props.handleAddMessage} />
          </div>

        )
    }

}
//todo put proptypes here

export default ChatWindow