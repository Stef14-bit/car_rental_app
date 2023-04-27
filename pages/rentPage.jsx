import React, { useState } from "react";

function rentPage() {
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
    console.log(startDate, endDate);
  };
  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-96  h-96 flex flex-col items-center justify-around">
        <label htmlFor="from">From</label>
        <input
          id="from"
          value={startDate}
          onChange={(e) => handleInputChange(e)}
          className="h-12 w-full rounded-md text-center bg-blue text-white font text-lg mb-4"
          type="date"
        />
        <label htmlFor="to">To</label>
        <input
          id="to"
          value={endDate}
          onChange={(e) => handleInputChange(e)}
          className="h-12 w-full rounded-md text-center bg-blue text-slate-50 font text-lg"
          type="date"
        />

        <button
          type="Submit"
          onClick={handleSubmit}
          className="bg-blue w-2/3 h-10 rounded-full text-white font-semibold shadow-lg ">
          Rent Car
        </button>
      </form>
    </div>
  );
}

export default rentPage;
