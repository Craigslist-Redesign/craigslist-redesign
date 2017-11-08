import React, { Component } from 'react';
import './MyAccount.css'

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
        <div className="list-item-parent-container">
        <div className="list-item-container">
        <img className="list-item-image" src={this.props.post.image_url}/> 
            <div className="list-item-title-container"> {this.props.post.title}</div>
            <a href="#" onClick={this.deletePost.bind(this, this.props.post)}> x </a>
            
        </div>
        </div>
    </li>
    }
}

export default MyAccountPost
