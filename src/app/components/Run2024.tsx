"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Run2024 = () => {
  const router = useRouter();
  const t = useTranslations("Run2024");
  return (
    <div className="text-center">
      <div className="flex items-center flex-col">
        <div className="justify-start max-w-[1024px]">
          <h2 className="title text-strong-azure">{t("title")}</h2>
          <div className="mt-6">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                className="text-xl text-strong-azure"
              >
                {t("sub-title-1")}
              </AccordionSummary>
              <AccordionDetails className="text-start">
                <p>🗓️ {t("description-1")}</p>
                <p>📍 {t("description-2")}</p>
                <p>✅ {t("description-3")} &#8372; 150 (UAH)</p>
                <p>🏃 {t("description-4")} </p>
                <p className="mt-3">{t("description-5")}</p>
              </AccordionDetails>
              <AccordionActions>
                <button
                  onClick={() => router.push("/register-online-2024")}
                  className="w-full mt-6 p-3 rounded-md text-xl font-semibold bg-strong-azure text-yellow-gold hover:bg-blue-600 focus:outline-none"
                >
                  {t("button-1")}
                </button>
              </AccordionActions>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                className="text-xl text-strong-azure"
              >
                {t("sub-title-2")}
              </AccordionSummary>
              <AccordionDetails className="text-start">
                <p>🗓️ {t("description-6")} </p>
                <p>
                  📍 {t("description-7")} I❤️TLV {t("description-10")}
                </p>
                <p>⏰ {t("description-11")} Старт: 7:00 AM </p>
                <p>✅ {t("description-8")} &#8362; 100 (NIS)</p>
                <p>🏃 {t("description-9")}</p>
              </AccordionDetails>
              <AccordionActions>
                <button
                  onClick={() => router.push("/register-tlv-2024")}
                  className="w-full mt-6 p-3 rounded-md bg-strong-azure text-xl font-semibold text-yellow-gold hover:bg-blue-600 focus:outline-none"
                >
                  {t("button-2")}
                </button>
              </AccordionActions>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Run2024;
