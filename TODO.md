# TODO - Test Coverage Implementation Plan

> **Project:** Agustin Yaskuloski Portfolio
> **Created:** 2026-01-18
> **Last Updated:** 2026-01-18
> **Status:** In Progress

---

## Overview

This document tracks the implementation of comprehensive test coverage for the portfolio project. The plan is organized into phases, with tasks prioritized by impact and complexity.

### Current Test Coverage: 0%

### Target Test Coverage: 80%+

---

## Phase 1: Testing Infrastructure Setup

> **Goal:** Set up testing frameworks and configuration files

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 1.1 Install Vitest | Add Vitest as the unit/component test runner |
| [ ] | 1.2 Install React Testing Library | Add @testing-library/react and related packages |
| [ ] | 1.3 Install Playwright | Add Playwright for E2E testing |
| [ ] | 1.4 Create Vitest config | Configure vitest.config.ts for Next.js |
| [ ] | 1.5 Create test setup file | Configure vitest.setup.ts with RTL matchers |
| [ ] | 1.6 Create Playwright config | Configure playwright.config.ts |
| [ ] | 1.7 Update package.json | Add test scripts (test, test:ui, test:e2e, test:coverage) |
| [ ] | 1.8 Create test utilities | Add test helpers and mock utilities |

**Dependencies to install:**
```bash
# Unit/Component Testing
vitest
@vitejs/plugin-react
jsdom
@testing-library/react
@testing-library/jest-dom
@testing-library/user-event

# E2E Testing
@playwright/test
```

---

## Phase 2: Unit Tests - Utility Functions

> **Goal:** Test pure functions that can be extracted from components

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 2.1 Extract formatUptime utility | Move formatUptime from SystemStats to utils/ |
| [ ] | 2.2 Test formatUptime | Test edge cases: 0s, 59s, 60s, 3600s, large values |
| [ ] | 2.3 Extract command parser | Extract command parsing logic from Terminal |
| [ ] | 2.4 Test command parser | Test command + args splitting, edge cases |

---

## Phase 3: Component Tests - High Priority

> **Goal:** Test the most complex interactive components

### 3.1 Terminal Component Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 3.1.1 Test initial render | Verify welcome message and prompt display |
| [ ] | 3.1.2 Test help command | Verify help output contains all commands |
| [ ] | 3.1.3 Test about command | Verify about output content |
| [ ] | 3.1.4 Test skills command | Verify skills output content |
| [ ] | 3.1.5 Test projects command | Verify projects output content |
| [ ] | 3.1.6 Test experience command | Verify experience output content |
| [ ] | 3.1.7 Test contact command | Verify contact output content |
| [ ] | 3.1.8 Test whoami command | Verify whoami output |
| [ ] | 3.1.9 Test ls command | Verify ls output shows file listing |
| [ ] | 3.1.10 Test clear command | Verify history is cleared |
| [ ] | 3.1.11 Test cat resume.txt | Verify resume content displayed |
| [ ] | 3.1.12 Test cat invalid file | Verify error message for unknown file |
| [ ] | 3.1.13 Test cat without args | Verify usage message displayed |
| [ ] | 3.1.14 Test unknown command | Verify "Command not found" message |
| [ ] | 3.1.15 Test empty input | Verify no action on empty Enter |
| [ ] | 3.1.16 Test ArrowUp navigation | Verify previous command recalled |
| [ ] | 3.1.17 Test ArrowDown navigation | Verify next command in history |
| [ ] | 3.1.18 Test Ctrl+L shortcut | Verify terminal cleared |
| [ ] | 3.1.19 Test Ctrl+C shortcut | Verify input cleared |
| [ ] | 3.1.20 Test onCommandEnter callback | Verify callback called with command |
| [ ] | 3.1.21 Test auto-scroll behavior | Verify scroll to bottom on new output |

### 3.2 SystemStats Component Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 3.2.1 Test initial render | Verify component renders with stats |
| [ ] | 3.2.2 Test progress bars | Verify CPU and memory bars render |
| [ ] | 3.2.3 Test uptime display | Verify uptime format is correct |
| [ ] | 3.2.4 Test timer updates | Verify values update on interval (mock timers) |
| [ ] | 3.2.5 Test cleanup | Verify interval cleared on unmount |

---

## Phase 4: Component Tests - Medium Priority

> **Goal:** Test interactive components with callbacks

### 4.1 Header Component Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 4.1.1 Test render | Verify header renders with logo |
| [ ] | 4.1.2 Test time display | Verify time updates every second |
| [ ] | 4.1.3 Test GitHub link | Verify correct href and target |
| [ ] | 4.1.4 Test LinkedIn link | Verify correct href and target |
| [ ] | 4.1.5 Test responsive hiding | Verify system info hidden on mobile |

### 4.2 QuickLinks Component Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 4.2.1 Test render | Verify all 5 links render |
| [ ] | 4.2.2 Test about click | Verify onCommandClick('about') called |
| [ ] | 4.2.3 Test skills click | Verify onCommandClick('skills') called |
| [ ] | 4.2.4 Test projects click | Verify onCommandClick('projects') called |
| [ ] | 4.2.5 Test experience click | Verify onCommandClick('experience') called |
| [ ] | 4.2.6 Test contact click | Verify onCommandClick('contact') called |

---

## Phase 5: Component Tests - Lower Priority

> **Goal:** Test simple presentational components

### 5.1 MacTerminal Component Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 5.1.1 Test default title | Verify "terminal" as default title |
| [ ] | 5.1.2 Test custom title | Verify custom title renders |
| [ ] | 5.1.3 Test children render | Verify children displayed in container |
| [ ] | 5.1.4 Test traffic light buttons | Verify aria-labels present |

### 5.2 TerminalPrompt Component Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 5.2.1 Test default path | Verify ~ renders when no path |
| [ ] | 5.2.2 Test custom path | Verify custom path renders correctly |
| [ ] | 5.2.3 Test prompt format | Verify "agustin@portfolio:path$" format |

### 5.3 ASCIIBanner Component Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 5.3.1 Test render | Verify banner renders without errors |

### 5.4 HeroSection Component Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 5.4.1 Test render | Verify hero section renders |

---

## Phase 6: E2E Tests

> **Goal:** Test complete user workflows with Playwright

### 6.1 Terminal Workflow Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 6.1.1 Test homepage load | Verify terminal visible on homepage |
| [ ] | 6.1.2 Test type and execute | Type "help" → press Enter → see output |
| [ ] | 6.1.3 Test command history | Type commands → ArrowUp recalls them |
| [ ] | 6.1.4 Test all commands E2E | Execute each command, verify output |

### 6.2 Navigation Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 6.2.1 Test /about page | Navigate and verify content loads |
| [ ] | 6.2.2 Test /skills page | Navigate and verify content loads |
| [ ] | 6.2.3 Test /projects page | Navigate and verify content loads |
| [ ] | 6.2.4 Test /experience page | Navigate and verify content loads |
| [ ] | 6.2.5 Test /contact page | Navigate and verify content loads |
| [ ] | 6.2.6 Test 404 page | Navigate to invalid route, verify 404 |

### 6.3 Responsive Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 6.3.1 Test mobile viewport | Verify layout on 375px width |
| [ ] | 6.3.2 Test tablet viewport | Verify layout on 768px width |
| [ ] | 6.3.3 Test desktop viewport | Verify layout on 1280px width |

### 6.4 Accessibility Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 6.4.1 Test keyboard navigation | Tab through interactive elements |
| [ ] | 6.4.2 Test focus management | Verify focus states visible |

---

## Phase 7: CI/CD Integration

> **Goal:** Automate test execution

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 7.1 Create GitHub Actions workflow | Add .github/workflows/test.yml |
| [ ] | 7.2 Configure test on PR | Run tests on pull requests |
| [ ] | 7.3 Configure test on push | Run tests on push to main |
| [ ] | 7.4 Add coverage reporting | Upload coverage to service (Codecov/Coveralls) |
| [ ] | 7.5 Add coverage badge | Add badge to README.md |

---

## Progress Summary

| Phase | Total Tasks | Completed | Progress |
|-------|-------------|-----------|----------|
| Phase 1: Infrastructure | 8 | 0 | 0% |
| Phase 2: Unit Tests | 4 | 0 | 0% |
| Phase 3: High Priority | 26 | 0 | 0% |
| Phase 4: Medium Priority | 11 | 0 | 0% |
| Phase 5: Lower Priority | 9 | 0 | 0% |
| Phase 6: E2E Tests | 14 | 0 | 0% |
| Phase 7: CI/CD | 5 | 0 | 0% |
| **Total** | **77** | **0** | **0%** |

---

## Notes

### Testing Best Practices
- Write tests that verify behavior, not implementation
- Use meaningful test descriptions
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies and timers
- Test edge cases and error states

### File Naming Convention
- Unit tests: `*.test.ts`
- Component tests: `*.test.tsx`
- E2E tests: `*.spec.ts`

### Test Location
```
__tests__/
├── components/          # Component tests
├── utils/              # Utility function tests
└── e2e/                # Playwright E2E tests
```

---

## References

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Next.js](https://nextjs.org/docs/testing)
