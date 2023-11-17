import './globals.css'

import { GeistSans, GeistMono } from 'geist/font'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import Footer from '@/components/custom/app-shell/footer'
import { TopNavbar } from '@/components/custom/app-shell/top-nav'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'James Walsh',
  description: 'Software Engineer, UI/UX Enthusiast, Developer Advocate',
  metadataBase: new URL('https://jameswalsh.dev'),
  openGraph: {
    title: 'James Walsh',
    siteName: 'James Walsh',
    locale: 'en_us',
    type: 'website',
  },
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn(`${GeistSans.variable} ${GeistMono.variable}`, 'dark scroll-smooth')}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="flex w-screen flex-col md:items-center">
        <TopNavbar />
        <main className="mt-4 flex flex-col px-6 py-10 sm:px-0 md:w-[768px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
