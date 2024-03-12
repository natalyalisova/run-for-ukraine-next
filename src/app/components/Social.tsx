import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { auto } from "@popperjs/core";
import SvgWave from "../../../public/images/blue-svg.svg";

const Social = () => {
  const t = useTranslations("Social");
  return (
    <>
      <div className="bg-yellow-gold pb-12 mt-[-3px]">
        <Image
          src={SvgWave}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="Wave background"
          className="inner-b"
        />

        <div
          className="flex justify-center flex-col md:flex-row  mt-10"
          id="social"
        >
          <div className="p-3" id="strava">
            <h2 className="font-semibold text-2xl py-3">
              {t("join-our-run-club")}
              <a
                href="https://strava.app.link/GAROuCXupyb"
                className="text-strong-azure hover:underline hover:underline-offset-2 ml-2"
              >
                Strava
              </a>
            </h2>
            <div className="strava-container">
              <iframe
                frameBorder="0"
                height="160"
                scrolling="no"
                src="https://www.strava.com/clubs/1123141/latest-rides/214252ff5b5c952649075a008151320e8d2b11b8?show_rides=false"
                width="100%"
              ></iframe>
              <iframe
                frameBorder="0"
                height="454"
                scrolling="no"
                src="https://www.strava.com/clubs/1123141/latest-rides/214252ff5b5c952649075a008151320e8d2b11b8?show_rides=true"
                width="100%"
              ></iframe>
            </div>
          </div>
          <div className="p-3" id="telegram">
            <h2 className="font-semibold text-2xl py-3">
              {t("join-telegram-title")}
            </h2>
            <ul className="text-strong-azure ml-3 text-base flex flex-col space-y-3 mt-3 ">
              <li>
                <a
                  href="https://t.me/runforukrainetelaviv"
                  className="hover:underline hover:underline-offset-2"
                >
                  <Image
                    src={"/images/telegram.svg"}
                    alt={"telegram icon"}
                    width={25}
                    height={25}
                    className="inline mr-2"
                  />
                  {t("join-telegram-israel")}
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/runforukrainelondon"
                  className="hover:underline hover:underline-offset-2"
                >
                  <img
                    src={"/images/telegram.svg"}
                    alt={"telegram icon"}
                    width={25}
                    height={auto}
                    className="inline mr-2"
                  />
                  {t("join-telegram-uk")}
                </a>
              </li>
              <li>
                <a
                  href=" https://t.me/runforukrainemontreal"
                  className="hover:underline hover:underline-offset-2"
                >
                  <img
                    src={"/images/telegram.svg"}
                    alt={"telegram icon"}
                    width={25}
                    height={auto}
                    className="inline mr-2"
                  />
                  {t("join-telegram-mr")}
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/runforukrainetoronto"
                  className="hover:underline hover:underline-offset-2"
                >
                  <Image
                    src={"/images/telegram.svg"}
                    alt={"telegram icon"}
                    width={25}
                    height={25}
                    className="inline mr-2"
                  />
                  {t("join-telegram-canada")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
