import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);

class App extends Component {

  state = {
    value1: value1,
    value2: value2,
    value3: value3,
    proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3,
    numQuestions: 0,
    numCorrect: 0
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button
            onClick={() =>  redoComponents(this, true)
            }
          >True</button>
          <button
            onClick={() => 
              redoComponents(this, false)
          }
          >False</button>
        <p className="text">
          Your Score: {this.state.numCorrect}/{this.state.numQuestions}
        </p>
      </div>
      </div >
    );
  }
}

function redoComponents(App, bool) {

  if (bool && App.state.proposedAnswer === App.state.value1 + App.state.value2 + App.state.value3) {
    App.setState(prevState => ({
      numCorrect : prevState.numCorrect +1
    }))
  } else if (!bool && App.state.proposedAnswer !== App.state.value1 + App.state.value2 + App.state.value3) {
    App.setState(prevState => ({
      numCorrect : prevState.numCorrect+1
    }))
  }

  App.setState(prevState => ({
    numQuestions : prevState.numQuestions +1
  }))

  App.setState(prevState => ({
    value1: Math.floor(Math.random() * 100),
    value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
  }))

  App.setState(prevState => ({
    proposedAnswer: Math.floor(Math.random() * 3) + App.state.value1 + App.state.value2 + App.state.value3,
  }))

 
}

export default App;
