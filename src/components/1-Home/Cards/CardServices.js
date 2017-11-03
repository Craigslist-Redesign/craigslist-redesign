import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

class CardServices extends Component {
  constructor(props){
    super(props);

    this.state ={
       tags: '',
    }
  }



 render() {
  return(

      <div className="card-container">
      <Link to="/listings/Services/all">
        <h2 className="card-header">Services</h2>
      </Link>
         <ul>

           <Link to="/listings/Services/Automotive">Automotive</Link>
           <Link to="/listings/Services/Computer">Computer</Link>
           <Link to="/listings/Services/Labor & Move">Labor & Move</Link>
           <Link to="/listings/Services/Real Estate">Real Estate</Link>
           <Link to="/listings/Services/Beauty">Beauty</Link>
           <Link to="/listings/Services/Event">Event</Link>
           <Link to="/listings/Services/Lessons">Lessons</Link>
           <Link to="/listings/Services/Skilled Trade">Skilled Trade</Link>
           <Link to="/listings/Services/Cell & Mobile">Cell & Mobile</Link>
           <Link to="/listings/Services/Household">Household</Link>
           <Link to="/listings/Services/Pet">Pet</Link>
           <Link to="/listings/Services/Writing & Editing">Writing & Editing</Link>


         </ul>
      </div>

   )
 }
}

export default CardServices;
