import React, { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

type Props = {
  title: string;
  leftIcon?: IconProp | null;
  rightIcon?: IconProp | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: "button" | "submit";
  bgColor?: string;
  margin?: string;
  textColor?: string;
  link?: string;
};

const ButtonNav = ({
  title,
  leftIcon,
  rightIcon,
  handleClick,
  link,
  isSubmitting: isSubmitting,
  type,
  bgColor,
  textColor,
  margin,
}: Props) => {
  return (
    <Link
      href={`${link || "/"}`}
      className={`flexCenter gap-3 px-4 py-3 uppercase bg-yellow-gold h-[40px]
            ${textColor || "text-strong-azure"}
             ${margin || "mh-1"}
             rounded=xl text-sm font-medium max-md:w-full`}
      onClick={handleClick}
    >
      {leftIcon && <FontAwesomeIcon icon={leftIcon} width={22} height={22} />}
      <span className="hidden sm:block">{title}</span>
      {rightIcon && <FontAwesomeIcon icon={rightIcon} width={22} height={22} />}
    </Link>
  );
};

export default ButtonNav;
