import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

class CardHousing extends Component {
  constructor(props){
    super(props);

    this.state ={
       tags: '',
    }
  }



 render() {
  return(

      <div className="card-container">
      <Link to="/listings/Housing/all">
        <h2 className="card-header">Housing</h2>
      </Link>
      <hr/>
         <ul>

           <Link to="/listings/Housing/Apts & Housing" className="tag">Apts & Housing</Link>
           <Link to="/listings/Housing/Real Estate For Sale" className="tag">Real Estate For Sale</Link>
           <Link to="/listings/Housing/Sublets & Temporary" className="tag">Sublets & Temporary</Link>
           <Link to="/listings/Housing/Housing Wanted" className="tag">Housing Wanted</Link>
           <Link to="/listings/Housing/Rooms & Shared" className="tag">Rooms & Shared</Link>
           <Link to="/listings/Housing/Office & Commerical" className="tag">Office & Commerical</Link>
           <Link to="/listings/Housing/Rooms Wanted" className="tag">Rooms Wanted</Link>
           <Link to="/listings/Housing/Vacation Rentals" className="tag">Vacation Rentals</Link>


         </ul>
      </div>

   )
 }
}

export default CardHousing;
