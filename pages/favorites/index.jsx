import React from "react";
import { useSession } from "@supabase/auth-helpers-react";

function Favorites() {
  const session = useSession();

  return <div className="flex flex-col justify-between"></div>;
}

export default Favorites;
