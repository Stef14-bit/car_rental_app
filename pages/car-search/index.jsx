import MobileNavbar from "@/components/MobileNavbar";
import TopInfo from "@/components/TopInfo";
import React from "react";

function CarSearch() {
  return (
    <div className="flex flex-col justify-between">
      <TopInfo />
      <MobileNavbar />
    </div>
  );
}

export default CarSearch;
