import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      setTimeout(() => {
        router.push("/profile");
      }, 1000);
    }
  }, [session, router]);

  return (
    <div className="">
      {!session ? (
        <div className="p-6 flex justify-center">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={["facebook", "google", "apple"]}
          />
        </div>
      ) : (
        <div>Redirecting...</div>
      )}
    </div>
  );
};

export default Home;
