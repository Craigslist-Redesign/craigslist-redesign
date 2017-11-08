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

            // <Link to={`/post/${this.props.fav.post_id}`}>
            <div className="list-item-container">
                {/* <img className="list-item-image" src={this.props.fav.image_url} /> */}
                <div className="list-item-image-container" style={ backgroundStyle }/>
                <div className="list-item-title-container"> <h2>{this.props.fav.title} </h2></div>
                
                <a href="#" onClick={this.removeFav.bind(this, this.props.fav)}> x </a>

            </div>
            /* </Link> */

        )


    }
}

export default withRouter(FavoritePost)

