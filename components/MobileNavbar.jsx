import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { BsSearch, BsStar } from "react-icons/bs";

function MobileNavbar() {
  return (
    <div className="bg-slate-400 absolute bottom-0 left-0 flex justify-around items-center w-full h-20 ">
      <Link href="/location-search">
        <GrLocation />
      </Link>
      <Link href="/car-search">
        <BsSearch />
      </Link>
      <Link href="/favorites">
        <BsStar />
      </Link>
      <Link href="/profile">
        <CgProfile />
      </Link>
    </div>
  );
}

export default MobileNavbar;
