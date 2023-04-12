import React, { useState, useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import TopLocation from "@/components/TopLocation";

function Location() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [count, setCount] = useState([]);

  useEffect(() => {
    async function carsCount() {
      const { data, error } = await supabase
        .from("cars")
        .select("location, id");

      if (error) {
        console.error(error);
        return null;
      }
      if (data) {
        const counts = {};
        data.forEach((car) => {
          counts[car.location] = (counts[car.location] || 0) + 1;
        });
        const countArray = Object.keys(counts).map((location) => ({
          location,
          count: counts[location],

          /*The code initializes an empty object counts to hold the counts of cars in each location. It then loops through each car in the data array and updates the count of the car's location in the counts object. If the location key doesn't exist in the counts object, it initializes it to 0 before incrementing it. Finally, the code creates a new array countArray by using the Object.keys() method to loop through each location in the counts object and creating a new object for each one with location and count properties. The count property holds the value of the count for that location obtained from the counts object. */
        }));
        setCount(countArray);
      }
    }

    carsCount();
  }, []);

  return (
    <div className="mx-5">
      <h1 className="text-5xl font-bold text-darkGray p-4 ">
        Rent cool cars in your city
      </h1>

      <input
        className="rounded-full h-12 w-full text-center my-5"
        type="search"
        placeholder="choose location"
      />
      <h3 className="mb-3 text-xl text-gray-600">Top Location</h3>
      {count.map((location, index) => (
        <TopLocation
          key={index}
          cityName={location.location}
          cars={location.count}
        />
      ))}
    </div>
  );
}

export default Location;
