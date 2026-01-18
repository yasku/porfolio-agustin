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

- **Test Files**
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
- `TODO.md` - Updated to reflect Phase 2 completion (19% overall progress)

### Test Results
```
✓ __tests__/utils/formatUptime.test.ts (8 tests)
✓ __tests__/utils/parseCommand.test.ts (20 tests)
✓ __tests__/components/TerminalPrompt.test.tsx (3 tests)

Test Files  3 passed (3)
Tests       31 passed (31)
```

### Planned (Next Phases)
- Phase 3: Terminal and SystemStats component tests (26 tasks)
- Phase 4: Header and QuickLinks component tests (11 tasks)
- Phase 5: MacTerminal, ASCIIBanner, HeroSection tests (6 remaining tasks)
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
