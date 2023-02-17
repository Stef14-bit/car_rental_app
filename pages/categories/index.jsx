import React from "react";
import { useSession } from "@supabase/auth-helpers-react";
import Link from "next/link";
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
    <div className="flex flex-col justify-center content-center mx-5">
      <h2 className="text-3xl my-5  text-gray-600">
        What type of car are you looking for ?
      </h2>
      <Link
        className="bg-blue p-1 rounded-md text-white text-center max-w-xs"
        href="categories/car-list">
        All Cateories
      </Link>
      <div className="grid grid-cols-2 gap-4 justify-items-center align-items-center h-full my-5 ">
        <CategoryCard categoryImg={suv} category={"SUV"} page={"suv"} />
        <CategoryCard categoryImg={sedan} category={"Sedan"} page={"sedan"} />
        <CategoryCard categoryImg={sport} category={"Sport"} page={"sport"} />
        <CategoryCard categoryImg={coupe} category={"Coupe"} page={"coupe"} />
        <CategoryCard
          categoryImg={old}
          category={"Oldtimer"}
          page={"oldtimer"}
        />
        <CategoryCard
          categoryImg={luxury}
          category={"Luxury"}
          page={"luxury"}
        />
      </div>
    </div>
  );
}

export default CarSearch;
