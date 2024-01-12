import supabase from "../../../../../utils/supabase";
import { notFound } from "next/navigation";

//
// export async function generateStaticParams() {
//   const { data: campaigns } = await supabase.from("campaigns").select("id"); //todo investigate why it returns 500 Internal server Error
//   return campaigns ?? [];
// }

export const revalidate = 60;
export default async function Post({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: blog } = await supabase
    .from("blogs")
    .select()
    .match({ id })
    .single();

  if (!blog) {
    notFound();
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="mt-[200px]">Blog:</p>
      <pre>{JSON.stringify(blog, null, 2)}</pre>
      {blog}
    </div>
  );
}

// export async function getServerSideProps({ params }) {
//   const id = { params };
//   const blogResponse = await supabase
//     .from("blogs")
//     .select()
//     .match({ id })
//     .single();
//   return {
//     props: {
//       blog: blogResponse.data,
//     },
//   };
// }
