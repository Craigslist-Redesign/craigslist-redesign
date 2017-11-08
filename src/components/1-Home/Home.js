import React from 'react';
import CardForSale from './Cards/CardForSale';
import CardJobs from './Cards/CardJobs';
import CardServices from './Cards/CardServices';
import CardHousing from './Cards/CardHousing';
import CardCommunity from './Cards/CardCommunity';
import CalendarCard from './Cards/CalendarCard';
import MostViewed from './Cards/MostViewed';
import './Home.css';

export default function Home(){
  return(
    <div className="content-container">
      <MostViewed />
      <CalendarCard />
      <CardForSale />
      <CardJobs />
      <CardServices />
      <CardHousing />
      <CardCommunity />
    </div>
  )
}
