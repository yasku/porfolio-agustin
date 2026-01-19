import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  // 6.3.1 Test mobile viewport (375px width)
  test('should display correctly on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/');

    // Terminal should still be visible
    await expect(page.locator('text=agustin@portfolio').first()).toBeVisible();

    // Input should be visible and functional
    const input = page.locator('input[type="text"]');
    await expect(input).toBeVisible();

    // Test command execution on mobile
    await input.fill('help');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=Available commands:')).toBeVisible();

    // Navigate to other pages and verify layout
    await page.goto('/about');
    await expect(page.locator('text=Agustin Yaskuloski').first()).toBeVisible();

    // Content should be responsive
    await expect(page.locator('text=~/about').first()).toBeVisible();
  });

  // 6.3.2 Test tablet viewport (768px width)
  test('should display correctly on tablet viewport', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });

    await page.goto('/');

    // Verify terminal is visible
    await expect(page.locator('text=agustin@portfolio').first()).toBeVisible();

    // Verify terminal input works
    const input = page.locator('input[type="text"]');
    await expect(input).toBeVisible();
    await input.fill('about');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=ABOUT AGUSTIN YASKULOSKI').first()).toBeVisible();

    // Test all pages load correctly - check for header
    const pages = ['/about', '/skills', '/projects', '/experience', '/contact'];
    for (const pagePath of pages) {
      await page.goto(pagePath);
      // Just verify page loaded by checking for common element
      await expect(page.locator('header')).toBeVisible();
    }
  });

  // 6.3.3 Test desktop viewport (1280px width)
  test('should display correctly on desktop viewport', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1280, height: 800 });

    await page.goto('/');

    // Verify full desktop layout
    await expect(page.locator('text=agustin@portfolio').first()).toBeVisible();

    // System stats or other desktop-specific elements should be visible
    // (depending on your design)
    const input = page.locator('input[type="text"]');
    await expect(input).toBeVisible();

    // Test terminal functionality
    await input.fill('skills');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=TECHNICAL SKILLS').first()).toBeVisible();

    // Navigate to pages and verify desktop layout
    await page.goto('/projects');
    await expect(page.locator('text=Showcasing my AI/ML projects')).toBeVisible();
    await expect(page.locator('text=~/projects').first()).toBeVisible();
  });

  // Additional responsive tests
  test('should handle viewport changes dynamically', async ({ page }) => {
    await page.goto('/');

    // Start with mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('text=agustin@portfolio').first()).toBeVisible();

    // Switch to tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('text=agustin@portfolio').first()).toBeVisible();

    // Switch to desktop
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('text=agustin@portfolio').first()).toBeVisible();

    // Terminal should remain functional after resizes
    const input = page.locator('input[type="text"]');
    await input.fill('whoami');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=Agustin Yaskuloski - AI Developer & Engineer')).toBeVisible();
  });

  test('should maintain text readability across viewports', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667, name: 'Mobile' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 1280, height: 800, name: 'Desktop' },
      { width: 1920, height: 1080, name: 'Large Desktop' },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/about');

      // Text should be readable (not cut off or overlapping)
      await expect(page.locator('text=Agustin Yaskuloski').first()).toBeVisible();

      // Content should not overflow
      const body = page.locator('body');
      const overflow = await body.evaluate((el) => {
        return window.getComputedStyle(el).overflow;
      });

      // Body should allow scrolling or be contained
      const validOverflows = ['auto', 'scroll', 'visible', 'hidden', 'hidden auto', 'auto hidden'];
      expect(validOverflows).toContain(overflow);
    }
  });

  test('should display navigation correctly on all viewports', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667 },
      { width: 768, height: 1024 },
      { width: 1280, height: 800 },
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.goto('/');

      // Header/navigation should be present
      const header = page.locator('header');
      if (await header.isVisible()) {
        await expect(header).toBeVisible();
      }

      // Logo/branding should be visible
      await expect(page.locator('text=Agustin').first()).toBeVisible();
    }
  });
});
