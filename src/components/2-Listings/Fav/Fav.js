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
     console.log('Child component will mount');
      console.log(this.props);
      if(this.props.item.favorited === 'true') {
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
