import React from "react";
import Link from "next-intl/link";
import Image from "next/image";

import {useLocale, useTranslations} from "next-intl";
import Button from "@/app/components/Button";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faCircleDollarToSlot} from "@fortawesome/free-solid-svg-icons/faCircleDollarToSlot";
import {faRocket} from "@fortawesome/free-solid-svg-icons";
import {NavLinks} from "@/app/constants";


const Navbar = () => {
    const locale = useLocale();
    const t = useTranslations('NavBar');
    return (
        <nav className="bg-strong-azure fixed w-full z-20 top-0 left-0 border-b border-gray-200">

            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="/images/Run-for-Ukraine-logo.svg" className="h-10 mr-3 md:h-15"
                         alt="Run for Ukraine Logo"/>
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden md:block">#RunForUkraine</span>
                </a>
                <div className="flex md:order-2 items-center ml-3">
                    {locale === "ua" && (
                        <Link href="/" locale="en">
                            <Image
                                src="/images/ca.png"
                                alt="Flag of Canada"
                                className="h-auto max-w-xl"
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
                                className="h-auto max-w-xl"
                                width={35}
                                height={22}
                            />
                        </Link>
                    )}
                    <Button
                        leftIcon={faRocket as IconProp}
                        margin={"ml-3"}
                        title={t('button-ambassador-title')}
                    />
                    <Button
                        leftIcon={faCircleDollarToSlot as IconProp}
                        margin={"ml-3"}
                        title={t('button-donate-title')}
                    />

                    <button data-collapse-toggle="navbar-sticky" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium uppercase  md:flex-row md:space-x-2 md:mt-0 md:border-0 ">
                        {NavLinks.map((link) => (
                                        <li className="mb-4 lg:mb-0 lg:pr-2" key={link.key}>
                                            <Link href={link.href}
                                                  className=" block py-2 pl-1  pr-4 text-white rounded md:bg-transparent md:text-white md:p-0  mt-4 lg:inline-block lg:mt-0 hover:text-cyan-100 mr-4"
                                                  aria-current="page">
                                                {t(link.text)}
                                            </Link>
                                        </li>
                                    ))}


                        {/*<li>*/}
                        {/*    <a href="#"*/}
                        {/*       className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"*/}
                        {/*     >Home</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#"*/}
                        {/*       className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#"*/}
                        {/*       className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#"*/}
                        {/*       className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>


            {/*<div className="flex items-center justify-between flex-wrap  relative">*/}
            {/*    <div className="flex items-center flex-shrink-0 text-white mr-6">*/}
            {/*        <Link href="/">*/}
            {/*            <Image*/}
            {/*                src="/images/Run-for-Ukraine-logo.svg"*/}
            {/*                alt="Run for Ukraine logo"*/}
            {/*                width={93}*/}
            {/*                height={93}*/}
            {/*            />*/}
            {/*        </Link>*/}
            {/*    </div>*/}

            {/*    <div className="block lg:hidden">*/}
            {/*        <button*/}
            {/*            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-cyan-100 hover:border-cyan-100">*/}
            {/*            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
            {/*                <title>Menu</title>*/}
            {/*                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>*/}
            {/*            </svg>*/}
            {/*        </button>*/}
            {/*    </div>*/}

            {/*    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">*/}
            {/*        <ul className="list-style-none uppercase text-semibold mr-auto flex flex-col pl-0 lg:flex-row">*/}
            {/*            {NavLinks.map((link) => (*/}
            {/*                <li className="mb-4 lg:mb-0 lg:pr-2" key={link.key}>*/}
            {/*                    <Link href={link.href}*/}
            {/*                          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4">*/}
            {/*                        {t(link.text)}*/}
            {/*                    </Link>*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="top-25 flex lg:flex-row lg:items-center">*/}
            {/*        {locale === "ua" && (<Link href="/" locale="en">*/}
            {/*                <Image*/}
            {/*                    src="/images/ca.png"*/}
            {/*                    alt="Flag of Canada"*/}
            {/*                    width={35}*/}
            {/*                    height={22}*/}
            {/*                />*/}
            {/*            </Link>*/}
            {/*        )}*/}
            {/*        {locale === "en" && (*/}
            {/*            <Link href="/" locale="ua">*/}
            {/*                <Image*/}
            {/*                    src="/images/ua.png"*/}
            {/*                    alt="Flag of Ukraine"*/}
            {/*                    width={35}*/}
            {/*                    height={22}*/}
            {/*                />*/}
            {/*            </Link>*/}
            {/*        )}*/}
            {/*    <div className="flex ml-3 max-h-10">*/}
            {/*        <Button*/}
            {/*            leftIcon={faRocket as IconProp}*/}
            {/*            title={t('button-ambassador-title')}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className="flex ml-3 max-h-10">*/}
            {/*        <Button*/}
            {/*            leftIcon={faCircleDollarToSlot as IconProp}*/}
            {/*            title={t('button-donate-title')}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </nav>

    );
};

export default Navbar;
