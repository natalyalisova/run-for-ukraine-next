import React from "react";
import './globals.css';
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import Navbar from "@/app/components/navbar";

export const metadata = {
    title: 'Run for Ukraine',
    description: 'Charity organization, created to support Ukraine and help stop russian aggression against Ukraine',
}

export default function RootLayout({
                                       children,
                                       params
                                   }: {
    children: React.ReactNode
    params: any,
}) {
    const locale = useLocale();

    if (params.locale !== locale) {
        notFound();
    }

    return (
        <html lang={locale}>
        <head>
            <link rel="icon" href="/src/app/favicon.ico" sizes="any"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet"/>
        </head>
        <body>
        <Navbar/>
        <main>
            {children}
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
        </body>
        </html>
    )
}
