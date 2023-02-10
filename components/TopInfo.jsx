import React, { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

function TopInfo({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-8 flex items-center flex-row justify-between ">
      <div className="bg-white h-12 w-12 rounded-md flex items-center justify-center">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 23 23"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      </div>
      <div className="w-full px-8">
        <p className="font-thin">user location</p>
        <h3 className="text-xl">Location</h3>
      </div>
      <div className="bg-white h-12 w-12 rounded-md flex items-center justify-center">
        {avatar_url ? (
          <img href={avatar_url} alt="Avatar" />
        ) : (
          <div className="avatar no-image" />
        )}
      </div>
    </div>
  );
}

export default TopInfo;
