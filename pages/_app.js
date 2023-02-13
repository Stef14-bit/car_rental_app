import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <div className="h-screen  bg-gradient-to-b from-slate-400 to-slate-200 overflow-scroll">
      {" "}
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}>
        <Component {...pageProps} />
      </SessionContextProvider>
    </div>
  );
}
export default MyApp;
