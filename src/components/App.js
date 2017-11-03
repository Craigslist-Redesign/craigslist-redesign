import React, { Component } from 'react';
import '../App.css';
import router from '../router.js'
import Navbar from './Navbar/Navbar'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        { router }
      </div>
    );
  }
}

export default App;
