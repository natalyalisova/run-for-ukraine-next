import TextGradient from "@/app/components/AnimatedTextGradient";
import React from "react";
import { useTranslations } from "next-intl";
import About from "@/app/components/About";
import Team from "@/app/components/Team";

const Gather = () => {
  const t = useTranslations("Gather");

  return (
    <>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 justify-center mt-6 p-6">
        <div className="flexCenter my-6 text-2xl font-bold">
          <TextGradient
            text={t("RUN - EAT - DONATE - REPEAT!")}
            fontStyle={"text-3xl"}
          />
        </div>
        <div className="flexCenter my-6 hero-video">
          <div className="relative">
            <video
              autoPlay
              loop
              playsInline
              muted
              src="/videos/independence-day-2023.mov"
            ></video>
            <p className="absolute  bg-black opacity-60 font-bold text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              #RunForUkraine
            </p>
          </div>
        </div>
      </div>
      <Team />
    </>
  );
};

export default Gather;
