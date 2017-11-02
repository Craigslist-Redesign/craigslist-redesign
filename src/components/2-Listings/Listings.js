import React, { Component } from 'react';
import axios from 'axios';
import'./Listings.css'

class Listings extends Component {
constructor(props){
  super(props);

this.state = {
  ptag: '',
  tag: '',
  listArray: []
}

}
componentWillMount(){


  // const table = this.props.match.params.table;

  const catObject = this.props.match.params;
  console.log(catObject);

  axios.post('/api/getAllForSale/', catObject).then(res => {
   console.log(res);
   this.setState({listArray: res.data})

  })

  // axios.post('/api/getByTagForSale/'+ tag).then(res => {
  //
  //   console.log("newwww", res);
  //
  // })

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
