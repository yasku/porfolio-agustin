import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/__tests__/test-utils';
import userEvent from '@testing-library/user-event';
import QuickLinks from '@/components/QuickLinks';

describe('QuickLinks Component', () => {
  const mockOnCommandClick = vi.fn();

  beforeEach(() => {
    mockOnCommandClick.mockClear();
  });

  // 4.2.1 Test render
  describe('Render', () => {
    it('should render all 5 links', () => {
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      // Check for all command buttons
      expect(screen.getByText('$ about')).toBeInTheDocument();
      expect(screen.getByText('$ skills')).toBeInTheDocument();
      expect(screen.getByText('$ projects')).toBeInTheDocument();
      expect(screen.getByText('$ experience')).toBeInTheDocument();
      expect(screen.getByText('$ contact')).toBeInTheDocument();
    });

    it('should render all descriptions', () => {
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      expect(screen.getByText('About Me')).toBeInTheDocument();
      expect(screen.getByText('Technical Skills')).toBeInTheDocument();
      expect(screen.getByText('Portfolio')).toBeInTheDocument();
      expect(screen.getByText('Work History')).toBeInTheDocument();
      expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    });

    it('should render all icons', () => {
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      expect(screen.getByText('📝')).toBeInTheDocument();
      expect(screen.getByText('⚡')).toBeInTheDocument();
      expect(screen.getByText('🚀')).toBeInTheDocument();
      expect(screen.getByText('💼')).toBeInTheDocument();
      expect(screen.getByText('📧')).toBeInTheDocument();
    });

    it('should render QUICK ACCESS title', () => {
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      expect(screen.getByText('QUICK ACCESS')).toBeInTheDocument();
    });

    it('should render tip section', () => {
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      expect(screen.getByText('Tip:')).toBeInTheDocument();
      expect(screen.getByText(/Type commands in the terminal above/)).toBeInTheDocument();
    });
  });

  // 4.2.2 Test about click
  describe('About Click', () => {
    it('should call onCommandClick with "about" when about button is clicked', async () => {
      const user = userEvent.setup();
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      const aboutButton = screen.getByText('$ about').closest('button');
      expect(aboutButton).toBeInTheDocument();

      await user.click(aboutButton!);

      expect(mockOnCommandClick).toHaveBeenCalledTimes(1);
      expect(mockOnCommandClick).toHaveBeenCalledWith('about');
    });
  });

  // 4.2.3 Test skills click
  describe('Skills Click', () => {
    it('should call onCommandClick with "skills" when skills button is clicked', async () => {
      const user = userEvent.setup();
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      const skillsButton = screen.getByText('$ skills').closest('button');
      expect(skillsButton).toBeInTheDocument();

      await user.click(skillsButton!);

      expect(mockOnCommandClick).toHaveBeenCalledTimes(1);
      expect(mockOnCommandClick).toHaveBeenCalledWith('skills');
    });
  });

  // 4.2.4 Test projects click
  describe('Projects Click', () => {
    it('should call onCommandClick with "projects" when projects button is clicked', async () => {
      const user = userEvent.setup();
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      const projectsButton = screen.getByText('$ projects').closest('button');
      expect(projectsButton).toBeInTheDocument();

      await user.click(projectsButton!);

      expect(mockOnCommandClick).toHaveBeenCalledTimes(1);
      expect(mockOnCommandClick).toHaveBeenCalledWith('projects');
    });
  });

  // 4.2.5 Test experience click
  describe('Experience Click', () => {
    it('should call onCommandClick with "experience" when experience button is clicked', async () => {
      const user = userEvent.setup();
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      const experienceButton = screen.getByText('$ experience').closest('button');
      expect(experienceButton).toBeInTheDocument();

      await user.click(experienceButton!);

      expect(mockOnCommandClick).toHaveBeenCalledTimes(1);
      expect(mockOnCommandClick).toHaveBeenCalledWith('experience');
    });
  });

  // 4.2.6 Test contact click
  describe('Contact Click', () => {
    it('should call onCommandClick with "contact" when contact button is clicked', async () => {
      const user = userEvent.setup();
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      const contactButton = screen.getByText('$ contact').closest('button');
      expect(contactButton).toBeInTheDocument();

      await user.click(contactButton!);

      expect(mockOnCommandClick).toHaveBeenCalledTimes(1);
      expect(mockOnCommandClick).toHaveBeenCalledWith('contact');
    });
  });

  // Additional tests
  describe('Additional Tests', () => {
    it('should render all buttons as clickable elements', () => {
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(5);
    });

    it('should have hover styles on buttons', () => {
      const { container } = render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      const buttons = container.querySelectorAll('button');
      buttons.forEach(button => {
        expect(button.className).toContain('hover:bg-terminal-border/60');
        expect(button.className).toContain('transition-colors');
      });
    });

    it('should have group hover effect on command text', () => {
      const { container } = render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      const commandTexts = container.querySelectorAll('.group-hover\\:text-terminal-cyan');
      expect(commandTexts.length).toBeGreaterThan(0);
    });

    it('should render arrow indicators for each link', () => {
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      const arrows = screen.getAllByText('→');
      expect(arrows).toHaveLength(5);
    });

    it('should not call onCommandClick when component is just rendered', () => {
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      expect(mockOnCommandClick).not.toHaveBeenCalled();
    });

    it('should handle multiple clicks correctly', async () => {
      const user = userEvent.setup();
      render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      const aboutButton = screen.getByText('$ about').closest('button');
      const skillsButton = screen.getByText('$ skills').closest('button');

      await user.click(aboutButton!);
      await user.click(skillsButton!);
      await user.click(aboutButton!);

      expect(mockOnCommandClick).toHaveBeenCalledTimes(3);
      expect(mockOnCommandClick).toHaveBeenNthCalledWith(1, 'about');
      expect(mockOnCommandClick).toHaveBeenNthCalledWith(2, 'skills');
      expect(mockOnCommandClick).toHaveBeenNthCalledWith(3, 'about');
    });

    it('should maintain proper structure with icons, commands, and descriptions', () => {
      const { container } = render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      const buttons = container.querySelectorAll('button');

      buttons.forEach(button => {
        // Each button should have an icon, command, and description
        const icon = button.querySelector('.text-lg');
        const command = button.querySelector('.text-terminal-green');
        const description = button.querySelector('.text-terminal-text.text-xs');

        expect(icon).toBeInTheDocument();
        expect(command).toBeInTheDocument();
        expect(description).toBeInTheDocument();
      });
    });

    it('should have proper border styling', () => {
      const { container } = render(<QuickLinks onCommandClick={mockOnCommandClick} />);

      const mainContainer = container.querySelector('.border.border-terminal-border.rounded-lg');
      expect(mainContainer).toBeInTheDocument();

      const tipBorder = container.querySelector('.border-t.border-terminal-border');
      expect(tipBorder).toBeInTheDocument();
    });
  });
});
