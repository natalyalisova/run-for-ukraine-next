import React from "react";
import { useTranslations } from "next-intl";
import TextGradient from "@/app/components/AnimatedTextGradient";
import LatestNews from "@/app/components/LatestNews";

const Events = () => {
  const t = useTranslations("Gather");

  return (
    <div className="flex flex-col mt-24 md:mt-28">
      <LatestNews />
    </div>
  );
};

export default Events;
