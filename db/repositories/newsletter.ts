import { NewsletterEmail } from '../schema/newsletter-emails'

export async function get(email: string): Promise<NewsletterEmail | undefined> {
  throw new Error('Not implemented')
}

export async function create(email: string): Promise<boolean> {
  throw new Error('Not implemented')
}

export async function updateStatus(email: string): Promise<NewsletterEmail> {
  throw new Error('Not implemented')
}

export async function updateVerifyAttempts(attempts: number): Promise<boolean> {
  throw new Error('Not implemented')
}

export async function unsubscribe(): Promise<boolean> {
  // ? Needs to reset attempts to 0
  throw new Error('Not implemented yet')
}
