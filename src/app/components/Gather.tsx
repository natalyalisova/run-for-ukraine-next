import Image from "next/image";
import Link from "next-intl/link";
import TextGradient from "@/app/components/AnimatedTextGradient";
import React from "react";
import { useTranslations } from "next-intl";
import About from "@/app/components/About";
import DonateWidget from "./donate/DonateWidget";
import { campaignCode } from "../constants";

const Gather = () => {
  const t = useTranslations("Gather");

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 justify-center p-10">
      <div className="flexCenter mb-6">
        <Image
          src="/images/walkie-talkie.png"
          alt={"walkie-talkie image"}
          width={300}
          height={300}
        />
      </div>
      <div className="flex justify-center flex-col" id="gather">
        <h2 className="title">{t("fundraising-goal-title")}</h2>
        <p className="inline text-bace md:text-lg">
          {t("fundraising-goal-description-1")}
          <span className="text-strong-azure text-bace md:text-lg underline underline-offset-2">
            <Link
              href={
                "https://www.instagram.com/p/CpDcpkMud_l/?igshid=YmMyMTA2M2Y%3D"
              }
            >
              &quot;{t("second-front-name")}&quot;
            </Link>
          </span>
          {t("fundraising-goal-description-2")}
        </p>
      </div>
      <div className="flex justify-center flex-col mb-1">
        <p className="text-base md:text-lg">
          <span className="font-semibold">
            &quot;{t("second-front-foundation-title")}&quot;
          </span>
          {t("second-front-foundation-description-1")}
        </p>
        <p className="font-semibold text-base md:text-lg">
          {t("second-front-foundation-description-2")}
        </p>
      </div>
      <div
        className="flex justify-center flex-col text-2xl text-center"
        id="donate"
      >
        <DonateWidget
          campaign={campaignCode}
          showCollections
          targetCollections={69920}
        ></DonateWidget>
      </div>

      <div className="flexCenter my-6">
        <Image
          src="/images/amelina-olga.png"
          alt={"Amelina Olga image"}
          width={500}
          height={700}
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
            src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2FBD995476-9DBA-4300-BA04-7775CBD40D60.MOV"
          ></video>
          <p className="absolute  bg-black opacity-60 font-bold text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            #RunForUkraine
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gather;
