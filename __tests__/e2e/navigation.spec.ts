import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');

    // Check that the terminal is visible
    await expect(page.locator('text=agustin@portfolio')).toBeVisible();
  });

  test('should navigate to about page', async ({ page }) => {
    await page.goto('/about');

    // Check that the page loaded
    await expect(page).toHaveURL('/about');
  });

  test('should navigate to skills page', async ({ page }) => {
    await page.goto('/skills');

    await expect(page).toHaveURL('/skills');
  });

  test('should navigate to projects page', async ({ page }) => {
    await page.goto('/projects');

    await expect(page).toHaveURL('/projects');
  });

  test('should navigate to experience page', async ({ page }) => {
    await page.goto('/experience');

    await expect(page).toHaveURL('/experience');
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/contact');

    await expect(page).toHaveURL('/contact');
  });

  test('should show 404 for invalid routes', async ({ page }) => {
    await page.goto('/invalid-route-that-does-not-exist');

    // Check for 404 content
    await expect(page.locator('text=404')).toBeVisible();
  });
});
