import React from 'react'
import  './cardsColor.css'
import useAxios  from '../../services/Axios'
import CardCases from './CardCases'


const CardsColor =  () => {
    const url = "https://disease.sh/v3/covid-19/";
    const { data } = useAxios (url + "all");
    if (data === null) {
      return <>Loading</>;
    }
    return (
      <>
    
       <h1 className="title-text">COVID-19 Tracker</h1>
        
          <CardCases
            key="total"
            cardsBgStyle="cardsOne"
            cardText="Total Case"
            smallTextValue={`+ ${data.todayCases}`}
            cardDataStyle="cardDataStyleTotal"
            globalTextDataValue={data.cases}
          />
          <CardCases
            key="active"
            cardsBgStyle="cardsTwo"
            cardText="Active Case"
            globalTextDataValue={data.active}
            cardDataStyle="cardDataStyleActive"
          />
          <CardCases
            key="recovered"
            cardsBgStyle="cardsThree"
            cardText="Recovered Case"
            smallTextValue={`+ ${data.todayRecovered}`}
            globalTextDataValue={data.recovered}
            cardDataStyle="cardDataStyleRecovered"
          />
          <CardCases
            key="deaths"
            cardsBgStyle="cardsFour"
            cardText="Deaths Case"
            smallTextValue={`+ ${data.todayDeaths}`}
            globalTextDataValue={data.deaths}
            cardDataStyle="cardDataStyleDeaths"
          />
       </>
    )
  }
  export default CardsColor