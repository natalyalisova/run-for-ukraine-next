import Button from "@/app/components/Button";
import React from "react";
import { useTranslations } from "next-intl";
import { auto } from "@popperjs/core";
import DonateWidgetInfo from "@/app/components/donate/DonateWidgetInfo";
import { campaignCode } from "@/app/constants";
import BannerIsrael from "@/app/components/Banner-israel";

const HomeTop = () => {
  const t = useTranslations("HomeTop");
  return (
    <div className="flex flex-col h-[500px] md:h-screen bg-strong-azure">
      <BannerIsrael />
      <img
        src="/images/ukraine-contour.svg"
        className="pointer-events-none absolute z-15 top-1/4 md:top-1/2 left-1/4 md:left-1/2 transform -translate-y-1/4 -translate-x-1/4 md:transform md:-translate-y-1/2 md:-translate-x-1/2 opacity-50 mb-80 md:mb-1 z-20 "
        width={750}
        height={auto}
        alt="Ukraine contour map"
      />
      <div className="h-full md:h-1/2 mt-8 md:mt-10 flex flex-col">
        <div className="flex-grow"></div>
        <DonateWidgetInfo
          campaign={campaignCode}
          showCollections
          targetCollections={6992}
        />
      </div>

      <div className="h-full md:h-1/2 bg-yellow-gold flex justify-center items-end">
        <div className="flexCenter flex-col bg-white m-3 px-6 py-3 max-w-md text-center">
          <p className="text-sm md:text-xl font-semibold z-30">
            {t("our-goal")}
          </p>
          {/*  Well be avalible durung running events*/}
          {/*<a href="#register" className="bg-yellow-gold mt-2">*/}
          {/*  <Button title={t("register")} icon={"/images/runner.png"} />*/}
          {/*</a>*/}

          {/* <a href="#donate" className="bg-yellow-gold mt-2">
            <Button title={t("donate")} />
          </a> */}
        </div>
      </div>
    </div>
  );
};
export default HomeTop;
