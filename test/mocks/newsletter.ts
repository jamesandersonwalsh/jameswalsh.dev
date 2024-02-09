import { NewsletterEmail } from '@/db/schema/newsletter-emails'

export function getNewsletterEmail(overrides: Partial<NewsletterEmail> = {}): NewsletterEmail {
  return {
    address: 'james@jameswalsh.dev',
    status: 'verified',
    verifyAttempts: 1,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    ...overrides,
  }
}
