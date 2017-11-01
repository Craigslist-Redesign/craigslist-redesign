import React, { Component } from 'react';
import axios from 'axios';

class Listings extends Component {
constructor(props){
  super(props);

this.state = {
  tag: '',
}

}
componentWillMount(){
  const tag = this.props.match.params.tag;
  console.log(tag);

  axios.get('/api/getByTag').then(res => {
    console.log('====================================');
    console.log(res);
    console.log('====================================');
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
