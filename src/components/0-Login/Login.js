import React, { Component } from 'react';
import firebase from '../../firebase.js';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'email': '',
      'password': ''
    }
  }

  handleSubmit(event) {
    const email = this.state.email;
    const password = this.state.password;

    if(email && password){
      console.log(this.state);
      firebase.auth().createUserWithEmailAndPassword(email, password)
      axios.post('/user/createUser', [email])
      .then(response => {
        console.log(response);
      })
    }
    else{
      alert('Please fill out all fields.')
    }
  }

  render() {
    return(
      <div>
        <h1>Login</h1>
        <form>
          <label>Email</label>
          <br/>
          <input type="text"/>
          <br/>
          <label>Password</label>
          <br/>
          <input type="text"/>
        </form>
        <button type="submit">Login</button>

        <h1>Create Account</h1>
        <form>
          <label>Email</label>
          <br/>
          <input type="text" onChange={ (event) => this.setState({ email: event.target.value })}/>
          <br/>
          <label>Password</label>
          <br/>
          <input type="password" onChange={ (event) => this.setState({ password: event.target.value })}/>
        </form>

        <button type="submit" onClick={ (event) => this.handleSubmit(event) }>Submit</button>
      </div>
    )
  }
}

export default Login;
