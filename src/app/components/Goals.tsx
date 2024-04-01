import TextGradient from "@/app/components/AnimatedTextGradient";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Goals = () => {
  const t = useTranslations("Goals");

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 text-center p-4 gap-y-6 md:mt-12 mt-10">
      <div>
        <TextGradient text={t("new-global-season-title")} />
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
      </div>

      <div className="text-center place-self-center">
        <p className="inline text-bace md:text-lg">
          {t("new-global-season-description-1")}
        </p>
        <Link
          href="https://runforukraine.org.ua/"
          title="https://runforukraine.org.ua"
          className="inline mx-2 text-strong-azure text-bace md:text-lg underline underline-offset-2"
        >
          runforukraine.org.ua
        </Link>
        <p className="inline text-bace md:text-lg">
          {t("new-global-season-description-2")}
          <span className="font-bold text-strong-azure mr-2">
            {t("length")}
          </span>
          <span>{t("new-global-season-description-3")}</span>
        </p>
      </div>

      <h2 className="title mt-4">{t("why-6992-km-title")}</h2>
      <div className="text-center place-self-center mb-1">
        <p className="inline mr-3 text-xl font-semibold text-strong-azure">
          {t("length-number")}
        </p>
        <p className="inline text-bace md:text-lg">
          {t("why-6992-km-description")}
        </p>
      </div>

      <h2 className="title mt-4">{t("how-count-title")}</h2>
      <p className="text-center inline text-bace md:text-lg">
        {t("how-count-description-1")}
        <span className="font-bold text-strong-azure mr-2 text-xl">
          {t("how-count-description-2")}
        </span>
        <span>{t("how-count-description-3")}</span>
      </p>
    </div>
  );
};
export default Goals;
