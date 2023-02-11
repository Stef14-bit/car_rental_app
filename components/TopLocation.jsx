import React from 'react';

const TopLocation = ({ cityName, cars }) => {
  return (
    <div>
      <h2>{cityName}</h2>
      <p>{cars}</p>
    </div>
  );
};

export default TopLocation;
