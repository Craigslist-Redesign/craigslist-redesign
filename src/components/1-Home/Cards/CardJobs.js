import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

class CardJobs extends Component {
  constructor(props){
    super(props);

    this.state ={
       tags: '',
    }
  }



 render() {
  return(

      <div className="card-container">
      <Link to="/listings/Jobs/all">
        <h2 className="card-header">Jobs</h2>
      </Link>
         <ul>

           <Link to="/listings/Jobs/Accounting & Finance">Accounting & Finance</Link>
           <Link to="/listings/Jobs/Education">Education</Link>
           <Link to="/listings/Jobs/Manufacturing">Manufacturing</Link>
           <Link to="/listings/Jobs/Retail Wholesale">Retail Wholesale</Link>
           <Link to="/listings/Jobs/Technical">Technical</Link>
           <Link to="/listings/Jobs/Part-time">Part-time</Link>
           <Link to="/listings/Jobs/Admin & Office">Admin & Office</Link>
           <Link to="/listings/Jobs/Food & Bev">Food & Bev</Link>
           <Link to="/listings/Jobs/Medical & Health">Medical & Health</Link>
           <Link to="/listings/Jobs/Sales & Biz Dev">Sales & Biz Dev</Link>
           <Link to="/listings/Jobs/Transport">Transport</Link>
           <Link to="/listings/Jobs/Art & Media">Art & Media</Link>
           <Link to="/listings/Jobs/General Labor">General Labor</Link>
           <Link to="/listings/Jobs/Real Estate">Real Estate</Link>
           <Link to="/listings/Jobs/Skilled Trade & Craft">Skilled Trade & Craft</Link>
           <Link to="/listings/Jobs/Writing & Editng">Writing & Editng</Link>



         </ul>
      </div>

   )
 }
}

export default CardJobs;
