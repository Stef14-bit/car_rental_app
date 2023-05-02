import Link from "next/link";
import React from "react";
import useCategoryQuery from "@/hooks/useCategoryQuery";
import CarCard from "@/components/CarCard";
import { useSession } from "@supabase/auth-helpers-react";

function Luxury() {
  const { data, loading } = useCategoryQuery("cars", "category ", "Luxury");
  const session = useSession();

  return (
    <div>
      {" "}
      <div className="flex justify-around m-5 p-5 ">
        {" "}
        <Link
          className="bg-blue p-1 rounded-md text-white"
          href="/categories/car-list">
          All cars
        </Link>
        <Link
          className="bg-blue p-1 rounded-md text-white"
          href={"/categories"}>
          Back to categories
        </Link>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        data.map((e, index) => (
          <div className="flex justify-center" key={index}>
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

export default Luxury;
