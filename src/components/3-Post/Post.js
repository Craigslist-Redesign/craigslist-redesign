import React, { Component } from 'react';
import axios from 'axios';
import './Post.css';


class Post extends Component{
  constructor(props){
    super(props);
    console.log(props)

    this.state = {
       post: [],
    }
  }

  componentWillMount(){

    const post_id = this.props.match.params.post_id;

    axios.get('/api/getPost/'+ post_id).then(res=> {

      console.log(res);
      this.setState({post: res.data})
    })




  }

  render(){
    return(
      <div>
        <h1>POST</h1>
        {this.state.post.map(function(item,index){

          return (

          <div className="post-container" key={index}>

            <div className="post-item-top-container">
              <div className="post-item-title-container">
                <h2>{item.title}</h2>
              </div>
              <div className="post-item-price-container">
                <h2  className="post-item-price" >$ {item.price}</h2>
              </div>
            </div>

            <div className="post-item-duo-container">

              <div className="post-item-left-container">

                <div className="post-img-container">
                  <img className="post-item-image" src={item.image_url} alt='' />
                </div>
                <div>
                  <h2 >#{item.tag}</h2>
                </div>
                <div className="post-item-description">
                  <p>{item.description}</p>
                </div>


              </div>

              <div className="post-item-right-contianer">

                <div className="">
                  <h2  className="post-item-email" >{item.email}</h2>
                </div>
              </div>
            </div>

    




          </div>

          )
        })}
      </div>
    )
  }
}
export default  Post
