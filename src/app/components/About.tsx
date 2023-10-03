import React from "react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <div className="flex justify-center flex-col" id="about">
      <h2 className="title uppercase">{t("about-title")}</h2>
      <h3 className="title-secondary">{t("about-subtitle")}</h3>
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
    </div>
  );
};

export default About;
