import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * Custom render function that includes common providers
 * Add providers here as needed (e.g., ThemeProvider, Router, etc.)
 */
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return {
    user: userEvent.setup(),
    ...render(ui, {
      // Add wrapper providers here if needed
      // wrapper: ({ children }) => <Provider>{children}</Provider>,
      ...options,
    }),
  };
}

// Re-export everything from testing-library
export * from '@testing-library/react';

// Override render with custom render
export { customRender as render };

// Export userEvent for convenience
export { userEvent };

/**
 * Helper to simulate keyboard events
 */
export const keyboard = {
  enter: '{Enter}',
  arrowUp: '{ArrowUp}',
  arrowDown: '{ArrowDown}',
  escape: '{Escape}',
  ctrlL: '{Control>}l{/Control}',
  ctrlC: '{Control>}c{/Control}',
};

/**
 * Helper to wait for a condition
 */
export const waitForCondition = async (
  condition: () => boolean,
  timeout = 5000,
  interval = 100
): Promise<void> => {
  const startTime = Date.now();
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error('Condition not met within timeout');
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
};

/**
 * Helper to create mock functions with type safety
 */
export const createMockFn = <T extends (...args: unknown[]) => unknown>() => {
  const { vi } = require('vitest');
  return vi.fn() as T & ReturnType<typeof vi.fn>;
};
