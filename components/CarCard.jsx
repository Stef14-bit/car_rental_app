import React from 'react';

const CarCard = ({
  category,
  carImage,
  make,
  model,
  rate,
  transmission,
  doors,
  horsepower,
  price,
}) => {
  return (
    <div className="flex flex-col bg-white mb-10 rounded-md text-center">
      <h3 className="text-3xl font-light">{category}</h3>
      <img src={carImage} className="max-w-xs" />
      <p className="text-gray-500">{make}</p>
      <p className="text-gray-500">{model}</p>
      <p className="text-gray-500">{rate}</p>
      <p className="text-gray-500">{transmission}</p>
      <p className="text-gray-500">{doors}</p>
      <p className="text-gray-500">{horsepower}</p>
      <p className="text-gray-500">{price}</p>
    </div>
  );
};

export default CarCard;
