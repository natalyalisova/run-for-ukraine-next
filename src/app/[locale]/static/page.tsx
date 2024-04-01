import supabase from "../../../../utils/supabase/client";
import Post from "@/app/components/Post";

export type Blog = {
  id: number;
  created_date: string;
  title: string;
};

export const revalidate = 60;
export default async function Posts() {
  const { data } = await supabase.from("blogs").select();
  const renderedData = data!.map((blog: Blog) => (
    <Post
      title={blog.title}
      id={blog.id}
      created_date={blog.created_date}
      key={blog.id}
    />
  ));
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mt-6 md:mt-16">Posts:</p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 justify-center mt-10">
        {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
        {renderedData}
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
