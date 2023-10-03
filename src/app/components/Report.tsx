import React from "react";
import { useTranslations } from "next-intl";

const Report = () => {
  const t = useTranslations("Report");
  return (
    <section className="flex flex-col text-center my-10 md:my-24" id="report">
      <h1 className="uppercase text-2xl md:text-5xl font-semibold">
        {t("PREVIOUS-FUNDRAISERS")}
      </h1>
      <div className="mt-4 h-1 w-24 bg-yellow-gold mx-auto mb-3"></div>

      <div className="flex justify-center flex-col md:flex-row md:space-x-24 mt-10">
        <div>
          <img src="/images/fundraiser-img-fall.png" />
          <p className="mt-3 mb-10 md:text-2xl font-semibold">
            {t("fall-2022")}
          </p>
        </div>
        <div>
          <img src="/images/fundraiser-img-may.png" />
          <p className="mt-3  mb-10  md:text-2xl font-semibold">
            {t("may-2022")}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Report;
