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
      <Link to="/listings/for_sale">
        <h2 className="for-sale-card-header">FOR SALE</h2>
      </Link>
         <ul>

           <Link to="/listings/outdoors">Outdoors</Link>
           <li>Books</li>
           <li>Household</li>
           <li>Atv/Motorcycles/Bikes</li>
           <li>Cars & Trucks</li>
           <li>Business</li>
           <li>Music/Tickets</li>
           <li>Tech</li>
           <Link to="/listings/for_sale/toys_games">Toys & Games</Link>
           <li>Garden & Tools</li>
           <li>Free</li>
           <li>Garage Sale</li>


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
