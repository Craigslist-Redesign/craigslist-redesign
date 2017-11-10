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
    return(
      <div className="list-item-favorite" onClick={ this.handleFav }>
          <i id="heart-o" className={ this.state.favorite ? "fa fa-heart-o selected" : "fa fa-heart-o"} aria-hidden="true"></i>
          <i id="heart" className={ this.state.favorite ? "fa fa-heart selected" : "fa fa-heart"} aria-hidden="true"></i>
      </div>
    )
  }
}

export default connect(state => state)(FavButton)
