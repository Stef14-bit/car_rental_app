import CategoryCard from "@/components/CategoryCard";
import suv from "../assets/suv.jpg";
import sedan from "../assets/sedan.jpg";
import sport from "../assets/sport.jpg";
import coupe from "../assets/coupe.jpg";
import old from "../assets/old.jpg";
import luxury from "../assets/luxury.jpg";
const Home = () => {
  return (
    <div className="flex flex-col h-full  top-16 ">
      <h1 className="text-5xl font-bold text-darkGray p-4 ">
        Rent cool cars in your city
      </h1>
      <h2 className="text-center  text-darkGray py-12">
        Curently availible in {"city"}
      </h2>
      <div className="w-fit flex flex-wrap justify-center">
        <CategoryCard categoryImg={suv} category={"SUV"} page={"suv"} />
        <CategoryCard categoryImg={sedan} category={"Sedan"} page={"sedan"} />
        <CategoryCard categoryImg={sport} category={"Sport"} page={"sport"} />
        <CategoryCard categoryImg={coupe} category={"Coupe"} page={"coupe"} />
        <CategoryCard
          categoryImg={old}
          category={"Oldtimer"}
          page={"oldtimer"}
        />
        <CategoryCard
          categoryImg={luxury}
          category={"Luxury"}
          page={"luxury"}
        />
      </div>
    </div>
  );
};

export default Home;
