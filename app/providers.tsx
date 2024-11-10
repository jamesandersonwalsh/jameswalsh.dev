'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { type PropsWithChildren, useEffect } from 'react'

export function AnalyticsProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: '/ingest', // ? NOTE: Next.js will rewrite this to posthog servers. This helps get around analytics blockers.
      ui_host: 'https://us.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: false, // ? NOTE: Disable automatic pageview capture, as we capture manually in `PosthogPageView`.
    })
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
