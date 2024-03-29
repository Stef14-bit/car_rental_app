import SpecialOfferCard from "@/components/SpecialOfferCard";

const Home = () => {
  return (
    <div className="flex flex-col h-full ">
      <header className="h-full bg-hero  bg-cover bg-center flex flex-col justify-between">
        <h1 className="text-6xl font-bold text-white backdrop-brightness-50 p-4 ">
          Rent cool cars in your city
        </h1>
        <h2 className="text-center  text-white py-12">
          Curently availible in {"city"}
        </h2>
      </header>
      <main className="w-full flex flex-wrap justify-center content-center my-10">
        <SpecialOfferCard />
        <SpecialOfferCard />
        <SpecialOfferCard />
      </main>
    </div>
  );
};

export default Home;
