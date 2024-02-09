import { eq } from 'drizzle-orm'

import { db } from '../client'
import { EmailVerificationStatus, NewsletterEmail, newsletterEmails } from '../schema/newsletter-emails'

export async function get(emailAddress: string): Promise<NewsletterEmail | undefined> {
  const records = await db.select().from(newsletterEmails).where(eq(newsletterEmails.address, emailAddress)).limit(1)
  return records[0]
}

export async function create(emailAddress: string): Promise<NewsletterEmail> {
  const result = await db
    .insert(newsletterEmails)
    .values({
      address: emailAddress,
    })
    .returning({
      address: newsletterEmails.address,
      status: newsletterEmails.status,
      verifyAttempts: newsletterEmails.verifyAttempts,
      createdAt: newsletterEmails.createdAt,
      updatedAt: newsletterEmails.updatedAt,
    })

  return result[0]
}

export async function updateStatus(emailAddress: string, status: EmailVerificationStatus): Promise<boolean> {
  const result = await db
    .update(newsletterEmails)
    .set({ status: status })
    .where(eq(newsletterEmails.address, emailAddress))
    .returning({ updateStatus: newsletterEmails.status })

  return result[0].updateStatus === status
}

export async function updateVerifyAttempts(emailAddress: string, verifyAttempts: number): Promise<boolean> {
  const result = await db
    .update(newsletterEmails)
    .set({ verifyAttempts: verifyAttempts })
    .where(eq(newsletterEmails.address, emailAddress))
    .returning({ updatedAttempts: newsletterEmails.verifyAttempts })

  return result[0].updatedAttempts === verifyAttempts
}

export async function unsubscribe(emailAddress: string): Promise<boolean> {
  const result = await db
    .update(newsletterEmails)
    .set({ status: 'unsubscribed', verifyAttempts: 0 })
    .where(eq(newsletterEmails.address, emailAddress))
    .returning({ updatedStatus: newsletterEmails.status })

  return result[0].updatedStatus === 'unsubscribed'
}
