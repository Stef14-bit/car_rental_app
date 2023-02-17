import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <div className="p-0 m-0 grid grid-rows-1 h-screen max-w-screen bg-gradient-to-b from-slate-400 to-slate-200 overflow-hidden">
      <div className=" overflow-auto pb-10">
        {" "}
        <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}>
          <Component {...pageProps} />
        </SessionContextProvider>
      </div>
      <div className="w-full sticky bottom-auto">
        <MobileNavbar />
      </div>
    </div>
  );
}
export default MyApp;
