import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cards.css';

class MostViewed extends Component {
  constructor(props){
    super(props);

    this.state ={
      topThree: []
    }
  }

componentWillMount(){
  axios.get('/api/mostViewed').then(res => {
   console.log(res)

   this.setState({topThree: res.data})
  })
}

render(){
    return(
      <div className="top-three-box">
      {this.state.topThree.map(function(item,index){
       return (
        <div className="top-three-container" key={index}>
          <Link to={`/post/${item.post_id}`} >

           <img className="top-three-image" src={item.image_url} alt='' />
            <div>
              <h2>{item.title}</h2>
            </div>
          </Link>
        </div>
        )
      })}
      </div>
    )
  }
}

export default MostViewed;
