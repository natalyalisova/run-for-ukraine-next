import TextGradient from "@/app/components/AnimatedTextGradient";
import React from "react";
import { useTranslations } from "next-intl";

const ProjectDescription = () => {
  const t = useTranslations("ProjectDescription");
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 text-center py-4 gap-y-6 mt-12 md:mt-1">
      <div>
        <TextGradient text={t("title")} />
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
      </div>

      <div className="text-start place-self-center text-bace md:text-lg mt-2 px-6">
        <p className="inline text-bace md:text-lg mt-3">
          {t("description-1")}
          <span className="font-semibold text-strong-azure mx-1">
            #RunForUkraine
          </span>
          {t("description-2")}
        </p>
        <p className="mt-3">{t("description-3")}</p>
        <p className="mt-3">{t("description-4")}</p>
      </div>
    </div>
  );
};
export default ProjectDescription;
