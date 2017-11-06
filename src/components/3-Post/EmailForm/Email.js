import React, { Component } from 'react';
import firebase from '../../../firebase.js';
import axios from 'axios';
import './Email.css'

class Email extends Component {
  constructor(props) {
    super(props)
    console.log(props)

    this.state = {
      creatorEmail: '',
      yourEmail: '',
      subject: '',
      message: ''
    }
  }

  handleEmail(event){
  const emailObj = {creatorEmail: this.state.creatorEmail,yourEmail: this.state.yourEmail,subject: this.state.subject,message: this.state.message }
    axios.post('/api/sendMail',emailObj )
  }


render() {
  return(
    <div className="login-modal-background">

      <div className="close-login-modal"
      onClick={ this.props.close }>X</div>
      <div className="login-modal-container">
        <h1>Send Message</h1>
        <form>
          <label>Creators Email</label>
          <br/>
          <input type="email" onChange={ (event) => this.setState({ creatorEmail: event.target.value })}/>
          <br/>
          <label>Your Email</label>
          <br/>
          <input type="email" onChange={ (event) => this.setState({ yourEmail: event.target.value })}/>
          <br/>
          <label>Subject</label>
          <br/>
          <input type="text" onChange={ (event) => this.setState({ subject: event.target.value })}/>
          <br/>
          <label>Message</label>
          <br/>
          <textarea type="text" onChange={ (event) => this.setState({ message: event.target.value })}/>
        </form>
        <input type="submit" value="Send" onClick={ (event) => this.handleEmail(event) }/>
      </div>

    </div>
  )
}
}

export default Email
