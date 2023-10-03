import React from "react";
import "./globals.css";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Run for Ukraine",
  description:
    "Charity organization, created to support Ukraine and help stop russian aggression against Ukraine",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta
          name="description"
          content="#RunForUkraine - Our goal is to collectively run 6992km and raise funds for radios that will help Ukrainian Army to reach their goals."
        />
        <meta property="og:title" content="#RunForUkraine" />
        <meta
          property="og:description"
          content="#RunForUkraine - Our goal is to collectively run 6992km and raise funds for radios that will help Ukrainian Army to reach their goals."
        />
        <meta
          property="og:image"
          content="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_a7408348.jpg"
        />

        <script src="https://kit.fontawesome.com/5721daa4dc.js"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          id="secondfront-donate-widget-css"
          href="https://stingray-app-t4hhl.ondigitalocean.app/secondfront-donate-widget/WidgetRunForUkraineRunReg/index.css"
          type="text/css"
          media="all"
        />

        <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
        <title>Run For Ukraine</title>
      </head>
      <body className="h-full">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
