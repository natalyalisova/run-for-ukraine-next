import Link from "next-intl/link";
import TextGradient from "@/app/components/AnimatedTextGradient";
import React from "react";
import { useTranslations } from "next-intl";
import About from "@/app/components/About";
import DonateWidget from "./donate/DonateWidget";
import { campaignCode } from "../constants";
import { auto } from "@popperjs/core";
import Team from "@/app/components/Team";

const Gather = () => {
  const t = useTranslations("Gather");

  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 justify-center p-6">
        <div className="flexCenter mb-6">
          <img
            src="/images/walkie-talkie.png"
            alt={"walkie-talkie image"}
            width={300}
            height={auto}
          />
        </div>
        <div className="flex justify-center flex-col" id="gather">
          <h2 className="title">{t("fundraising-goal-title")}</h2>
          <p className="inline text-bace md:text-lg">
            {t("fundraising-goal-description-1")}
            <span className="text-strong-azure text-bace md:text-lg underline underline-offset-2">
              <Link
                href={
                  "https://www.instagram.com/runforukraine/"
                }
              >
                &quot;RunForUkraine&quot;
              </Link>
            </span>
            {t("fundraising-goal-description-2")}
          </p>
        </div>
        {/* <div className="flex justify-center flex-col mb-1">
          <p className="text-base md:text-lg">
            <span className="font-semibold">
              &quot;{t("second-front-foundation-title")}&quot;
            </span>
            {t("second-front-foundation-description-1")}
          </p>
          <p className="font-semibold text-base md:text-lg">
            {t("second-front-foundation-description-2")}
          </p>
        </div> */}
        {/* <div
          className="flex justify-center flex-col text-2xl text-center w-[340px] md:w-[360px] mx-auto"
          id="donate"
        >
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

        <div className="flexCenter my-6">
          <img
            src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1568.JPG"
            alt={"Amelina Olga image"}
            width={500}
            height={auto}
          />
        </div>

        <About />

        <div className="flexCenter my-6 text-2xl font-bold">
          <TextGradient
            text={t("RUN - EAT - DONATE - REPEAT!")}
            fontStyle={"text-3xl"}
          />
        </div>
        <div className="flexCenter my-6 hero-video">
          <div className="relative">
            <video
                autoPlay
                loop
                playsInline
                muted
                src="/videos/independence-day-2023.mov"
            ></video>
            <p className="absolute  bg-black opacity-60 font-bold text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              #RunForUkraine
            </p>
          </div>
        </div>
      </div>
      <Team />
    </>
  );
};

export default Gather;
