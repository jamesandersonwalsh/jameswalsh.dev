import './globals.css'

import { GeistSans, GeistMono } from 'geist/font'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import Footer from '@/components/custom/app-shell/footer'
import { TopNavbar } from '@/components/custom/app-shell/top-nav'
import { cn } from '@/lib/utils'

export const runtime = 'edge'

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
    <html lang="en" className={cn(`${GeistSans.variable} ${GeistMono.variable}`, 'dark')}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="flex flex-col overflow-x-hidden md:w-screen md:items-center">
        <div
          data-testid="paper"
          className="flex min-h-screen w-full max-w-[1024px] flex-col items-center p-4 md:w-[90vw] md:p-8 lg:w-[80vw]"
        >
          <TopNavbar />
          <main className="mt-4 flex flex-col py-10">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
