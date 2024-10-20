'use client'

/* cspell:disable */

// eslint-disable-next-line import/no-named-as-default
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: '/ingest', // ? NOTE: Next.js will rewrite this to posthog servers. This helps get around analytics blockers.
    ui_host: 'https://us.posthog.com',
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  })
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
