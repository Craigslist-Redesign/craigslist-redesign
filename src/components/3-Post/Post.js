
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
    return (
      <div key="index" className="content-container">
        <div className="post-item-top-container">
          <div className="post-item-title-container">
            <h2>{item.title}</h2>
          </div>
          <div className="post-item-price-container">
            <h2  className="post-item-price" >$ {item.price}</h2>
          </div>
        </div>
        <div className="post-item-duo-container">
          <div className="post-item-left-container">
            <div className="post-img-container">
              <img className="post-item-image" src={item.image_url} alt='' />
            </div>
            <div>
              <h2>{item.tag}</h2>
            </div>
            <div className="post-item-description">
              <p>– {this.state.timestamp}</p>
              <p>{item.description}</p>
            </div>
            {this.state.modal && <Email userInfo={item} close={ this.closeEmailLoginModal } />}
          </div>
          <div className="post-item-right-contianer">
            <div className="textCenter">
            <button onClick={ (event) => this.emailLoginModal(event)}>Contact the Owner</button>
              <FavButton item={item} key={index} login={this.showLoginModal.bind(this)} onFav={this.handleFavPost.bind(this)}/>
              <h2  className="post-item-email" >{item.email}</h2>
            </div>
            <div className="mapDiv">
            <Map userInfo={item} />
           </div>
          </div>
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
        { this.state.post.map( (x, i) => this.renderPostItem(x, i)) }
        { this.state.loginModal && <LoginModal post={ this.getPost.bind(this) } state={ this.state } closeModal={ this.closeLoginModal } /> }
      </div>



    )
  }
}
export default withRouter(connect(state => state)(Post));
