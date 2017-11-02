import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import router from '../router.js'
import Navbar from './Navbar/Navbar'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Link to="/" className="padding">Home</Link>
          <Link to="/listings" className="padding">Listings</Link>
          <Link to="/post" className="padding">Post</Link>
          <Link to="/form" className="padding">Form</Link>
          <Link to="/myaccount" className="padding">MyAccount</Link>
          { router }
        </div>
      </div>
    );
  }
}

export default App;
