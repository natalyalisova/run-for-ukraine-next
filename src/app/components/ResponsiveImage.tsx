"use client";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { useEffect, useState } from "react";

const isMobile = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  return userAgent.includes("android") || userAgent.includes("iphone");
};

type Props = {
  src: string | StaticImport;
  alt: string;
  width: number;
  height: number;
};

const ResponsiveImage = ({ src, alt, width, height }: Props) => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);
  return (
    <Image
      src={src}
      alt={alt}
      width={isMobileDevice ? width / 2 : width}
      height={isMobileDevice ? height / 2 : height}
      className="mr-3"
    />
  );
};

export default ResponsiveImage;
