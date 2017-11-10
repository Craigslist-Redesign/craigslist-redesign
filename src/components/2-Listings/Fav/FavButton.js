import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class FavButton extends Component{
  constructor(props){
    super(props);

    this.state = {
      favorite: false
    }
  }

  componentWillMount() {
    if(this.props.item.favorited === 'true') {
      this.setState({ favorite: true })
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.item.favorited === 'true') {
      this.setState({ favorite: true })
    }
  }

  handleFav = () => {
    if(this.props.userId){
      this.props.onFav(this.props.item.post_id, this.state.favorite); this.setState({favorite: !this.state.favorite})
    } else {
      this.props.login();
    }
  }

  render(){
    let addFav;
    if(this.state.favorite) {
      addFav = "Unfavorite"
    } else {
      addFav = "Add to favorite"
    }
    return(
      <div onClick={ this.handleFav }>
          <button id="fav-btn" className="btn" aria-hidden="true">{ addFav }</button>
      </div>
    )
  }
}

export default connect(state => state)(FavButton)
