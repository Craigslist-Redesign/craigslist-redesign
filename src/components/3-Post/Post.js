import React, { Component } from 'react';
import axios from 'axios';
import './Post.css';

class Post extends Component{
  constructor(props){
    super(props);
    console.log(props)

    this.state = {
      post: '',
      timestamp: ''
    }
  }

  componentWillMount(){
    const post_id = this.props.match.params.post_id;
    axios.get('/api/getPost/'+ post_id).then(res=> {
      console.log(res.data[0]);
      this.setState({post: res.data[0]})

      axios.get('/api/updateCounter/'+post_id)

      // timestamp
      let previous = new Date(res.data[0].time_stamp)
      let current = new Date()

      function timeDifference(current, previous) {

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + ' seconds ago';
        }

        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' minutes ago';
        }

        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' hours ago';
        }

        else if (elapsed < msPerMonth) {
             return Math.round(elapsed/msPerDay) + ' days ago';
        }

        else if (elapsed < msPerYear) {
             return Math.round(elapsed/msPerMonth) + ' months ago';
        }

        else {
             return Math.round(elapsed/msPerYear ) + ' years ago';
        }
      }

      let timestamp = timeDifference(current, previous);

      console.log(timestamp);
      this.setState({ timestamp: timestamp})
    })
  }

  render(){
    return(
      <div className="post-container">
        <div className="content-container">



          <div className="post-item-top-container">
            <div className="post-item-title-container">
              <h2>{this.state.post.title}</h2>
            </div>
            <div className="post-item-price-container">
              <h2  className="post-item-price" >$ {this.state.post.price}</h2>
            </div>
          </div>

          <div className="post-item-duo-container">

            <div className="post-item-left-container">

              <div className="post-img-container">
                <img className="post-item-image" src={this.state.post.image_url} alt='' />
              </div>
              <div>
                <h2 >#{this.state.post.tag}</h2>
              </div>
              <div className="post-item-description">
                <p>– {this.state.timestamp}</p>
                <p>{this.state.post.description}</p>
              </div>


            </div>

            <div className="post-item-right-contianer">

              <div className="">
                <h2  className="post-item-email" >{this.state.post.email}</h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default  Post
