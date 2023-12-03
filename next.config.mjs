import { withSentryConfig } from '@sentry/nextjs'
import { withContentlayer } from 'next-contentlayer'

const userSentryWebpackPluginOptions = { silent: true, org: 'fractal-labs-30', project: 'portfolio' }
const sentryOptions = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default withSentryConfig(withContentlayer(nextConfig), userSentryWebpackPluginOptions, sentryOptions)
