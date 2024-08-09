import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const About = () => {
  const t = useTranslations("About");

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 justify-center mt-6 p-6">
      <div className="flexCenter my-6">
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1568.JPG"
          }
          alt={"Amelina Olga image"}
          width={500}
          height={650}
        />
      </div>

      <div
        className="flex justify-center flex-col text-base md:text-lg"
        id="about"
      >
        <h2 className="title uppercase">{t("about-title")}</h2>
        <p className="mt-6">{t("about-subtitle")}</p>
        <p>
          {t("about-description-1")}
          <br />
          <br />
          {t("about-description-2")}
          <br />
          <br />
          {t("about-description-3")}
          <br />
          <br />
          {t("about-description-4")}
        </p>
        <p className="mt-6">
          {t("about-description-5")}:
          <a
            href="mailto:runforukraineil@gmail.com"
            className="text-strong-azure font-semibold ml-1"
          >
            runforukraineil@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
