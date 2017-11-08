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
    <div className="email-modal-background">
      <div className="close-email-modal"
      onClick={ this.props.close }>X</div>
      <div className="email-modal-container">
        <h1 className="email-modal-sendmsg">Send Message</h1>
        <form className="email-modal-form-container">
        <div className="email-modal-top-container">
          <label className="email-modal-creators-email-header">Creators Email</label>
          <br/>
          <div className="email-modal-creators-email">
          <h3>{this.props.userInfo.email}</h3>
          </div>
          <hr/>

          <label className="email-modal-subject">Subject</label>
          <br/>
          <div className="email-modal-title-tag">
          <h3>{this.props.userInfo.title}</h3>
          </div>
          <hr/>


          <label className="email-modal-your-email-header">Enter your email</label>

          <input autofocus className="input" type="email" onChange={ (event) => this.setState({ yourEmail: event.target.value })}/>
          <hr/>
</div>

          <label className="email-modal-message-header">Message</label>
          <textarea className="email-modal-message-input" type="text" onChange={ (event) => this.setState({ message: event.target.value })}/>
            <input id="email-send-btn" className="btn" type="submit" value="Send" onClick={ (event) => this.handleEmail(event) }/>
        </form>



      </div>

    </div>
  )
}
}

export default Email
