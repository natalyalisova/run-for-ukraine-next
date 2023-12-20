import supabase from "../../../../../utils/supabase";
import { notFound } from "next/navigation";

export const revalidate = 0;
export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: campaign } = await supabase
    .from("campaigns")
    .select()
    .match({ id })
    .single();

  if (!campaign) {
    notFound();
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="mt-[200px]">Campaign:</p>
      <pre>{JSON.stringify(campaign, null, 2)}</pre>
    </div>
  );
}
