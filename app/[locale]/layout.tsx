import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { getMessages, getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import clsx from "clsx";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "The Heroes",
  description: "Here is the history of great people",
};

export default async function RootLayout({ children }: Readonly<Props>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          "antialiased bg-orange-50 dark:bg-zinc-900  text-zinc-900 dark:text-zinc-300",
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex flex-col w-full items-center my-8 md:my-16 px-3 md:px-9 box-border overflow-hidden break-words leading-6 transition-colors duration-500">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
