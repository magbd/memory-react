import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div classname='App--container'>
          <header className="App--header">
            <h1 className="App--title">Memory game</h1>
          </header>
          <p className="App--intro">
          Flip the cards and try to match them up in pairs. Pair up all the cards to win.
          <br/>
          Try to complete the game in as few moves as possible !
          </p>
        </div>
      </div>
    );
  }
}

export default App;
