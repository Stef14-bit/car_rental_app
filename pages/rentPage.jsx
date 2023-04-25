import React from "react";

function rentPage() {
  return (
    <div>
      <form className="w-full flex flex-col">
        <input
          className="h-12 w-3/4 rounded-md text-center bg-blue text-white font text-lg"
          type="datetime-local"
        />{" "}
        <input
          className="h-12 w-3/4 rounded-md text-center bg-blue text-slate-50 font text-lg"
          type="datetime-local"
        />{" "}
      </form>
    </div>
  );
}

export default rentPage;
