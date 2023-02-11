import React from 'react';

const TopLocation = ({ cityName, cars }) => {
  return (
    <div class="flex flex-col bg-white mb-5 text-center">
      <h2 class="text-3xl font-light">{cityName}</h2>
      <p class="text-gray-500">{cars}</p>
    </div>
  );
};

export default TopLocation;
