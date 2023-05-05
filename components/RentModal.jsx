import React, { useState } from "react";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RentModal = ({
  showModal,
  handleModalClose,
  id,
  category,
  make,
  model,
  rate,
  transmission,
  doors,
  horsepower,
  price,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleCancelClick = () => {
    handleModalClose();
  };
  const handleRentClick = () => {
    // Do something with the selected date range
  };

  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 z-50">
          <div className="p-5 bg-white rounded-md max-w-lg mx-auto my-20">
            <h2 className="text-2xl font-semibold mb-5">
              Confirm rental for {make} {model}?
            </h2>
            <p>Category: {category}</p>
            <p>Rate: {rate}</p>
            <p>Transmission: {transmission}</p>
            <p>Doors: {doors}</p>
            <p>Horsepower: {horsepower}</p>
            <p>Price: {price} $/day</p>
            <div className="flex flex-col items-start">
              <label className="font-medium mb-2">Select date range:</label>
              <div className="flex">
                <div className="mr-4">
                  <label className="text-sm mb-1">Start Date</label>
                  <DatePicker
                    className="border border-gray-400 rounded-sm px-2 py-1"
                    selected={startDate}
                    onChange={handleStartDateChange}
                  />
                </div>
                <div>
                  <label className="text-sm mb-1">End Date</label>
                  <DatePicker
                    className="border border-gray-400 rounded-sm px-2 py-1"
                    selected={endDate}
                    onChange={handleEndDateChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleCancelClick}>
                Cancel
              </button>
              <button
                className="bg-gradient-to-tr from-sky-900 via-sky-600 to-green-800 text-white px-4 py-2 rounded-md"
                onClick={handleRentClick}>
                Rent
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RentModal;
