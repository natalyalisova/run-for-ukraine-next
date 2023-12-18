import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { Database } from "@/types/supabase";

export async function PUT(request: Request) {
  const { id } = await request.json();

  const supabase = createRouteHandlerClient<Database>({ cookies });
  const { data } = await supabase
    .from("campaigns")
    .update({ is_complete: true })
    .match({ id });
  return NextResponse.json(data);
}
