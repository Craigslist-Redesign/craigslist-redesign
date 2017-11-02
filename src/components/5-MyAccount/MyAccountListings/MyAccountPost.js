import React, { Component } from 'react';
import '../Account.css'

class MyAccountPost extends Component {
    // const post = props.post
    constructor(props){
        super(props)

        
    }


    deletePost(post_id){
        console.log('test')
        console.log(post_id)
        this.props.onDelete(post_id)
    }

    render(){

        
    return <li>
        
        <div className="centerCenter">
            <div className="account-post"> {this.props.post.title}  <a href="#" onClick={this.deletePost.bind(this, this.props.post.post_id)}> x </a></div>
        </div>

    </li>
    }
}

export default MyAccountPost
