import React, { Component } from 'react';
import MyAccountPost from './MyAccountPost'

class MyAccountListings extends Component {

    constructor(props) {
        super(props)



    }
    
    deletePost(postInfo){
        this.props.onDelete(postInfo)
    }


    render() {
        const myPosts = this.props.posts.map((post) => {
            
            return <MyAccountPost 
            onDelete={this.deletePost.bind(this)}
            key={post.post_id} 
            post={post} />
            
        })
        return (
            <ul>
                {myPosts}
            </ul>

        )
    }
}

export default MyAccountListings