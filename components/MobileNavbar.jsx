import Link from "next/link";
import React from "react";

function MobileNavbar() {
  return (
    <div className="bg-slate-400 absolute bottom-0 left-0 flex justify-around items-center w-full h-20 ">
      <Link href="/location-search">
        <button>Search Loc</button>
      </Link>
      <Link href="/car-search">
        <button>Search Car</button>
      </Link>
      <Link href="/favorites">
        <button>Favorites</button>
      </Link>
      <Link href="/profile">
        <button>Profile</button>
      </Link>
    </div>
  );
}

export default MobileNavbar;
