
import React, { Component } from 'react';
import axios from 'axios';
import './Post.css';
import { withRouter, Link } from 'react-router-dom';
import Email from './EmailForm/Email';
import Fav from '../2-Listings/Fav/Fav'
import firebase from '../../firebase.js'
import Map from './Map/Map';

class Post extends Component{
  constructor(props){
    super(props);
    console.log(props)

    this.state = {

       post: [],
       modal: false,
       timestamp: ''

    }
   this.closeEmailLoginModal =  this.closeEmailLoginModal.bind(this);

  }

  componentWillMount(){



    firebase.auth().onAuthStateChanged(user => {
      if (user) {

        this.setState({ user: user.email })
        this.setState({uid: user.uid})

        // Take this out after implementing REDUX **********************************
        const post_id = this.props.match.params.post_id;
        console.log(post_id);
        const postObject = {
          post_id: post_id,
          uid: this.state.uid
        }

        axios.post('/api/getPost', postObject).then(res=> {
          console.log(res.data[0]);
          this.setState({post: res.data[0]})
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

          console.log(timestamp);
          this.setState({ timestamp: timestamp})
        })
        // Take this out after implementing REDUX **********************************

      }
    })



  }

  emailLoginModal = () => {
  this.setState({ modal : true });
  }

  closeEmailLoginModal = () => {
  this.setState({ modal: false });
  }

  handleFavPost(id, fav){
    console.log(id + " " + fav);
    let uid = this.state.uid
    const favObject = {
      uid: this.state.uid,
      post_id: id
    }

    if(!this.state.user) {
      this.setState({ modal: true })
    }
    else if(fav == false) {
      console.log('false');
      axios.post('/api/postFav', favObject)
    }
    else {
      console.log('true');
      axios.post('/api/removeFav', favObject)
    }
  }

  handleState() {
    console.log(this.state);
    return this.state;

  }


  render(){
    const item = this.state.post

    return(
      <div className="post-container">
        <div className="content-container">






          <div className="post-item-top-container">
            <div className="post-item-title-container">
              <h2>{this.state.post.title}</h2>
            </div>
            <div className="post-item-price-container">
              <h2  className="post-item-price" >$ {this.state.post.price}</h2>
            </div>
          </div>


          <div className="post-item-duo-container">

            <div className="post-item-left-container">

              <div className="post-img-container">
                <img className="post-item-image" src={this.state.post.image_url} alt='' />
              </div>
              <div>
                <h2>{this.state.post.tag}</h2>
              </div>
              <div className="post-item-description">
                <p>– {this.state.timestamp}</p>
                <p>{this.state.post.description}</p>
              </div>



 {this.state.modal && <Email userInfo={this.state.post} close={ this.closeEmailLoginModal } />}

            </div>

            <div className="post-item-right-contianer">

              <div className="textCenter">
              <button onClick={ (event) => this.emailLoginModal(event)}>Contact the Owner</button>
                <div>
              <Fav item={item} onFav={this.handleFavPost.bind(this)}/>
              </div>
                <h2  className="post-item-email" >{this.state.post.email}</h2>
              </div>

              <div className="mapDiv">
              <Map userInfo={this.state.post} />
             </div>

            </div>

          </div>

        </div>

      </div>
    )
  }
}
export default withRouter(Post);
