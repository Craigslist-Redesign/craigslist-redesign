import React, { Component } from 'react';
import './MyAccount.css'
import { withRouter, Link } from 'react-router-dom';

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
        const backgroundStyle = {
            backgroundImage: `url(${ this.props.post.image_url })`
          }
        
    return (
        
        // <Link to={`/post/${this.props.post.post_id}`}>
            <div className="list-item-container">
                {/* <img className="list-item-image" src={this.props.fav.image_url} /> */}
                <div className="list-item-image-container" style={ backgroundStyle }/>
                <div className="list-item-title-container"> <h2>{this.props.post.title} </h2></div>
                
                <a href="#" onClick={this.deletePost.bind(this, this.props.post)}> x </a>
            </div>
        //   </Link>  
        
    )
    }
}

export default withRouter(MyAccountPost)
