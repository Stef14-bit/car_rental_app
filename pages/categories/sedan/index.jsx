import Link from "next/link";
import CarCard from "@/components/CarCard";
import useCategoryQuery from "@/hooks/useCategoryQuery";

function Sedan() {
  const { data, loading } = useCategoryQuery("cars", "category ", "Sedan");

  return (
    <div>
      <button>
        <Link href={"/categories"}>back to categories</Link>
      </button>

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

export default Sedan;
