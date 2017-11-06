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
    const mostViewedItems = this.state.topThree.map(function(item,index){
     return (
        <Link to={`/post/${item.post_id}`} key={index} className="most-viewed-item">
          <div className="most-viewed-content">
            <p>{item.title}</p>
            {item.price !== 0 && <p className="most-viewed-price">${item.price}</p>}
          </div>
          <div className="most-viewed-image-container">
            <img src={item.image_url} alt='' />
          </div>
        </Link>
      )
    })

    return(
      <div className="most-viewed-container">
        { mostViewedItems }
      </div>
    )
  }
}

export default MostViewed;
