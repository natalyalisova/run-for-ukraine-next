import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { Database } from "@/types/supabase";
import Link from "next/link";
import React from "react";

const NewCampaign = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        To have access to this page you need to
        <Link
          href="/login"
          className="m-2 md:bg-transparent  md:p-0  mt-4 lg:inline-block lg:mt-0 text-strong-azure hover:text-cyan-500 mr-4 underline"
          aria-current="page"
        >
          Login
        </Link>
      </div>
    );
  }
  const addFundraising = async (formData: FormData) => {
    "use server";
    const title = String(formData.get("title"));
    console.log("title", title);
    const supabaseCamp = createServerActionClient<Database>({ cookies });
    await supabaseCamp.from("campaigns").insert({ title });

    revalidatePath("/");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        Return to
        <Link
          href="/login"
          className="m-2 md:bg-transparent  md:p-0  mt-4 lg:inline-block lg:mt-0 text-strong-azure underline hover:text-cyan-500 mr-4"
          aria-current="page"
        >
          My account
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-96 text-center">
        <form action={addFundraising} className="flex flex-col">
          <h1 className="font-semibold text-2xl py-3">
            My fundraising campaign
          </h1>
          <input
            name="title"
            className="border-solid border-2 rounded border-sky-500 p-2"
          />
          <input
            type="submit"
            value="Start fundraising"
            className="mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default NewCampaign;
