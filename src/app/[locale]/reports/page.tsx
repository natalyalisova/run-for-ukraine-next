import React from "react";
import { useTranslations } from "next-intl";
import Report from "@/app/components/Report";

const ReportsPage = () => {
  const t = useTranslations("ReportsPage");

  return (
    <div className="mt-36 md:mt-52">
      <Report />
    </div>
  );
};

export default ReportsPage;
