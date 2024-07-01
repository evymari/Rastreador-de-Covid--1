import React from 'react'
import './top10.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

  function GetData(){
  const [ TContry ,ContryData ] = useState([]);
    useEffect(()=>{
      
            axios.get('https://disease.sh/v3/covid-19/countries?sort=cases')
            .then(respuesta => { 
             ContryData (respuesta.data);
             console.log(respuesta)
        })   
    },[]);
    return (
          <>
            <h2 className="topTenTitle">Top 10 Country</h2>
               {TContry.map((element, i) =>{
                    return i <= 10 ?(
                      <div key={i}>
                        <div className="CountryContainer">
                            <div className="InfoData">
                               <div className="CT-Flag"><img  src={element.countryInfo.flag}/></div>
                                <div className="CT-Country"><p>{element.country}</p></div>
                            </div>
                              <div className="CT-ConfirmedCase"><p>{element.cases}</p></div>
                         </div>
                      </div>
                     ): null
               })
                }
           </>
           )
     }

export default GetData;


