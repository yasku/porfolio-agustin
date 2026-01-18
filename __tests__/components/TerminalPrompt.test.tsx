import { describe, it, expect } from 'vitest';
import { render, screen } from '../test-utils';
import TerminalPrompt from '@/components/TerminalPrompt';

describe('TerminalPrompt', () => {
  it('should render with default path (~)', () => {
    render(<TerminalPrompt />);

    expect(screen.getByText('agustin@portfolio')).toBeInTheDocument();
    expect(screen.getByText('~')).toBeInTheDocument();
    expect(screen.getByText('$')).toBeInTheDocument();
  });

  it('should render with custom path', () => {
    render(<TerminalPrompt path="~/projects" />);

    expect(screen.getByText('agustin@portfolio')).toBeInTheDocument();
    expect(screen.getByText('~/projects')).toBeInTheDocument();
  });

  it('should display the correct prompt format', () => {
    const { container } = render(<TerminalPrompt path="~/about" />);

    // Check that all parts are present
    expect(container.textContent).toContain('agustin@portfolio');
    expect(container.textContent).toContain(':');
    expect(container.textContent).toContain('~/about');
    expect(container.textContent).toContain('$');
  });
});
