import React from "react";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { UrlObject } from "url";

type AmbasadorProps = {
  name: string;
  fundraised: number | null;
  about?: string;
  goal: number;
  profileImgUrl?: string | UrlObject;
  fundraiserLink: string | UrlObject;
};

const Fundraisers = ({
  name,
  fundraised,
  about,
  goal,
  profileImgUrl,
  fundraiserLink,
}: AmbasadorProps) => {
  const t = useTranslations("Fundraisers");
  return (
    <Link href={fundraiserLink}>
      <div className="flex gap-2 ml-6 md:ml-1">
        <img
          src={profileImgUrl ? profileImgUrl : "/images/avatar-default.svg"}
          className="rounded-full border-4 w-[90px] h-[90px]  object-cover border-yellow-gold border-t-blue-500 border-r-blue-500"
          alt="Profile Image"
        />
        <div className="flex flex-col">
          <p className="text-strong-azure font-semibold text-2xl hover:underline">
            {name}
          </p>
          <p className="text-sm font-semibold">{t("fundraised")}</p>
          <p className="text-strong-azure text-base font-bold ">
            {fundraised}
            <span className="text-strong-azure text-sm opacity-50 font-bold ml-2">
              /CAD ${goal}
            </span>
          </p>
        </div>
      </div>
      <p className="text-sm m-3">{about}</p>
    </Link>
  );
};

export default Fundraisers;
