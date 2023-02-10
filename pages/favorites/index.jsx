import MobileNavbar from "@/components/MobileNavbar";
import React from "react";
import { useSession } from "@supabase/auth-helpers-react";
import TopInfo from "@/components/TopInfo";

function Favorites() {
  const session = useSession();

  return (
    <div className="flex flex-col justify-between">
      {session && <TopInfo />}
      <MobileNavbar />
    </div>
  );
}

export default Favorites;
