import { useTranslations } from "next-intl";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/apolloClient";
import Image from "next/image";
import React from "react";
import Fundraisers, { AmbasadorProps } from "@/app/components/Fundraisers";
import HomeTop from "@/app/components/HomeTop";
import Goals from "@/app/components/Goals";
import Gather from "@/app/components/Gather";
import Social from "@/app/components/Social";
import Report from "@/app/components/Report";
import Gallery from "@/app/components/Gallery";
import { campaignCode } from "../constants";
import DonateWidget from "@/app/components/donate/DonateWidget";
import TextGradient from "@/app/components/AnimatedTextGradient";

const MockedAmbassadors = [
  {
    name: "Amelina Olga",
    fundraised: 120,
    goal: 500,
    profileImgUrl: "/images/olga-avatar.png",
  },
  {
    name: "Sergey Ostapenko",
    fundraised: 100,
    goal: 400,
    profileImgUrl: "/images/sergey-avatar.png",
  },
  {
    name: "Mark Lisovyi",
    fundraised: 310,
    goal: 1500,
    profileImgUrl: "/images/avatar-default.svg",
  },
];

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
    <div className="flex flex-col">
      <HomeTop />
      <div className="w-full">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4  justify-center mt-10">
          {props.data.ambassadors.map((ambassador) => (
            <Fundraisers
              name={ambassador.name}
              key={ambassador.id}
              profileImgUrl={ambassador.avatar.url}
              about={ambassador.blurb}
              fundraised={ambassador.goalOffset}
              goal={ambassador.goal}
              fundraiserLink={ambassador.shearableUrl}
            />
          ))}
        </div>
        <Goals />
        <div className="pt-6 pb-12" id="register">
          <div className="text-center mt-10">
            <TextGradient text={t("Register for a run")} />
            <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
          </div>
          <div className="w-[340px] md:w-[360px] mx-auto">
            <DonateWidget
              campaign={campaignCode}
              showCollections
              targetCollections={69920}
              donateType={"register"}
              goalTranslation={t("goal")}
              collectDateTranslation={t("Collect-to-date")}
              raisedTranslation={t("raised")}
              thankYouTranslation={t("thank - you")}
              anotherContributionTranslation={t("another-contribution")}
              processingTranslation={t("processing")}
              yourDonationTranslation={t("your-donation")}
              anotherWindowTranslation={t("another-window")}
              cancelTranslation={t("cancel")}
              selectAmountTranslation={t("select-amount")}
              includeEmailTranslation={t("include-email")}
              enterAmountTranslation={t("enter-amount")}
              emailOptionalTranslation={t("email-optional")}
              fullNameOptionalTranslation={t("full-name-optional")}
              addNoteTranslation={t("add-note")}
              registerTranslation={t("register")}
              donateTranslation={t("donate")}
            ></DonateWidget>
          </div>
        </div>
      </div>
      <Gather />
      <div className="bg-img flexCenter flex-col py-16">
        <Image
          src={"/images/run-for-ukraine-logo-blue.svg"}
          width={150}
          height={150}
          alt={"Run for Ukraine Logo"}
        />
        <h2 className="uppercase text-strong-azure max-w-[550px] font-semibold text-center md:text-2xl leading-relaxed px-3 pt-10">
          {t("home-on-yellow-bg-title")}
        </h2>
      </div>
      <Social />
      <Report />
      <Gallery />
    </div>
  );
};

export default App;
