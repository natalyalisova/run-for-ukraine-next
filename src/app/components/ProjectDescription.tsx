import TextGradient from "@/app/components/AnimatedTextGradient";
import Link from "next-intl/link";
import React from "react";
import { useTranslations } from "next-intl";

const ProjectDescription = () => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 text-center py-4 gap-y-6 mt-12 md:mt-1">
      <div>
        <TextGradient
          text={
            "#RunForUkraine: Uniting Athletes Worldwide for Ukraine's Support"
          }
        />
        <div className="mt-4 h-1 w-64 bg-yellow-gold mx-auto mb-3"></div>
      </div>

      <div className="text-start place-self-center text-bace md:text-lg mt-2 px-6">
        <p className="inline text-bace md:text-lg mt-3">
          <span className="font-semibold text-strong-azure">
            #RunForUkraine
          </span>{" "}
          is a global community that includes runners and athletes from around
          the world who united to support and help Ukraine and Ukrainian Armed
          Forces.
        </p>
        <p className="mt-3">
          Together we are running to bring our victory closer and to raise
          Ukrainian flag on the podiums of the world sports arenas again.
        </p>
        <p className="mt-3">
          This initiative was created to raise funds to buy defence supplies,
          medical equipment, vehicles and military clothing and send it to our
          defenders in Ukraine. We need to stay strong and help those who are
          risking their lives and fight for our freedom every day.
        </p>
      </div>
    </div>
  );
};
export default ProjectDescription;
