import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
import router from '../router.js'
import Navbar from './Navbar/Navbar'

class App extends Component {

  componentWillMount() {
    axios.get('/api/getItems').then(response => {
      console.log(response);
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Link to="/" className="padding">Home</Link>
          <Link to="/listings" className="padding">Listings</Link>
          <Link to="/post" className="padding">Post</Link>
          <Link to="/form" className="padding">Form</Link>
          { router }
        </div>
      </div>
    );
  }
}

export default App;
