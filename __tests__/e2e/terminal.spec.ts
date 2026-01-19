import { test, expect } from '@playwright/test';

test.describe('Terminal Workflow', () => {
  // 6.1.1 Test homepage load
  test('should load homepage with terminal visible', async ({ page }) => {
    await page.goto('/');

    // Verify terminal prompt is visible
    await expect(page.locator('text=agustin@portfolio').first()).toBeVisible();

    // Verify welcome message
    await expect(page.locator("text=Welcome to Agustin Yaskuloski's Portfolio Terminal")).toBeVisible();

    // Verify help tip
    await expect(page.locator('text=Type "help" for available commands')).toBeVisible();

    // Verify input field is present and focused
    const input = page.locator('input[type="text"]');
    await expect(input).toBeVisible();
    await expect(input).toBeFocused();
  });

  // 6.1.2 Test type and execute
  test('should type "help" and see output', async ({ page }) => {
    await page.goto('/');

    // Wait for terminal to be ready
    const input = page.locator('input[type="text"]');
    await expect(input).toBeVisible();

    // Type "help" command
    await input.fill('help');
    await page.keyboard.press('Enter');

    // Verify help output is displayed
    await expect(page.locator('text=Available commands:')).toBeVisible();
    await expect(page.locator('text=Show this help message')).toBeVisible();
    await expect(page.locator('text=Learn more about me')).toBeVisible();
  });

  // 6.1.3 Test command history
  test('should recall commands with ArrowUp', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[type="text"]');
    await expect(input).toBeVisible();

    // Execute first command
    await input.fill('help');
    await page.keyboard.press('Enter');

    // Execute second command
    await input.fill('about');
    await page.keyboard.press('Enter');

    // Wait for commands to execute
    await page.waitForTimeout(100);

    // Press ArrowUp to recall last command
    await page.keyboard.press('ArrowUp');

    // Input should contain 'about'
    await expect(input).toHaveValue('about');

    // Press ArrowUp again to recall previous command
    await page.keyboard.press('ArrowUp');

    // Input should contain 'help'
    await expect(input).toHaveValue('help');
  });

  // 6.1.4 Test all commands E2E
  test('should execute all commands and verify output', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[type="text"]');
    await expect(input).toBeVisible();

    // Test 'about' command
    await input.fill('about');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=ABOUT AGUSTIN YASKULOSKI')).toBeVisible();
    await expect(page.locator('text=AI Developer & Engineer').first()).toBeVisible();

    // Test 'skills' command
    await input.fill('skills');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=TECHNICAL SKILLS').first()).toBeVisible();
    await expect(page.locator('text=TensorFlow, PyTorch, Keras').first()).toBeVisible();

    // Test 'projects' command
    await input.fill('projects');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=AI Chatbot Platform').first()).toBeVisible();

    // Test 'experience' command
    await input.fill('experience');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=WORK EXPERIENCE')).toBeVisible();

    // Test 'contact' command
    await input.fill('contact');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=CONTACT INFO')).toBeVisible();
    await expect(page.locator('text=agustin.yaskuloski@email.com')).toBeVisible();

    // Test 'whoami' command
    await input.fill('whoami');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=Agustin Yaskuloski - AI Developer & Engineer')).toBeVisible();

    // Test 'ls' command
    await input.fill('ls');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=about.txt')).toBeVisible();
    await expect(page.locator('text=resume.pdf')).toBeVisible();

    // Test 'cat resume.txt' command
    await input.fill('cat resume.txt');
    await page.keyboard.press('Enter');
    await expect(page.locator('text=AGUSTIN YASKULOSKI - RESUME')).toBeVisible();

    // Test 'clear' command
    await input.fill('clear');
    await page.keyboard.press('Enter');

    // After clear, welcome message should not be visible
    await expect(page.locator("text=Welcome to Agustin Yaskuloski's Portfolio Terminal")).not.toBeVisible();
  });

  test('should handle unknown commands', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[type="text"]');
    await expect(input).toBeVisible();

    // Type unknown command
    await input.fill('unknown-command');
    await page.keyboard.press('Enter');

    // Verify error message
    await expect(page.locator('text=Command not found: unknown-command')).toBeVisible();
  });

  test('should handle Ctrl+L to clear terminal', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[type="text"]');
    await expect(input).toBeVisible();

    // Execute a command first
    await input.fill('help');
    await page.keyboard.press('Enter');

    // Verify help output is visible
    await expect(page.locator('text=Available commands:')).toBeVisible();

    // Press Ctrl+L
    await page.keyboard.press('Control+l');

    // Help output should no longer be visible
    await expect(page.locator('text=Available commands:')).not.toBeVisible();
  });

  test('should handle Ctrl+C to cancel input', async ({ page }) => {
    await page.goto('/');

    const input = page.locator('input[type="text"]');
    await expect(input).toBeVisible();

    // Type some text
    await input.fill('some text here');
    await expect(input).toHaveValue('some text here');

    // Press Ctrl+C
    await page.keyboard.press('Control+c');

    // Input should be cleared
    await expect(input).toHaveValue('');
  });
});
