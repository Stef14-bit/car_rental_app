import React from "react";
import Image from "next/image";
import Link from "next/link";

function CategoryCard({ category, categoryImg, page }) {
  return (
    <div className=" h-36 w-52 flex content-center justify-center ">
      <div className=" flex flex-col justify-center w-5/6 p-2">
        <Link href={`/categories/${page}`}>
          <Image src={categoryImg} className="rounded-md" alt="category" />
          <p className="text-center p-1 text-2xl">{category}</p>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
