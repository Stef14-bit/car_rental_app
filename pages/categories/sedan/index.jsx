import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import CarCard from "@/components/CarCard";

function Sedan() {
  const supabase = useSupabaseClient();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSuv();
  }, []);

  async function getSuv() {
    try {
      setLoading(true);
      let { data, error } = await supabase
        .from("cars")
        .select("*")
        .eq("category", "Sedan");
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setData(data);
      }
    } catch (error) {
      alert("Error loading data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Link href={"/categories"}>back to categories</Link>
      {data.map((e, index) => (
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
      ))}
    </div>
  );
}

export default Sedan;
