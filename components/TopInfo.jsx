import React, { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { CgProfile } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";

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
        <GrLocation size={"1.5em"} />
      </div>
      <div className="w-full px-8">
        <p className="font-thin">user location</p>
        <h3 className="text-xl">Location</h3>
      </div>
      <div className="bg-white h-12 w-12 rounded-md flex items-center justify-center">
        {avatar_url ? (
          <img src={avatar_url} alt="Avatar" />
        ) : (
          <CgProfile size={"1.5em"} />
        )}
      </div>
    </div>
  );
}

export default TopInfo;
