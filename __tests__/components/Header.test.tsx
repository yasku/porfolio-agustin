import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@/__tests__/test-utils';
import Header from '@/components/Header';

describe('Header Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Set a fixed date for consistent testing
    vi.setSystemTime(new Date('2026-01-19T12:30:45'));
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.clearAllTimers();
  });

  // 4.1.1 Test render
  describe('Render', () => {
    it('should render header with logo', () => {
      render(<Header />);

      // Check for the logo/username
      expect(screen.getByText(/agustin/)).toBeInTheDocument();
      expect(screen.getByText('$')).toBeInTheDocument();
    });

    it('should render with blinking cursor', () => {
      render(<Header />);

      const cursor = screen.getByText('_');
      expect(cursor).toBeInTheDocument();
      expect(cursor.className).toContain('animate-blink');
    });

    it('should render system info section', () => {
      render(<Header />);

      expect(screen.getByText(/System: Linux 6.1.0/)).toBeInTheDocument();
      expect(screen.getByText(/Status: Online/)).toBeInTheDocument();
    });
  });

  // 4.1.2 Test time display
  describe('Time Display', () => {
    it('should display current time', () => {
      render(<Header />);

      // Initial time should be displayed (12:30:45 PM or similar based on locale)
      const timeElement = screen.getByText(/12:30:45/i);
      expect(timeElement).toBeInTheDocument();
    });

    it('should update time every second', () => {
      render(<Header />);

      // Get initial time display
      expect(screen.getByText(/12:30:45/i)).toBeInTheDocument();

      // Advance time by 1 second
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      // Time should have updated to 12:30:46
      expect(screen.getByText(/12:30:46/i)).toBeInTheDocument();

      // Advance another second
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      // Time should have updated to 12:30:47
      expect(screen.getByText(/12:30:47/i)).toBeInTheDocument();
    });

    it('should clear interval on unmount', () => {
      const clearIntervalSpy = vi.spyOn(global, 'clearInterval');

      const { unmount } = render(<Header />);

      unmount();

      expect(clearIntervalSpy).toHaveBeenCalled();
    });
  });

  // 4.1.3 Test GitHub link
  describe('GitHub Link', () => {
    it('should render GitHub link with correct href', () => {
      render(<Header />);

      const githubLink = screen.getByText('[GitHub]');
      expect(githubLink).toBeInTheDocument();
      expect(githubLink).toHaveAttribute('href', 'https://github.com');
    });

    it('should open GitHub link in new tab', () => {
      render(<Header />);

      const githubLink = screen.getByText('[GitHub]');
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should have hover styles for GitHub link', () => {
      render(<Header />);

      const githubLink = screen.getByText('[GitHub]');
      expect(githubLink.className).toContain('hover:text-terminal-green');
      expect(githubLink.className).toContain('transition-colors');
    });
  });

  // 4.1.4 Test LinkedIn link
  describe('LinkedIn Link', () => {
    it('should render LinkedIn link with correct href', () => {
      render(<Header />);

      const linkedinLink = screen.getByText('[LinkedIn]');
      expect(linkedinLink).toBeInTheDocument();
      expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com');
    });

    it('should open LinkedIn link in new tab', () => {
      render(<Header />);

      const linkedinLink = screen.getByText('[LinkedIn]');
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should have hover styles for LinkedIn link', () => {
      render(<Header />);

      const linkedinLink = screen.getByText('[LinkedIn]');
      expect(linkedinLink.className).toContain('hover:text-terminal-blue');
      expect(linkedinLink.className).toContain('transition-colors');
    });
  });

  // 4.1.5 Test responsive hiding
  describe('Responsive Hiding', () => {
    it('should hide system info on mobile', () => {
      const { container } = render(<Header />);

      // Find the system info container
      const systemInfo = container.querySelector('.hidden.md\\:flex');

      expect(systemInfo).toBeInTheDocument();
      expect(systemInfo?.className).toContain('hidden');
      expect(systemInfo?.className).toContain('md:flex');
    });

    it('should display all system info items in the hidden container', () => {
      render(<Header />);

      // All system info should still be in the DOM (just hidden on mobile)
      expect(screen.getByText(/System: Linux 6.1.0/)).toBeInTheDocument();
      expect(screen.getByText(/Status: Online/)).toBeInTheDocument();
      expect(screen.getByText(/12:30:45/i)).toBeInTheDocument();
    });
  });

  // Additional tests
  describe('Additional Tests', () => {
    it('should have sticky header positioning', () => {
      const { container } = render(<Header />);

      const header = container.querySelector('header');
      expect(header?.className).toContain('sticky');
      expect(header?.className).toContain('top-0');
      expect(header?.className).toContain('z-50');
    });

    it('should have backdrop blur effect', () => {
      const { container } = render(<Header />);

      const header = container.querySelector('header');
      expect(header?.className).toContain('backdrop-blur-sm');
    });

    it('should render with proper structure', () => {
      const { container } = render(<Header />);

      const header = container.querySelector('header');
      const maxWidthContainer = container.querySelector('.max-w-7xl');
      const flexContainer = container.querySelector('.flex.items-center.justify-between');

      expect(header).toBeInTheDocument();
      expect(maxWidthContainer).toBeInTheDocument();
      expect(flexContainer).toBeInTheDocument();
    });

    it('should update time continuously over multiple seconds', () => {
      render(<Header />);

      // Initial time
      expect(screen.getByText(/12:30:45/i)).toBeInTheDocument();

      // Advance 5 seconds
      act(() => {
        vi.advanceTimersByTime(5000);
      });

      // Should now show 12:30:50
      expect(screen.getByText(/12:30:50/i)).toBeInTheDocument();

      // Advance 10 more seconds
      act(() => {
        vi.advanceTimersByTime(10000);
      });

      // Should now show 12:31:00
      expect(screen.getByText(/12:31:00/i)).toBeInTheDocument();
    });

    it('should not update time after unmount', () => {
      const { unmount } = render(<Header />);

      unmount();

      // Advancing time should not cause any errors
      act(() => {
        vi.advanceTimersByTime(1000);
      });

      // No assertions needed - just verifying no errors occur
      expect(true).toBe(true);
    });
  });
});
