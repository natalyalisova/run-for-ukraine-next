import supabase from "../../../../utils/supabase";
import { UrlObject } from "url";
import Fundraisers from "@/app/components/Fundraisers";

export type Campaign = {
  id: number;
  created_at: string;
  title: string;
  goal: number;
  user_uuid: string | null;
};

export const revalidate = 60;
export default async function Posts() {
  const { data } = await supabase.from("campaigns").select();
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mt-6 md:mt-16">Campaigns:</p>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 justify-center mt-10">
        {data!.map((campaign: Campaign) => (
          <Fundraisers
            title={campaign.title}
            id={campaign.id}
            goal={campaign.goal}
            created_at={campaign.created_at}
            user_uuid={campaign.user_uuid}
          />
        ))}
      </div>
      {/* <div className="my-auto mx-12 md:mx-10 bg-yellow-gold">
            <Link
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSckR5nOZLGdWLlzahw-GsaPbbVaS7bUHz14KPC1VUIrSjC5Eg/viewform"
              }
            >
              <Button
                leftIcon={faRocket as IconProp}
                margin={"ml-3 visible"}
                title={t("button-fundraiser-title")}
              />
            </Link>
          </div> */}
    </div>
  );
}
