// PlanetCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentList from './ResidentList';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const fetches = planet.residents.map(async (residentURL) => {
        try {
          const response = await axios.get(residentURL);
          return response.data;
        } catch (error) {
          console.error('Error fetching resident data:', error);
          return null;
        }
      });

      const fetchedResidents = await Promise.all(fetches);
      setResidents(fetchedResidents.filter(resident => resident !== null));
    };

    if (planet.residents.length > 0) {
      fetchResidents();
    }
  }, [planet.residents]);

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <h3>Notable Residents:</h3>
      <ResidentList residents={residents} />
    </div>
  );
};

export default PlanetCard;
