import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getMessages, getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex flex-col w-full items-center my-8 md:my-16 text-black px-2 md:px-8">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
