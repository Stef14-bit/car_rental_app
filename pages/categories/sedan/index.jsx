import Link from "next/link";
import CarCard from "@/components/CarCard";
import useCategoryQuery from "@/hooks/useCategoryQuery";
import { useSession } from "@supabase/auth-helpers-react";
import TopInfo from "@/components/TopInfo";

function Sedan() {
  const session = useSession();

  const { data, loading } = useCategoryQuery("cars", "category ", "Sedan");

  return (
    <div>
      {session && <TopInfo />}

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
