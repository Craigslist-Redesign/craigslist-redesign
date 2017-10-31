import React, { Component } from 'react';
import firebase from '../../../firebase.js';
import axios from 'axios';
import './LoginModal.css'

class LoginModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginEmail: '',
      loginPassword: '',
      createEmail: '',
      createPassword: '',
      successEmail: ''
    }
  }

  handleLogin(event) {
    const email = this.state.loginEmail;
    const password = this.state.loginPassword;

    if(email && password) {
      // console.log(this.state);
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().onAuthStateChanged(user => {

          if (user) {
            console.log(user);
            this.setState({ successEmail: user.email })
            console.log(this.state);
          }

        })
      })
      .catch(err => {
        if(err.message === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
          alert('This email does not exist.')
        }
        else if(err.message === "The email address is badly formatted.") {
          alert("Please enter a correctly formatted email address.")
        }
        else if(err.message === "The password is invalid or the user does not have a password.") {
          alert('Password is incorrect.')
        }
        else {
          console.log(err);
        }
      })
    }
  }

  handleSubmit(event) {
    const email = this.state.createEmail;
    const password = this.state.createPassword;

    if(email && password.length >= 6){
      console.log(this.state);
      firebase.auth().createUserWithEmailAndPassword(email, password)
      axios.post('/user/createUser', [email])
      .then(response => {
        console.log(response);
        // Go to path...
      })
    } else if(email && password.length < 6) {
      alert('Password should be at least 6 characters')
    }
    else{
      alert('Please fill out all fields.')
    }
  }

  render() {
    return(
      <div className="login-modal-background">
        <div className="close-login-modal"
        onClick={ this.props.closeModal }>X</div>
        <div className="login-modal-container">
          <h1>Login</h1>
          <form>
            <label>Email</label>
            <br/>
            <input type="email" onChange={ (event) => this.setState({ loginEmail: event.target.value })}/>
            <br/>
            <label>Password</label>
            <br/>
            <input type="password" onChange={ (event) => this.setState({ loginPassword: event.target.value })}/>
          </form>
          <input type="submit" value="Login" onClick={ (event) => this.handleLogin(event) }/>

          <h1>Create Account</h1>
          <form>
            <label>Email</label>
            <br/>
            <input type="email" onChange={ (event) => this.setState({ createEmail: event.target.value })}/>
            <br/>
            <label>Password</label>
            <br/>
            <input type="password" onChange={ (event) => this.setState({ createPassword: event.target.value })}/>
          </form>
          <input type="submit" onClick={ (event) => this.handleSubmit(event) } />
        </div>
      </div>
    )
  }
}

export default LoginModal
