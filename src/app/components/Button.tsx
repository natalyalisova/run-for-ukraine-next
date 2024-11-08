import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  title: string;
  leftIcon?: IconProp | null;
  rightIcon?: IconProp | null;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isSubmitting?: boolean;
  isDisabled?: boolean;
  type?: "button" | "submit";
  icon?: string;
  bgColor?: string;
  margin?: string;
  textColor?: string;
};

// const Button = ({
//   title,
//   leftIcon,
//   rightIcon,
//   handleClick,
//   isSubmitting: isSubmitting,
//   type,
//   icon,
//   bgColor,
//   textColor,
//   margin,
// }: Props) => {
//   return (
//     <button
//       type={type || "submit"}
//       disabled={!isSubmitting}
//       className={`flexCenter gap-3 px-20 py-3 w-full text-xl md:mx-auto p-3 rounded-md hover:bg-blue-600 focus:outline-none my-6 bg-strong-azure
//             ${textColor || "text-yellow-gold font-semibold"}
//              ${margin || "mh-1"}
//             ${!isSubmitting ? "bg-black/50" : bgColor || "bg-strong-azure"}
//             `}
//       onClick={handleClick}
//     >
//       {leftIcon && <FontAwesomeIcon icon={leftIcon} width={22} height={22} />}
//       {icon && <img src={icon} width={22} height={22} />}
//       <span>{title}</span>
//       {rightIcon && <FontAwesomeIcon icon={rightIcon} width={22} height={22} />}
//     </button>
//   );
// };

const Button = ({
  title,
  leftIcon,
  rightIcon,
  handleClick,
  isDisabled = false,
  type = "submit",
  icon,
  margin = "mh-1",
}: Props) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`flexCenter gap-3 px-20 py-3 w-full text-xl md:mx-auto p-3 rounded-md focus:outline-none my-6 ${
        isDisabled
          ? "bg-black/50 hover:bg-grey-400 text-white"
          : 'bg-strong-azure hover:bg-blue-600 text-yellow-gold font-semibold"'
      }  ${margin}`}
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
