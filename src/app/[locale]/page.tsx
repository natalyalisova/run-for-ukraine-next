import { useTranslations } from "next-intl";
import React, { FunctionComponent } from "react";
import Social from "@/app/components/Social";
import Report from "@/app/components/Report";
import Gallery from "@/app/components/Gallery";
import ProjectDescription from "@/app/components/ProjectDescription";
import Gather from "@/app/components/Gather";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { User } from "@supabase/supabase-js";
import HomeTop from "@/app/components/HomeTop";
import Independence from "@/app/components/Independence";

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
      <HomeTop />
      <ProjectDescription />
      {/*<Independence />*/}
      <Social />
      <Gather />
      <Report />
      {/*<Gallery />*/}
    </div>
  );
};

export default App;
