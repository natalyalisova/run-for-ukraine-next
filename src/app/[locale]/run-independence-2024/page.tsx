import React from "react";
import { useTranslations } from "next-intl";
import Run2024 from "@/app/components/Run2024";
import TextGradient from "@/app/components/AnimatedTextGradient";
import About from "@/app/components/About";

const Independence2024 = () => {
  const t = useTranslations("Gather");

  return (
    <div className="mt-36 md:mt-52">
      <Run2024 />;
    </div>
  );
};

export default Independence2024;
