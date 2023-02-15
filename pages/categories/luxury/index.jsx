import Link from "next/link";
import React from "react";
import useCategoryQuery from "@/hooks/useCategoryQuery";
import CarCard from "@/components/CarCard";

function Luxury() {
  const { data, loading } = useCategoryQuery("cars", "category ", "Luxury");

  return (
    <div>
      {" "}
      <Link href={"/categories"}>back to categories</Link>
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

export default Luxury;
