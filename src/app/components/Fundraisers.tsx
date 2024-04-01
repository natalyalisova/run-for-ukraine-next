import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Fundraisers = ({ id, created_at, title, goal, user_uuid }: any) => {
  const t = useTranslations("Fundraisers");

  return (
    <Link href={""}>
      <div className="flex gap-2 ml-6 md:ml-1">
        <img
          src={"/images/avatar-default.svg"}
          className="rounded-full border-4 w-[90px] h-[90px]  object-cover border-yellow-gold border-t-blue-500 border-r-blue-500"
          alt="Profile Image"
        />
        <div className="flex flex-col mr-6">
          <p className="text-strong-azure font-semibold text-2xl hover:underline">
            {title}
          </p>
          <p className="text-sm font-semibold">
            {t("fundraised")}
            <span className="text-strong-azure text-xl font-bold ml-2">
              {/*$ {fundraised !== null && Math.floor(fundraised)}*/}
              100
            </span>
          </p>
          <p>
            <span className="text-strong-azure text-sm opacity-50 font-bold">
              {t("pledged-of")} $ {Math.floor(goal)} {t("goal")}
            </span>
          </p>
        </div>
      </div>
      <p className="text-sm m-3">{created_at}</p>
    </Link>
  );
};

export default Fundraisers;
