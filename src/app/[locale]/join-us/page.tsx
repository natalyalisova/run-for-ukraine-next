import React from "react";
import { useTranslations } from "next-intl";
import About from "@/app/components/About";
import TextGradient from "@/app/components/AnimatedTextGradient";
import Social from "@/app/components/Social";
import Image from "next/image";
import { TelegramLinks } from "@/app/constants";

const JoinUsPage = () => {
  // const t = useTranslations("AboutPage");
  const t = useTranslations("Social");

  return (
    <div className="mt-36 md:mt-52">
      <div className="text-center md:my-12">
        <TextGradient text={"Join us"} />
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
      </div>

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
              target="_blank"
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
              title="Strava"
            ></iframe>
            <iframe
              frameBorder="0"
              height="454"
              scrolling="no"
              src="https://www.strava.com/clubs/1123141/latest-rides/214252ff5b5c952649075a008151320e8d2b11b8?show_rides=true"
              width="100%"
              title="Strava"
            ></iframe>
          </div>
        </div>
        <div className="p-3" id="telegram">
          <h2 className="font-semibold text-2xl py-3">
            {t("join-telegram-title")}
          </h2>
          <ul className="text-strong-azure ml-3 text-base flex flex-col space-y-3 mt-3">
            {TelegramLinks.map(({ href, textKey }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:underline hover:underline-offset-2"
                  target="_blank"
                >
                  <Image
                    src="/images/telegram.svg"
                    alt="telegram icon"
                    width={25}
                    height={25}
                    className="inline mr-2"
                  />
                  {t(textKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JoinUsPage;
