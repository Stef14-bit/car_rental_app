import { useEffect, useState } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

function TestAvatar() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const { user } = useUser();
  const supabase = useSupabaseClient();
  const storage = new Storage(supabase);

  useEffect(() => {
    fetchAvatarUrl();
  }, [supabase, user]);

  async function fetchAvatarUrl() {
    if (!user) {
      return;
    }

    const { data: profile, error } = await supabase
      .from("profiles")
      .eq("id", user.id)
      .single();

    if (error) {
      console.log(error);
    } else {
      const avatarUrl = supabase.storage
        .from("avatars")
        .getPublicUrl(`${profile.avatar_url}`);

      setAvatarUrl(avatarUrl);
    }
  }

  console.log("AVATAR", avatarUrl);
  return avatarUrl ? (
    <img src={avatarUrl} alt="Avatar" />
  ) : (
    <div>Loading avatar...</div>
  );
}

export default TestAvatar;
