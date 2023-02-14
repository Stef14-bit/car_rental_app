import React from "react";
import Link from "next/link";

function Oldtimer() {
  return (
    <div>
      Oldtimer
      <Link href={"/categories"}>back to categories</Link>
    </div>
  );
}

export default Oldtimer;
