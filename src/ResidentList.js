// ResidentList.js
import React from 'react';

const ResidentList = ({ residents }) => {
  return (
    <ul>
      {residents.map((resident, index) => (
        <li key={index}>
          <strong>Name:</strong> {resident.name}, <strong>Height:</strong> {resident.height}, <strong>Mass:</strong> {resident.mass}, <strong>Gender:</strong> {resident.gender}
        </li>
      ))}
    </ul>
  );
};

export default ResidentList;
