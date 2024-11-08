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
        <div className="justify-start max-w-[1024px]">
          <h2 className="title text-strong-azure"> Заняття группі</h2>
          <div className="mt-6 text-start">
            <p className="font-semibold">🗓 Щонеділі</p>
            <p>
              📍 Український культурний центр, Yirmeyahu St 22, Tel Aviv-Yafo
            </p>
            <p>✅ {t("description-3")} &#8362; 70 (NIS)</p>
            <p>🧘🧘‍♀️🧘🏻‍♀️🧘🏻‍♂️ 60 хв</p>
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
