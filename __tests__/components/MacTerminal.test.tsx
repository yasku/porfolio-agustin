import { describe, it, expect } from 'vitest';
import { render, screen } from '@/__tests__/test-utils';
import MacTerminal from '@/components/MacTerminal';

describe('MacTerminal Component', () => {
  // 5.1.1 Test default title
  describe('Default Title', () => {
    it('should render with "terminal" as default title', () => {
      render(
        <MacTerminal>
          <div>Test content</div>
        </MacTerminal>
      );

      expect(screen.getByText('terminal')).toBeInTheDocument();
    });

    it('should display default title in window header', () => {
      const { container } = render(
        <MacTerminal>
          <div>Test content</div>
        </MacTerminal>
      );

      const titleElement = container.querySelector('.text-sm.text-gray-400');
      expect(titleElement).toBeInTheDocument();
      expect(titleElement?.textContent).toBe('terminal');
    });
  });

  // 5.1.2 Test custom title
  describe('Custom Title', () => {
    it('should render with custom title when provided', () => {
      render(
        <MacTerminal title="custom.sh">
          <div>Test content</div>
        </MacTerminal>
      );

      expect(screen.getByText('custom.sh')).toBeInTheDocument();
    });

    it('should display custom title correctly', () => {
      render(
        <MacTerminal title="about.tsx">
          <div>Test content</div>
        </MacTerminal>
      );

      expect(screen.getByText('about.tsx')).toBeInTheDocument();
      expect(screen.queryByText('terminal')).not.toBeInTheDocument();
    });

    it('should handle special characters in title', () => {
      render(
        <MacTerminal title="test-file_v2.sh">
          <div>Test content</div>
        </MacTerminal>
      );

      expect(screen.getByText('test-file_v2.sh')).toBeInTheDocument();
    });
  });

  // 5.1.3 Test children render
  describe('Children Render', () => {
    it('should display children in container', () => {
      render(
        <MacTerminal>
          <div data-testid="child-content">
            <p>Child paragraph</p>
            <span>Child span</span>
          </div>
        </MacTerminal>
      );

      expect(screen.getByTestId('child-content')).toBeInTheDocument();
      expect(screen.getByText('Child paragraph')).toBeInTheDocument();
      expect(screen.getByText('Child span')).toBeInTheDocument();
    });

    it('should render complex children components', () => {
      render(
        <MacTerminal>
          <div>
            <h1>Title</h1>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </div>
        </MacTerminal>
      );

      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('should render text children', () => {
      render(
        <MacTerminal>
          <span>Plain text content</span>
        </MacTerminal>
      );

      expect(screen.getByText('Plain text content')).toBeInTheDocument();
    });
  });

  // 5.1.4 Test traffic light buttons
  describe('Traffic Light Buttons', () => {
    it('should render all three traffic light buttons with aria-labels', () => {
      render(
        <MacTerminal>
          <div>Content</div>
        </MacTerminal>
      );

      expect(screen.getByLabelText('Close')).toBeInTheDocument();
      expect(screen.getByLabelText('Minimize')).toBeInTheDocument();
      expect(screen.getByLabelText('Maximize')).toBeInTheDocument();
    });

    it('should have correct aria-labels for accessibility', () => {
      render(
        <MacTerminal>
          <div>Content</div>
        </MacTerminal>
      );

      const closeButton = screen.getByLabelText('Close');
      const minimizeButton = screen.getByLabelText('Minimize');
      const maximizeButton = screen.getByLabelText('Maximize');

      expect(closeButton).toHaveAttribute('aria-label', 'Close');
      expect(minimizeButton).toHaveAttribute('aria-label', 'Minimize');
      expect(maximizeButton).toHaveAttribute('aria-label', 'Maximize');
    });

    it('should render buttons as button elements', () => {
      render(
        <MacTerminal>
          <div>Content</div>
        </MacTerminal>
      );

      const closeButton = screen.getByLabelText('Close');
      const minimizeButton = screen.getByLabelText('Minimize');
      const maximizeButton = screen.getByLabelText('Maximize');

      expect(closeButton.tagName).toBe('BUTTON');
      expect(minimizeButton.tagName).toBe('BUTTON');
      expect(maximizeButton.tagName).toBe('BUTTON');
    });
  });

  // Additional tests
  describe('Additional Tests', () => {
    it('should apply custom className when provided', () => {
      const { container } = render(
        <MacTerminal className="custom-class">
          <div>Content</div>
        </MacTerminal>
      );

      const mainContainer = container.querySelector('.custom-class');
      expect(mainContainer).toBeInTheDocument();
    });

    it('should have proper macOS window header structure', () => {
      const { container } = render(
        <MacTerminal>
          <div>Content</div>
        </MacTerminal>
      );

      const header = container.querySelector('.bg-\\[\\#323232\\]');
      expect(header).toBeInTheDocument();
      expect(header?.className).toContain('flex');
      expect(header?.className).toContain('items-center');
    });

    it('should have terminal content container with monospace font', () => {
      const { container } = render(
        <MacTerminal>
          <div>Content</div>
        </MacTerminal>
      );

      const content = container.querySelector('.font-mono');
      expect(content).toBeInTheDocument();
      expect(content?.className).toContain('text-sm');
    });

    it('should have rounded corners and shadow', () => {
      const { container } = render(
        <MacTerminal>
          <div>Content</div>
        </MacTerminal>
      );

      const mainContainer = container.querySelector('.rounded-lg.shadow-2xl');
      expect(mainContainer).toBeInTheDocument();
    });

    it('should center the title in the header', () => {
      const { container } = render(
        <MacTerminal title="centered.sh">
          <div>Content</div>
        </MacTerminal>
      );

      const titleContainer = screen.getByText('centered.sh').parentElement;
      expect(titleContainer?.className).toContain('flex-1');
      expect(titleContainer?.className).toContain('text-center');
    });

    it('should have traffic lights with hover effects', () => {
      const { container } = render(
        <MacTerminal>
          <div>Content</div>
        </MacTerminal>
      );

      const closeButton = screen.getByLabelText('Close');
      expect(closeButton.className).toContain('hover:bg-[#ff5f57]/80');
      expect(closeButton.className).toContain('transition-colors');
    });

    it('should render without errors when children is empty', () => {
      render(
        <MacTerminal>
          <div></div>
        </MacTerminal>
      );

      expect(screen.getByText('terminal')).toBeInTheDocument();
    });

    it('should maintain structure with multiple children', () => {
      render(
        <MacTerminal>
          <div>First child</div>
          <div>Second child</div>
          <div>Third child</div>
        </MacTerminal>
      );

      expect(screen.getByText('First child')).toBeInTheDocument();
      expect(screen.getByText('Second child')).toBeInTheDocument();
      expect(screen.getByText('Third child')).toBeInTheDocument();
    });

    it('should have proper background colors', () => {
      const { container } = render(
        <MacTerminal>
          <div>Content</div>
        </MacTerminal>
      );

      const mainContainer = container.querySelector('.bg-\\[\\#1e1e1e\\]');
      const header = container.querySelector('.bg-\\[\\#323232\\]');

      expect(mainContainer).toBeInTheDocument();
      expect(header).toBeInTheDocument();
    });
  });
});
