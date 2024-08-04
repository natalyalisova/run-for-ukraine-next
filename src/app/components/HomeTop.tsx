"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "@/app/components/Button";
import {
  faCheck,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HomeTop = () => {
  const t = useTranslations("HomeTop");
  const handleButtonClick = () => {
    window.open(
      "https://send.monobank.ua/jar/3o9J76qxHe",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="w-full md:mt-16">
      <div className="bg-img flexCenter flex-col py-14">
        <Image
          src={"/images/run-for-ukraine-logo-blue.png"}
          width={120}
          height={120}
          alt={"Run for Ukraine Logo"}
        />
        <h2 className="uppercase text-strong-azure max-w-[850px] font-bold text-center text-2xl md:text-4xl leading-relaxed px-3 pt-10 pb-4">
          {t("home-on-yellow-bg-title")}
        </h2>
        <div className="rounded-xl max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-center p-6 md:bg-white/50 mt-6">
          <div className="flex  flex-col text-base md:text-lg">
            <p className="mb-3">
              <b>#RunForUkraine</b> {t("home-top-text-left-1")}
            </p>
            <p>
              <b>{t("home-top-text-left-2")}</b> {t("home-top-text-left-3")}
            </p>
            <Button
              title={t("donate")}
              handleClick={handleButtonClick}
              isSubmitting={true}
              rightIcon={faCircleDollarToSlot}
            />
          </div>

          <div className="flex justify-center flex-col text-base md:text-lg ">
            <p className="font-bold">{t("home-top-text-right-1")}</p>
            <p className="mt-2">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#0057b8" }}
                className="mr-4"
              />
              {t("home-top-text-right-2")}
              <Link
                href={
                  "https://www.instagram.com/runforukraine?igsh=cjlxdTIxcGRjd3Nl"
                }
                target="_blank"
                className="text-strong-azure font-semibold underline underline-offset-2 ml-2"
              >
                Instagram
              </Link>
              ,
              <Link
                href={"https://www.facebook.com/runforukraine.united"}
                target="_blank"
                className="text-strong-azure font-semibold underline underline-offset-2 ml-2"
              >
                Facebook
              </Link>
              ,
              <Link
                href={"https://strava.app.link/GAROuCXupyb"}
                target="_blank"
                className="text-strong-azure font-semibold underline underline-offset-2 ml-2"
              >
                Strava Club
              </Link>
              .
            </p>
            <p className="mt-2">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#0057b8" }}
                className="mr-4"
              />
              {t("home-top-text-right-3")}
            </p>
            <p className="mt-2">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#0057b8" }}
                className="mr-4"
              />
              {t("home-top-text-right-4")}
            </p>
            <p className="mt-2">
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#0057b8" }}
                className="mr-4"
              />
              {t("home-top-text-right-5")}
              <a
                href="mailto:runforukraineil@gmail.com"
                className="text-strong-azure font-semibold ml-1 underline underline-offset-2"
              >
                runforukraineil@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeTop;
