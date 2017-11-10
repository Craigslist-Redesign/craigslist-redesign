
import React, { Component } from 'react';
import axios from 'axios';
import './Post.css';
import { withRouter, Link } from 'react-router-dom';
import Email from './EmailForm/Email';
import FavButton from '../2-Listings/Fav/FavButton'
import firebase from '../../firebase.js'
import Map from './Map/Map';
import { connect } from 'react-redux';
import LoginModal from '../Navbar/LoginModal/LoginModal';

class Post extends Component{
  constructor(props){
    super(props);
    console.log(props)

    this.state = {

       post: [],
       modal: false,
       timestamp: '',
       loginModal: false,
       redirect: ''

    }
   this.closeEmailLoginModal =  this.closeEmailLoginModal.bind(this);

  }

  componentDidMount(){
    this.setState({ uid: this.props.userId })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user.email })
      }
    })
    this.getPost()
  }

  getPost() {
    const post_id = this.props.match.params.post_id;
    const postObject = {
      post_id: post_id,
      uid: this.props.userId
    }

    axios.post('/api/getPost', postObject).then(res=> {

      this.setState({post: res.data, redirect: 'post'})
      console.log(this.state);
      axios.get('/api/updateCounter/'+post_id)

      // timestamp
      let previous = new Date(res.data[0].time_stamp)
      let current = new Date()


      function timeDifference(current, previous) {

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + ' seconds ago';
        }

        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' minutes ago';
        }

        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' hours ago';
        }


        else if (elapsed < msPerMonth) {
             return Math.round(elapsed/msPerDay) + ' days ago';
        }

        else if (elapsed < msPerYear) {
             return Math.round(elapsed/msPerMonth) + ' months ago';
        }



        else {
             return Math.round(elapsed/msPerYear ) + ' years ago';
        }
      }


      let timestamp = timeDifference(current, previous);

      this.setState({ timestamp: timestamp})
    })
  }

  emailLoginModal = () => {
  this.setState({ modal : true });
  }

  closeEmailLoginModal = () => {
  this.setState({ modal: false });
  }

  handleFavPost(id, fav){
    let uid = this.state.uid
    const favObject = {
      uid: this.state.uid,
      post_id: id
    }

    if(!this.state.user) {
      this.setState({ modal: true })
    }
    else if(fav == false) {
      axios.post('/api/postFav', favObject)
    }
    else {
      axios.post('/api/removeFav', favObject)
    }
  }

  renderPostItem(item, index) {
    const backgroundStyle = {
      backgroundImage: `url(${item.image_url})`
    }
    return (
      <div key="index" className="post-item-container">
        <div className="post-item-left-container">
          <h3 className="post-item-header">{item.title}</h3>
        </div>

        <div className="post-item-left-container">
          <div className="post-item-image-container" style={ backgroundStyle }></div>
        </div>

        <div className="post-item-left-container">
          <div className="post-item-description-container">
            <div className="postitem-description-header">
              <h4 className="post-item-description-tag">{item.tag}</h4>
              <p className="post-item-description-timestamp">– {this.state.timestamp}</p>
            </div>
            <p className="post-item-description">{item.description}</p>
          </div>
        </div>

        <div className="post-item-right-container">
          <p className="post-item-header">
            { item.price != 0 && '$' + item.price }
          </p>
          <button id="email-btn" className="btn" onClick={ (event) => this.emailLoginModal(event)}>Contact the Owner</button>
          <FavButton item={item} key={index} login={this.showLoginModal.bind(this)} onFav={this.handleFavPost.bind(this)}/>
          <Map userInfo={item} />
        </div>

      </div>
    )
  }

  showLoginModal = () => {
    this.setState({ loginModal: true })
  }

  closeLoginModal = () => {
    this.setState({ loginModal: false });
  }

  render(){
    console.log('Post - Parent Render');
    const item = this.state.post

    return(
      <div className="post-container">
        <div className="content-container">
          { this.state.post.map( (x, i) => this.renderPostItem(x, i)) }
          { this.state.modal && <Email userInfo={item} close={ this.closeEmailLoginModal } />}
          { this.state.loginModal && <LoginModal post={ this.getPost.bind(this) } state={ this.state } closeModal={ this.closeLoginModal } /> }
        </div>
      </div>



    )
  }
}
export default withRouter(connect(state => state)(Post));
