import CarCard from "@/components/CarCard";
import React from "react";
import { useSession } from "@supabase/auth-helpers-react";
import TopInfo from "@/components/TopInfo";
import useQuery from "@/hooks/usequery";
import MobileNavbar from "@/components/MobileNavbar";

const CarList = () => {
  const session = useSession();
  const { data, loading } = useQuery("cars", "*");

  return (
    <div>
      <TopInfo />
      {loading ? (
        <h3>Loading ...</h3>
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
              transmission={e.transmisson}
              doors={e.doors}
              horsepower={e.horsepower}
              price={e.price}
            />
          </div>
        ))
      )}
      <MobileNavbar />
    </div>
  );
};

export default CarList;
