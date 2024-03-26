import React from "react";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { userLinks } from "@/app/constants";
import { UnderConstraction } from "@/app/components/UnderConstraction";
import Date from "./date";

interface UserDisplayProps {
  user: User;
  handleLogout: () => Promise<void>;
}

export const UserPage: React.FC<UserDisplayProps> = ({
  user,
  handleLogout,
}) => {
  return (
    <>
      <UnderConstraction />
      <main className="mt-24 md:mt-[150px] h-screen flex md:items-center p-6 flex-col">
        <div className="md:flex flex-row gap-4">
          <img
            src={"/images/avatar-default.svg"}
            className="rounded-full border-4 w-[120px] h-[120px] object-cover border-yellow-gold border-t-blue-500 border-r-blue-500 md:mx-auto"
            alt="Profile Image"
          />
          <div className="flex flex-col min-w-2xl">
            <div className="mb-3">
              <p className="text-strong-azure font-semibold md:text-3xl ">
                Personal profile page
              </p>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">
                <span className="mr-1">Joined</span>
                <Date dateString={user.created_at} />
              </p>
              <p className="text-gray-600">Israel</p>
            </div>

            <ul className="md:flex md:flex-row gap-3">
              {userLinks.map((link) => (
                <li className="" key={link.key}>
                  <Link href={link.href} className="" aria-current="page">
                    <div className="md:flex-grow md:w-full whitespace-nowrap bg-blue-50 mb-3 hover:underline underline-offset-2 p-3 rounded-md  text-strong-azure text-center hover:bg-blue-100 focus:outline-none">
                      {link.text}
                    </div>
                  </Link>
                </li>
              ))}
              <button
                onClick={handleLogout}
                type="button"
                className="md:flex-grow w-full whitespace-nowrap p-3 mb-3 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};
