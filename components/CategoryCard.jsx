import React from "react";
import Image from "next/image";
import Link from "next/link";

function CategoryCard({ category, categoryImg }) {
  return (
    <Link href={"./"}>
      <div className=" h-36 w-52 flex content-center justify-center">
        <div className=" flex flex-col justify-center w-5/6 p-2">
          {" "}
          <Image src={categoryImg} className="rounded-md" />
          <p className="text-center p-1 text-2xl">{category}</p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
