import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

const RegistrationTLVSuccessful = () => {
  const t = useTranslations("RegistrationTLVSuccessful");
  return (
    <div className=" <flex flex-col max-w-screen-sm mx-auto my-20 md:mt-52 p-6">
      <h2 className="text-xl md:text-4xl font-semibold text-start">
        Ви успішно зареєструвалися на йогу
      </h2>

      <p className="mt-12">
        <span className="font-semibold mr-2">{t("date-1")}</span>🗓️17 листопада
        2024 о 19:00
      </p>
      <p>
        <Link
          href="https://maps.app.goo.gl/Zm3ovjnUvNM33kzc9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          📍 Ukrainian House in Israel, Yirmeyahu St 22, Tel Aviv-Yafo
        </Link>
      </p>

      <p className="mt-2">
        {t("description-3")}
        <a
          href="mailto:runforukraineil@gmail.com"
          className="text-strong-azure font-semibold ml-1"
        >
          runforukraineil@gmail.com
        </a>
        . {t("description-4")}
      </p>
      <p className="my-4">{t("description-5")}</p>
      <div className="flex content-center justify-center">
        <Link
          href={"/"}
          className="mt-6 p-3 rounded-md bg-white outline outline-2 outline-strong-azure text-strong-azure font-semibold hover:bg-blue-50 focus:outline-none"
        >
          {t("button-1")}
        </Link>
      </div>
    </div>
  );
};

export default RegistrationTLVSuccessful;
