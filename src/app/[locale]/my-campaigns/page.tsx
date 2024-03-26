import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import Link from "next/link";
import React from "react";
import { UnderConstraction } from "@/app/components/UnderConstraction";

const NewCampaign = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  if (!user) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        To have access to this page you need to
        <Link
          href={"/login"}
          className="m-2 md:bg-transparent  md:p-0  mt-4 lg:inline-block lg:mt-0 text-strong-azure hover:text-cyan-500 mr-4 underline"
          aria-current="page"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <>
      <UnderConstraction />
      <div className="h-screen flex flex-col mt-20 items-center">
        <div>
          Return to
          <Link
            href={"/login"}
            className="m-2 md:bg-transparent  md:p-0 lg:inline-block lg:mt-0 text-strong-azure underline hover:text-cyan-500 mr-4"
            aria-current="page"
          >
            My account
          </Link>
        </div>
      </div>
    </>
  );
};
export default NewCampaign;
