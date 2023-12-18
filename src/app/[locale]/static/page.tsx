import supabase from "../../../../utils/supabase";

export default async function Posts() {
  const { data } = await supabase.from("campaigns").select();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="mt-[200px]">Campaigns:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
