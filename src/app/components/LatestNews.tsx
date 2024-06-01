import TextGradient from "@/app/components/AnimatedTextGradient";
import React from "react";
import { useTranslations } from "next-intl";

const LatestNews = () => {
  const t = useTranslations("LatestNews");
  return (
    <div className="text-center  mt-12 md:mt-24 border-b border-strong-azure">
      <div className="mx-auto mb-12">
        <TextGradient text={t("title")} />
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
      </div>

      <div className="bg-img-24-feb-24 flexCenter flex-col py-48 px-6">
        <h2 className="uppercase title max-w-xl mx-auto text-white">
          {t("image-title")}
        </h2>
      </div>
      <div className="bg-gradient-to-b from-yellow-gold to-strong-azure">
        <div className="max-w-4xl mx-auto grid gap-3 justify-center p-6 text-start  text-bace md:text-lg ">
          <h2 className="uppercase title mx-auto max-w-2xl text-center md:mt-24">
            {t("article-title")}
          </h2>
          <p className="text-start text-gray-700 mt-12">{t("date")}</p>

          <p className="inline mt-3">{t("description-1")}</p>
          <img
            src="/images/24-feb-team.jpg"
            alt="runners team with bunner in support to Ukraine"
          />
          <p className="mt-3">{t("description-2")}</p>
          <p className="mt-3">
            <span className="font-semibold text-strong-azure mx-1">
              #RunForUkraine
            </span>
            {t("description-3")} 🏃‍️🏃🏻🇺🇦 {t("description-4")}
          </p>
        </div>
        <div className="news-gallery gap-3 p-5 justify-center ">
          <img src="/images/24-feb-1.jpg" />
          <img src="/images/24-feb-0336.jpg" />
          <img src="/images/24-feb-team.jpg" />
          <img src="/images/24-feb-2.jpg" />
          <img src="/images/24-feb-0297.jpg" />
          <img src="/images/IMG_0481.jpg" />
          <img src="/images/IMG_0537.jpg" />
          <img src="/images/IMG_0589.jpg" />
          <img src="/images/IMG_0591.jpg" />
          <img src="/images/IMG_0593.jpg" />
          <img src="/images/IMG_0601.jpg" />
          <img src="/images/IMG_0662.jpg" />
          <img src="/images/IMG_0706.jpg" />
        </div>
      </div>
    </div>
  );
};
export default LatestNews;
