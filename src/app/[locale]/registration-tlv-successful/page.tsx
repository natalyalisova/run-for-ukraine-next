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
        {t("title")}
      </h2>
      <p className="mt-4 mb-2">{t("description-1")}</p>

      <p className="my-4 p-4 rounded-l font-semibold flex bg-yellow-gold">
        <FontAwesomeIcon
          icon={faCircleExclamation}
          style={{ color: "#0057b8" }}
          className="mr-4"
          width={35}
          height={35}
        />
        <span>{t("description-2")}</span>
      </p>
      <p className="mt-2">
        <span className="font-semibold mr-2">{t("date-1")}</span>🗓️{t("date-2")}
      </p>
      <p>
        <span className="font-semibold mr-2">{t("location-1")}</span>📍
        <span className="mr-2">{t("location-2")}</span>
        I❤️TLV {t("location-3")}
      </p>
      <p>
        <span className="font-semibold mr-2">{t("distance-1")}Distance:</span>🏃{" "}
        {t("distance-2")}
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
