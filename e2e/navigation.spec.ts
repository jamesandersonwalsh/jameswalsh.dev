import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`)
  await page.goto('./')
})

test('navigates to /posts', async ({ page }) => {
  await page.locator('data-testid=blog-top-nav-item').click()
  await expect(page).toHaveURL('/posts')
  await expect(page).toHaveTitle('Articles - James Walsh')
  await expect(page.getByText('Latest Blog Posts')).toBeVisible()
})

test('navigates to /about', async ({ page }) => {
  await page.locator('data-testid=about-top-nav-item').click()
  await expect(page).toHaveURL('/about')
  await expect(page).toHaveTitle('About - James Walsh')
  await expect(page.getByText(`I'm James`)).toBeVisible()
})

test('navigates to /stack', async ({ page }) => {
  await page.locator('data-testid=stack-top-nav-item').click()
  await expect(page).toHaveURL('/stack')
  await expect(page).toHaveTitle('Stack - James Walsh')
  await expect(page.getByText(`Technology Tools I Recommend & Use`)).toBeVisible()
})

test('navigates to /portfolio', async ({ page }) => {
  await page.locator('data-testid=portfolio-top-nav-item').click()
  await expect(page).toHaveURL('/projects')
  await expect(page).toHaveTitle('Projects - James Walsh')
  await expect(page.getByText(`Things I've Helped Build That`)).toBeVisible()
})

test('Makes /rss.xml available', async ({ page }) => {
  await page.locator('data-testid=rss-feed-top-nav-item').click()
})
