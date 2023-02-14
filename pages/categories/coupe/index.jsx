import React from "react";
import Link from "next/link";

function Coupe() {
  return (
    <div>
      Coupe
      <Link href={"/categories"}>back to categories</Link>
    </div>
  );
}

export default Coupe;
