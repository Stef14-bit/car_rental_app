import React from "react";

function rentPage() {
  return (
    <div className="flex justify-center items-center h-full">
      <form className="w-96 flex flex-col items-center">
        <label htmlFor="from">From</label>
        <input
          id="from"
          className="h-12 w-full rounded-md text-center bg-blue text-white font text-lg mb-4"
          type="datetime-local"
        />
        <label htmlFor="to">To</label>
        <input
          className="h-12 w-full rounded-md text-center bg-blue text-slate-50 font text-lg"
          type="datetime-local"
        />
      </form>
    </div>
  );
}

export default rentPage;
