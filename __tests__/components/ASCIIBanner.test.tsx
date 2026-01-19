import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@/__tests__/test-utils';
import ASCIIBanner from '@/components/ASCIIBanner';

describe('ASCIIBanner Component', () => {
  // 5.3.1 Test render
  describe('Render', () => {
    it('should render without errors', () => {
      render(<ASCIIBanner />);

      // Component should render successfully
      expect(screen.getByText('Agustin Yaskuloski')).toBeInTheDocument();
    });

    it('should display the ASCII art banner', () => {
      const { container } = render(<ASCIIBanner />);

      const preElement = container.querySelector('pre');
      expect(preElement).toBeInTheDocument();
      expect(preElement?.className).toContain('text-terminal-green');
    });

    it('should display the name heading', () => {
      render(<ASCIIBanner />);

      const nameElement = screen.getByText('Agustin Yaskuloski');
      expect(nameElement).toBeInTheDocument();
      expect(nameElement.tagName).toBe('H2');
    });

    it('should display the role/title', () => {
      render(<ASCIIBanner />);

      expect(screen.getByText(/AI Developer & Engineer/)).toBeInTheDocument();
    });

    it('should display skill tags', () => {
      render(<ASCIIBanner />);

      expect(screen.getByText('Machine Learning')).toBeInTheDocument();
      expect(screen.getByText('Deep Learning')).toBeInTheDocument();
      expect(screen.getByText('NLP')).toBeInTheDocument();
    });
  });

  // Additional tests
  describe('Fade-in Animation', () => {
    it('should start with opacity-0 and transition to opacity-100', async () => {
      const { container } = render(<ASCIIBanner />);

      const mainContainer = container.querySelector('.transition-opacity');
      expect(mainContainer).toBeInTheDocument();

      // Should eventually become visible
      await waitFor(() => {
        expect(mainContainer?.className).toContain('opacity-100');
      });
    });

    it('should have transition-opacity class', () => {
      const { container } = render(<ASCIIBanner />);

      const mainContainer = container.querySelector('.transition-opacity');
      expect(mainContainer).toBeInTheDocument();
      expect(mainContainer?.className).toContain('duration-1000');
    });
  });

  describe('Styling and Layout', () => {
    it('should have proper text colors', () => {
      const { container } = render(<ASCIIBanner />);

      // ASCII art should be terminal green
      const asciiArt = container.querySelector('.text-terminal-green');
      expect(asciiArt).toBeInTheDocument();

      // Name should be cyan
      const name = screen.getByText('Agustin Yaskuloski');
      expect(name.className).toContain('text-terminal-cyan');

      // Role should be yellow
      const role = screen.getByText(/AI Developer & Engineer/);
      expect(role.className).toContain('text-terminal-yellow');
    });

    it('should have responsive font sizes for ASCII art', () => {
      const { container } = render(<ASCIIBanner />);

      const preElement = container.querySelector('pre');
      expect(preElement?.className).toContain('text-[8px]');
      expect(preElement?.className).toContain('sm:text-[10px]');
      expect(preElement?.className).toContain('md:text-xs');
    });

    it('should have responsive font sizes for name', async () => {
      render(<ASCIIBanner />);

      await waitFor(() => {
        const name = screen.getByText('Agustin Yaskuloski');
        expect(name.className).toContain('text-2xl');
        expect(name.className).toContain('md:text-3xl');
      });
    });

    it('should have responsive font sizes for role', async () => {
      render(<ASCIIBanner />);

      await waitFor(() => {
        const role = screen.getByText(/AI Developer & Engineer/);
        expect(role.className).toContain('text-sm');
        expect(role.className).toContain('md:text-base');
      });
    });
  });

  describe('Skill Tags', () => {
    it('should render all three skill tags', () => {
      render(<ASCIIBanner />);

      const mlTag = screen.getByText('Machine Learning');
      const dlTag = screen.getByText('Deep Learning');
      const nlpTag = screen.getByText('NLP');

      expect(mlTag).toBeInTheDocument();
      expect(dlTag).toBeInTheDocument();
      expect(nlpTag).toBeInTheDocument();
    });

    it('should have border styling on skill tags', () => {
      render(<ASCIIBanner />);

      const mlTag = screen.getByText('Machine Learning');
      expect(mlTag.className).toContain('border');
      expect(mlTag.className).toContain('border-terminal-border');
      expect(mlTag.className).toContain('rounded');
    });

    it('should have proper spacing between skill tags', () => {
      const { container } = render(<ASCIIBanner />);

      const tagsContainer = container.querySelector('.gap-2');
      expect(tagsContainer).toBeInTheDocument();
    });
  });

  describe('Content Structure', () => {
    it('should center the main content', () => {
      const { container } = render(<ASCIIBanner />);

      const centerContainer = container.querySelector('.text-center');
      expect(centerContainer).toBeInTheDocument();
    });

    it('should have proper spacing between sections', () => {
      const { container } = render(<ASCIIBanner />);

      const nameSection = screen.getByText('Agustin Yaskuloski').parentElement;
      expect(nameSection?.className).toContain('mt-4');
    });

    it('should render pre tag with whitespace-pre', () => {
      const { container } = render(<ASCIIBanner />);

      const preElement = container.querySelector('pre');
      expect(preElement?.className).toContain('whitespace-pre');
    });

    it('should have overflow-x-auto for ASCII art', () => {
      const { container } = render(<ASCIIBanner />);

      const preElement = container.querySelector('pre');
      expect(preElement?.className).toContain('overflow-x-auto');
    });
  });

  describe('ASCII Art Content', () => {
    it('should contain ASCII art characters', () => {
      const { container } = render(<ASCIIBanner />);

      const preElement = container.querySelector('pre');
      expect(preElement?.textContent).toContain('▄');
      expect(preElement?.textContent).toContain('█');
      expect(preElement?.textContent).toContain('▀');
    });

    it('should have leading-tight for ASCII art', () => {
      const { container } = render(<ASCIIBanner />);

      const preElement = container.querySelector('pre');
      expect(preElement?.className).toContain('leading-tight');
    });
  });

  describe('Role Display', () => {
    it('should render role with code-style brackets', () => {
      render(<ASCIIBanner />);

      const roleText = screen.getByText(/AI Developer & Engineer/);
      expect(roleText.textContent).toContain('<');
      expect(roleText.textContent).toContain('/>');
    });

    it('should format role as code-style element', async () => {
      render(<ASCIIBanner />);

      await waitFor(() => {
        const roleText = screen.getByText(/AI Developer & Engineer/);
        expect(roleText.textContent).toBe('< AI Developer & Engineer />');
      });
    });
  });

  describe('Accessibility', () => {
    it('should use semantic heading for name', () => {
      render(<ASCIIBanner />);

      const heading = screen.getByRole('heading', { name: /Agustin Yaskuloski/i });
      expect(heading).toBeInTheDocument();
    });

    it('should have proper heading level', () => {
      render(<ASCIIBanner />);

      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toBe('Agustin Yaskuloski');
    });
  });
});
