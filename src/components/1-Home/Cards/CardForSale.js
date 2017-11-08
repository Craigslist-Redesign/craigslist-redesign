import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

class CardForSale extends Component {
  constructor(props){
    super(props);

    this.state ={
       tags: '',
    }
  }



  render() {
    return(
      <div className="card-container">
        <Link to="/listings/For Sale/all">
          <h2 className="card-header">For Sale</h2>
        </Link>
        <hr/>
        <ul>
           <Link to="/listings/For Sale/Outdoors"><li>Outdoors</li></Link>
           <Link to="/listings/For Sale/Books"><li>Books</li></Link>
           <Link to="/listings/For Sale/Household"><li>Household</li></Link>
           <Link to="/listings/For Sale/Atv & Motorcycles"><li>Atv & Motorcycles</li></Link>
           <Link to="/listings/For Sale/Cars & Trucks"><li>Cars & Trucks</li></Link>
           <Link to="/listings/For Sale/Business"><li>Business</li></Link>
           <Link to="/listings/For Sale/Music"><li>Music</li></Link>
           <Link to="/listings/For Sale/Tech"><li>Tech</li></Link>
           <Link to="/listings/For Sale/Toys & Games"><li>Toys & Games</li></Link>
           <Link to="/listings/For Sale/Garden & Tools"><li>Garden & Tools</li></Link>
           <Link to="/listings/For Sale/Tickets"><li>Tickets</li></Link>
           <Link to="/listings/For Sale/Garage Sale"><li>Garage Sale</li></Link>
        </ul>
      </div>
    )
  }
}

export default CardForSale;


// const categories = ["Books",
// "Household",
// "Atv/Motorcycles/Bikes"]
//
// categories.map((cat, ind)=>{
//   return (<li key={ind}><Link to=`/listings/${cat}`> cat</li>)
// })
