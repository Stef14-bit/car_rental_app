import CarCard from "@/components/CarCard";
import React from "react";
import { useSession } from "@supabase/auth-helpers-react";
import useQuery from "@/hooks/useQuery";
import Link from "next/link";

const CarList = () => {
  const { data, loading } = useQuery("cars", "*");

  const session = useSession();

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex justify-around m-5 p-5 self-center w-full">
        {" "}
        <Link
          className="bg-teal-600 p-1 rounded-md text-white "
          href={"/categories"}>
          Back to categories
        </Link>
      </div>

      {loading ? (
        <h3>Loading ...</h3>
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
              transmission={e.transmisson}
              doors={e.doors}
              horsepower={e.horsepower}
              price={e.price}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default CarList;
