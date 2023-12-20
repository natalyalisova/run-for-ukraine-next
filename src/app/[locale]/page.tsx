import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Social from "@/app/components/Social";
import Report from "@/app/components/Report";
import Gallery from "@/app/components/Gallery";
import { campaignCode } from "../constants";
import Statement from "@/app/components/Statement";

const App = () => {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col mt-14">
      {/*<HomeTop />*/}
      <div className="w-full md:mt-36">
        {/*<Goals />*/}
        <Statement />
        <div className="pt-6 pb-12" id="register">
          {/* ------ Will be shown when running company will be open ------*/}
          {/*<div className="text-center mt-10">*/}
          {/*  <TextGradient text={t("Register for a run")} />*/}
          {/*  <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>*/}
          {/*</div>*/}
          {/*<div className="w-[340px] md:w-[360px] mx-auto">*/}
          {/*  <DonateWidget*/}
          {/*    campaign={campaignCode}*/}
          {/*    showCollections*/}
          {/*    targetCollections={69920}*/}
          {/*    donateType={"register"}*/}
          {/*    goalTranslation={t("goal")}*/}
          {/*    collectDateTranslation={t("Collect-to-date")}*/}
          {/*    raisedTranslation={t("raised")}*/}
          {/*    thankYouTranslation={t("thank - you")}*/}
          {/*    anotherContributionTranslation={t("another-contribution")}*/}
          {/*    processingTranslation={t("processing")}*/}
          {/*    yourDonationTranslation={t("your-donation")}*/}
          {/*    anotherWindowTranslation={t("another-window")}*/}
          {/*    cancelTranslation={t("cancel")}*/}
          {/*    selectAmountTranslation={t("select-amount")}*/}
          {/*    includeEmailTranslation={t("include-email")}*/}
          {/*    enterAmountTranslation={t("enter-amount")}*/}
          {/*    emailOptionalTranslation={t("email-optional")}*/}
          {/*    fullNameOptionalTranslation={t("full-name-optional")}*/}
          {/*    addNoteTranslation={t("add-note")}*/}
          {/*    registerTranslation={t("register")}*/}
          {/*    donateTranslation={t("donate")}*/}
          {/*  ></DonateWidget>*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="bg-img flexCenter flex-col py-16">
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
      <Social />
      <Report />
      <Gallery />
    </div>
  );
};

export default App;
