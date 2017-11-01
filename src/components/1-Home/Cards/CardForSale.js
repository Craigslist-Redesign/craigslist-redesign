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
      <Link to="/listings">
        <h2 className="for-sale-card-header">FOR SALE</h2>
      </Link>
         <ul>

           <Link to="/listings/outdoors">Outdoors</Link>
           <Link to="/listings/books">Books</Link>
           <Link to="/listings/household">Household</Link>
           <Link to="/listings/AMB">Atv/Motorcycles/Bikes</Link>
           <Link to="/listings/CT">Cars & Trucks</Link>
           <Link to="/listings/Business">Business</Link>
           <Link to="/listings/MT">Music/Tickets</Link>
           <Link to="/listings/tech">Tech</Link>
           <Link to="/listings/toys_games">Toys & Games</Link>
           <Link to="/listings/GT">Garden & Tools</Link>
           <Link to="/listings/free">Free</Link>
           <Link to="/listings/garage_sale">Garage Sale</Link>

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
