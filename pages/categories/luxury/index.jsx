import Link from "next/link";
import React from "react";

function Luxury() {
  return (
    <div>
      Luxury
      <Link href={"/categories"}>back to categories</Link>
    </div>
  );
}

export default Luxury;
