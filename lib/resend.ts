'use server'

import * as newsLetterRepo from '@/db/repositories/newsletter'

export async function requestEmailVerification(formData: FormData) {
  const email = formData.get('email') as string
  console.log('email:', email)
  if (!email) {
    throw new Error('No thank you')
  }

  // ? Has the email already been inputed?
  // ? if the email has already been inputed and is verified, do nothing. 
  // ? If the email has been inputed and is unverified, send again, but we need this to be debounced.
  // ? If the email has been inputed and the status is 'bounced' send, but only up to a certain threshold (10 verify attempts)

  await newsLetterRepo.create(email)
}
