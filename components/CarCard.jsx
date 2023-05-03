import React from "react";

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
  onClick,
}) => {
  return (
    <div className="flex flex-col w-72 border m-5 rounded-md shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <img className="h-48 w-full object-cover" src={carImage} alt="car" />
      <div className="flex flex-col p-5">
        <h2 className="text-xl font-semibold mb-2">
          {make} {model}
        </h2>
        <p>Category: {category}</p>
        <p>Rate: {rate}</p>
        <p>Transmission: {transmission}</p>
        <p>Doors: {doors}</p>
        <p>Horsepower: {horsepower}</p>
        <p>Price: {price} $/day</p>
        <button
          className="bg-gradient-to-tr from-sky-900 via-sky-600 to-green-800 h-10 my-5 rounded-md"
          onClick={onClick}>
          Rent
        </button>
      </div>
    </div>
  );
};

export default CarCard;
