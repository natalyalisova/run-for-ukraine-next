import React from "react";
import { User } from "@supabase/supabase-js";

interface UserDisplayProps {
  user: User;
  handleLogout: () => Promise<void>;
}

export const UserDisplay: React.FC<UserDisplayProps> = ({
  user,
  handleLogout,
}) => {
  // UserDisplay JSX
  console.log(handleLogout);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
          Hello {user.email}
          <br />
          You&apos;re already logged in
        </h1>
        <button className="w-full p-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none">
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
};
