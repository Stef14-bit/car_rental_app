import MobileNavbar from "@/components/MobileNavbar";
import TopInfo from "@/components/TopInfo";
import React, { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
// import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import suv from "../../assets/suv.jpg";
import sedan from "../../assets/sedan.jpg";
import sport from "../../assets/sport.jpg";
import coupe from "../../assets/coupe.jpg";
import old from "../../assets/old.jpg";
import luxury from "../../assets/luxury.jpg";

function CarSearch() {
  const session = useSession();

  return (
    <div className="flex flex-col justify-between">
      {session && <TopInfo />}

      <h2 className="text-3xl my-5  text-gray-600 mx-3">
        What type of car are you looking for ?
      </h2>
      {/* <Link href="car-search/car-list">Cateories</Link> */}
      <div className="grid grid-cols-2 gap-4 justify-items-center align-items-center h-full my-5">
        <CategoryCard categoryImg={suv} category={"SUV"} />
        <CategoryCard categoryImg={sedan} category={"Sedan"} />
        <CategoryCard categoryImg={sport} category={"Sport"} />
        <CategoryCard categoryImg={coupe} category={"Coupe"} />
        <CategoryCard categoryImg={old} category={"Oldtimer"} />
        <CategoryCard categoryImg={luxury} category={"SUV"} />
      </div>

      <MobileNavbar />
    </div>
  );
}

export default CarSearch;