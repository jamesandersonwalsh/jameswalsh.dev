'use server'

import { signup } from '@/lib/newsletter'

export async function submitSignup(formData: FormData) {
  await signup(formData)
}
