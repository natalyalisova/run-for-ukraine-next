import React from "react";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import { generateMetadata } from "@/app/components/Metadata";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // const isValidLocale = locales.some((cur) => cur === locale);
  // if (!isValidLocale) notFound();

  const metadata = await generateMetadata({ params: { locale } });
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta property="og:site_name" content="run for Ukraine" />
        <meta property="og:url" content="https://runforukraine.org.ua/" />
        <meta property="title" content={metadata.title} />
        <meta property="og:title" content={metadata.title} />
        <meta property="content" content={metadata.content} />
        <meta property="og:content" content={metadata.content} />
        <meta property="description" content={metadata.description} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:instagram"
          content="https://www.instagram.com/runforukraine/?igshid=YmMyMTA2M2Y%3D"
        />
        <meta
          property="og:facebook"
          content="https://www.facebook.com/runforukraine.united?mibextid=LQQJ4d"
        />
        <meta
          property="og:image"
          content="https://secondfront-cdn.nyc3.cdn.digitaloceanspaces.com/runforukraine2023%2Fgallery%2Frsz_a7408348.jpg"
        />

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
        <title>Run For Ukraine</title>
      </head>
      <body className="flex flex-col h-screen justify-between">
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <Script src="https://kit.fontawesome.com/5721daa4dc.js" async></Script>
      </body>
    </html>
  );
}
