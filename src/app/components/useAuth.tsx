"use client";
import { useCallback, useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

export default function useAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error("Error fetching user: ", error);
      } finally {
        setLoading(false);
      }
    }

    void getUser();
  }, [supabase.auth]);

  const handleSignUp = useCallback(async () => {
    try {
      const res = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      if (!res.error) {
        setUser(res.data.user);
        router.refresh();
        setEmail("");
        setPassword("");
      } else {
        console.error("Signup error:", res.error);
        return (
          <div>
            Failed to create an account. Please check your details and try
            again.
          </div>
        );
      }
    } catch (error) {
      console.error("Unexpected error during signup:", error);
    }
  }, [email, password, router, supabase.auth]);

  const handleSignIn = useCallback(async () => {
    try {
      const res = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (!res.error) {
        setUser(res.data.user);
        router.refresh();
        setEmail("");
        setPassword("");
      } else {
        console.error("Sign-In error: ", res.error);
      }
    } catch (error) {
      console.error("Unexpected error during sign-In: ", error);
    }
  }, [email, password, router, supabase.auth]);

  const handleLogout = useCallback(async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      router.refresh();
    } catch (error) {
      console.error("Log-Out error: ", error);
    }
  }, [router, supabase.auth]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    user,
    setUser,
    loading,
    router,
    handleSignIn,
    handleSignUp,
    handleLogout,
  };
}
