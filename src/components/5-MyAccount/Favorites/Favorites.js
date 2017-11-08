import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../../../firebase.js';
import FavoritePost from './FavoritePost'

class Favorites extends Component{
    constructor(props){
        super(props);

        
    }

    componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {

                this.setState({ successEmail: user.email })
            }

            const uid = user.uid
            this.setState({uid})

           

        })


    }

    // renderListItem(item, index) {
    //     const backgroundStyle = {
    //       backgroundImage: `url(${ item.image_url })`
    //     }
    //     return (
    //       <div className="list-item-container" key={index}>
    //         <Link to={`/post/${item.post_id}`}>
    //         <div className="list-item-image-container" style={ backgroundStyle }>
    //           { item.price != 0 && <p>${ item.price }</p> }
    //         </div>
    //         <div className="list-item-title-container">
    //           <h3>{ item.title }</h3>
    //         </div>
    //       </Link>
    //       {/* <Fav item={item} onFav={this.handleFavPost.bind(this)}/> */}
    //     </div>
    //     )
    //   }

    removeFav(favInfo){
        this.props.onRemoveFav(favInfo)
    }

    render() {
        console.log(this.props)
        const myFav = this.props.favorites.map((fav, index) => {
            return <FavoritePost
            onRemoveFav={this.removeFav.bind(this)}
            key={index} 
            fav={fav} />
        })

        return (
            
            <div id="center" className="content-container">
                <div className="list-item-parent-container">
                   {myFav}
                </div>
            </div> 
            
                
            )
    }

}

export default Favorites
