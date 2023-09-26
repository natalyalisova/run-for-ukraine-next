import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Button from "@/app/components/Button";
import Link from "next-intl/link";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons/faCircleDollarToSlot";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Home = () => {
  const t = useTranslations("Home");
  return (
    <div className="items-center flex-start flex-col mt-17 self-center h-screen pt-16">
      <Image
        src="/images/ukraine-contour.svg"
        className=" absolute z-15 top-1/4 md:top-1/2 left-1/4 md:left-1/2 transform -translate-y-1/4 -translate-x-1/4 md:transform md:-translate-y-1/2 md:-translate-x-1/2 opacity-50 mb-80 md:mb-1 z-20 "
        width={750}
        height={500}
        alt="Ukraine contour map"
      />
      <div className="flex flex-col mt-17 self-center justify-center h-1/4 md:h-96 bg-strong-azure">
        <div className="flex-grow"></div>
        <div className="flex flex-row self-center pb-1 items-center ">
          <p className="text-white text-2xl md:text-5xl">1212.8</p>
          <p className="text-white  text-base md:text-lg opacity-50 ml-2">
            / 6992 km
          </p>
        </div>
      </div>
      <div className="flex-start flex-col mt-17 text-center h-1/4 md:h-82 bg-yellow-gold"></div>
      <div className="flexCenter  h-1/4  md:h-96 bg-yellow-gold p-3">
        <div className="flexCenter flex-col bg-white mb-3 px-6 py-3 max-w-md text-center">
          <p className="text-sm md:text-xl font-semibold">{t("our-goal")}</p>
          <Link href="" className="bg-yellow-gold mt-2">
            <Button
              title={t("register")}
              leftIcon={faCircleDollarToSlot as IconProp}
            />
          </Link>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4  justify-center mt-10">
          {/*ambassador's mockup - 1*/}
          <div className="">
            <Link href="">
              <div className="flexCenter gap-2">
                <Image
                  src="/images/olga-avatar.png"
                  width={90}
                  height={90}
                  className="rounded-full border-4 border-yellow-gold border-t-blue-500 border-r-blue-500"
                  alt="Profile Image"
                />
                <div className="flex flex-col">
                  <p className="text-strong-azure font-semibold text-base">
                    Amelina Olga
                  </p>
                  <p className="text-sm">{t("fundraised")}</p>
                  <p className="text-strong-azure text-base font-semibold ">
                    120
                    <span className="text-strong-azure text-sm opacity-50 ml-2">
                      / 500 USD
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {/*ambassador's mockup - 2*/}
          <div className="">
            <Link href="">
              <div className="flexCenter gap-2">
                <Image
                  src="/images/sergey-avatar.png"
                  width={90}
                  height={90}
                  className="rounded-full border-4 border-yellow-gold border-t-blue-500 border-r-blue-500"
                  alt="Profile Image"
                />
                <div className="flex flex-col">
                  <p className="text-strong-azure font-semibold text-base">
                    John Doe
                  </p>
                  <p className="text-sm">{t("fundraised")}</p>
                  <p className="text-strong-azure text-base font-semibold ">
                    200
                    <span className="text-strong-azure text-sm opacity-50 ml-2">
                      / 400 USD
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/*ambassador's mockup - 3*/}
          <div className="">
            <Link href="">
              <div className="flexCenter gap-2">
                <Image
                  src="/images/avatar-default.svg"
                  width={90}
                  height={90}
                  className="rounded-full border-4 border-yellow-gold border-t-blue-500 border-r-blue-500"
                  alt="Profile Image"
                />
                <div className="flex flex-col">
                  <p className="text-strong-azure font-semibold text-base">
                    Mark Lisovyi
                  </p>
                  <p className="text-sm">{t("fundraised")}</p>
                  <p className="text-strong-azure text-base font-semibold ">
                    80
                    <span className="text-strong-azure text-sm opacity-50 ml-2">
                      / 1500 USD
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 text-center p-4 gap-y-6 md:mt-12">
          <h2 className="text-xl md:text-4xl text-strong-azure font-semibold">
            {t("new-global-season-title")}
          </h2>
          <div className="text-center place-self-center">
            <p className="inline text-bace md:text-lg">
              {t("new-global-season-description-1")}
            </p>
            <Link
              href="https://runforukraine.ca/"
              title="www.runforukraine.ca"
              className="inline mx-2 text-strong-azure text-bace md:text-lg underline underline-offset-2"
            >
              www.runforukraine.ca
            </Link>
            <p className="inline text-bace md:text-lg">
              {t("new-global-season-description-2")}
            </p>
          </div>

          <h2 className="text-xl md:text-2xl mt-6 font-semibold">
            {t("why-6992-km-title")}
          </h2>
          <div className="text-center place-self-center">
            <p className="inline mr-3 text-xl font-semibold text-strong-azure">
              {t("length-number")}
            </p>
            <p className="inline text-bace md:text-lg">
              {t("why-6992-km-description")}
            </p>
          </div>

          <h2 className="text-xl md:text-2xl mt-6 font-semibold">
            {t("how-count-title")}
          </h2>
          <p className=" text-center inline text-bace md:text-lg">
            {t("how-count-description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
