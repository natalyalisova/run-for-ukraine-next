import React from "react";
import Run2024 from "@/app/components/Run2024";
import TextGradient from "@/app/components/AnimatedTextGradient";
import Image from "next/image";

const Independence2024 = () => {

  return (
    <div className="mt-20 md:mt-36">
      <div className="text-center md:my-12">
        <div className="flex items-center p-6 flex-col">
          <div className="justify-start py-3 max-w-[1024px]">
            <TextGradient text={"Independence Charity #RunForUkraine 2024"} />
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 justify-center">
            <div className="flex justify-start text-start flex-col text-base md:text-lg mt-10">
              <h2 className="font-bold">Friends!</h2>
              <p className="mt-2">
                We are glad to invite you to a charity run for the Independence
                Day of Ukraine. This is a great opportunity to unite, to once
                again draw the attention of others to the war that is being
                waged against Russia against Ukraine. Together, we will be able
                to help our military, thanks to whom we and our relatives have
                the opportunity to wake up every day in a free, indomitable
                Ukraine. Funds collected during the race will be transferred to
                the collection for the Armed Forces (current collection)
              </p>
            </div>
            <div className="flexCenter my-6">
              <Run2024 />;
            </div>
          </div>
        </div>
      </div>
      <div className="flexCenter p-6">
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_4517.JPG"
          }
          alt={"Run for Ukraine team image"}
          width={1100}
          height={750}
        />
      </div>
    </div>
  );
};

export default Independence2024;
