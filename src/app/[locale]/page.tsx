import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import Social from "@/app/components/Social";
import Report from "@/app/components/Report";
import Gallery from "@/app/components/Gallery";
import ProjectDescription from "@/app/components/ProjectDescription";
import Gather from "@/app/components/Gather";
import LatestNews from "@/app/components/LatestNews";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { User } from "@supabase/supabase-js";

type HomeProps = {
  user: User | null;
};
const App = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <Home user={user} />;
};

const Home: FunctionComponent<HomeProps> = ({ user }) => {
  const t = useTranslations("Home");
  const userName = user?.email || "Guest";

  return (
    <div className="flex flex-col mt-14">
      <div className="w-full md:my-16">
        <div className="bg-img flexCenter flex-col py-16 ">
          <Image
            src={"/images/run-for-ukraine-logo-blue.png"}
            width={150}
            height={150}
            alt={"Run for Ukraine Logo"}
          />
          <h2 className="uppercase text-strong-azure max-w-[550px] font-semibold text-center md:text-2xl leading-relaxed px-3 pt-10">
            {t("home-on-yellow-bg-title")}
          </h2>
        </div>
      </div>
      <ProjectDescription />
      <LatestNews />
      <Social />
      <Gather />
      <Report />
      <Gallery />
    </div>
  );
};

export default App;
