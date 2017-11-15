import React, { Component } from 'react';
import '../App.css';
import router from '../router.js';
import Navbar from './Navbar/Navbar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, getUserId } from '../ducks/reducer';
import firebase from '../firebase'

class App extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.uid);
        this.props.login(user.uid);
      }
      else {
        this.props.login('')
      }
    })
  }

  // componentDidMount() {
  //   this.props.getUserId();
  //   console.log(firebase);
  // }

  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps);
  // }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Navbar />
        { router }
      </div>
    );
  }
}

export default withRouter(connect(state => state, { login, getUserId })(App));
