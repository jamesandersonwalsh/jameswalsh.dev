import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`)
  await page.goto('/')
})

test.describe('when getting the RSS feed', () => {
  test('Makes RSS feed available', async ({ page, context, isMobile }) => {
    if (isMobile) {
      const newPagePromise = context.waitForEvent('page')
      await page.locator('data-testid=mobile-menu-trigger').click()
      await page.locator('data-testid=rss-feed-text-nav-item').click()

      const newPage = await newPagePromise
      await expect(newPage).toHaveURL('/rss.xml')
    } else {
      await page.locator('data-testid=rss-feed-nav-item').click()
      await expect(page).toHaveURL('/rss.xml')
    }
  })
})

test.describe('when toggling the theme', () => {
  test.use({ colorScheme: 'light' })

  test('toggles the system theme to dark mode', async ({ page, isMobile }) => {
    if (isMobile) {
      await page.locator('data-testid=mobile-menu-trigger').click()
      await page.getByText('Toggle Dark Mode').click()
    } else {
      await page.locator('data-testid=mode-toggle-menu').click()
      await page.getByRole('menuitem', { name: 'Dark' }).click()
    }
  })
})

test.describe('when toggling color scheme on desktop', () => {
  test('provides a menu item to toggle the system theme', async ({ page, isMobile }) => {
    if (isMobile) return

    await page.locator('data-testid=mode-toggle-menu').click()
    await page.getByRole('menuitem', { name: 'System' }).click()
  })
})
