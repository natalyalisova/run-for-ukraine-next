"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const YogaCallToActionToRegister = () => {
  const router = useRouter();
  const t = useTranslations("Run2024");
  return (
    <div className="text-center">
      <div className="flex items-center flex-col">
        <div className="justify-start max-w-[1024px]  text-lg">
          <div className="mt-6 text-start">
            {/*<p className="font-semibold mb-2">❗️Реєстрацію закрито</p>*/}
            <p className="font-semibold mb-2">🗓 24 березня 2025 (понеділок)</p>
            <p className="font-semibold mb-2">
              🕢 19:00 (тривалість заняття 60хв.)
            </p>
            <p className="mb-2">
              📍 Український культурний центр, Yirmeyahu St 22, Tel Aviv-Yafo
            </p>
            <p className="font-semibold mb-2">❗️Реєстрація обов'язкова</p>
            <p className="mb-2">✅ Донат від &#8362; 50 (NIS)</p>
            <p className="mb-2">
              🧘‍♀️🧘🏻 Група включає в себе 15 людей на одному занятті.
            </p>
            {/*<button className="w-full mt-6 p-3 rounded-md text-xl font-semibold bg-gray-500 text-white focus:outline-none">*/}
            {/*  {t("button-1")}*/}
            {/*</button>*/}
            <button
              onClick={() => router.push("/register-yoga-tlv")}
              className="w-full mt-6 p-3 rounded-md text-xl font-semibold bg-strong-azure text-yellow-gold hover:bg-blue-600 focus:outline-none"
            >
              {t("button-1")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaCallToActionToRegister;
