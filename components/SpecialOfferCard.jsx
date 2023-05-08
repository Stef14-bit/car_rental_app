import React from "react";

function SpecialOfferCard() {
  return (
    <div className="w-3/4 h-24 m-3 border-8 border-slate-500 shadow-xl shadow-sky-900 flex  items-center justify-between">
      <h2 className="mx-auto text-3xl font-semibold text-sky-800">Rent now</h2>
      <p className="bg-red-600 text-white h-4/5 w-1/4 flex justify-center items-center font-bold text-5xl rounded-full ">
        %
      </p>
    </div>
  );
}

export default SpecialOfferCard;
