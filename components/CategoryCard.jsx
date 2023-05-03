import React from "react";
import Image from "next/image";
import Link from "next/link";

function CategoryCard({ category, categoryImg, page }) {
  return (
    <div className=" h-36 w-52 flex content-center justify-center">
      <div className=" w-5/6 p-2">
        <Link
          href={`/categories/${page}`}
          className="flex flex-col justify-center items-center">
          <Image
            src={categoryImg}
            className="rounded-md"
            alt="category"
            height={115}
            width={130}
          />
          <p className="p-1 text-2xl">{category}</p>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;
