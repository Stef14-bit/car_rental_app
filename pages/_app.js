import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <div className="p-0 m-0 flex flex-col justify-between bg-gradient-to-b from-slate-400 to-slate-200 overflow-hidden">
      <div className="h-screen overflow-auto">
        {" "}
        <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}>
          <Component {...pageProps} />
        </SessionContextProvider>
      </div>
      <div className="absolute bottom-0 w-full">
        <MobileNavbar />
      </div>
    </div>
  );
}
export default MyApp;
