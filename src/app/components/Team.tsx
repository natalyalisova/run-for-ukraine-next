import React from "react";
import { useTranslations } from "next-intl";
import { items } from "../../../public/Items.json";

const Team = () => {
  const t = useTranslations("About");
  const teamMembers = items;
  return (
    <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 justify-center p-6">
      {teamMembers.map((item) => (
        <div key={item.id} className="p-2 m-3">
          <img
            src={item.imageUrl}
            alt="slides"
            className="rounded-full border-4 w-[250px] h-[250px] object-cover  border-strong-azure/50 shadow-md shadow-blue-500/50 "
          />
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
