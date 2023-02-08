import Link from "next/link";
import React from "react";

function MobileNavbar() {
  return (
    <div>
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
