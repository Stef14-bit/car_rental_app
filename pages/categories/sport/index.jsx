import React from "react";
import Link from "next/link";
import CarCard from "@/components/CarCard";
import { useSession } from "@supabase/auth-helpers-react";
import useCategoryQuery from "@/hooks/useCategoryQuery";

function Sport() {
  const { data, loading } = useCategoryQuery("cars", "category ", "Sport");

  const session = useSession();

  return (
    <div>
      {" "}
      <div className="flex justify-around m-5 p-5 ">
        {" "}
        <Link
          className="bg-gradient-to-tr from-sky-900 via-sky-600 to-green-800 p-1 rounded-md text-white"
          href="/categories/car-list">
          All cars
        </Link>
        <Link
          className="bg-gradient-to-tr from-sky-900 via-sky-600 to-green-800 p-1 rounded-md text-white"
          href={"/categories"}>
          Back to categories
        </Link>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        data.map((e, index) => (
          <div key={index}>
            <CarCard
              category={e.category}
              carImage={
                "https://seeklogo.com/images/L/line-art-car-logo-99DBB62CB3-seeklogo.com.png"
              }
              make={e.make}
              model={e.model}
              rate={e.rate}
              transmission={e.transmission}
              doors={e.doors}
              horsepower={e.horsepower}
              price={e.price}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Sport;
