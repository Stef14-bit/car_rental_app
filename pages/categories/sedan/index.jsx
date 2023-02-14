import React from "react";
import Link from "next/link";

function Sedan() {
  return (
    <div>
      Sedan
      <Link href={"/categories"}>back to categories</Link>
    </div>
  );
}

export default Sedan;
