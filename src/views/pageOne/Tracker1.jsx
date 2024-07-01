import React from 'react';
import SideBar from '../../layout/sidebar/SideBar';
import ReusableCardsPage from '../../components/reusableCardsTracker1/CardDesign.jsx';
import List from '../../components/belowCardsTracker1/BelowCardsList.jsx';
import "../pageOne/tracker1.css"

export const Tracker1 = () => {
  return (
    <>
    <SideBar></SideBar>
    <div className="tracker1">
     <ReusableCardsPage/>
     <List/>
    </div>
    </>
  )
}
