import React from 'react';
import Link from 'next/link';

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
    <div className="flex flex-col bg-gray-100 ml-5 mr-5 mb-10   border-4 border-gray-500 shadow-lg shadow-gray-500/75 ">
      <h2 className="text-3xl  ml-5 ">{category}</h2>
      <img src={carImage} className="max-w-xs m-4" />
      <div className="flex">
        <h2 className=" text-3xl ml-5 ">{make}</h2>
        <h2 className="text-3xl ml-2">{model}</h2>
      </div>
      <p className="text-gray-500 text-right mr-10 ">rating: {rate} </p>
      <div className="flex text-center">
        <p className="ml-12">{transmission}</p>
        <p className="ml-24">{doors}</p>
      </div>
      <p className=" text-center">{horsepower} Horsepower</p>
      <h3 className="text-xl text-center mb-2">
        Starting from {price} € / Day{' '}
      </h3>
      <Link
        href="https://giphy.com/clips/justin-funny-dog-werk-jnbvNSt7xPPEiWfCPu"
        target="_blank"
      >
        <button className=" bg-sky-400 w-2/3 h-10 rounded-full text-white font-semibold ml-14 mb-4 shadow-lg ">
          Rent
        </button>
      </Link>
    </div>
  );
};

export default CarCard;
