import React from 'react'
import '../trackerFourCountry/trackerFourContry.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
const TrackerFourCountry = () => {
  const [ TContry ,ContryData ] = useState([]);
       useEffect(()=>{
        
              axios.get('https://disease.sh/v3/covid-19/countries?sort=cases')
              .then(respuesta => { 
               ContryData (respuesta.data);
               console.log(respuesta)         })   
      },[]);
  return (
    <>

    <div className='WiseTabs'>
    <div className='CountryWiseTabs'>
        <p className='CountryWiseTabsTitle'>Covid-19 Country Wise - Tabs</p>
        <div>banderas</div>
         <div>cardsDos</div>

    </div>

     
                  {TContry.map((element, i) =>{
                       return i <= 10 ?(
                        <div key={i}>
                           <div className="TFCountryContainer">
                               <div className="TFInfoData">
                                  <div className="TF-Flag"><img  src={element.countryInfo.flag}/></div>
                                  <div className="TF-Country"><p>{element.country}</p></div>
                              </div>
                                <div className="TF-ConfirmedCase"><p>{element.cases}</p></div>
                           </div>
                         </div>
                          
                        ): null
                  })
                                 } </div>  
    </>
    
  )
}

export default TrackerFourCountry
 
  