'use server'

import { z } from 'zod'

import { sendVerificationEmail } from './resend'

import * as newsLetterRepo from '@/db/repositories/newsletter'

const newsletterEmailSchema = z.object({
  address: z.string(),
  status: z.enum(['unverified', 'unsubscribed']),
  verifyAttempts: z.number().lt(5),
})

export async function signup(formData: FormData) {
  const email = formData.get('email') as string
  if (!email) {
    return {
      message: 'Please provide a valid email',
    }
  }

  const newsletterRecord = await newsLetterRepo.get(email)
  if (!newsletterRecord) {
    await newsLetterRepo.create(email)
    return await sendVerificationEmail(email)
  }

  const { success } = newsletterEmailSchema.safeParse(newsletterRecord)
  if (!success) {
    return {
      errors: [
        `Sorry you cannot subscribe at this time. Either your email bounced or you've tried this too many times. 🙃`,
      ],
    }
  }

  await Promise.all([
    newsLetterRepo.updateVerifyAttempts(newsletterRecord.verifyAttempts + 1),
    sendVerificationEmail(email),
  ])

  return {
    message: 'Verification email sent'
  }
}
