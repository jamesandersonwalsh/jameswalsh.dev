import { signup } from '../newsletter'
import * as resend from '../resend'

import * as newsLetterRepo from '@/db/repositories/newsletter'
import { getNewsletterEmail } from '@/test/mocks/newsletter'

vi.mock('@/db/repositories/newsletter')
vi.mock('../resend')

describe('lib/newsletter', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  describe('#signup', () => {
    const email = 'james@jameswalsh.dev'

    beforeEach(() => {
      vi.mocked(newsLetterRepo.get).mockResolvedValue(undefined)
      vi.mocked(newsLetterRepo.create)
      vi.mocked(newsLetterRepo.updateVerifyAttempts)
      vi.mocked(resend.sendVerificationEmail)
    })

    it('stores the email in the database unverified', async () => {
      const formData = new FormData()
      formData.set('email', email)

      await signup(formData)

      expect(newsLetterRepo.get).toHaveBeenCalledOnce()
      expect(newsLetterRepo.create).toHaveBeenCalledOnce()
      expect(newsLetterRepo.create).toHaveBeenCalledWith(email)
    })

    it('sends a verification email', async () => {
      const formData = new FormData()
      formData.set('email', email)

      await signup(formData)

      expect(resend.sendVerificationEmail).toHaveBeenCalledOnce()
    })

    describe('when the email exists and is verified', () => {
      it('does not upsert records or send emails', async () => {
        vi.mocked(newsLetterRepo.get).mockResolvedValue(getNewsletterEmail({ status: 'verified' }))
        const formData = new FormData()
        formData.set('email', email)

        await signup(formData)

        expect(newsLetterRepo.get).toHaveBeenCalledOnce()
        expect(newsLetterRepo.updateVerifyAttempts).not.toHaveBeenCalled()
        expect(newsLetterRepo.create).not.toHaveBeenCalled()
        expect(resend.sendVerificationEmail).not.toHaveBeenCalled()
      })
    })

    describe('when the email exists and is bounced', () => {
      it('does not upsert records or send emails', async () => {
        vi.mocked(newsLetterRepo.get).mockResolvedValue(getNewsletterEmail({ status: 'bounced' }))

        const formData = new FormData()
        formData.set('email', email)

        await signup(formData)

        expect(newsLetterRepo.get).toHaveBeenCalledTimes(1)
        expect(newsLetterRepo.updateVerifyAttempts).not.toHaveBeenCalled()
        expect(newsLetterRepo.create).not.toHaveBeenCalled()
        expect(resend.sendVerificationEmail).not.toHaveBeenCalled()
      })
    })

    describe('when the email exists but is unverified', () => {
      const mockRecord = getNewsletterEmail({ status: 'unverified', verifyAttempts: 1 })

      it('resends verification email', async () => {
        vi.mocked(newsLetterRepo.get).mockResolvedValue({ ...mockRecord, verifyAttempts: 1 })

        const formData = new FormData()
        formData.set('email', email)

        await signup(formData)

        expect(newsLetterRepo.get).toHaveBeenCalledTimes(1)
        expect(newsLetterRepo.updateVerifyAttempts).toHaveBeenCalledWith(2)
        expect(resend.sendVerificationEmail).toHaveBeenCalledOnce()
        expect(resend.sendVerificationEmail).toHaveBeenCalledWith(email)
      })

      it('caps verification resends at 5 attempts', async () => {
        vi.mocked(newsLetterRepo.get).mockResolvedValue({ ...mockRecord, verifyAttempts: 5 })

        const formData = new FormData()
        formData.set('email', email)

        await signup(formData)

        expect(newsLetterRepo.get).toHaveBeenCalledTimes(1)
        expect(newsLetterRepo.updateVerifyAttempts).not.toHaveBeenCalled()
        expect(resend.sendVerificationEmail).not.toHaveBeenCalled()
      })
    })

    describe('when the email exists and is unsubscribed', () => {
      const mockRecord = getNewsletterEmail({ status: 'unsubscribed', verifyAttempts: 1 })

      it('resends verification email', async () => {
        vi.mocked(newsLetterRepo.get).mockResolvedValue({ ...mockRecord, verifyAttempts: 1 })

        const formData = new FormData()
        formData.set('email', email)

        await signup(formData)

        expect(newsLetterRepo.get).toHaveBeenCalledTimes(1)
        expect(newsLetterRepo.updateVerifyAttempts).toHaveBeenCalledWith(2)
        expect(resend.sendVerificationEmail).toHaveBeenCalledOnce()
        expect(resend.sendVerificationEmail).toHaveBeenCalledWith(email)
      })

      it('caps verification resends at 5 attempts', async () => {
        vi.mocked(newsLetterRepo.get).mockResolvedValue({ ...mockRecord, verifyAttempts: 5 })

        const formData = new FormData()
        formData.set('email', email)

        await signup(formData)

        expect(newsLetterRepo.get).toHaveBeenCalledTimes(1)
        expect(newsLetterRepo.updateVerifyAttempts).not.toHaveBeenCalled()
        expect(resend.sendVerificationEmail).not.toHaveBeenCalled()
      })
    })
  })
})
