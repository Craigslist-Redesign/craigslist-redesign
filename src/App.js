import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  componentWillMount() {
    axios.get('/api/getItems').then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
