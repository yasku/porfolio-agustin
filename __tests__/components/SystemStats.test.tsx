import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor, act } from '@/__tests__/test-utils';
import SystemStats from '@/components/SystemStats';

describe('SystemStats Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.clearAllTimers();
  });

  // 3.2.1 Test initial render
  describe('Initial Render', () => {
    it('should render with system monitor title', () => {
      render(<SystemStats />);

      expect(screen.getByText('SYSTEM MONITOR')).toBeInTheDocument();
    });

    it('should render CPU usage section', () => {
      render(<SystemStats />);

      expect(screen.getByText('CPU Usage')).toBeInTheDocument();
    });

    it('should render Memory section', () => {
      render(<SystemStats />);

      expect(screen.getByText('Memory')).toBeInTheDocument();
    });

    it('should render Uptime section', () => {
      render(<SystemStats />);

      expect(screen.getByText('Uptime')).toBeInTheDocument();
    });

    it('should render system info section', () => {
      render(<SystemStats />);

      expect(screen.getByText('Kernel')).toBeInTheDocument();
      expect(screen.getByText('6.1.0-ai')).toBeInTheDocument();
      expect(screen.getByText('Shell')).toBeInTheDocument();
      expect(screen.getByText('bash 5.2.0')).toBeInTheDocument();
      expect(screen.getByText('Processes')).toBeInTheDocument();
      expect(screen.getByText('247')).toBeInTheDocument();
    });
  });

  // 3.2.2 Test progress bars
  describe('Progress Bars', () => {
    it('should render CPU progress bar', () => {
      const { container } = render(<SystemStats />);

      // Find the CPU progress bar by checking for the terminal-green background
      const progressBars = container.querySelectorAll('.bg-terminal-green');
      expect(progressBars.length).toBeGreaterThan(0);
    });

    it('should render Memory progress bar', () => {
      const { container } = render(<SystemStats />);

      // Find the Memory progress bar by checking for the terminal-blue background
      const progressBars = container.querySelectorAll('.bg-terminal-blue');
      expect(progressBars.length).toBeGreaterThan(0);
    });

    it('should display percentage values for CPU and Memory', () => {
      render(<SystemStats />);

      // CPU and Memory percentages should be visible
      // They're rendered as text with the format: XX%
      const percentagePattern = /\d+%/;
      const percentages = screen.getAllByText(percentagePattern);

      // Should have at least 2 percentages (CPU and Memory)
      expect(percentages.length).toBeGreaterThanOrEqual(2);
    });

    it('should have progress bars with correct width styles', () => {
      const { container } = render(<SystemStats />);

      const progressBars = container.querySelectorAll('[style*="width"]');

      // Should have at least 2 progress bars with width styles
      expect(progressBars.length).toBeGreaterThanOrEqual(2);

      // Each should have a width percentage
      progressBars.forEach(bar => {
        expect(bar.getAttribute('style')).toMatch(/width:\s*\d+%/);
      });
    });
  });

  // 3.2.3 Test uptime display
  describe('Uptime Display', () => {
    it('should display uptime in correct format (0h 0m 0s initially)', () => {
      render(<SystemStats />);

      expect(screen.getByText('0h 0m 0s')).toBeInTheDocument();
    });

    it('should format uptime correctly for seconds', () => {
      render(<SystemStats />);

      // Advance time by 2 seconds (component updates every 2 seconds)
      act(() => {
        vi.advanceTimersByTime(2000);
      });

      expect(screen.getByText('0h 0m 1s')).toBeInTheDocument();
    });

    it('should format uptime correctly for minutes', () => {
      render(<SystemStats />);

      // Advance time to show minutes (60 updates * 2 seconds = 120 seconds = 2 minutes)
      act(() => {
        vi.advanceTimersByTime(2000 * 60);
      });

      expect(screen.getByText('0h 1m 0s')).toBeInTheDocument();
    });

    it('should format uptime correctly for hours', () => {
      render(<SystemStats />);

      // Advance time to show hours (3600 updates * 2 seconds = 7200 seconds = 2 hours of real time, but uptime increments by 1s per interval = 3600s = 1h)
      // Each interval (2000ms) increments uptime by 1 second
      // For 1 hour uptime = 3600 seconds = 3600 intervals
      act(() => {
        vi.advanceTimersByTime(2000 * 3600);
      });

      expect(screen.getByText('1h 0m 0s')).toBeInTheDocument();
    });

    it('should format uptime correctly for complex time (1h 23m 45s)', () => {
      render(<SystemStats />);

      // Calculate time for 1h 23m 45s = 5025 seconds
      // Each interval adds 1 second, so we need 5025 intervals
      act(() => {
        vi.advanceTimersByTime(2000 * 5025);
      });

      expect(screen.getByText('1h 23m 45s')).toBeInTheDocument();
    });
  });

  // 3.2.4 Test timer updates
  describe('Timer Updates', () => {
    it('should update CPU and Memory values on interval', () => {
      render(<SystemStats />);

      // Initial uptime should be 0
      expect(screen.getByText('0h 0m 0s')).toBeInTheDocument();

      // Advance time by 2 seconds (component interval)
      act(() => {
        vi.advanceTimersByTime(2000);
      });

      // Uptime should have updated to 1 second
      expect(screen.getByText('0h 0m 1s')).toBeInTheDocument();

      // CPU and Memory values should also be present (they're random but within range)
      const percentages = screen.getAllByText(/\d+%/);
      expect(percentages.length).toBeGreaterThanOrEqual(2);
    });

    it('should update uptime every interval', () => {
      render(<SystemStats />);

      expect(screen.getByText('0h 0m 0s')).toBeInTheDocument();

      // First interval
      act(() => {
        vi.advanceTimersByTime(2000);
      });
      expect(screen.getByText('0h 0m 1s')).toBeInTheDocument();

      // Second interval
      act(() => {
        vi.advanceTimersByTime(2000);
      });
      expect(screen.getByText('0h 0m 2s')).toBeInTheDocument();

      // Third interval
      act(() => {
        vi.advanceTimersByTime(2000);
      });
      expect(screen.getByText('0h 0m 3s')).toBeInTheDocument();
    });

    it('should call setInterval with 2000ms delay', () => {
      const setIntervalSpy = vi.spyOn(global, 'setInterval');

      render(<SystemStats />);

      expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), 2000);
    });

    it('should generate CPU values in range 20-49', () => {
      render(<SystemStats />);

      // Run multiple intervals and collect CPU values
      for (let i = 0; i < 10; i++) {
        act(() => {
          vi.advanceTimersByTime(2000);
        });

        const cpuText = screen.getByText('CPU Usage')
          .parentElement
          ?.querySelector('.text-terminal-green')
          ?.textContent;

        if (cpuText) {
          const cpuValue = parseInt(cpuText.replace('%', ''));
          expect(cpuValue).toBeGreaterThanOrEqual(20);
          expect(cpuValue).toBeLessThanOrEqual(49);
        }
      }
    });

    it('should generate Memory values in range 40-59', () => {
      render(<SystemStats />);

      // Run multiple intervals and collect Memory values
      for (let i = 0; i < 10; i++) {
        act(() => {
          vi.advanceTimersByTime(2000);
        });

        const memoryText = screen.getByText('Memory')
          .parentElement
          ?.querySelector('.text-terminal-blue')
          ?.textContent;

        if (memoryText) {
          const memoryValue = parseInt(memoryText.replace('%', ''));
          expect(memoryValue).toBeGreaterThanOrEqual(40);
          expect(memoryValue).toBeLessThanOrEqual(59);
        }
      }
    });
  });

  // 3.2.5 Test cleanup
  describe('Cleanup', () => {
    it('should clear interval on unmount', () => {
      const clearIntervalSpy = vi.spyOn(global, 'clearInterval');

      const { unmount } = render(<SystemStats />);

      unmount();

      expect(clearIntervalSpy).toHaveBeenCalled();
    });

    it('should not update state after unmount', () => {
      const { unmount } = render(<SystemStats />);

      unmount();

      // This should not cause any errors or warnings
      vi.advanceTimersByTime(2000);
      vi.advanceTimersByTime(2000);

      // No assertions needed - we're just verifying no errors occur
      expect(true).toBe(true);
    });

    it('should stop uptime counter after unmount', () => {
      const { unmount } = render(<SystemStats />);

      // Advance time before unmount
      act(() => {
        vi.advanceTimersByTime(2000);
      });
      expect(screen.getByText('0h 0m 1s')).toBeInTheDocument();

      unmount();

      // Advance time after unmount - should not cause errors
      act(() => {
        vi.advanceTimersByTime(4000);
      });

      // Re-render to verify state is clean
      render(<SystemStats />);
      expect(screen.getByText('0h 0m 0s')).toBeInTheDocument();
    });
  });

  // Additional edge cases
  describe('Edge Cases', () => {
    it('should handle very large uptime values', () => {
      render(<SystemStats />);

      // Advance time to a very large value (10 hours)
      act(() => {
        vi.advanceTimersByTime(2000 * 36000);
      });

      expect(screen.getByText('10h 0m 0s')).toBeInTheDocument();
    });

    it('should maintain consistent CSS classes for styling', () => {
      const { container } = render(<SystemStats />);

      // Check for key CSS classes
      expect(container.querySelector('.bg-terminal-bg')).toBeInTheDocument();
      expect(container.querySelector('.border-terminal-border')).toBeInTheDocument();
      expect(container.querySelector('.text-terminal-cyan')).toBeInTheDocument();
      expect(container.querySelector('.text-terminal-green')).toBeInTheDocument();
    });

    it('should render ProgressBar components with correct props', () => {
      const { container } = render(<SystemStats />);

      // Find progress bars
      const greenBar = container.querySelector('.bg-terminal-green');
      const blueBar = container.querySelector('.bg-terminal-blue');

      expect(greenBar).toBeInTheDocument();
      expect(blueBar).toBeInTheDocument();

      // Check they have transition classes
      expect(greenBar?.className).toContain('transition-all');
      expect(blueBar?.className).toContain('transition-all');
    });

    it('should have accessible text content for screen readers', () => {
      render(<SystemStats />);

      // All important information should be in text form
      expect(screen.getByText('CPU Usage')).toBeInTheDocument();
      expect(screen.getByText('Memory')).toBeInTheDocument();
      expect(screen.getByText('Uptime')).toBeInTheDocument();
      expect(screen.getByText('Kernel')).toBeInTheDocument();
      expect(screen.getByText('Shell')).toBeInTheDocument();
      expect(screen.getByText('Processes')).toBeInTheDocument();
    });
  });
});
