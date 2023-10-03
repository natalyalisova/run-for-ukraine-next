import React from "react";
import Link from "next-intl/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  name: string;
  fundraised: number | null;
  goal: number;
  profileImgUrl: string;
};

const Ambassadors = ({ name, fundraised, goal, profileImgUrl }: Props) => {
  const t = useTranslations("Ambassadors");
  return (
    <Link href="">
      <div className="flex gap-2 ml-6 md:ml-1">
        <Image
          src={profileImgUrl}
          width={90}
          height={90}
          className="rounded-full border-4 border-yellow-gold border-t-blue-500 border-r-blue-500"
          alt="Profile Image"
        />
        <div className="flex flex-col">
          <p className="text-strong-azure font-semibold text-base">{name}</p>
          <p className="text-sm">{t("fundraised")}</p>
          <p className="text-strong-azure text-base font-semibold ">
            {fundraised}
            <span className="text-strong-azure text-sm opacity-50 ml-2">
              /{goal} $
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Ambassadors;
