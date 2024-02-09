import { sql } from 'drizzle-orm'
import { text, sqliteTable, index, integer } from 'drizzle-orm/sqlite-core'

export const newsletterEmails = sqliteTable(
  'newsletter_emails',
  {
    address: text('address').primaryKey(),
    status: text('status', { enum: ['verified', 'unverified', 'unsubscribed', 'bounced'] })
      .notNull()
      .$defaultFn(() => 'unverified'),
    verifyAttempts: integer('verify_attempts', { mode: 'number' })
      .notNull()
      .$defaultFn(() => 0),

    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    statusIdx: index('status_idx').on(table.status),
  }),
)

export type EmailVerificationStatus = 'verified' | 'unverified' | 'unsubscribed' | 'bounced'
export type NewsletterEmail = typeof newsletterEmails.$inferSelect
export type CreateNewsletterEmail = typeof newsletterEmails.$inferInsert
