import CarCard from "@/components/CarCard";
import React, { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import useQuery from "@/hooks/useQuery";
import Link from "next/link";
import RentPage from "@/components/RentPage";

const CarList = () => {
  const { data, error, status } = useQuery("cars", "*");
  const [selectedCar, setSelectedCar] = useState(null);
  const session = useSession();

  const handleCarClick = (carData) => {
    setSelectedCar(carData);
  };

  const handleCloseRentPage = () => {
    setSelectedCar(null);
  };

  if (status === "loading") {
    return <h3>Loading ...</h3>;
  }

  if (error) {
    return <h3>Error: {error.message}</h3>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex justify-around m-5 p-5 self-center w-full">
        <Link
          className="bg-gradient-to-tr from-sky-900 via-sky-600 to-green-800 p-1 rounded-md text-white"
          href={"/categories"}>
          Back to categories
        </Link>
      </div>

      {data.map((e, index) => (
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
            onClick={() => handleCarClick(e)}
          />
        </div>
      ))}

      {selectedCar && (
        <div
          onClick={() => setSelectedCar(null)}
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <RentPage carData={selectedCar} onClose={handleCloseRentPage} />
        </div>
      )}
    </div>
  );
};

export default CarList;
