import React, { Component } from 'react';

class FavoritePost extends Component {
    contrustor(props){


    }

    removeFav(favInfo){
        this.props.onRemoveFav(favInfo)
    }


    render(){
        return <li>

                <div className="list-item-parent-container">
                 <div className="list-item-container">
            <img className="list-item-image" src={this.props.fav.image_url}/>
            <div className="list-item-title-container"> <h2>{this.props.fav.title} </h2></div>
            <a href="#" onClick={this.removeFav.bind(this, this.props.fav)}> removeFav </a>
            </div>
        </div>

    </li>

    }
}

export default FavoritePost
