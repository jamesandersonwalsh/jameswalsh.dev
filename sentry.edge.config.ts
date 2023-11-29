// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://5dcee7a1c030f7ac9afee2c212d68562@o4506307046866944.ingest.sentry.io/4506307047653376',
  tracesSampleRate: 1,
  debug: false,
})
