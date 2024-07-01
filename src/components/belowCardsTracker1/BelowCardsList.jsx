import { useState, useEffect } from 'react';
import { getGlobalData, } from "../../services/apiService.jsx"
import BelowCard from "./BelowCards.jsx";
import Tracer1Images from "../../utils/images/imagesTracker1.js";
import "../belowCardsTracker1/belowCards.css";



const List = () => {
  const [globalStats, setGlobalStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   const Data = async () => {
      try {
        const data = await getGlobalData();
        setGlobalStats(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching global data:', error);
        setError(error);
        setLoading(false);
      }
    }

    Data();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const stats = [
    { icon: Tracer1Images.covidBlueDark, label: 'Total Confirmed', value: globalStats.cases },
    { icon: Tracer1Images.covidGreen, label: 'Total Recovered', value: globalStats.recovered },
    { icon: Tracer1Images.covidRed, label: 'Total Deaths', value: globalStats.deaths },
    { icon: Tracer1Images.covidRedark, label: 'New Deaths', value: globalStats.todayDeaths },
    { icon: Tracer1Images.telephoneT1, label: 'Help Line No.', value: '198' },
  ];

  return (
    <div className="container-2 wrapper">
      <div className="content">
      </div>
      <div className="stat-list">
        {stats.map((stat, index) => (
          <BelowCard
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </div>
    </div>
  );
};

export default List;

