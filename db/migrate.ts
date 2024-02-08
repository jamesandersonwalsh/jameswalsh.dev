import path from 'path'

import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import { migrate } from 'drizzle-orm/libsql/migrator'

import getDbCredentials from './connection'

export const migrationsClient = createClient(getDbCredentials())

export const db = drizzle(migrationsClient)

async function main() {
  try {
    await migrate(db, {
      migrationsFolder: path.join(process.cwd(), 'db/migrations'),
    })
    console.info('Migrations ran successfully! ✅')
    process.exit(0)
  } catch (error) {
    console.error('Error performing migrations ❌: ', error)
    process.exit(1)
  }
}

main()
