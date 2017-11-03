import React, { Component } from 'react';
import firebase from '../../firebase.js';
import axios from 'axios';
import MyAccountListings from './MyAccountListings/MyAccountListings.js'
import Favorites from './Favorites/Favorites'





class MyAccount extends Component {
    constructor(props) {
        super(props)

        this.state = { posts: [] }
        


    }



    componentWillMount() {


        firebase.auth().onAuthStateChanged(user => {
            if (user) {

                console.log(user);
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
        let post_id = postInfo.post_id
        let uid = postInfo.uid
        
        console.log(postInfo)
        axios.post('/api/deletePost', postInfo).then((response) => {
            console.log(response)
            let posts = response.data
            
            this.setState({ posts })
        })
        // this.setState({posts})
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>My Account </h1>
                <MyAccountListings posts={this.state.posts} onDelete={this.handleDeletePost.bind(this)}/>

                <Favorites uid={this.state.uid}/>
            </div>
        )
    }


}


export default MyAccount;

