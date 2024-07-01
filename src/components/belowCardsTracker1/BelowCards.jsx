import React from "react";
import "../belowCardsTracker1/belowCards.css";

const BelowCard = ({ icon, label, value}) => {
  return (
    <div className="container-2 card">
      <div className="icon">
       <img className = "imagen" src={icon} alt={label} /> 
        <div className="info">
         <h3>{label}</h3>
         <p>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default BelowCard;