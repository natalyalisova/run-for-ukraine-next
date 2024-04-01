import React from "react";
import { useTranslations } from "next-intl";
import Social from "@/app/components/Social";
import Report from "@/app/components/Report";
import Gallery from "@/app/components/Gallery";
import { UnderConstraction } from "@/app/components/UnderConstraction";

const Donate = () => {
  const t = useTranslations("Gather");

  return (
    <div className="flex flex-col mt-28">
      <UnderConstraction />
      <div className="text-center my-24">
        {/* <TextGradient text={t("donate-now")} /> */}
        <p className="text-xl mt-24">
          We regret to inform you that this option is currently not available.
        </p>
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
      </div>
      {/* <div className="mx-auto">
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
      </div> */}

      <Social />
      <Report />
      <Gallery />
    </div>
  );
};

export default Donate;
