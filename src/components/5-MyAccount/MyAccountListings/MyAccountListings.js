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
        const myPosts = this.props.posts.map((post, index) => {
            
            return <MyAccountPost 
            onDelete={this.deletePost.bind(this)}
            key={index} 
            post={post} />
            
        })
        return (
            <div id="center" className="content-container">
                <div className="list-item-parent-container">
                     {myPosts}
                 </div>
            </div>

        )
    }
}

export default MyAccountListings