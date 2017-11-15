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
      <hr/>
         <ul>

           <Link to="/listings/Community/Activities" className="tag">Activities</Link>
           <Link to="/listings/Community/Classes" className="tag">Classes</Link>
           <Link to="/listings/Community/Groups" className="tag">Groups</Link>
           <Link to="/listings/Community/Musicians" className="tag">Musicians</Link>
           <Link to="/listings/Community/Artists" className="tag">Artists</Link>
           <Link to="/listings/Community/Events" className="tag">Events</Link>
           <Link to="/listings/Community/Local News" className="tag">Local News</Link>
           <Link to="/listings/Community/Pets" className="tag">Pets</Link>
           <Link to="/listings/Community/Childcare" className="tag">Childcare</Link>
           <Link to="/listings/Community/General" className="tag">General</Link>
           <Link to="/listings/Community/Lost & Found" className="tag">Lost & Found</Link>
           <Link to="/listings/Community/Volunteers" className="tag">Volunteers</Link>


         </ul>
      </div>

   )
 }
}

export default CardCommunity;
