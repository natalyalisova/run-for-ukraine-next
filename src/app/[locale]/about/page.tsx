import React from "react";
import { useTranslations } from "next-intl";
import About from "@/app/components/About";
import TextGradient from "@/app/components/AnimatedTextGradient";
import Team from "@/app/components/Team";

const AboutPage = () => {
  const t = useTranslations("AboutPage");

  return (
    <div className="mt-36 md:mt-52">
      <div className="text-center md:my-12">
        <TextGradient text={t("about-page-title")} />
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
      </div>
      <About />
      <div className="flex flex-col mt-14">
        <Team />
      </div>
    </div>
  );
};

export default AboutPage;
