import React from "react";
import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import suv from "../../assets/suv.jpg";
import sedan from "../../assets/sedan.jpg";
import sport from "../../assets/sport.jpg";
import coupe from "../../assets/coupe.jpg";
import old from "../../assets/old.jpg";
import luxury from "../../assets/luxury.jpg";

function CarSearch() {
  return (
    <main className="flex flex-col justify-center  mx-5">
      <h2 className="text-3xl my-5  text-gray-600">
        What type of car are you looking for ?
      </h2>
      <Link
        className="bg-blue p-1 rounded-md text-white text-center w-2/6 self-center my-8 "
        href="categories/car-list">
        All Cars
      </Link>
      <section className="grid grid-cols-2 gap-4 justify-items-center">
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
      </section>
    </main>
  );
}

export default CarSearch;
