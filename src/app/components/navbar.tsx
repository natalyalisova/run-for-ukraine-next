import React from "react";
import Link from "next-intl/link";
import Image from "next/image";
import {NavLinks} from "@/app/constants";

const Navbar = async () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-strong-azure p-6">
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

            {/*<div className="block    lg:hidden">*/}
            {/*    <button*/}
            {/*        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">*/}
            {/*        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <title>Menu</title>*/}
            {/*            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>*/}
            {/*        </svg>*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                {/*<div className="text-sm uppercase lg:flex-grow font-semibold">*/}
                <ul
                    className="list-style-none uppercase text-semibold mr-auto flex flex-col pl-0 lg:flex-row"
                   >

                    {NavLinks.map((link) => (
                        <li className="mb-4 lg:mb-0 lg:pr-2" key={link.key}><Link href={link.href} key={link.key}
                              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-cyan-100 mr-4">
                            {link.text}
                        </Link>
                        </li>
                    ))}

                </ul>
            </div>




            <div className="absolute top-15 right-10 flex items-center ">
                <div>
                    <Link href="/" locale="en">
                        En
                    </Link>{" "}| {" "}
                    <Link href="/" locale="ua">
                        Ua
                    </Link>
                    <br/>
                </div>
            </div>
        </nav>
)
};

export default Navbar;
