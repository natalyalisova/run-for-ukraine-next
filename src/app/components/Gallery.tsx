import React from "react";
import { useTranslations } from "next-intl";

const Gallery = () => {
  const t = useTranslations("Gallery");
  return (
    <section className="flex flex-col text-center my-6 md:my-24 " id="gallery">
      <h1 className="uppercase text-2xl md:text-5xl font-semibold">
        {t("gallery-title")}
      </h1>
      <div className="mt-4 h-1 w-24 bg-yellow-gold mx-auto mb-3"></div>

      <div className="gallery-container flex flex-wrap gap-3 p-5 justify-center ">
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1565.JPG" />
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1568.JPG" />
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1544.JPG" />

        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_4471.JPG" />
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_4517.JPG" />
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_4475.JPG" />

        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_4397.JPG" />
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1529.JPG" />
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1530.JPG" />

        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1558.JPG" />
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_4481.JPG" />
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1507.JPG" />

        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_1503.JPG" />
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_2462.JPG" />
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/IMG_7535.JPG" />

        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_20220529ukrainiansatottawarw_ta271.jpg" />*/}
        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_120220529ukrainiansatottawarw_ta312.jpg" />*/}
        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_120220529ukrainiansatottawarw_ta317.jpg" />*/}
        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_20220529ukrainiansatottawarw_ta349.jpg" />*/}
        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_a7408348.jpg" />*/}
        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_a7408350.jpg" />*/}
        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_1dsc_3522.jpg" />*/}
        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_1cm2_8662.jpg" />*/}
        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_a7408354-edit.jpg" />*/}
        {/*<img*/}
        {/*  className="flex self-start"*/}
        {/*  src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_dsc_3502-long.jpg"*/}
        {/*/>*/}
        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_1ava_3468-long.jpg" />*/}
        {/*<img*/}
        {/*  className="flex self-start"*/}
        {/*  src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_1dsc_3511-long.jpg"*/}
        {/*/>*/}
        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_dsc_3547.jpg" />*/}
        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_dsc_3534.jpg" />*/}
        {/*<img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_120220529ukrainiansatottawarw_ta312.jpg" />*/}
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_img_2707.jpg" />
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_img_2706.jpg" />
        <img src="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_img_2708.jpg" />
      </div>
    </section>
  );
};

export default Gallery;
