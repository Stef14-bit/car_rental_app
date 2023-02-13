import React from "react";

const TopLocation = ({ cityName, cars }) => {
  return (
    <div className="flex flex-col bg-white mb-5 rounded-md text-center">
      <h2 className="text-3xl font-light">{cityName}</h2>
      <p className="text-gray-500">{cars}</p>
    </div>
  );
};

export default TopLocation;
