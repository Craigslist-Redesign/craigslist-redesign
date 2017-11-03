import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../../../firebase.js';

class Favorites extends Component{
    constructor(props){
        super(props);

        this.state = {
            favorites: []
        }
    }

    componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
            if (user) {

                this.setState({ successEmail: user.email })
            }

            const uid = user.uid
            this.setState({uid})

            axios.get('/api/getFavorites/' + uid).then((response) => {
                // let favorites = response.data
                console.log(response.data);
    
                this.setState({ favorites: response.data })

                // this.setState({listArray: res.data})
    
                
    
            })

        })


    }

    render(){
        return(
            <div>

            <div>
                <h1>Favorites</h1>
            </div>

            <div className="list-item-parent-container">
            {this.state.favorites.map(function(item,index){

            return (
                <div className="list-item-container">
                <div key={index}>

                <img className="list-item-image" src={item.image_url} alt='' />
                <div className="list-item-title-container">
                    <h2>
                    {item.title} 
                    </h2>
                    
                    </div> 
                </div>
               
                
                </div>
            
            )
            })}
            </div>

            </div>
        )
    }

}

export default Favorites
