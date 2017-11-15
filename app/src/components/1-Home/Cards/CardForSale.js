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
           <Link to="/listings/For Sale/Outdoors" className="tag">Outdoors</Link>
           <Link to="/listings/For Sale/Books" className="tag">Books</Link>
           <Link to="/listings/For Sale/Household" className="tag">Household</Link>
           <Link to="/listings/For Sale/Atv & Motorcycles" className="tag">Atv & Motorcycles</Link>
           <Link to="/listings/For Sale/Cars & Trucks" className="tag">Cars & Trucks</Link>
           <Link to="/listings/For Sale/Business" className="tag">Business</Link>
           <Link to="/listings/For Sale/Music" className="tag">Music</Link>
           <Link to="/listings/For Sale/Tech" className="tag">Tech</Link>
           <Link to="/listings/For Sale/Toys & Games" className="tag">Toys & Games</Link>
           <Link to="/listings/For Sale/Garden & Tools" className="tag">Garden & Tools</Link>
           <Link to="/listings/For Sale/Tickets" className="tag">Tickets</Link>
           <Link to="/listings/For Sale/Garage Sale" className="tag">Garage Sale</Link>
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
