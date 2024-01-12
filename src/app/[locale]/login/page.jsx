"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import TextGradient from "../../components/AnimatedTextGradient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, []);

  const handleSignUp = async () => {
    const res = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    setUser(res.data.user);
    router.refresh();
    setEmail("");
    setPassword("");
  };

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setUser(res.data.user);
    router.refresh();
    setEmail("");
    setPassword("");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    setUser(null);
  };

  console.log({ loading, user });

  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1>loading...</h1>
      </div>
    );
  }

  const openNewCapmaign = () => {
    window.open("new-campaign", "_self");
  };

  if (user) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-96 text-center">
          <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
            Hello {user.email}
            <br />
            You&apos;re already logged in
          </h1>
          <button
            onClick={openNewCapmaign}
            className="w-full p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
          >
            New campaign
          </button>
          <button
            onClick={handleLogout}
            className="w-full p-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="h-screen flex items-center p-6 flex-col">
      {/*LogIn form*/}
      <div className="md:w-96">
        <h2 className="text-xl md:text-lg mt-3 font-bold text-center ">
          I already have an account
        </h2>
        <div className="mt-2 h-1 w-32 bg-yellow-gold mx-auto mb-3"></div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="inputStyle rounded-md"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="inputStyle rounded-md"
        />
        <button
          onClick={handleSignIn}
          className="w-full p-3 rounded-md bg-strong-azure text-yellow-gold hover:bg-gray-600 focus:outline-none"
        >
          Sign In
        </button>
      </div>
      {/*How to register*/}
      <div className="mt-12 text-center max-w-screen-sm">
        <TextGradient text={"I want to become a part of #RunForUktaine team"} />
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-6"></div>
        <div className="md:w-96 mx-auto">
          <p>
            I would like to fundraise for a charity organization #RunForUkraine
            and create a unique page where I can explain the purpose of the
            collection and share it with the world.
          </p>
          <button
            onClick={handleSignIn}
            className="w-full p-3 mt-6 rounded-md bg-strong-azure text-yellow-gold hover:bg-gray-600 focus:outline-none"
          >
            Fill the form
          </button>
        </div>
      </div>
    </main>
  );
}
