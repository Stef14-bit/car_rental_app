import React from "react";
import Link from "next/link";
function Sport() {
  return (
    <div>
      Sport
      <Link href={"/categories"}>back to categories</Link>
    </div>
  );
}

export default Sport;
