import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import MobileNavbar from '@/components/MobileNavbar';
import Link from 'next/link';

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
            providers={['facebook', 'google', 'apple']}
          />
        </div>
      ) : (
        <Link href="/profile">Redirect to profile</Link>
      )}
      <MobileNavbar />
    </div>
  );
};

export default Home;
