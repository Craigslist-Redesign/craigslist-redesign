import React from 'react';
import CardForSale from './Cards/CardForSale';
import CardJobs from './Cards/CardJobs';
import CardServices from './Cards/CardServices';
import CardHousing from './Cards/CardHousing';
import CardCommunity from './Cards/CardCommunity';

export default function Home(){
  return(
    <div>
      <h1>HOME</h1>
      <CardForSale />
      <CardJobs />
      <CardServices />
      <CardHousing />
      <CardCommunity />
    </div>
  )
}
