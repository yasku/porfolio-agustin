# Changelog

All notable changes to the Agustin Yaskuloski Portfolio project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- `TODO.md` - Comprehensive test coverage implementation plan with 77 tasks across 7 phases
- `CHANGELOG.md` - Project changelog to track all changes

### Planned
- Testing infrastructure setup (Vitest, React Testing Library, Playwright)
- Unit tests for utility functions
- Component tests for all 8 components
- E2E tests for user workflows
- CI/CD integration with GitHub Actions

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

| Date | Version | Coverage | Notes |
|------|---------|----------|-------|
| 2026-01-18 | 0.1.0 | 0% | Initial state - no tests |

---

## Migration Notes

### From 0.1.0 to next version
- No breaking changes expected
- Testing infrastructure will be added as devDependencies

---

## Contributors

- Agustin Yaskuloski - Initial development
- Claude (AI Assistant) - Test coverage analysis and planning
