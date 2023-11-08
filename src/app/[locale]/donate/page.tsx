import HomeTop from "@/app/components/HomeTop";
import DonateWidget from "@/app/components/donate/DonateWidget";
import { campaignCode } from "@/app/constants";
import React from "react";
import { useTranslations } from "next-intl";
import TextGradient from "@/app/components/AnimatedTextGradient";
import Gather from "@/app/components/Gather";
import Image from "next/image";
import Social from "@/app/components/Social";
import Report from "@/app/components/Report";
import Gallery from "@/app/components/Gallery";
import Goals from "@/app/components/Goals";

const Donate = () => {
  const t = useTranslations("Gather");

  return (
    <div className="flex flex-col mt-28">
      <div className="text-center md:my-12">
        <TextGradient text={t("donate-now")} />
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
      </div>
      <div className="mx-auto">
        <DonateWidget
          campaign={campaignCode}
          showCollections
          targetCollections={69920}
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

      <Goals />
      <div className="bg-img flexCenter flex-col py-16 my-24">
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
      <Gather />

      <Social />
      <Report />
      <Gallery />
    </div>
  );
};

export default Donate;
