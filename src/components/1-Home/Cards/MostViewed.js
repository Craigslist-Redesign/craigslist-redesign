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
      <div>


        <div className="top-three-box">
        {this.state.topThree.map(function(item,index){

         return (
          <div>
          <div className="top-three-container">
            <Link to={`/post/${item.post_id}`} key={index}>

             <img className="top-three-image" src={item.image_url} alt='' />
              <div>
                <h2>{item.title}</h2>
              </div>
            </Link>
          </div>
         </div>

          )
        })}
        </div>
      </div>
    )
  }
}

export default MostViewed;
