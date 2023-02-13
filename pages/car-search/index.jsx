import MobileNavbar from "@/components/MobileNavbar";
import TopInfo from "@/components/TopInfo";
import React, { useEffect, useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";

function CarSearch() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    try {
      setLoading(true);
      let { data, error, status } = await supabase.from("cars").select("*");
      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        console.log(data);
      }
    } catch (error) {
      console.error(error, "Error loading cars");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col justify-between">
      {session && <TopInfo />}

      <Link href="car-search/car-list">Cateories</Link>
      <MobileNavbar />
    </div>
  );
}

export default CarSearch;
