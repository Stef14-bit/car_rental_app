import React, { useState } from "react";

function RentPage({ carData, onClose }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "from") {
      setStartDate(value);
    }
    if (id === "to") {
      setEndDate(value);
    }
  };

  const handleSubmit = () => {
    console.log(startDate, endDate, carData.id);
    onClose(); // close the modal after submitting
  };

  return (
    <div
      className="flex justify-center items-center h-full bg-white"
      onClick={(e) => e.stopPropagation()}>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-96 h-96 flex flex-col items-center justify-around">
        <h2 className="text-2xl font-bold">{carData.make}</h2>
        <img
          src={carData.image}
          alt={carData.make}
          className="h-40 w-72 mb-4"
        />
        <p className="text-lg">{carData.description}</p>
        <label htmlFor="from">From</label>
        <input
          id="from"
          value={startDate}
          onChange={(e) => handleInputChange(e)}
          className="h-12 w-full rounded-md text-center bg-gradient-to-tr from-sky-900 via-sky-600 to-green-800 text-white font text-lg mb-4"
          type="date"
        />
        <label htmlFor="to">To</label>
        <input
          id="to"
          value={endDate}
          onChange={(e) => handleInputChange(e)}
          className="h-12 w-full rounded-md text-center bg-gradient-to-tr from-sky-900 via-sky-600 to-green-800 text-slate-50 font text-lg"
          type="date"
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-gradient-to-tr from-sky-900 via-sky-600 to-green-800 w-2/3 h-10 rounded-full text-white font-semibold shadow-lg ">
          Rent Car
        </button>
      </form>
    </div>
  );
}

export default RentPage;
