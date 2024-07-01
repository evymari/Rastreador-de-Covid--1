import React from "react"
import "../../components/reusableCardsTracker1/reusableCards.css"


const ReusableCards = ({ icon, label, value, color }) => {
  return (
    <>
    
    <div className="reusableCard">
      <div className="reusableCardText">
        <h5 className="labelCard">{label}</h5>
        <h3 className="valueCard" style={{ color: color }}>{value}</h3>
      </div> 
      <div className="reusablCardIcon">
        <img className="imgIcon" src={icon} alt={label} /> 
      </div>
    </div>
    
    </>
  );
};
export default ReusableCards;