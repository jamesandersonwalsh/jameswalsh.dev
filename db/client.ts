import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'

import getDbCredentials from './connection'

export const client = createClient(getDbCredentials())

export const db = drizzle(client)
