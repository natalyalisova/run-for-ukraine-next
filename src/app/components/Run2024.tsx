"use client";
import React from "react";
import TextGradient from "@/app/components/AnimatedTextGradient";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";

const Run2024 = () => {
  const router = useRouter();
  return (
    <div className="text-center">
      <div className="flex items-center flex-col">
        <div className="justify-start max-w-[1024px]">
          <h2 className="title text-strong-azure">Register for a run</h2>
          <div className="mt-6">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
                className="text-xl text-strong-azure"
              >
                Online
              </AccordionSummary>
              <AccordionDetails className="text-start">
                <p>🗓️ Run between 10th of Aug and 10th of Sep 2024</p>
                <p>📍 Run anywhere</p>
                <p>✅ Donate from &#8372; 150</p>
                <p>🏃 Any distance</p>
                <p className="mt-3">
                  Run in support of Ukraine on August 24, 2024, anywhere in the
                  world.
                </p>
              </AccordionDetails>
              <AccordionActions>
                <button
                  onClick={() => router.push("/register-online-2024")}
                  className="w-full mt-6 p-3 rounded-md bg-strong-azure text-yellow-gold hover:bg-blue-600 focus:outline-none"
                >
                  Run online
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
                In Tel Aviv
              </AccordionSummary>
              <AccordionDetails className="text-start">
                <p>🗓️ Run on August 24, 2024</p>
                <p>📍 Tel Aviv Port, I❤️TLV Square</p>
                <p>✅ Donate from &#8362; 100</p>
                <p>🏃 Distance: 3 km, 5 km</p>
              </AccordionDetails>
              <AccordionActions>
                <button
                  onClick={() => router.push("/register-tlv-2024")}
                  className="w-full mt-6 p-3 rounded-md bg-strong-azure text-yellow-gold hover:bg-blue-600 focus:outline-none"
                >
                  Run in Tel Aviv
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
