import React, { Component } from 'react';
import axios from 'axios';

class Listings extends Component {
constructor(props){
  super(props);

this.state = {
  ptag: '',
  tag: '',
}

}
componentWillMount(){
  console.log('hello');
  // const table = this.props.match.params.table;
  // const tag = this.props.match.params.tag;
  const paramObject = this.props.match.params;
  console.log(this.props.match.params);
  console.log(paramObject)
  axios.post('/api/getByTagForSale/', paramObject).then(res => {

    console.log("newwww", res);

  })

}


  render(){
  return(
    <div>
      <h1>Listings</h1>
    </div>
  )
 }
}

export default Listings;

// this.props.match.history
