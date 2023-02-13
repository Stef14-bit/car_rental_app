import CarCard from "@/components/CarCard";
import React, { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import TopInfo from "@/components/TopInfo";

const CarList = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    try {
      setLoading(true);
      let { data, error, status } = await supabase.from("cars").select("*");
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setData(data);
      }
    } catch (error) {
      console.error(error, "Error loading cars");
    } finally {
      setLoading(false);
    }
  }
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
              transmission={"e.transmisson"}
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
