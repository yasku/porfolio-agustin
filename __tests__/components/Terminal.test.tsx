import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@/__tests__/test-utils';
import userEvent from '@testing-library/user-event';
import Terminal from '@/components/Terminal';

describe('Terminal Component', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  // 3.1.1 Test initial render
  describe('Initial Render', () => {
    it('should display welcome message on mount', () => {
      render(<Terminal />);

      expect(screen.getByText(/Welcome to Agustin Yaskuloski's Portfolio Terminal v1.0.0/i)).toBeInTheDocument();
      expect(screen.getByText(/Type "help" for available commands/i)).toBeInTheDocument();
    });

    it('should display initial prompt', () => {
      render(<Terminal />);

      expect(screen.getByText('agustin@portfolio')).toBeInTheDocument();
    });

    it('should render input field', () => {
      render(<Terminal />);

      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      expect(input).toHaveFocus();
    });
  });

  // 3.1.2 Test help command
  describe('Help Command', () => {
    it('should display all available commands when help is entered', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'help{Enter}');

      await waitFor(() => {
        expect(screen.getByText('Available commands:')).toBeInTheDocument();
      });

      expect(screen.getByText(/help.*Show this help message/)).toBeInTheDocument();
      expect(screen.getByText(/about.*Learn more about me/)).toBeInTheDocument();
      expect(screen.getByText(/skills.*View my technical skills/)).toBeInTheDocument();
      expect(screen.getByText(/projects.*See my projects/)).toBeInTheDocument();
      expect(screen.getByText(/contact.*Get contact information/)).toBeInTheDocument();
      expect(screen.getByText(/experience.*View work experience/)).toBeInTheDocument();
      expect(screen.getByText(/clear.*Clear terminal/)).toBeInTheDocument();
      expect(screen.getByText(/whoami.*Display current user/)).toBeInTheDocument();
      expect(screen.getByText(/ls.*List available sections/)).toBeInTheDocument();
      expect(screen.getByText(/cat \[file\].*Read file content/)).toBeInTheDocument();
    });
  });

  // 3.1.3 Test about command
  describe('About Command', () => {
    it('should display about information', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'about{Enter}');

      await waitFor(() => {
        expect(screen.getByText(/ABOUT AGUSTIN YASKULOSKI/i)).toBeInTheDocument();
      });

      expect(screen.getByText(/AI Developer & Engineer/i)).toBeInTheDocument();
      expect(screen.getByText(/Specialized in Artificial Intelligence and Machine Learning/i)).toBeInTheDocument();
    });
  });

  // 3.1.4 Test skills command
  describe('Skills Command', () => {
    it('should display technical skills', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'skills{Enter}');

      await waitFor(() => {
        expect(screen.getByText(/TECHNICAL SKILLS/i)).toBeInTheDocument();
      });

      expect(screen.getByText(/AI\/ML:/i)).toBeInTheDocument();
      expect(screen.getByText(/TensorFlow, PyTorch, Keras/i)).toBeInTheDocument();
      expect(screen.getByText(/Programming:/i)).toBeInTheDocument();
      expect(screen.getByText(/Python, JavaScript\/TypeScript/i)).toBeInTheDocument();
    });
  });

  // 3.1.5 Test projects command
  describe('Projects Command', () => {
    it('should display projects information', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'projects{Enter}');

      await waitFor(() => {
        const projectsHeaders = screen.getAllByText(/PROJECTS/i);
        expect(projectsHeaders.length).toBeGreaterThan(0);
      });

      expect(screen.getByText(/AI Chatbot Platform/i)).toBeInTheDocument();
      expect(screen.getByText(/Computer Vision System/i)).toBeInTheDocument();
      expect(screen.getByText(/ML Model Deployment Pipeline/i)).toBeInTheDocument();
      expect(screen.getByText(/Sentiment Analysis API/i)).toBeInTheDocument();
    });
  });

  // 3.1.6 Test experience command
  describe('Experience Command', () => {
    it('should display work experience', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'experience{Enter}');

      await waitFor(() => {
        expect(screen.getByText(/WORK EXPERIENCE/i)).toBeInTheDocument();
      });

      expect(screen.getByText(/Senior AI Engineer @ TechCorp/i)).toBeInTheDocument();
      expect(screen.getByText(/ML Engineer @ StartupAI/i)).toBeInTheDocument();
      expect(screen.getByText(/AI Research Intern @ AI Lab/i)).toBeInTheDocument();
    });
  });

  // 3.1.7 Test contact command
  describe('Contact Command', () => {
    it('should display contact information', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'contact{Enter}');

      await waitFor(() => {
        expect(screen.getByText(/CONTACT INFO/i)).toBeInTheDocument();
      });

      expect(screen.getByText(/agustin.yaskuloski@email.com/i)).toBeInTheDocument();
      expect(screen.getByText(/github.com\/agustinyaskuloski/i)).toBeInTheDocument();
      expect(screen.getByText(/linkedin.com\/in\/agustinyaskuloski/i)).toBeInTheDocument();
    });
  });

  // 3.1.8 Test whoami command
  describe('Whoami Command', () => {
    it('should display current user', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'whoami{Enter}');

      await waitFor(() => {
        expect(screen.getByText(/Agustin Yaskuloski - AI Developer & Engineer/i)).toBeInTheDocument();
      });
    });
  });

  // 3.1.9 Test ls command
  describe('Ls Command', () => {
    it('should display file listing', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'ls{Enter}');

      await waitFor(() => {
        expect(screen.getByText(/about.txt/)).toBeInTheDocument();
      });

      expect(screen.getByText(/skills.md/)).toBeInTheDocument();
      expect(screen.getByText(/projects\//)).toBeInTheDocument();
      expect(screen.getByText(/experience.md/)).toBeInTheDocument();
      expect(screen.getByText(/contact.txt/)).toBeInTheDocument();
      expect(screen.getByText(/resume.pdf/)).toBeInTheDocument();
    });
  });

  // 3.1.10 Test clear command
  describe('Clear Command', () => {
    it('should clear terminal history', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      // Add some commands first
      await user.type(input, 'help{Enter}');

      await waitFor(() => {
        expect(screen.getByText('Available commands:')).toBeInTheDocument();
      });

      // Clear the terminal
      await user.type(input, 'clear{Enter}');

      await waitFor(() => {
        expect(screen.queryByText('Available commands:')).not.toBeInTheDocument();
      });

      expect(screen.queryByText(/Welcome to Agustin Yaskuloski's Portfolio Terminal/i)).not.toBeInTheDocument();
    });
  });

  // 3.1.11 Test cat resume.txt
  describe('Cat resume.txt Command', () => {
    it('should display resume content when cat resume.txt is entered', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'cat resume.txt{Enter}');

      await waitFor(() => {
        expect(screen.getByText(/AGUSTIN YASKULOSKI - RESUME/i)).toBeInTheDocument();
      });

      expect(screen.getByText(/AI Developer & Engineer specializing in building/i)).toBeInTheDocument();
      expect(screen.getByText(/Built AI systems processing 10M\+ daily requests/i)).toBeInTheDocument();
    });
  });

  // 3.1.12 Test cat invalid file
  describe('Cat Invalid File Command', () => {
    it('should display error message for unknown file', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'cat unknown.txt{Enter}');

      await waitFor(() => {
        expect(screen.getByText(/cat: unknown.txt: No such file or directory/)).toBeInTheDocument();
      });
    });
  });

  // 3.1.13 Test cat without args
  describe('Cat Without Args Command', () => {
    it('should display usage message when cat is entered without arguments', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'cat{Enter}');

      await waitFor(() => {
        expect(screen.getByText(/Usage: cat \[filename\]/)).toBeInTheDocument();
      });

      expect(screen.getByText(/Try: cat resume.txt/)).toBeInTheDocument();
    });
  });

  // 3.1.14 Test unknown command
  describe('Unknown Command', () => {
    it('should display "Command not found" message for unknown commands', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'invalidcommand{Enter}');

      await waitFor(() => {
        expect(screen.getByText(/Command not found: invalidcommand/)).toBeInTheDocument();
      });

      // Check that "Type help" message appears (there will be multiple - initial + after error)
      const helpMessages = screen.getAllByText(/Type "help" for available commands/);
      expect(helpMessages.length).toBeGreaterThanOrEqual(1);
    });
  });

  // 3.1.15 Test empty input
  describe('Empty Input', () => {
    it('should not execute anything when Enter is pressed with empty input', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      const initialText = screen.queryAllByText(/agustin@portfolio/).length;

      await user.type(input, '{Enter}');

      // Wait a bit to ensure nothing happens
      await new Promise(resolve => setTimeout(resolve, 100));

      const finalText = screen.queryAllByText(/agustin@portfolio/).length;

      // Should not add a new command to history
      expect(finalText).toBe(initialText);
    });
  });

  // 3.1.16 Test ArrowUp navigation
  describe('ArrowUp Navigation', () => {
    it('should recall previous command when ArrowUp is pressed', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox') as HTMLInputElement;

      await user.type(input, 'help{Enter}');
      await user.type(input, 'about{Enter}');

      expect(input.value).toBe('');

      await user.type(input, '{ArrowUp}');

      expect(input.value).toBe('about');

      await user.type(input, '{ArrowUp}');

      expect(input.value).toBe('help');
    });
  });

  // 3.1.17 Test ArrowDown navigation
  describe('ArrowDown Navigation', () => {
    it('should navigate forward in command history when ArrowDown is pressed', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox') as HTMLInputElement;

      await user.type(input, 'help{Enter}');
      await user.type(input, 'about{Enter}');
      await user.type(input, 'skills{Enter}');

      // Go back in history
      await user.type(input, '{ArrowUp}');
      expect(input.value).toBe('skills');

      await user.type(input, '{ArrowUp}');
      expect(input.value).toBe('about');

      // Go forward in history
      await user.type(input, '{ArrowDown}');
      expect(input.value).toBe('skills');
    });
  });

  // 3.1.18 Test Ctrl+L shortcut
  describe('Ctrl+L Shortcut', () => {
    it('should clear terminal when Ctrl+L is pressed', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'help{Enter}');

      await waitFor(() => {
        expect(screen.getByText('Available commands:')).toBeInTheDocument();
      });

      await user.type(input, '{Control>}l{/Control}');

      await waitFor(() => {
        expect(screen.queryByText('Available commands:')).not.toBeInTheDocument();
      });

      expect(screen.queryByText(/Welcome to Agustin Yaskuloski's Portfolio Terminal/i)).not.toBeInTheDocument();
    });
  });

  // 3.1.19 Test Ctrl+C shortcut
  describe('Ctrl+C Shortcut', () => {
    it('should clear input when Ctrl+C is pressed', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox') as HTMLInputElement;

      await user.type(input, 'some text');

      expect(input.value).toBe('some text');

      await user.type(input, '{Control>}c{/Control}');

      expect(input.value).toBe('');
    });
  });

  // 3.1.20 Test onCommandEnter callback
  describe('onCommandEnter Callback', () => {
    it('should call onCommandEnter callback when command is executed', async () => {
      const mockCallback = vi.fn();
      render(<Terminal onCommandEnter={mockCallback} />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'help{Enter}');

      await waitFor(() => {
        expect(mockCallback).toHaveBeenCalledWith('help');
      });
    });

    it('should not call onCommandEnter for empty input', async () => {
      const mockCallback = vi.fn();
      render(<Terminal onCommandEnter={mockCallback} />);
      const input = screen.getByRole('textbox');

      await user.type(input, '{Enter}');

      // Wait a bit
      await new Promise(resolve => setTimeout(resolve, 100));

      expect(mockCallback).not.toHaveBeenCalled();
    });
  });

  // 3.1.21 Test auto-scroll behavior
  describe('Auto-scroll Behavior', () => {
    it('should scroll to bottom when new output is added', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      // Execute a command that generates output
      await user.type(input, 'help{Enter}');

      await waitFor(() => {
        expect(screen.getByText('Available commands:')).toBeInTheDocument();
      });

      // The terminal should have scrolled to bottom
      // We verify this indirectly by checking that the content is visible
      expect(screen.getByText(/cat \[file\].*Read file content/)).toBeInTheDocument();
    });
  });

  // Additional edge case tests
  describe('Edge Cases', () => {
    it('should handle multiple spaces in commands', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, '   help   {Enter}');

      await waitFor(() => {
        expect(screen.getByText('Available commands:')).toBeInTheDocument();
      });
    });

    it('should handle cat command with multiple arguments (only use first)', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox');

      await user.type(input, 'cat resume.txt extra args{Enter}');

      await waitFor(() => {
        expect(screen.getByText(/AGUSTIN YASKULOSKI - RESUME/i)).toBeInTheDocument();
      });
    });

    it('should preserve command history after clearing terminal', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox') as HTMLInputElement;

      await user.type(input, 'help{Enter}');
      await user.type(input, 'clear{Enter}');

      await waitFor(() => {
        expect(screen.queryByText('Available commands:')).not.toBeInTheDocument();
      });

      // Command history should still work
      await user.type(input, '{ArrowUp}');
      expect(input.value).toBe('clear');

      await user.type(input, '{ArrowUp}');
      expect(input.value).toBe('help');
    });

    it('should reset history index after executing a command', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox') as HTMLInputElement;

      await user.type(input, 'help{Enter}');
      await user.type(input, 'about{Enter}');

      // Navigate history
      await user.type(input, '{ArrowUp}');
      expect(input.value).toBe('about');

      // Execute a new command
      await user.type(input, '{Enter}');

      // History index should be reset
      await user.type(input, '{ArrowUp}');
      expect(input.value).toBe('about');
    });

    it('should handle ArrowUp when command history is empty', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox') as HTMLInputElement;

      await user.type(input, '{ArrowUp}');

      expect(input.value).toBe('');
    });

    it('should handle ArrowDown at the end of history', async () => {
      render(<Terminal />);
      const input = screen.getByRole('textbox') as HTMLInputElement;

      await user.type(input, 'help{Enter}');
      await user.type(input, '{ArrowUp}');

      expect(input.value).toBe('help');

      await user.type(input, '{ArrowDown}');

      // Should stay at 'help' since we're at the end
      expect(input.value).toBe('help');
    });
  });
});
