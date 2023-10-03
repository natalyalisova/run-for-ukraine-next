import TextGradient from "@/app/components/AnimatedTextGradient";
import Link from "next-intl/link";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

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
          href="https://runforukraine.ca/"
          title="www.runforukraine.ca"
          className="inline mx-2 text-strong-azure text-bace md:text-lg underline underline-offset-2"
        >
          www.runforukraine.ca
        </Link>
        <p className="inline text-bace md:text-lg">
          {t("new-global-season-description-2")}
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
        {t("how-count-description")}
      </p>
      <div className="flex justify-center flex-col">
        <p className="text-center text-bace md:text-lg mt-6">Project by</p>
        <Link
          href={"https://secondfrontukraine.com/#"}
          className="flex justify-center mt-6"
        >
          <Image
            src="/images/2nd-front-logo-full-color.svg"
            width={236}
            height={90}
            alt="Second front logo"
          />
        </Link>
      </div>
    </div>
  );
};
export default Goals;
