import Link from "next/link";
import Image from "next/image";
import first_car from "../assets/first_car.jpg";

const Home = () => {
  return (
    <div className="flex justify-center bg-slate-100 ">
      <h2 className=" absolute top-20 left-5 font-bold text-5xl text-slate-500  sm:left-1/4">
        Not your everyday boring rentals
      </h2>
      <Image
        src={first_car}
        alt="landing page car"
        className="flex h-screen w-full sm:w-2/3"
      />
      <Link href="/sign-up">
        <button className="bg-lime-600 p-2 rounded-md absolute top-8 right-8">
          Signup
        </button>
      </Link>
      <Link href="/location-search">
        <button className="absolute bottom-10 left-1/4 bg-teal-600 w-1/2 h-10 rounded-md text-white font-bold">
          Let's Go!
        </button>
      </Link>
    </div>
  );
};

export default Home;
