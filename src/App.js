import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewUser from './AddNewUser.js'
import DisplayUserList from './DisplayUserList.js'
import UserList from './User.js'

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
  }

  onHideButton = () => {
    this.setState(oldState => (
        {hidingGamesPlayed: !oldState.hidingGamesPlayed}
    )
    )
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
        <AddNewUser AddNewUser={this.addNewUser} userList = {this.state.userList} />
        <DisplayUserList hidingGamesPlayed={this.state.hidingGamesPlayed} userList={this.state.userList}
        />
      </div>
    );
  }
}

export default App;
