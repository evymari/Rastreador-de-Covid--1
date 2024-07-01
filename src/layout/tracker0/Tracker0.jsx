import React from 'react'
import Top10 from '../../components/top10Tracker0/Top10'
import CardsColor from '../../components/cardsColorTracker0/CardsColor'
import './tracker0.css'
import CardTop10 from '../../components/top10Tracker0/CardTop10'

const Tracker0 = () => {
  return (
    <>
     <div className='scroll-colum'>
      <div className='scroll-container'>
      <div className='scroll-content'></div>
       <div>
        <CardsColor/>
        <Top10/>
        <CardTop10></CardTop10>
         </div>
         </div>
       </div>
       </>
  )
}

export default Tracker0

