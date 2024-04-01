"use client";
import React from "react";
import { UserPage } from "../../components/UserPage";
import useAuth from "../../components/useAuth";
import { LoginForm } from "../../components/LoginForm";

export default function LoginPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    user,
    loading,
    handleSignUp,
    handleSignIn,
    handleLogout,
  } = useAuth();

  console.log({ loading, user });

  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1>loading...</h1>
      </div>
    );
  }

  if (user) {
    return <UserPage user={user} handleLogout={handleLogout} />;
  }

  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSignIn={handleSignIn}
      handleSignUp={handleSignUp}
    />
  );
}
