import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import router from '../router.js'

class App extends Component {

  componentWillMount() {
    axios.get('/api/getItems').then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Link to="/login" className="padding">My Account</Link>
          <Link to="/" className="padding">Home</Link>
          <Link to="/listings" className="padding">Listings</Link>
          <Link to="/post" className="padding">Post</Link>
          { router }
        </div>
      </div>
    );
  }
}

export default App;
