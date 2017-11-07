import React, { Component } from 'react';
import firebase from '../../../firebase.js';
import axios from 'axios';
import './Email.css'

class Email extends Component {
  constructor(props) {
    super(props)
    console.log(props)


    this.state = {
      creatorEmail: this.props.userInfo.email,
      yourEmail: '',
      subject: this.props.userInfo.title,
      message: ''
    }
    console.log(this.state)
  }

  handleEmail(event){
  const emailObj = {creatorEmail: this.state.creatorEmail,yourEmail: this.state.yourEmail,subject: this.state.subject,message: this.state.message }
    axios.post('/api/sendMail',emailObj )
  }


render() {
  // console.log(this.props.userInfo)
  return(
    <div className="login-modal-background">
      <div className="close-login-modal"
      onClick={ this.props.close }>X</div>
      <div className="login-modal-container">
        <h1>Send Message</h1>
        <form>
          <label>Creators Email</label>
          <br/>
          <div>
          <h3>{this.props.userInfo.email}</h3>
          </div>

          <label>Subject</label>
          <br/>
          <div>
          <h3>{this.props.userInfo.title}</h3>
          </div>

          <label>Your Email</label>
          <br/>
          <input type="email" onChange={ (event) => this.setState({ yourEmail: event.target.value })}/>
          <br/>

          <label>Message</label>
          <br/>
          <textarea type="text" onChange={ (event) => this.setState({ message: event.target.value })}/>
        </form>

        <input className="btn" type="submit" value="Send" onClick={ (event) => this.handleEmail(event) }/>

      </div>

    </div>
  )
}
}

export default Email
