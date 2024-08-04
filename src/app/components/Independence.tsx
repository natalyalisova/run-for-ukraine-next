import TextGradient from "@/app/components/AnimatedTextGradient";
import Run2024 from "@/app/components/Run2024";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

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
              <p className="mt-2">
                {t("description-1")}
                <span className="text-strong-azure ml-2 font-semibold">
                  #RunForUkraine
                </span>
                .
              </p>
              <p className="mt-2">
                <span className="font-bold mr-2">{t("description-2")}</span>
                {t("description-3")}
                <Link
                  href={
                    "https://ukrainianarmor.com/product/protyulamkovyj-kostyum-fas/?attribute_pa_carrier=rpc&attribute_pa_size=m&attribute_pa_color=multicam"
                  }
                  target="_blank"
                  className="underline underline-offset-2 text-strong-azure mx-2 font-semibold"
                >
                  {t("description-8")}
                </Link>
                {t("description-9")}
                <Link
                  href={
                    "https://uk.wikipedia.org/wiki/132-%D0%B9_%D0%BE%D0%BA%D1%80%D0%B5%D0%BC%D0%B8%D0%B9_%D1%80%D0%BE%D0%B7%D0%B2%D1%96%D0%B4%D1%83%D0%B2%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%B1%D0%B0%D1%82%D0%B0%D0%BB%D1%8C%D0%B9%D0%BE%D0%BD_(%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0)"
                  }
                  target="_blank"
                  className="underline underline-offset-2 text-strong-azure ml-1 font-semibold"
                >
                  {t("description-10")}
                </Link>
                .
              </p>
              <p className="mt-2">
                <span className="font-bold mr-2">{t("description-4")}</span>{" "}
                &#8372; 53 820
                <span className="mx-2">({t("description-5")})</span>
                <span className="italic">({t("description-6")})</span>
              </p>
              <p className="mt-2 font-bold">
                <span className="font-bold">{t("description-11")}</span>
                <span className="text-2xl mx-2"> &#8372; 540 000</span>(
                {t("description-5")})
              </p>
              <p className="mt-2">
                {t("description-12")}
                <Link
                  href={"https://ukrainianarmor.com/"}
                  target="_blank"
                  className="underline underline-offset-2 text-strong-azure mx-2 font-semibold"
                >
                  {t("description-13")}
                </Link>
              </p>
              <p className="mt-4">{t("description-14")}</p>
              <p>
                {t("description-15")}
                <Link
                  href={"https://www.instagram.com/arsen_mirzoian/"}
                  target="_blank"
                  className="underline underline-offset-2 text-strong-azure mx-1 font-semibold"
                >
                  {t("description-16")}
                </Link>
                {t("description-17")}
                <Link
                  href={
                    "https://www.instagram.com/132_orb/?igsh=MWcyaXlkcHIxdTdicA%3D%3D"
                  }
                  target="_blank"
                  className="underline underline-offset-2 text-strong-azure mx-1 font-semibold"
                >
                  {t("description-18")}
                </Link>{" "}
                {t("description-19")}
              </p>
              <p className="mt-4">{t("description-20")} ✊🇺🇦</p>
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
