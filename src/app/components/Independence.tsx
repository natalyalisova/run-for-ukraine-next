import TextGradient from "@/app/components/AnimatedTextGradient";
import Run2024 from "@/app/components/Run2024";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const Independence = () => {
  const t = useTranslations("Independence");
  return (
    <>
      <div className="text-center md:my-12">
        <div className="flex items-center p-6 flex-col">
          <div className="justify-start py-3 max-w-[1024px]">
            <TextGradient text={t("title")} />
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 justify-center">
            <div className="flex justify-start text-start flex-col text-base md:text-lg mt-10">
              <h2 className="font-bold">{t("description-1")}</h2>
              <p className="mt-2">{t("description-2")}</p>
              <p className="mt-2">{t("description-3")} (current collection)</p>
            </div>
            <div className="flexCenter my-6">
              <Run2024 />;
            </div>
          </div>
        </div>
      </div>
      <div className="flexCenter p-6">
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_4517.JPG"
          }
          alt={"Run for Ukraine team image"}
          width={1100}
          height={750}
        />
      </div>
    </>
  );
};

export default Independence;
