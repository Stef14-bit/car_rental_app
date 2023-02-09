import MobileNavbar from "@/components/MobileNavbar";
import TopInfo from "@/components/TopInfo";
import React from "react";
import { useSession } from "@supabase/auth-helpers-react";

function CarSearch() {
  const session = useSession();
  return (
    <div className="flex flex-col justify-between">
      {session && <TopInfo />}
      <MobileNavbar />
    </div>
  );
}

export default CarSearch;
