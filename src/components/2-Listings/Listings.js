import React, { Component } from 'react';


class Listings extends Component {
constructor(props){
  super(props);

this.state = {
  tag: '',
}

}
componentWillMount(){
  const tag = this.props.match.params.tag;
  console.log(this.props.match)
  console.log(tag);
 this.setState({})
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
