import React from "react";
import { useTranslations } from "next-intl";
import { FooterNavLinks, SocialLinks, TelegramLinks } from "@/app/constants";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <div className="bg-strong-azure py-2">
      <div className="max-w-6xl mx-auto gap-5 p-3 text-white ">
        <div className="flex justify-center my-6">
          <Image
            src={"/images/run-for-ukraine-logo-yellow.png"}
            width={64}
            height={64}
            alt={"Run for Ukraine Logo"}
          />
        </div>
        <div className="flex flex-end items-center space-x-10 justify-center mt-3">
          {SocialLinks.map(({ href, src, alt }) => (
            <Link href={href} target="_blank" key={href}>
              <Image src={src} width={30} height={30} alt={alt} />
            </Link>
          ))}
        </div>
        <div className="text-[0.85rem] justify-items-center justify-center mt-3 text-center">
          <p>
            {t("copyright")},
            <a
              href="mailto:runforukraineil@gmail.com"
              className="ml-2 font-semibold"
            >
              runforukraineil@gmail.com
            </a>
          </p>
          <p>{t("copyright-description")}</p>
        </div>

        <div className="flex items-center justify-center mt-3">
          {/*<ul className="uppercase space-x-10 flex text-white font-semibold">*/}
          {/*{FooterNavLinks.map(({ href, title, textKey }) => (*/}
          {/*  <li key={href}>*/}
          {/*    <Link href={href} title={title}>*/}
          {/*      {t(textKey)}*/}
          {/*    </Link>*/}
          {/*  </li>*/}
          {/*))}*/}
          <ul className="md:ml-3 text-small md:space-x-10 flex flex-col md:flex-row text-white">
            {TelegramLinks.map(({ href, textKey }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:underline hover:underline-offset-2"
                  target="_blank"
                >
                  <Image
                    src="/images/telegram-white.svg"
                    alt="telegram icon"
                    width={20}
                    height={20}
                    className="inline mr-2"
                  />
                  {t(textKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
