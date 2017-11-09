import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class FavoritePost extends Component {
    contrustor(props) {


    }

    removeFav(favInfo) {
        this.props.onRemoveFav(favInfo)
    }



    render() {
        const backgroundStyle = {
            backgroundImage: `url(${ this.props.fav.image_url })`
          }
        return (


          <div className="list-item-container">
            <Link to={`/post/${this.props.fav.post_id}`}>
              <div className="list-item-parent-image">
                <div className="list-item-image-container" style={ backgroundStyle }></div>
              </div>
            </Link>
            <div className="list-item-title-container">
              <Link to={`/post/${this.props.fav.post_id}`}>
                <h3>{this.props.fav.title}</h3>
              </Link>
              <div className="list-item-delete" onClick={this.removeFav.bind(this, this.props.fav)}>
                x
              </div>
            </div>
          </div>


        )


    }
}

export default withRouter(FavoritePost)
