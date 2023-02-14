import MobileNavbar from "@/components/MobileNavbar";
import TopInfo from "@/components/TopInfo";
import React, { useState } from "react";
import { useSession } from "@supabase/auth-helpers-react";
import Link from "next/link";

function CarSearch() {
  const session = useSession();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  return (
    <div className="flex flex-col justify-between">
      {session && <TopInfo />}
      <Link href="car-search/car-list">Cateories</Link>
      <MobileNavbar />
    </div>
  );
}

export default CarSearch;
