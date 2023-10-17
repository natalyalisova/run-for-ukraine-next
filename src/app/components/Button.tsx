import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  title: string;
  leftIcon?: IconProp | null;
  rightIcon?: IconProp | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: "button" | "submit";
  icon?: string;
  bgColor?: string;
  margin?: string;
  textColor?: string;
};

const Button = ({
  title,
  leftIcon,
  rightIcon,
  handleClick,
  isSubmitting: isSubmitting,
  type,
  icon,
  bgColor,
  textColor,
  margin,
}: Props) => {
  return (
    <button
      type={type || "button"}
      disabled={isSubmitting}
      className={`flexCenter gap-3 px-4 py-3 uppercase
            ${textColor || "text-strong-azure"} 
             ${margin || "mh-1"} 
            ${isSubmitting ? "bg-black/50" : bgColor || "bg-yellow-gold"}
             rounded=xl text-sm font-medium max-md:w-full`}
      onClick={handleClick}
    >
      {leftIcon && <FontAwesomeIcon icon={leftIcon} width={22} height={22} />}
      {icon && <img src={icon} width={22} height={22} />}
      <span>{title}</span>
      {rightIcon && <FontAwesomeIcon icon={rightIcon} width={22} height={22} />}
    </button>
  );
};

export default Button;
