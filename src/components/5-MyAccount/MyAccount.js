import React, { Component } from 'react';
import firebase from '../../firebase.js';
import axios from 'axios';
import MyAccountListings from './MyAccountListings/MyAccountListings.js'
import Favorites from './Favorites/Favorites'





class MyAccount extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            posts: [],
            listFav: true,
            fav: false,
            list: true
            
           
        }
        
        this.changeView = this.changeView.bind(this);

    }



    componentWillMount() {


        firebase.auth().onAuthStateChanged(user => {
            if (user) {

                this.setState({ successEmail: user.email })
            }

            const uid = user.uid
            this.setState({uid})

            axios.get('/api/getUserPosts/' + uid).then((response) => {
                let posts = response.data

                this.setState({ posts })

            })

        })

    }

    handleDeletePost(postInfo){
        // let post_id = postInfo.post_id
        // let uid = postInfo.uid
        
        
        axios.post('/api/deletePost', postInfo).then((response) => {
            
            let posts = response.data
            
            this.setState({ posts })
        })
        // this.setState({posts})
    }
    
    changeView(){
      console.log('show on click')
      console.log(this)
      this.setState({
          listFav: !this.state.listFav
      })
    }

    render() {
        console.log(this.state.successEmail)
        return (
            <div>
                <h2>{this.state.successEmail}</h2>
                <h1>My Account </h1>
                
                <button onClick={ this.changeView }>listFav</button>
                {/* <div>
                 { this.state.list && <MyAccountListings posts={this.state.posts} onDelete={this.handleDeletePost.bind(this)}/> }
                </div>
                <div>
                { this.state.fav &&  <Favorites uid={this.state.uid}/>}
                </div> */}
                <div>
                {this.state.listFav ? 
                    <MyAccountListings posts={this.state.posts} onDelete={this.handleDeletePost.bind(this)}/>
                :
                    <Favorites uid={this.state.uid}/>
                }
                </div>
            </div>
        )
    }


}


export default MyAccount;

