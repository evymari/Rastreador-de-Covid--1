import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HomeImages from '../../utils/images/imagesHome';
import './blueCardHome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const { fondoHome, gráfico, mujerTos } = HomeImages;

const BlueCardHome = () => {
  const [countries, setCountries] = useState([]);
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/countries');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCountryIndex(prevIndex => (prevIndex + 1) % countries.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, [countries]);

  const currentCountry = countries[currentCountryIndex];

  if (!currentCountry) return <div>Loading...</div>;

  return (
    <div className="banner" style={{ backgroundImage: `url(${fondoHome})` }}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="content">
              <h1 className="principal-text">Stay Home, And Prayer For Victim Of Corona virus.</h1>
              <p className="text-white mt-4 mb-5">
                Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. The corona virus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances.
              </p>
              <div id="countryCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="country-data">
                      <img src={currentCountry.countryInfo.flag} alt={`Flag of ${currentCountry.country}`} className="flag" />
                      <div className="data">
                        <h1 className="cases">{currentCountry.cases}</h1>
                        <div className="stats">
                          <img src={gráfico} alt="gráfico" className="img-graph" />
                          <div className="stat">
                            <span className="stat-number">{currentCountry.deaths}</span>
                          </div>
                          <div className="stat">
                            <span className="stat-number">{currentCountry.recovered}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="girl-img">
              <img src={mujerTos} alt="mujer tosiendo" className="img-girl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueCardHome;