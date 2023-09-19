import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

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
        </head>
        <body>
        {children}
        </body>
        </html>
    )
}
