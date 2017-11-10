import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class Fav extends Component{
  constructor(props){
    super(props);

    this.state = {
      favorite: false
    }
  }

  componentDidMount() {
      console.log('MOUNTING THAT COMPONENT');
  }

  // componentWillReceiveProps(nextProps){
  //   if(nextProps.item.favorited === 'true') {
  //     this.setState({ favorite: true }, () => {
  //       console.log(this.state.favorite);
  //     })
  //   }
  // }

  handleFav = () => {
    console.log(this.state.favorite);
    if(this.props.userId){
      this.props.onFav(this.props.item.post_id, this.props.item.favorited);
      this.setState({ favorite: !this.state.favorite })
    } else {
      this.props.login();
    }
  }

  render(){
    return(
      <div className="list-item-favorite" onClick={ this.handleFav }>
          <i id="heart-o" className={ this.props.item.favorited == 'true' ? "fa fa-heart-o selected" : "fa fa-heart-o"} aria-hidden="true"></i>
          <i id="heart" className={ this.props.item.favorited == 'true' ? "fa fa-heart selected" : "fa fa-heart"} aria-hidden="true"></i>
      </div>
    )
  }
}

export default connect(state => state)(Fav)
