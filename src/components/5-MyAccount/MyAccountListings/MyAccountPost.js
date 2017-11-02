import React, { Component } from 'react';
import '../Account.css'

class MyAccountPost extends Component {
    // const post = props.post
    constructor(props){
        super(props)

        
    }


    deletePost(postInfo){
        console.log('test')
        console.log(postInfo)
        this.props.onDelete(postInfo)
    }

    render(){

        
    return <li>
        
        <div className="centerCenter">
            <div className="account-post"> {this.props.post.title}  <a href="#" onClick={this.deletePost.bind(this, this.props.post)}> x </a></div>
        </div>

    </li>
    }
}

export default MyAccountPost
