import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-center">Homepage Here</h1>
      <Link href="/sign-up">
        <button className="bg-blue p-2 rounded-md ">Signup</button>
      </Link>
    </div>
  );
};

export default Home;
