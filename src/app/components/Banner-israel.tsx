import React from "react";
import Image from "next/image";
import MagenDavidImage from "../../../public/images/magen-david.png";

const BannerIsrael = () => {
  return (
    <div className="bg-white flexCenter flex-row bg-israeli absolute">
      <h2 className="uppercase text-israel-blue font-semibold text-center text-sm md:text-4xl leading-relaxed mr-2">
        #StandWithIsrael
      </h2>
      <Image
        src={MagenDavidImage}
        alt={"Magen David Image"}
        className="w-[20px] h-[22px] md:w-[32px] md:h-[36px]"
      />
      <h2 className="uppercase text-israel-blue font-semibold text-center text-sm md:text-4xl leading-relaxed ml-2">
        #BringThemHomeNow
      </h2>
    </div>
  );
};
export default BannerIsrael;
