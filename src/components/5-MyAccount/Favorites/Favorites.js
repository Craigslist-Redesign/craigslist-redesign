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

    removeFav(favInfo){
        this.props.onRemoveFav(favInfo)
    }

    render() {
        console.log(this.props)
        const myFav = this.props.favorites.map((fav) => {
            return <FavoritePost
            onRemoveFav={this.removeFav.bind(this)}
            key={fav.post_id} 
            fav={fav} />
        })

        return (
                
                <ul>
                   {myFav}
               </ul>    
                
            )
    }

}

export default Favorites
