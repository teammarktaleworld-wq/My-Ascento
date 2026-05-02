"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      // session is automatically stored by Supabase
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        router.push("/profile"); // or /admin based on role
      } else {
        router.push("/login");
      }
    };

    handleAuth();
  }, [router]);

  return <p>Logging you in...</p>;
}