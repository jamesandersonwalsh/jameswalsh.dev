'use server'

import { z } from 'zod'

import { ResendEmailTypeOptions, sendEmail } from './resend'

import * as newsLetterRepo from '@/db/repositories/newsletter'

const newsletterEmailSchema = z.object({
  address: z.string(),
  status: z.enum(['unverified', 'unsubscribed']),
  verifyAttempts: z.number().lt(5),
})

export async function signup(formData: FormData) {
  const emailAddress = formData.get('email') as string
  if (!emailAddress) {
    return { message: 'Please provide a valid email address' }
  }

  const newsletterRecord = await newsLetterRepo.get(emailAddress)
  if (!newsletterRecord) {
    await Promise.all([
      newsLetterRepo.create(emailAddress),
      sendEmail(emailAddress, ResendEmailTypeOptions.VerificationRequested),
    ])

    return {
      message: 'Verification email sent',
    }
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
    newsLetterRepo.updateVerifyAttempts(emailAddress, newsletterRecord.verifyAttempts + 1),
    sendEmail(emailAddress, ResendEmailTypeOptions.VerificationRequested),
  ])

  return {
    message: 'Verification email sent',
  }
}
