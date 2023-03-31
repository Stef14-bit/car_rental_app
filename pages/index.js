import Link from "next/link";
import useQuery from "@/hooks/useQuery";
import CarCard from "@/components/CarCard";

const Home = () => {
  const { data, loading } = useQuery("cars", "*");

  return (
    <div className="flex flex-col h-full relative top-16">
      <h1 className="text-5xl font-bold text-darkGray p-4 ">
        Rent cool cars in your city
      </h1>
      <h2 className="text-center  text-darkGray py-12">
        Curently availible in {"city"}
      </h2>

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
    </div>
  );
};

export default Home;
