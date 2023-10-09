import React from "react";
import Link from "next-intl/link";
import Image from "next/image";
import "flowbite";

import { useLocale, useTranslations } from "next-intl";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons/faCircleDollarToSlot";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { NavLinks } from "@/app/constants";
import ButtonNav from "@/app/components/ButtonNav";
import ResponsiveImage from "@/app/components/ResponsiveImage";
import { auto } from "@popperjs/core";

// const openLink = () => {
//   window.open(
//     "https://docs.google.com/forms/d/e/1FAIpQLSckR5nOZLGdWLlzahw-GsaPbbVaS7bUHz14KPC1VUIrSjC5Eg/viewform",
//     "_blank",
//   );
// };

const Navbar = () => {
  const locale = useLocale();
  const t = useTranslations("NavBar");
  return (
    <nav className="bg-strong-azure fixed w-full z-30 top-0 left-0 ">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <ResponsiveImage
            src={"/images/Run-for-Ukraine-logo.svg"}
            width={94}
            height={94}
            alt={"Run for Ukraine Logo"}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hidden md:block">
            #RunForUkraine
          </span>
        </a>
        <div className="flex md:order-2 items-center ml-3 visible">
          {locale === "ua" && (
            <Link href="/" locale="en">
              <img
                src="/images/ca.png"
                alt="Flag of Canada"
                className="h-auto max-w-xl"
                width={35}
                height={auto}
              />
            </Link>
          )}
          {locale === "en" && (
            <Link href="/" locale="ua">
              <img
                src="/images/ua.png"
                alt="Flag of Ukraine"
                className="h-auto max-w-xl"
                width={35}
                height={auto}
              />
            </Link>
          )}

          <ButtonNav
            leftIcon={faRocket as IconProp}
            margin={"ml-3 visible"}
            title={t("button-fundraiser-title")}
            link={
              "https://docs.google.com/forms/d/e/1FAIpQLSckR5nOZLGdWLlzahw-GsaPbbVaS7bUHz14KPC1VUIrSjC5Eg/viewform"
            }
          />
          <ButtonNav
            leftIcon={faCircleDollarToSlot as IconProp}
            margin={"ml-3 visible"}
            title={t("button-donate-title")}
            link={"#donate"}
          />

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-100 ml-3"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium uppercase  md:flex-row md:space-x-2 md:mt-0 md:border-0 ">
            {NavLinks.map((link) => (
              <li className="mb-4 lg:mb-0 lg:pr-2" key={link.key}>
                <Link
                  href={link.href}
                  className=" block py-2 pl-1  pr-4 text-white rounded md:bg-transparent md:text-white md:p-0  mt-4 lg:inline-block lg:mt-0 hover:text-cyan-100 mr-4"
                  aria-current="page"
                >
                  {t(link.text)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
