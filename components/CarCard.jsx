import React from "react";
import Link from "next/link";

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
    <div className="w-70 flex flex-col mx-5 mb-10 border border-gray-100 shadow-lg shadow-blue/50  sm:w-80">
      <h2 className="text-3xl ml-5">{category}</h2>
      <img src={carImage} className="max-w-xs m-4" />
      <div className="flex justify-center">
        <h2 className="text-3xl ml-5">{make}</h2>
        <h2 className="text-3xl ml-2">{model}</h2>
      </div>
      <p className="text-gray-500 text-right mr-10">rating: {rate} </p>
      <div className="flex justify-center">
        <p className="mx-12">{transmission}</p>
        <p className="mx-24">{doors} doors</p>
      </div>
      <p className="text-center">{horsepower} Horsepower</p>
      <h3 className="text-xl text-center mb-2">
        Starting from {price} € / Day
      </h3>
      <Link href="/rentPage" className="flex justify-center">
        <button className="bg-blue w-2/3 h-10 rounded-full text-white font-semibold  mb-4 shadow-lg">
          Rent
        </button>
      </Link>
    </div>
  );
};

export default CarCard;
