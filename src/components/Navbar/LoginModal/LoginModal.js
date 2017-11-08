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
      successEmail: '',
      userUid: '',
      form: false
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
      .then(response => {
        firebase.auth().onAuthStateChanged(user => {

          this.setState({ userUid: user.uid })

          const uid = this.state.userUid
          axios.post('/user/createUser', [email, uid])
        })
      })
    }

    else if(email && password.length < 6) {
      alert('Password should be at least 6 characters')
    }
    else{
      alert('Please fill out all fields.')
    }
  }

 showCreateAccount(){
   this.setState({form: true})
 }

 showLogin(){
   this.setState({form: false})
 }


  render() {
    let form;
      if(!this.state.form){
        form =
        <div className="login-modal-container">
          <div className="login-modal-content-container">
          <h1 className="login-modal-header">Login</h1>
          <hr/>
          <form className="login-modal-form-container">
            <label className="login-modal-email-header">Email</label>
            <br/>
            <input className="login-modal-email" type="email" onChange={ (event) => this.setState({ loginEmail: event.target.value })}/>
            <br/>
            <label className="login-modal-password-header">Password</label>
            <br/>
            <input className="login-modal-password" type="password" onChange={ (event) => this.setState({ loginPassword: event.target.value })}/>
          </form>
          <input id="login-modal-login-button" className="btn"  type="submit" value="Login" onClick={ (event) => this.handleLogin(event) }/>
          <br/>
          <hr/>
          <div className="login-modal-account-container">
          <p className="login-modal-account-header">Don't have an account?</p>
          <a className="login-modal-account" onClick={ (event) => this.showCreateAccount(event) }>Sign up</a>
          </div>
        </div>
         </div>
        }
        else {
          form =
          <div className="login-modal-container">
            <div className="login-modal-content-container">
           <h1 className="login-modal-header">Create Account</h1>
           <hr />
           <form className="login-modal-form-container">
             <label className="login-modal-email-header">Email</label>
             <br/>
             <input className="login-modal-email" type="email" onChange={ (event) => this.setState({ createEmail: event.target.value })}/>
             <br/>
             <label className="login-modal-password-header">Password</label>
             <br/>
             <input className="login-modal-password" type="password" onChange={ (event) => this.setState({ createPassword: event.target.value })}/>
           </form>
           <input id="login-modal-login-button" className="btn" type="submit" value="Sign up" onClick={ (event) => this.handleSubmit(event) } />
           <br/>
           <hr/>
           <div className="login-modal-account-container">
           <p className="login-modal-account-header">Already have an account?</p>
           <a className="login-modal-account" onClick={ (event) => this.showLogin(event) }>Login</a>
         </div>
         </div>
       </div>
       }
    return(
      <div className="login-modal-background">
        <div className="close-login-modal"
        onClick={ this.props.closeModal }>X</div>
          {form}
      </div>
    )
  }
}

export default LoginModal
