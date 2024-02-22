// App.js
import React, { useState, useEffect } from 'react';
import "./App.css"
import axios from 'axios';
import PlanetCard from './PlanetCard';
import Pagination from './Pagination';

function App() {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/?format=json');
        setPlanets(response.data.results);
        setNextPage(response.data.next);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPlanets();
  }, []);

  const handleNextPage = async () => {
    if (nextPage) {
      try {
        const response = await axios.get(nextPage);
        setPlanets(response.data.results);
        setNextPage(response.data.next);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <div className="App">
      <h1>Star Wars Planets Directory</h1>
      <div className="planet-container">
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
      </div>
      <Pagination onNextPage={handleNextPage} />
    </div>
  );
}

export default App;
