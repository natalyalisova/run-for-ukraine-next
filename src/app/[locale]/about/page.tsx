import React from "react";
import { useTranslations } from "next-intl";
import About from "@/app/components/About";
import TextGradient from "@/app/components/AnimatedTextGradient";

const AboutPage = () => {
  const t = useTranslations("AboutPage");

  return (
    <div className="mt-36 md:mt-52">
      <div className="text-center md:my-12">
        <TextGradient text={t("about-page-title")} />
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
      </div>
      <About />
    </div>
  );
};

export default AboutPage;
