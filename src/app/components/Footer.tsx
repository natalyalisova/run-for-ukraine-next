import Image from "next/image";
import React from "react";
import ResponsiveImage from "@/app/components/ResponsiveImage";
import Link from "next-intl/link";

const Footer = () => {
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
              <Link href="/" title="Who are we">
                Who are we
              </Link>
            </li>
            <li>
              <Link href="/" title="Donate">
                Donate
              </Link>
            </li>
            <li>
              <Link href="/" title="Contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-[0.75rem] ">
          <p>
            ©2022-2023 Second Front Ukraine Foundation. All Rights Reserved.
          </p>
          <p>
            Second Front Ukraine Foundation is registered organization under The
            Canada Not-for-profit Corporations Act.
          </p>
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
