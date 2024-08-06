import Link from "next/link";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

interface TermsNConditionsProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const TermsNConditions: React.FunctionComponent<TermsNConditionsProps> = ({
  isChecked,
  setIsChecked,
}) => {
  const t = useTranslations("TermsNConditions");

  return (
    <div className="inline-flex items-start mb-4">
      <label
        className="relative flex items-center mt-1 p-2 rounded-full cursor-pointer"
        htmlFor="check"
      >
        <input
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
          id="check"
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <p className="mt-1 font-light text-black cursor-pointer select-none text-left pl-2 pt-2 text-small md:text-base">
        {t("description-1")}
        <Link
          href={"/terms-n-conditions"}
          target="_blank"
          className="text-gray-700 rounded underline-offset-1 underline md:bg-transparent hover:text-strong-azure mx-2"
          aria-current="page"
        >
          {t("description-2")}
        </Link>
        {t("description-3")}
        <Link
          href={"/cookies-privacy-policy"}
          target="_blank"
          className=" text-gray-700 underline underline-offset-1 rounded md:bg-transparent hover:text-strong-azure mx-2"
          aria-current="page"
        >
          {t("description-4")}
        </Link>
        {t("description-5")}
      </p>
    </div>
  );
};

export default TermsNConditions;
