import React, { Component } from 'react';

class TextMirrorer extends Component {
  state = {
    textEntry : ''
  };
  updateText = (result) => {
    this.setState(() => ({
                  textEntry : result
                  }))
  }
  render() {
    return (
      <div>
       <input type="text"
       placeholder="Say Something"
       value = {this.state.textEntry}
       onChange= {(event) => this.updateText(event.target.value)}/>
          <p className="echo">Echo:</p>
          <p>{this.state.textEntry}</p>
      </div>
    )
  }
}

export default TextMirrorer