import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "@/components/Account";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

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
        <Account session={session} />
      )}
    </div>
  );
};

export default Home;
