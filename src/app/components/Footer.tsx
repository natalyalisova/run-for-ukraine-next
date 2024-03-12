import Image from "next/image";
import React from "react";
import ResponsiveImage from "@/app/components/ResponsiveImage";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import { socialLinks } from "../../../public/SocialLinks.json";
import { navLinks } from "../../../public/NavLinksFooter.json";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className="bg-strong-azure py-2">
      <div className="max-w-6xl mx-auto gap-5 p-3 text-white ">
        <div className="flex justify-center">
          <ResponsiveImage
            src={"/images/run-for-ukraine-logo-yellow.png"}
            width={64}
            height={64}
            alt={"Run for Ukraine Logo"}
          />
        </div>
        <div className="flex flex-end items-center space-x-10 justify-center mt-3">
          {socialLinks.map(({ href, src, alt }) => (
            <Link href={href} target="_blank" key={href}>
              <Image src={src} width={30} height={30} alt={alt} />
            </Link>
          ))}
        </div>
        <div className="text-[0.75rem] justify-items-center justify-center mt-3 text-center">
          <p>{t("copyright")}</p>
          <p>{t("copyright-description")}</p>
        </div>

        <div className="flex items-center justify-center mt-3">
          <ul className="uppercase space-x-10 flex text-white font-semibold">
            {navLinks.map(({ href, title, textKey }) => (
              <li key={href}>
                <Link href={href} title={title}>
                  {t(textKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
