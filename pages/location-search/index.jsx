import MobileNavbar from "@/components/MobileNavbar";
import React from "react";
import { useSession } from "@supabase/auth-helpers-react";
import TopInfo from "@/components/TopInfo";
import TopLocation from "@/components/TopLocation";
import useQuery from "@/hooks/usequery";

function Location() {
  const session = useSession();
  const { data, loading } = useQuery("cars", "location,horsepower");
  const filteredData = [...new Set(data.map((item) => item.location))];
  const totalHP = filteredData.map((city) => {
    return data.reduce((sum, item) => {
      if (item.location === city) {
        sum += item.horsepower;
      }
      return sum;
    }, 0);
  });

  return (
    <div className="flex flex-col justify-between ml-5 mr-5 ">
      {session && <TopInfo />}
      <h1 className="text-4xl my-10  text-gray-600">
        Find and rent cool cars in your town{" "}
      </h1>

      <input
        className="rounded-full h-12 mb-10 text-center "
        type="search"
        placeholder="choose location"
      />
      <h3 className="mb-3 text-xl text-gray-600">Top Location</h3>
      {loading ? (
        <h3>Loading ...</h3>
      ) : (
        filteredData.map((e, index) => (
          <div key={index}>
            <TopLocation cityName={e} cars={totalHP[index]} />
          </div>
        ))
      )}

      <MobileNavbar />
    </div>
  );
}

export default Location;
