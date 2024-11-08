import React from "react";
import { useTranslations } from "next-intl";
import LatestNews from "@/app/components/LatestNews";
import Independence from "@/app/components/Independence";

const Events = () => {
  const t = useTranslations("Gather");

  return (
    <div className="flex flex-col mt-24 md:mt-28">
      <Independence />
      <LatestNews />
    </div>
  );
};

export default Events;
