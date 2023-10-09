import Image from "next/image";
import Link from "next-intl/link";
import Button from "@/app/components/Button";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons/faCircleDollarToSlot";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { useTranslations } from "next-intl";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { auto } from "@popperjs/core";

const HomeTop = () => {
  const t = useTranslations("HomeTop");
  return (
    <div className="flex flex-col h-[500px] md:h-screen bg-strong-azure">
      <img
        src="/images/ukraine-contour.svg"
        className=" absolute z-15 top-1/4 md:top-1/2 left-1/4 md:left-1/2 transform -translate-y-1/4 -translate-x-1/4 md:transform md:-translate-y-1/2 md:-translate-x-1/2 opacity-50 mb-80 md:mb-1 z-20 "
        width={750}
        height={auto}
        alt="Ukraine contour map"
      />
      <div className="h-full md:h-1/2 mt-8 md:mt-10 flex flex-col">
        <div className="flex-grow"></div>
        <div className="flex flex-row self-center pb-1 items-center ">
          <p className="text-white text-2xl md:text-5xl">1212.8</p>
          <p className="text-white  text-base md:text-lg opacity-50 ml-2">
            / 6992 km
          </p>
        </div>
      </div>

      <div className="h-full md:h-1/2 bg-yellow-gold flex justify-center items-end">
        <div className="flexCenter flex-col bg-white m-3 px-6 py-3 max-w-md text-center">
          <p className="text-sm md:text-xl font-semibold">{t("our-goal")}</p>
          <a href="#register" className="bg-yellow-gold mt-2">
            <Button
              title={t("register")}
              leftIcon={faPersonRunning as IconProp}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default HomeTop;
