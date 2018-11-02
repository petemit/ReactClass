import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewUser from './AddNewUser.js'
import DisplayUserList from './DisplayUserList.js'
import UserList from './User.js'
import DupeErrorDisplay from './DupeErrorDisplay.js'
import HideGamesPlayedButton from './HideGamesPlayedButton.js'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    userList: [],
    hidingGamesPlayed: false,
    dupeError: false
  }

  onHideButton = input => {
  
      this.setState(prevState => prevState.hidingGamesPlayed = !prevState.hidingGamesPlayed)
  
  }
  hasDuplicate = input => {
    if ((this.state.userList.find(user => user === input))) {
      if (this.state.dupeError !== true) {
        this.setState(prevState => prevState.dupeError = true)
      }
      return true;
    } else {
      if (this.state.dupeError !== false) {
        this.setState(prevState => prevState.dupeError = false)
      }
      return false;
    }
  }
  addNewUser = input => {
    this.setState(prevState =>
      ({
        userList: [...prevState.userList, input]
      })
    );
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <HideGamesPlayedButton onHideButton = {this.onHideButton} hideState={this.state.hidingGamesPlayed}/>
        <div hidden={!this.state.dupeError} ><DupeErrorDisplay dupeError={this.state.dupeError}  /></div>
        <AddNewUser hasDuplicate={this.hasDuplicate} AddNewUser={this.addNewUser} />
        <DisplayUserList hidingGamesPlayed={this.state.hidingGamesPlayed} userList={this.state.userList}
        />
      </div>
    );
  }
}

export default App;
