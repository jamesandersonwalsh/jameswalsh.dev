import { PostHog } from 'posthog-node'

export default function PostHogClient() {
  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST, // TODO: might need to be the rewrite URL. I don't think this is as important serverside.
    flushAt: 1,
    flushInterval: 0,
  })
  return posthogClient
}
