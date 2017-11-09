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

      <div className="list-item-container">
        <Link to={`/post/${this.props.post.post_id}`}>
          <div className="list-item-parent-image">
            <div className="list-item-image-container" style={ backgroundStyle }></div>
          </div>
        </Link>
        <div className="list-item-title-container">
          <Link to={`/post/${this.props.post.post_id}`}>
            <h3>{this.props.post.title}</h3>
          </Link>
          <div className="list-item-delete" onClick={this.deletePost.bind(this, this.props.post)}>
            x
          </div>
        </div>
      </div>

    )
    }
}

export default withRouter(MyAccountPost)
