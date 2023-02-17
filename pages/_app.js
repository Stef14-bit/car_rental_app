import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <div className="min-h-screen flex flex-col content-center justify-between bg-gradient-to-b from-gray to-white">
      <NavBar />
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}>
        <Component {...pageProps} />
      </SessionContextProvider>
      <Footer />
    </div>
  );
}
export default MyApp;
