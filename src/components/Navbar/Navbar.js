import React, { Component } from 'react';
import './Navbar.css';
import firebase from '../../firebase.js';
import { withRouter, Link } from 'react-router-dom';
import LoginModal from './LoginModal/LoginModal';
// import RouterButton from './RouterButton/RouterButton';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      user: ''
    }
    this.closeModal =  this.closeModal.bind(this);
  }

  componentWillMount() {
    console.log(this.state.modal);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        this.setState({ user: user.email })
        console.log(this.state);
      }
    })
  }

  handleAccountCondition = () => {
    if(!this.state.user) {
      this.setState({ modal: true })
    }
    else {
      this.props.history.push('/myaccount');
    }
  }

  handleFormCondition = () => {
    if(!this.state.user) {
      this.setState({ modal: true })
    }
    else {
      // withRouter history.push to new path ***********************************
      this.props.history.push('/form');
    }
  }

  handleSignout(event) {
    const user = this.state.user
    firebase.auth().signOut().then(() => {
      this.setState({ user: ''})
      console.log(user, 'Signed Out');
    })
  }

  closeModal(){
    this.setState({modal: false});
  }

  render() {
    return(
      <div className="content-container">
        <div className="navbar-container">
          <h3 className="navbar-logo"><Link to="/">Craiglist</Link></h3>
          <div className="navbar-btn-container">
            <a className="navbar-account" onClick={ this.handleAccountCondition }>My Account</a>
            <button className="btn" onClick={ this.handleFormCondition }>Post an Ad</button>
          </div>
          {/* <div>
            <button onClick={ (event) => this.handleSignout(event) }>Sign out</button>
          </div> */}
          { this.state.modal && <LoginModal closeModal={ this.closeModal } /> }
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar);
