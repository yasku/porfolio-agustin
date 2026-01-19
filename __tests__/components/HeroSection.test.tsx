import { describe, it, expect } from 'vitest';
import { render, screen } from '@/__tests__/test-utils';
import HeroSection from '@/components/HeroSection';

describe('HeroSection Component', () => {
  // 5.4.1 Test render
  describe('Render', () => {
    it('should render hero section without errors', () => {
      render(<HeroSection />);

      expect(screen.getByText('Agustin Yaskuloski')).toBeInTheDocument();
    });

    it('should display file path indicator', () => {
      render(<HeroSection />);

      expect(screen.getByText('// portfolio.tsx')).toBeInTheDocument();
    });

    it('should display main name heading', () => {
      render(<HeroSection />);

      const nameHeading = screen.getByRole('heading', { name: /Agustin Yaskuloski/i });
      expect(nameHeading).toBeInTheDocument();
      expect(nameHeading.tagName).toBe('H1');
    });

    it('should display role/title with terminal prompt', () => {
      render(<HeroSection />);

      expect(screen.getByText(/> AI Developer & Engineer/)).toBeInTheDocument();
    });

    it('should display terminal prompt symbol', () => {
      render(<HeroSection />);

      // Check for the large > symbol
      const promptSymbols = screen.getAllByText('>');
      expect(promptSymbols.length).toBeGreaterThan(0);
    });
  });

  describe('Code Block Style Description', () => {
    it('should display expertise code block', () => {
      render(<HeroSection />);

      expect(screen.getByText('const')).toBeInTheDocument();
      expect(screen.getByText('expertise')).toBeInTheDocument();
      expect(screen.getByText('"AI & Machine Learning"')).toBeInTheDocument();
    });

    it('should display code comment', () => {
      render(<HeroSection />);

      expect(screen.getByText(/Building intelligent systems that solve real-world problems/)).toBeInTheDocument();
    });

    it('should have proper code syntax styling', () => {
      render(<HeroSection />);

      const constKeyword = screen.getByText('const');
      expect(constKeyword.className).toContain('text-terminal-blue');

      const variableName = screen.getByText('expertise');
      expect(variableName.className).toContain('text-terminal-cyan');

      const stringValue = screen.getByText('"AI & Machine Learning"');
      expect(stringValue.className).toContain('text-terminal-yellow');
    });
  });

  describe('Tech Tags', () => {
    it('should display all tech tags', () => {
      render(<HeroSection />);

      expect(screen.getByText('Machine Learning')).toBeInTheDocument();
      expect(screen.getByText('Deep Learning')).toBeInTheDocument();
      expect(screen.getByText('NLP')).toBeInTheDocument();
      expect(screen.getByText('Computer Vision')).toBeInTheDocument();
    });

    it('should have comment-style markers around tags', () => {
      render(<HeroSection />);

      const commentStarts = screen.getAllByText('/**');
      const commentEnds = screen.getAllByText('*/');

      expect(commentStarts.length).toBeGreaterThan(0);
      expect(commentEnds.length).toBeGreaterThan(0);
    });

    it('should have proper color coding for tags', () => {
      render(<HeroSection />);

      const mlTag = screen.getByText('Machine Learning');
      expect(mlTag.className).toContain('text-terminal-green');

      const dlTag = screen.getByText('Deep Learning');
      expect(dlTag.className).toContain('text-terminal-blue');

      const nlpTag = screen.getByText('NLP');
      expect(nlpTag.className).toContain('text-terminal-cyan');

      const cvTag = screen.getByText('Computer Vision');
      expect(cvTag.className).toContain('text-terminal-yellow');
    });
  });

  describe('Quick Stats', () => {
    it('should display years of experience', () => {
      render(<HeroSection />);

      expect(screen.getByText('5+')).toBeInTheDocument();
      expect(screen.getByText('years experience')).toBeInTheDocument();
    });

    it('should display project count', () => {
      render(<HeroSection />);

      expect(screen.getByText('50+')).toBeInTheDocument();
      expect(screen.getByText('projects')).toBeInTheDocument();
    });

    it('should display technology count', () => {
      render(<HeroSection />);

      expect(screen.getByText('30+')).toBeInTheDocument();
      expect(screen.getByText('technologies')).toBeInTheDocument();
    });

    it('should have proper color coding for stat numbers', () => {
      render(<HeroSection />);

      const yearsElement = screen.getByText('5+');
      expect(yearsElement.className).toContain('text-terminal-green');

      const projectsElement = screen.getByText('50+');
      expect(projectsElement.className).toContain('text-terminal-blue');

      const techElement = screen.getByText('30+');
      expect(techElement.className).toContain('text-terminal-yellow');
    });
  });

  describe('CTA Buttons', () => {
    it('should display "view projects" button', () => {
      render(<HeroSection />);

      const projectsButton = screen.getByText('$ view projects');
      expect(projectsButton).toBeInTheDocument();
    });

    it('should display "get in touch" button', () => {
      render(<HeroSection />);

      const contactButton = screen.getByText('$ get in touch');
      expect(contactButton).toBeInTheDocument();
    });

    it('should have correct href for projects button', () => {
      render(<HeroSection />);

      const projectsButton = screen.getByText('$ view projects');
      expect(projectsButton).toHaveAttribute('href', '/projects');
    });

    it('should have correct href for contact button', () => {
      render(<HeroSection />);

      const contactButton = screen.getByText('$ get in touch');
      expect(contactButton).toHaveAttribute('href', '/contact');
    });

    it('should render buttons as anchor tags', () => {
      render(<HeroSection />);

      const projectsButton = screen.getByText('$ view projects');
      const contactButton = screen.getByText('$ get in touch');

      expect(projectsButton.tagName).toBe('A');
      expect(contactButton.tagName).toBe('A');
    });

    it('should have hover scale effect on buttons', () => {
      render(<HeroSection />);

      const projectsButton = screen.getByText('$ view projects');
      const contactButton = screen.getByText('$ get in touch');

      expect(projectsButton.className).toContain('hover:scale-105');
      expect(contactButton.className).toContain('hover:scale-105');
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive font sizes for main name', () => {
      render(<HeroSection />);

      const nameHeading = screen.getByRole('heading', { name: /Agustin Yaskuloski/i });
      expect(nameHeading.className).toContain('text-5xl');
      expect(nameHeading.className).toContain('md:text-7xl');
    });

    it('should have responsive font sizes for role', () => {
      render(<HeroSection />);

      const roleElement = screen.getByText(/> AI Developer & Engineer/);
      expect(roleElement.className).toContain('text-lg');
      expect(roleElement.className).toContain('md:text-xl');
    });

    it('should have responsive flex wrapping for buttons', () => {
      const { container } = render(<HeroSection />);

      const buttonContainer = container.querySelector('.flex.flex-wrap.gap-4');
      expect(buttonContainer).toBeInTheDocument();
    });

    it('should have responsive flex wrapping for stats', () => {
      const { container } = render(<HeroSection />);

      const statsContainer = container.querySelector('.flex.flex-wrap.gap-6');
      expect(statsContainer).toBeInTheDocument();
    });
  });

  describe('Layout and Structure', () => {
    it('should have relative positioning for decorative cursor', () => {
      const { container } = render(<HeroSection />);

      const mainContainer = container.querySelector('.relative');
      expect(mainContainer).toBeInTheDocument();
    });

    it('should have decorative cursor element', () => {
      render(<HeroSection />);

      // The decorative underscore cursor
      const cursors = screen.getAllByText('_');
      // Should have at least one (the decorative one)
      expect(cursors.length).toBeGreaterThan(0);
    });

    it('should hide decorative cursor on small screens', () => {
      const { container } = render(<HeroSection />);

      const decorativeCursor = container.querySelector('.hidden.lg\\:block');
      expect(decorativeCursor).toBeInTheDocument();
    });

    it('should have proper spacing structure', () => {
      const { container } = render(<HeroSection />);

      const spaceContainer = container.querySelector('.space-y-6');
      expect(spaceContainer).toBeInTheDocument();
    });
  });

  describe('Code Block Styling', () => {
    it('should have border and background for code block', () => {
      const { container } = render(<HeroSection />);

      const codeBlock = container.querySelector('.border.border-terminal-border.rounded-lg');
      expect(codeBlock).toBeInTheDocument();
    });

    it('should have monospace font for code elements', () => {
      const { container } = render(<HeroSection />);

      const monoElements = container.querySelectorAll('.font-mono.text-sm');
      expect(monoElements.length).toBeGreaterThan(0);
    });

    it('should have max-width constraint for code block', () => {
      const { container } = render(<HeroSection />);

      const codeBlock = container.querySelector('.max-w-2xl');
      expect(codeBlock).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should use semantic H1 for main heading', () => {
      render(<HeroSection />);

      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading.textContent).toBe('Agustin Yaskuloski');
    });

    it('should have proper link structure for CTAs', () => {
      render(<HeroSection />);

      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThanOrEqual(2);
    });

    it('should have descriptive text for all stats', () => {
      render(<HeroSection />);

      // Each stat should have both number and description
      expect(screen.getByText('5+')).toBeInTheDocument();
      expect(screen.getByText('years experience')).toBeInTheDocument();

      expect(screen.getByText('50+')).toBeInTheDocument();
      expect(screen.getByText('projects')).toBeInTheDocument();

      expect(screen.getByText('30+')).toBeInTheDocument();
      expect(screen.getByText('technologies')).toBeInTheDocument();
    });
  });

  describe('Terminal Aesthetic', () => {
    it('should have large terminal prompt symbol', () => {
      const { container } = render(<HeroSection />);

      const promptSymbol = container.querySelector('.text-5xl.md\\:text-6xl.text-terminal-green');
      expect(promptSymbol).toBeInTheDocument();
    });

    it('should use monospace font throughout', () => {
      const { container } = render(<HeroSection />);

      const monoElements = container.querySelectorAll('.font-mono');
      expect(monoElements.length).toBeGreaterThan(0);
    });

    it('should have file path comment styling', () => {
      render(<HeroSection />);

      const filePath = screen.getByText('// portfolio.tsx');
      expect(filePath.className).toContain('text-terminal-text/60');
    });
  });
});
