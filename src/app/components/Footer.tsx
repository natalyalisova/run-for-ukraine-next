import Image from "next/image";
import React from "react";
import ResponsiveImage from "@/app/components/ResponsiveImage";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className="bg-strong-azure">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 p-3 text-white">
        <div className="flex justify-start  space-x-10">
          <ResponsiveImage
            src={"/images/run-for-ukraine-logo-yellow.png"}
            width={94}
            height={94}
            alt={"Run for Ukraine Logo"}
          />
          <Image
            src={"/images/2F-ua-logo-white.svg"}
            width={120}
            height={94}
            alt={"second front Ukraine Logo"}
          />
        </div>
        <div className="flex items-center justify-end">
          <ul className="uppercase space-x-10 flex text-white font-semibold">
            <li>
              <Link
                href="https://secondfrontukraine.com/team"
                title="Who are we"
              >
                {t("who-are-we")}
              </Link>
            </li>
            <li>
              <Link href="#donate" title="Donate">
                {t("donate")}
              </Link>
            </li>
            <li>
              <Link
                href="https://secondfrontukraine.com/contact-us"
                title="Contacts"
              >
                {t("contacts")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-[0.75rem] ">
          <p>{t("copyright")}</p>
          <p>{t("copyright-description")}</p>
        </div>
        <div className="flex flex-end items-center space-x-10 justify-end">
          <Image
            src={"/social-media-icons/instagram.svg"}
            width={30}
            height={30}
            alt={"Run for Ukraine instagram"}
          />
          <Image
            src={"/social-media-icons/facebook.svg"}
            width={30}
            height={30}
            alt={"Run for Ukraine facebook"}
          />
          <Image
            src={"/social-media-icons/linkedin.svg"}
            width={30}
            height={30}
            alt={"Run for Ukraine linkedin"}
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
