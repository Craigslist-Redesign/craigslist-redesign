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

           <Link to="/listings/for_sale/outdoors">Outdoors</Link>
           <Link to="/listings/for_sale/books">Books</Link>
           <Link to="/listings/for_sale/household">Household</Link>
           <Link to="/listings/for_sale/AMB">Atv/Motorcycles/Bikes</Link>
           <Link to="/listings/for_sale/CT">Cars & Trucks</Link>
           <Link to="/listings/for_sale/business">Business</Link>
           <Link to="/listings/for_sale/music">Music/Tickets</Link>
           <Link to="/listings/for_sale/tech">Tech</Link>
           <Link to="/listings/for_sale/toys_games">Toys & Games</Link>
           <Link to="/listings/for_sale/GT">Garden & Tools</Link>
           <Link to="/listings/for_sale/free">Free</Link>
           <Link to="/listings/for_sale/garage_sale">Garage-Sale</Link>

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
