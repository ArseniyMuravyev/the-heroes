import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import clsx from 'clsx'

const geistSans = localFont({
  src: '../../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: '../../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export const metadata: Metadata = {
  title: 'The Heroes',
  description: 'Here is the history of great people'
}

export default async function RootLayout({ children, params: { locale } }: Readonly<Props>) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          'bg-orange-50 text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-300'
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="my-8 box-border flex w-full flex-col items-center overflow-hidden break-words px-3 leading-6 transition-colors duration-500 md:my-16 md:px-9">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
