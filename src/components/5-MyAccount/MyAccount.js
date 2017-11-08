import React, { Component } from 'react';
import firebase from '../../firebase.js';
import axios from 'axios';
import MyAccountListings from './MyAccountListings/MyAccountListings.js'
import Favorites from './Favorites/Favorites'
import { withRouter, Link } from 'react-router-dom';



class MyAccount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            listFav: true,
            fav: false,
            list: true,
            user: ''

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
          listFav: true
      })
    }

    changeViews(){
      console.log('show on click')
      console.log(this)
      this.setState({
          listFav: false
      })
    }


    // handleSignout(event) {
    //   const user = this.state.user
    //   firebase.auth().signOut().then(() => {
    //
    //     this.setState({ user: '', uid: ''})
    //     console.log(user, 'Signed Out');
    //     this.props.history.push('/');
    //     console.log(this.props)
    //   })
    // }

    render() {
        console.log(this.state.successEmail)
        return (
            <div>
                <h2>{this.state.successEmail}</h2>
                <h1>My Account </h1>

               {/* <div>
                 <button onClick={ (event) => this.handleSignout(event) }>Sign out</button>
               </div> */}

                <div className="filter-container">
                  <div className="category-filter" onClick={(event) => this.changeView(event)}>
                  My posts
                </div>
                  <div>|</div>
                <div onClick={(event) => this.changeViews(event)}>
                  Favorites
                </div>
                </div>


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


export default withRouter(MyAccount);
