import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

class CardCommunity extends Component {
  constructor(props){
    super(props);

    this.state ={
       tags: '',
    }
  }



 render() {
  return(

      <div className="card-container">
      <Link to="/listings/Community/all">
        <h2 className="card-header">Community</h2>
      </Link>
         <ul>

           <Link to="/listings/Community/Activities">Activities</Link>
           <Link to="/listings/Community/Classes">Classes</Link>
           <Link to="/listings/Community/Groups">Groups</Link>
           <Link to="/listings/Community/Musicians">Musicians</Link>
           <Link to="/listings/Community/Artists">Artists</Link>
           <Link to="/listings/Community/Events">Events</Link>
           <Link to="/listings/Community/Local News">Local News</Link>
           <Link to="/listings/Community/Pets">Pets</Link>
           <Link to="/listings/Community/Childcare">Childcare</Link>
           <Link to="/listings/Community/General">General</Link>
           <Link to="/listings/Community/Lost & Found">Lost & Found</Link>
           <Link to="/listings/Community/Volunteers">Volunteers</Link>


         </ul>
      </div>

   )
 }
}

export default CardCommunity;
