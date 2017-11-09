import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../../../firebase.js'
// import './.css';

class Fav extends Component{
  constructor(props){
    super(props);

    this.state = {
      favorite: false
    }
  }

  componentWillMount() {
     firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({ user: user.email })
        }
      })


      // console.log(this.props);

      if(this.props.item.favorited === 'true') {
        console.log(this.props.item.post_id + ' is favorited');
        this.setState({ favorite: true })
        console.log(this.state.favorite);
      }
  }

  render(){
    return(
      <div className="list-item-favorite" onClick={() => { this.props.onFav(this.props.item.post_id, this.state.favorite); this.setState({favorite: !this.state.favorite}) }}>
          <i id="heart-o" className={ this.state.favorite ? "fa fa-heart-o selected" : "fa fa-heart-o"} aria-hidden="true"></i>
          <i id="heart" className={ this.state.favorite ? "fa fa-heart selected" : "fa fa-heart"} aria-hidden="true"></i>
      </div>
    )
  }
}

export default Fav
