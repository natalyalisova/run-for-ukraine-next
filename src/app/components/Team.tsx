import React from "react";
import { useTranslations } from "next-intl";
import { TeamMembers } from "@/app/constants";

type TeamMember = {
  id: number;
  title: string;
  body: string;
  imageUrl?: string;
};
const shuffleArray = (array: TeamMember[]): TeamMember[] => {
  return array.sort(() => Math.random() - 0.5);
};

const Team = () => {
  const t = useTranslations("Team");

  // Shuffle TeamMembers to display in random order
  const shuffledTeamMembers = shuffleArray([...TeamMembers]);
  return (
    <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 justify-center p-6">
      {shuffledTeamMembers.map((item) => (
        <div key={item.id} className="p-2 m-3">
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt="slides"
              className="rounded-full border-4 w-[250px] h-[250px] object-cover  border-strong-azure/50 shadow-md shadow-blue-500/50 "
            />
          )}
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">{t(item.title)}</h3>
            <p>{t(item.body)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
