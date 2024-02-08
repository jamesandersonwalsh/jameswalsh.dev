import { defineConfig, type Config } from 'drizzle-kit'

import getDbCredentials from './db/connection'

export default defineConfig({
  schema: './db/schema/*',
  driver: 'turso',
  dbCredentials: getDbCredentials(),
  out: './db/migrations',
  verbose: true,
  strict: false,
}) satisfies Config
