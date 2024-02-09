import { requestEmailVerification } from '../resend'

import * as newsLetterRepo from '@/db/repositories/newsletter'

vi.mock('@/db/repositories/newsletter')

describe('lib/resend', () => {
  describe('#requestEmailVerification', () => {
    const email = 'james@jameswalsh.dev'

    beforeEach(() => {
      vi.mocked(newsLetterRepo.create)
    })

    it('stores the email in the database unverified', async () => {
      const formData = new FormData()
      formData.set('email', email)

      await requestEmailVerification(formData)

      expect(newsLetterRepo.create).toHaveBeenCalledOnce()
      expect(newsLetterRepo.create).toHaveBeenCalledWith(email)
    })
  })
})
