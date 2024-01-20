"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import TextGradient from "../../components/AnimatedTextGradient";
import { RegistrationInfoPopUp } from "../../components/RegistrationInfoPopUp";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

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
    toggleModal();
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
          className="w-full p-3 rounded-md bg-strong-azure text-yellow-gold hover:bg-blue-600 focus:outline-none"
        >
          Sign in
        </button>
      </div>
      {/*How to register*/}
      <div className="my-12 text-center max-w-screen-sm">
        <TextGradient text={"I want to become a part of #RunForUktaine team"} />
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-6"></div>
        <div className="md:mx-auto">
          <p className="text-small md:text-base">
            I would like to fundraise for a charity organization #RunForUkraine
            and create a unique page where I can explain the purpose of the
            collection and share it with the world.
          </p>
          <div className="inline-flex items-start">
            <label
              className="relative flex items-center p-2 rounded-full cursor-pointer"
              htmlFor="check"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                id="check"
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <p className="mt-px font-light text-black cursor-pointer select-none text-left pt-2 text-small md:text-base">
              By clicking 'Sign Up' you agree to the Run For Ukraine{" "}
              <Link
                href="/terms-n-conditions"
                target="_blank"
                className="text-gray-700 rounded underline md:bg-transparent hover:text-strong-azure mr-2"
                aria-current="page"
              >
                Terms and Conditions
              </Link>
              and
              <Link
                href="/cookies-privacy-policy"
                target="_blank"
                className=" text-gray-700 underline rounded md:bg-transparent hover:text-strong-azure ml-1"
                aria-current="page"
              >
                Cookies & Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="md:w-96 mx-auto">
            <button
              onClick={handleSignUp}
              className="w-full md:mx-auto p-3 rounded-md bg-strong-azure text-yellow-gold hover:bg-blue-600 focus:outline-none my-6"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {showModal && <RegistrationInfoPopUp onClick={toggleModal} />}
    </main>
  );
}
