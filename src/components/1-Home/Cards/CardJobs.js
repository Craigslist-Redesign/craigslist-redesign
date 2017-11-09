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
      <hr/>
         <ul>

           <Link to="/listings/Jobs/Accounting & Finance" className="tag">Accounting & Finance</Link>
           <Link to="/listings/Jobs/Education" className="tag">Education</Link>
           <Link to="/listings/Jobs/Manufacturing" className="tag">Manufacturing</Link>
           <Link to="/listings/Jobs/Retail Wholesale" className="tag">Retail Wholesale</Link>
           <Link to="/listings/Jobs/Technical" className="tag">Technical</Link>
           <Link to="/listings/Jobs/Part-time" className="tag">Part-time</Link>
           <Link to="/listings/Jobs/Admin & Office" className="tag">Admin & Office</Link>
           <Link to="/listings/Jobs/Food & Bev" className="tag">Food & Bev</Link>
           <Link to="/listings/Jobs/Medical & Health" className="tag">Medical & Health</Link>
           <Link to="/listings/Jobs/Sales & Biz Dev" className="tag">Sales & Biz Dev</Link>
           <Link to="/listings/Jobs/Transport" className="tag">Transport</Link>
           <Link to="/listings/Jobs/Art & Media" className="tag">Art & Media</Link>
           <Link to="/listings/Jobs/General Labor" className="tag">General Labor</Link>
           <Link to="/listings/Jobs/Real Estate" className="tag">Real Estate</Link>
           <Link to="/listings/Jobs/Skilled Trade & Craft" className="tag">Skilled Trade & Craft</Link>
           <Link to="/listings/Jobs/Writing & Editng" className="tag">Writing & Editng</Link>



         </ul>
      </div>

   )
 }
}

export default CardJobs;
