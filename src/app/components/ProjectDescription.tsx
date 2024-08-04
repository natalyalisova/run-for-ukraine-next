import React from "react";
import { useTranslations } from "next-intl";

const ProjectDescription = () => {
  const t = useTranslations("ProjectDescription");
  return (
    <div className="bg-runners flexCenter flex-col">
      <div className="mx-auto grid grid-cols-1 text-center pt-6 gap-y-6 mt-8 md:mt-8 px-3">
        <h1 className="font-semibold text-4xl text-white"> {t("title")}</h1>
        <p className="text-xl  text-white">{t("description-1")}</p>
        <div className="w-screen bg-yellow-gold place-self-center text-bace text-center md:text-lg mt-[700px] p-6">
          <p className="inline text-xl mt-3">{t("description-2")}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectDescription;
