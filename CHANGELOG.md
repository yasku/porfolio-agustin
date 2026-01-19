# Changelog

All notable changes to the Agustin Yaskuloski Portfolio project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- **Testing Infrastructure (Phase 1 Complete)**
  - Vitest 4.0.17 as unit/component test runner
  - React Testing Library 16.3.1 for component testing
  - Playwright 1.57.0 for E2E testing
  - `vitest.config.ts` - Vitest configuration with jsdom environment
  - `vitest.setup.ts` - Test setup with RTL matchers and browser API mocks
  - `playwright.config.ts` - Playwright E2E configuration
  - `__tests__/test-utils.tsx` - Custom render function and test helpers
  - New npm scripts: `test`, `test:run`, `test:ui`, `test:coverage`, `test:e2e`, `test:e2e:ui`, `test:e2e:install`

- **Utility Functions (Phase 2 Complete)**
  - `utils/formatUptime.ts` - Extracted from SystemStats for better testability
  - `utils/parseCommand.ts` - Command parser utility extracted from Terminal component
    - Handles edge cases: empty strings, whitespace, tabs
    - Case-insensitive command parsing
    - Preserves argument case

- **Component Tests (Phase 3 Complete)**
  - `__tests__/components/Terminal.test.tsx` - 30 comprehensive tests for Terminal component
    - Initial render and welcome message tests
    - All terminal commands (help, about, skills, projects, experience, contact, whoami, ls, clear, cat)
    - Command history navigation (ArrowUp/ArrowDown)
    - Keyboard shortcuts (Ctrl+L, Ctrl+C)
    - Callback testing (onCommandEnter)
    - Auto-scroll behavior
    - Edge cases and error handling
  - `__tests__/components/SystemStats.test.tsx` - 26 tests for SystemStats component
    - Initial render and component structure
    - Progress bars for CPU and Memory
    - Uptime display and formatting
    - Timer updates with fake timers
    - Cleanup on unmount
    - Edge cases (large uptime values)

- **Component Tests (Phase 4 Complete)**
  - `__tests__/components/Header.test.tsx` - 19 tests for Header component
    - Render verification with logo and blinking cursor
    - Time display updates every second with fake timers
    - GitHub and LinkedIn link verification (href, target, rel attributes)
    - Responsive hiding of system info on mobile devices
    - Sticky header positioning and backdrop blur
    - Timer cleanup on unmount
  - `__tests__/components/QuickLinks.test.tsx` - 18 tests for QuickLinks component
    - All 5 quick links render correctly (about, skills, projects, experience, contact)
    - Icons, descriptions, and arrow indicators display
    - Click handlers call onCommandClick with correct command
    - Hover styles and group effects
    - Multiple click handling
    - Proper component structure and styling

- **Component Tests (Phase 5 Complete)**
  - `__tests__/components/MacTerminal.test.tsx` - 20 tests for MacTerminal component
    - Default and custom title rendering
    - Children render correctly within terminal container
    - Traffic light buttons with proper aria-labels for accessibility
    - macOS window header structure and styling
    - Custom className application
    - Rounded corners, shadows, and background colors
  - `__tests__/components/ASCIIBanner.test.tsx` - 24 tests for ASCIIBanner component
    - ASCII art banner display with proper styling
    - Name and role text rendering
    - Skill tags (Machine Learning, Deep Learning, NLP)
    - Fade-in animation on mount
    - Responsive font sizes for different breakpoints
    - Code-style formatting for role display
    - Semantic heading structure for accessibility
  - `__tests__/components/HeroSection.test.tsx` - 38 tests for HeroSection component
    - File path indicator and terminal prompt symbols
    - Main name heading and role display
    - Code block with syntax highlighting (const, expertise, etc.)
    - Tech tags with comment-style markers
    - Quick stats (years, projects, technologies)
    - CTA buttons with correct hrefs and hover effects
    - Responsive design across breakpoints
    - Decorative cursor element
    - Monospace font usage throughout
    - Semantic HTML for accessibility

- **Test Files (Previous Phases)**
  - `__tests__/utils/formatUptime.test.ts` - 8 tests for formatUptime utility
  - `__tests__/utils/parseCommand.test.ts` - 20 tests for parseCommand utility
  - `__tests__/components/TerminalPrompt.test.tsx` - 3 tests for TerminalPrompt component
  - `__tests__/e2e/navigation.spec.ts` - E2E navigation tests (scaffolded)

- **Documentation**
  - `TODO.md` - Comprehensive test coverage implementation plan with 77 tasks
  - `CHANGELOG.md` - Project changelog

### Changed
- `package.json` - Added testing dependencies and scripts
- `components/Terminal.tsx` - Refactored to use `parseCommand` utility for better testability and maintainability
- `TODO.md` - Updated to reflect Phase 5 completion (75% overall progress - 58/77 tasks complete)

### Test Results
```
✓ __tests__/utils/formatUptime.test.ts (8 tests)
✓ __tests__/utils/parseCommand.test.ts (20 tests)
✓ __tests__/components/TerminalPrompt.test.tsx (3 tests)
✓ __tests__/components/Terminal.test.tsx (30 tests)
✓ __tests__/components/SystemStats.test.tsx (26 tests)
✓ __tests__/components/Header.test.tsx (19 tests)
✓ __tests__/components/QuickLinks.test.tsx (18 tests)
✓ __tests__/components/MacTerminal.test.tsx (20 tests)
✓ __tests__/components/ASCIIBanner.test.tsx (24 tests)
✓ __tests__/components/HeroSection.test.tsx (38 tests)

Test Files  10 passed (10)
Tests       206 passed (206)
Duration    10.40s
```

### Planned (Next Phases)
- Phase 6: E2E tests with Playwright (14 tasks)
- Phase 7: CI/CD integration with GitHub Actions (5 tasks)

---

## [0.1.0] - 2026-01-18

### Added
- Initial portfolio website with terminal theme
- Interactive terminal component with working commands
  - `help` - Show available commands
  - `about` - Personal information
  - `skills` - Technical skills
  - `projects` - Portfolio projects
  - `experience` - Work history
  - `contact` - Contact information
  - `whoami` - Current user
  - `ls` - List sections
  - `clear` - Clear terminal
  - `cat [file]` - Read file content
- Command history navigation (ArrowUp/ArrowDown)
- Keyboard shortcuts (Ctrl+L to clear, Ctrl+C to cancel)
- macOS-style terminal windows (MacTerminal component)
- Reusable terminal prompt (TerminalPrompt component)
- System stats widget with simulated CPU/memory/uptime
- Header with live clock and social links
- Quick links navigation component
- ASCII art banner
- Hero section

### Pages
- Home page (`/`) - Interactive terminal
- About page (`/about`)
- Skills page (`/skills`)
- Projects page (`/projects`)
- Experience page (`/experience`)
- Contact page (`/contact`)
- 404 page (not-found)
- Loading screen

### Styling
- Terminal color palette (green, blue, cyan, yellow, purple, red)
- CRT/scanline visual effects
- JetBrains Mono font
- Responsive design (mobile, tablet, desktop)
- Custom animations (blink, scanline, flicker, glitch, fadeIn, typewriter)

### Technical
- Next.js 15.1.0 with App Router
- React 19.0.0
- TypeScript 5.7.2 with strict mode
- Tailwind CSS 3.4.17
- ESLint 9.17.0

---

## Test Coverage Progress

| Date | Version | Tests | Coverage | Notes |
|------|---------|-------|----------|-------|
| 2026-01-18 | 0.1.0 | 0 | 0% | Initial state - no tests |
| 2026-01-18 | 0.1.1 | 11 | ~5% | Phase 1 complete - testing infrastructure |
| 2026-01-18 | 0.1.2 | 31 | ~8% | Phase 2 complete - utility functions tested |
| 2026-01-18 | 0.1.3 | 87 | ~25% | Phase 3 complete - Terminal & SystemStats components tested |
| 2026-01-19 | 0.1.4 | 124 | ~35% | Phase 4 complete - Header & QuickLinks components tested |
| 2026-01-19 | 0.1.5 | 206 | ~45% | Phase 5 complete - All presentational components tested |

---

## Dependencies Added

### devDependencies (Testing)
```json
{
  "@playwright/test": "^1.57.0",
  "@testing-library/jest-dom": "^6.9.1",
  "@testing-library/react": "^16.3.1",
  "@testing-library/user-event": "^14.6.1",
  "@vitejs/plugin-react": "^5.1.2",
  "jsdom": "^27.4.0",
  "vitest": "^4.0.17"
}
```

---

## Migration Notes

### From 0.1.0 to 0.1.1
- No breaking changes
- Testing infrastructure added as devDependencies only
- New `utils/` directory created
- New `__tests__/` directory created

### Running Tests
```bash
# Install dependencies
npm install

# Run unit/component tests
npm test           # Watch mode
npm run test:run   # Single run

# Run with coverage
npm run test:coverage

# Run E2E tests (requires browser install first)
npm run test:e2e:install  # Install browsers
npm run test:e2e          # Run E2E tests
```

---

## Contributors

- Agustin Yaskuloski - Initial development
- Claude (AI Assistant) - Test coverage analysis, infrastructure setup, and implementation
