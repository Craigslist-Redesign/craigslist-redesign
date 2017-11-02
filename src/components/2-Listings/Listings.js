import React, { Component } from 'react';
import axios from 'axios';
import'./Listings.css'

class Listings extends Component {
  constructor(props){
    super(props);

  this.state = {
    listArray: []
  }

}
componentWillMount(){
  const catObject = this.props.match.params;

  axios.post('/api/getListings/', catObject).then(res => {
   console.log(res);
   this.setState({listArray: res.data})
  })

}

  render(){

  return(
    <div className="listings-container">
      <h1>Listings</h1>
      <div className="list-item-parent-container">
      {this.state.listArray.map(function(item,index){

          return (
            <div key={index} className="list-item-container">
            <img className="list-item-image" src={item.image_url} alt='' />
            <div className="list-item-title-container">
            <h2>{item.title}</h2>
            </div>
          </div>
        )
        })}
      </div>
    </div>
  )
 }
}

export default Listings;

// this.props.match.history
