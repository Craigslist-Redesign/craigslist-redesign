import React, { Component } from 'react';
import firebase from '../../firebase.js'
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoginModal from '../Navbar/LoginModal/LoginModal';
import Fav from './Fav/Fav' 
import'./Listings.css'

class Listings extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      modal:false,
      listArray: [],
      uid: '',
      user:'',
    }
    this.closeModal =  this.closeModal.bind(this);
  }
  componentWillMount(){
    const catObject = this.props.match.params;

    axios.post('/api/getListings/', catObject).then(res => {
 
    this.setState({listArray: res.data})
    })
    firebase.auth().onAuthStateChanged(user => {
          if (user) {
           
            this.setState({ user: user.email })
            this.setState({uid: user.uid})
           
          }
        })
  }
  closeModal(){
    this.setState({modal: false});
  }
  
  handleFavPost(favs){
    let uid = this.state.uid
    if(!this.state.user) {
      this.setState({ modal: true })
    }
    else {
      axios.post('/api/postFav',[uid,favs.post_id])
    }
    
  }


  render(){
    console.log(this)
    let that = this
   
    return(
      <div className="listings-container">
        <h1>Listings</h1>
        { this.state.modal && <LoginModal closeModal={ this.closeModal } /> }
        <div className="list-item-parent-container">
        {this.state.listArray.map(function(item,index){

          return (
            <div className="list-item-container">
            <Link to={`/post/${item.post_id}`} key={index}>

              <img className="list-item-image" src={item.image_url} alt='' />
              <div className="list-item-title-container">
                <h2>
                  {item.title} 
                </h2>
                
                </div> 
              </Link>
               <Fav item={item} onFav={that.handleFavPost.bind(that)}/>
               
            </div>
           
          )
        })}
        </div>
      </div>
    )
  }

}

export default Listings;

// this.props.match.history
