import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Gallery = () => {
  const t = useTranslations("Gallery");
  return (
    <section className="flex flex-col text-center my-6 md:my-24 " id="gallery">
      <h1 className="uppercase text-2xl md:text-5xl font-semibold">
        {t("gallery-title")}
      </h1>
      <div className="mt-4 h-1 w-24 bg-yellow-gold mx-auto mb-3"></div>

      <div className="gallery-container flex flex-wrap gap-3 p-5 justify-center ">
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1565.JPG"
          }
          alt={"runners image"}
          width={300}
          height={500}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1568.JPG"
          }
          alt={"runners image"}
          width={300}
          height={500}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1544.JPG"
          }
          alt={"runners image"}
          width={300}
          height={500}
        />

        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1558.JPG"
          }
          alt={"runners image"}
          width={300}
          height={500}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_4481.JPG"
          }
          alt={"runners image"}
          width={300}
          height={500}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1507.JPG"
          }
          alt={"runners image"}
          width={300}
          height={500}
        />

        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_4471.JPG"
          }
          alt={"runners image"}
          width={300}
          height={200}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_4517.JPG"
          }
          alt={"runners image"}
          width={300}
          height={200}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_4475.JPG"
          }
          alt={"runners image"}
          width={300}
          height={200}
        />

        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_4397.JPG"
          }
          alt={"runners image"}
          width={300}
          height={500}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1529.JPG"
          }
          alt={"runners image"}
          width={300}
          height={500}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1530.JPG"
          }
          alt={"runners image"}
          width={300}
          height={500}
        />

        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_7402.JPG"
          }
          alt={"runners image"}
          width={300}
          height={500}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_7385.jpg"
          }
          alt={"runners image"}
          width={300}
          height={500}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_2627.jpg"
          }
          alt={"runners image"}
          width={300}
          height={500}
        />

        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1503.JPG"
          }
          alt={"runners image"}
          width={300}
          height={200}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_2462.JPG"
          }
          alt={"runners image"}
          width={300}
          height={200}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_7535.JPG"
          }
          alt={"runners image"}
          width={300}
          height={200}
        />

        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_img_2707.jpg"
          }
          alt={"runners image"}
          width={300}
          height={300}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_img_2706.jpg"
          }
          alt={"runners image"}
          width={300}
          height={300}
        />
        <Image
          src={
            "https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_img_2708.jpg"
          }
          alt={"runners image"}
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Gallery;
