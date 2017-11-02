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

      <div className="for-sale-card-container">
      <Link to="/listings/For Sale/all">
        <h2 className="for-sale-card-header">FOR SALE</h2>
      </Link>
         <ul>

           <Link to="/listings/For Sale/Outdoors">Outdoors</Link>
           <Link to="/listings/For Sale/Books">Books</Link>
           <Link to="/listings/For Sale/Household">Household</Link>
           <Link to="/listings/For Sale/Atv/Motorcycles/Bikes">Atv/Motorcycles/Bikes</Link>
           <Link to="/listings/For Sale/Cars & Trucks">Cars & Trucks</Link>
           <Link to="/listings/For Sale/Business">Business</Link>
           <Link to="/listings/For Sale/Music">Music</Link>
           <Link to="/listings/For Sale/Tech">Tech</Link>
           <Link to="/listings/For Sale/Toys & Games">Toys & Games</Link>
           <Link to="/listings/For Sale/Garden & Tools">Garden & Tools</Link>
           <Link to="/listings/For Sale/Tickets">Tickets</Link>
           <Link to="/listings/For Sale/Garage Sale">Garage Sale</Link>


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
