import { useTranslations } from "next-intl";
import { NavLinks } from "@/app/constants";
import Link from "next/link";
import * as React from "react";

export const NavBarLinks = () => {
  const t = useTranslations("NavBarLinks");
  return (
    <>
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
    </>
  );
};
