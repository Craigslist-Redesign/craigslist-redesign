import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../../../firebase.js'
// import './.css';

class Fav extends Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    componentWillMount() {
       
       firebase.auth().onAuthStateChanged(user => {
          if (user) {
            
            this.setState({ user: user.email })
            
          }
        })
    }

    favPost(favs){
        this.props.onFav(favs)
    }

    render(){
       
        return(
            <div>
                <a href="#" onClick={this.favPost.bind(this, this.props.item)}>
                fav
                </a>
            </div>
        )
    }

}
export default Fav