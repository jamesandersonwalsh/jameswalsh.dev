type ResendEmailType = 'verification-requested' | 'unsubscribed' | 'email-verified' | 'newsletter' | 'announcement'

export enum ResendEmailTypeOptions {
  VerificationRequested = 'verification-requested',
  Unsubcribed = 'unsubscribed',
  EmailVerified = 'email-verified',
  NewsLetter = 'newsletter',
  Announcement = 'announcement',
}

/**
 *
 A wrapper around the resend.com SDK.
 * @remarks Pass the exported `ResendEmailTypeOptions` enum to the `type` parameter for easier type conformity.
 * @param email - The receipient of the email to be sent.
 * @param type - The type of email to use from email templates directory.
 *
 */
export async function sendEmail(_email: string, _type: ResendEmailType) {
  throw new Error('Not implemented yet')
}
