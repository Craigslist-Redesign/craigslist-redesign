import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../../../firebase.js'
// import './.css';

class Fav extends Component{
  constructor(props){
    super(props);

    this.state = {}
  }

  componentWillMount() {
     firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ user: user.email })

        }
      })
      // let fav = document.getElementById('list-item-favorite');

      // document.getElementById('list-item-favorite').addEventListener('click', this.handleFavSelect);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleFavSelect);
  }

  handleFavSelect() {
    document.getElementById('heart-o').classList.add('selected')
  }

  favPost(favs){
      this.props.onFav(favs)
  }

  render(){
    return(
      <div id="list-item-favorite" onClick={this.favPost.bind(this, this.props.item)}>
          <i id="heart-o" className="fa fa-heart-o" aria-hidden="true"></i>
          <i id="heart" className="fa fa-heart" aria-hidden="true"></i>
      </div>
    )
  }
}

export default Fav
