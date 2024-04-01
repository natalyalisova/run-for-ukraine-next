import React from "react";
import { Blog } from "@/app/[locale]/static/page";
import Link from "next/link";

const Post = ({ created_date, title }: Blog) => {
  return (
    <Link href={"/"}>
      <div className="flex gap-2 ml-6 md:ml-1">
        <div className="flex flex-col mr-6">
          <p className="text-strong-azure font-semibold text-2xl hover:underline">
            {title}
          </p>
          <p className="text-sm font-semibold"></p>
          <p>
            <span className="text-strong-azure text-sm opacity-50 font-bold">
              {created_date}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
