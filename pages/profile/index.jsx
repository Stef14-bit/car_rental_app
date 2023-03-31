import React from "react";
import { useSession } from "@supabase/auth-helpers-react";
import Account from "@/components/Account";
import Link from "next/link";
import TestAvatar from "@/components/TestAvatar";

function Profile() {
  const session = useSession();
  return (
    <div className="h-full flex  justify-center ">
      <div className="flex justify-center content-center">
        <TestAvatar />
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
    </div>
  );
}

export default Profile;
