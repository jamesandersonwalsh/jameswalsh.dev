// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://5dcee7a1c030f7ac9afee2c212d68562@o4506307046866944.ingest.sentry.io/4506307047653376',
  tracesSampleRate: 1,
  debug: false,
})
