import { useTranslations } from "next-intl";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/apolloClient";
import Image from "next/image";
import React from "react";
import Social from "@/app/components/Social";
import Report from "@/app/components/Report";
import Gallery from "@/app/components/Gallery";
import { campaignCode } from "../constants";
import ProjectDescription from "@/app/components/ProjectDescription";
import Gather from "@/app/components/Gather";
import LatestNews from "@/app/components/LatestNews";
import SvgWave from "../../../public/images/blue-svg.svg";
import About from "@/app/components/About";

const GET_AMBASSADORS = gql`
  query GetAmbassador($campaignId: String!) {
    ambassadors(
      where: {
        AND: [
          { project: { campaignID: { equals: $campaignId } } }
          { status: { equals: "published" } }
        ]
      }
      take: 100
      skip: 0
    ) {
      id
      name
      slug
      campaignIdInfix
      campaignIdFull
      blurb
      content {
        document(hydrateRelationships: true)
      }
      project {
        id
        name
        campaignID
        blurb
        goal
        logo {
          url
        }
        status
      }
      goal
      goalOffset
      avatar {
        url
      }
      status
      shearableUrl
    }
  }
`;

export type Ambassador = {
  name: string;
  id: string;
  avatar: {
    url: string;
  };
  blurb: string;
  goalOffset: number;
  goal: number;
  shearableUrl: string;
};

const App = async () => {
  const { data, error, loading } = await getClient().query({
    query: GET_AMBASSADORS,
    variables: { campaignId: campaignCode },
  });
  console.log("render App", { data, error, loading });
  return <Home data={data} error={error} loading={loading} />;
};

const Home = (props: { loading: boolean; data: any; error: any }) => {
  const t = useTranslations("Home");
  if (props.loading) {
    return <div>Loading...</div>;
  } else if (props.error) {
    return <div>{JSON.stringify(props.error)}</div>;
  }

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
      <About />
      <Gather />
      <Report />
      <Gallery />
    </div>
  );
};

export default App;
