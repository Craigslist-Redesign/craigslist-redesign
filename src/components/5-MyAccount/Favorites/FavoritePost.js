import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Favorites.css'

class FavoritePost extends Component {


    removeFav(favInfo) {
        this.props.onRemoveFav(favInfo)
    }

    componentWillMount() {
      console.log(this.props.fav.post_id);
    }

    render() {
        const backgroundStyle = {
            backgroundImage: `url(${ this.props.fav.image_url })`
          }
        return (


          <div id="list-item" className="list-item-container">
            <Link to={`/post/${this.props.fav.post_id}`}>
              <div id="list-image" className="list-item-parent-image">
                <div className="list-item-image-container" style={ backgroundStyle }></div>
              </div>
            </Link>
            <div className="list-item-title-container">
              <Link to={`/post/${this.props.fav.post_id}`}>
                <h3 id="list-title">{this.props.fav.title}</h3>
              </Link>
              <div className="list-item-delete" onClick={this.removeFav.bind(this, this.props.fav)}>
                <i id={`heart-${ this.props.fav.post_id }`} className="fa fa-heart selected animate" aria-hidden="true"></i>
              </div>
            </div>
          </div>


        )


    }
}

export default withRouter(FavoritePost)
