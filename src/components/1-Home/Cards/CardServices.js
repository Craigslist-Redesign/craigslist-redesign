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
      <hr/>
         <ul>

           <Link to="/listings/Services/Automotive" className="tag">Automotive</Link>
           <Link to="/listings/Services/Computer" className="tag">Computer</Link>
           <Link to="/listings/Services/Labor & Move" className="tag">Labor & Move</Link>
           <Link to="/listings/Services/Real Estate" className="tag">Real Estate</Link>
           <Link to="/listings/Services/Beauty" className="tag">Beauty</Link>
           <Link to="/listings/Services/Event" className="tag">Event</Link>
           <Link to="/listings/Services/Lessons" className="tag">Lessons</Link>
           <Link to="/listings/Services/Skilled Trade" className="tag">Skilled Trade</Link>
           <Link to="/listings/Services/Cell & Mobile" className="tag">Cell & Mobile</Link>
           <Link to="/listings/Services/Household" className="tag">Household</Link>
           <Link to="/listings/Services/Pet" className="tag">Pet</Link>
           <Link to="/listings/Services/Writing & Editing" className="tag">Writing & Editing</Link>


         </ul>
      </div>

   )
 }
}

export default CardServices;
