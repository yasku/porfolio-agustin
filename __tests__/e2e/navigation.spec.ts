import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  // 6.2.1 Test homepage
  test('should load the homepage with terminal', async ({ page }) => {
    await page.goto('/');

    // Check that the terminal is visible
    await expect(page.locator('text=agustin@portfolio').first()).toBeVisible();

    // Check welcome message
    await expect(page.locator("text=Welcome to Agustin Yaskuloski's Portfolio Terminal")).toBeVisible();

    // Check URL
    await expect(page).toHaveURL('/');
  });

  // 6.2.2 Test /about page
  test('should navigate to about page and load content', async ({ page }) => {
    await page.goto('/about');

    // Check that the page loaded
    await expect(page).toHaveURL('/about');

    // Verify page content
    await expect(page.locator('text=Agustin Yaskuloski').first()).toBeVisible();
    await expect(page.locator('text=~/about').first()).toBeVisible();

    // Verify About section title exists
    const heading = page.locator('h1, h2, h3').filter({ hasText: 'About' });
    await expect(heading.first()).toBeVisible();
  });

  // 6.2.3 Test /skills page
  test('should navigate to skills page and load content', async ({ page }) => {
    await page.goto('/skills');

    await expect(page).toHaveURL('/skills');

    // Verify skills path indicator
    await expect(page.locator('text=~/skills').first()).toBeVisible();

    // Verify skills content is present
    await expect(page.locator('text=Technical skills and expertise')).toBeVisible();
  });

  // 6.2.4 Test /projects page
  test('should navigate to projects page and load content', async ({ page }) => {
    await page.goto('/projects');

    await expect(page).toHaveURL('/projects');

    // Verify projects path indicator
    await expect(page.locator('text=~/projects').first()).toBeVisible();

    // Verify page title
    await expect(page.locator('text=Showcasing my AI/ML projects')).toBeVisible();
  });

  // 6.2.5 Test /experience page
  test('should navigate to experience page and load content', async ({ page }) => {
    await page.goto('/experience');

    await expect(page).toHaveURL('/experience');

    // Verify experience path indicator
    await expect(page.locator('text=~/experience').first()).toBeVisible();

    // Verify page content
    await expect(page.locator('text=Professional experience and education')).toBeVisible();
  });

  // 6.2.6 Test /contact page
  test('should navigate to contact page and load content', async ({ page }) => {
    await page.goto('/contact');

    await expect(page).toHaveURL('/contact');

    // Verify contact path indicator
    await expect(page.locator('text=~/contact').first()).toBeVisible();

    // Verify page content
    await expect(page.locator('text=Get In Touch')).toBeVisible();
  });

  // 6.2.7 Test 404 page
  test('should show 404 for invalid routes', async ({ page }) => {
    await page.goto('/invalid-route-that-does-not-exist');

    // Check for 404 content
    await expect(page.locator('text=404')).toBeVisible();
  });

  // Additional navigation tests
  test('should maintain terminal theme across pages', async ({ page }) => {
    const pages = ['/', '/about', '/skills', '/projects', '/experience', '/contact'];

    for (const pagePath of pages) {
      await page.goto(pagePath);

      // Check for terminal-themed elements
      const body = page.locator('body');
      await expect(body).toBeVisible();

      // Verify name/branding is present
      await expect(page.locator('text=Agustin').first()).toBeVisible();
    }
  });

  test('should have working header links', async ({ page }) => {
    await page.goto('/');

    // Find and check GitHub link (if present in header)
    const githubLink = page.locator('a[href*="github"]').first();
    if (await githubLink.isVisible()) {
      await expect(githubLink).toHaveAttribute('target', '_blank');
    }

    // Find and check LinkedIn link (if present in header)
    const linkedinLink = page.locator('a[href*="linkedin"]').first();
    if (await linkedinLink.isVisible()) {
      await expect(linkedinLink).toHaveAttribute('target', '_blank');
    }
  });
});
