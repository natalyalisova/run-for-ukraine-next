import React from "react";
import Link from "next-intl/link";
import Image from "next/image";
import {NavLinks} from "@/app/constants";
import {useLocale, useTranslations} from "next-intl";
import Button from "@/app/components/Button";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faCircleDollarToSlot} from "@fortawesome/free-solid-svg-icons/faCircleDollarToSlot";
import {faRocket} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const locale = useLocale();
    const t = useTranslations('NavBar');
    return (
        <nav className="flex  justify-between flex-wrap bg-strong-azure p-6">
            <div className="flex items-center justify-between flex-wrap  relative">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link href="/">
                        <Image
                            src="/images/Run-for-Ukraine-logo.svg"
                            alt="Run for Ukraine logo"
                            width={93}
                            height={93}
                        />
                    </Link>
                </div>

                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-cyan-100 hover:border-cyan-100">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>

                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <ul className="list-style-none uppercase text-semibold mr-auto flex flex-col pl-0 lg:flex-row">
                        {NavLinks.map((link) => (
                            <li className="mb-4 lg:mb-0 lg:pr-2" key={link.key}>
                                <Link href={link.href}
                                      className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4">
                                    {t(link.text)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


            <div className="block top-25 flex lg:flex-row items-center sm:flex-col">
                    {locale === "ua" && (<Link href="/" locale="en">
                            <Image
                                src="/images/ca.png"
                                alt="Flag of Canada"
                                width={35}
                                height={22}
                            />
                        </Link>
                    )}
                    {locale === "en" && (
                        <Link href="/" locale="ua">
                            <Image
                                src="/images/ua.png"
                                alt="Flag of Ukraine"
                                width={35}
                                height={22}
                            />
                        </Link>
                    )}
                <div className="flex ml-3">
                    <Button
                        leftIcon={faRocket as IconProp}
                        title={t('button-ambassador-title')}
                    />
                </div>
                <div className="flex ml-3">
                    <Button
                        leftIcon={faCircleDollarToSlot as IconProp}
                        title={t('button-donate-title')}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
