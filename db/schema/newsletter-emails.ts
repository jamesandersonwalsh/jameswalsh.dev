import { sql } from 'drizzle-orm'
import { text, sqliteTable } from 'drizzle-orm/sqlite-core'
import { nanoid } from 'nanoid'

export const newsletterEmails = sqliteTable('newsletter_emails', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  emailAddress: text('email_address').notNull().unique(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
})

export type NewsletterEmail = typeof newsletterEmails.$inferSelect
export type CreateNewsletterEmail = typeof newsletterEmails.$inferInsert
