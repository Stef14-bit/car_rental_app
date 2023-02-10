import MobileNavbar from "@/components/MobileNavbar";
import React from "react";
import { useSession } from "@supabase/auth-helpers-react";
import Account from "@/components/Account";
import Link from "next/link";

function Profile() {
  const session = useSession();
  return (
    <div className="h-4/5 flex justify-center">
      <div className="flex justify-center content-center">
        {!session ? (
          <h3>
            Signup to access page
            <Link href="/sign-up">
              <button className="bg-lime-600 p-2 rounded-md absolute top-8 right-8">
                Signup
              </button>
            </Link>{" "}
          </h3>
        ) : (
          <Account session={session} />
        )}
      </div>
      <MobileNavbar />
    </div>
  );
}

export default Profile;
