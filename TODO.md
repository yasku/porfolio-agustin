# TODO - Test Coverage Implementation Plan

> **Project:** Agustin Yaskuloski Portfolio
> **Created:** 2026-01-18
> **Last Updated:** 2026-01-18
> **Status:** In Progress - Phase 5 Complete

---

## Overview

This document tracks the implementation of comprehensive test coverage for the portfolio project. The plan is organized into phases, with tasks prioritized by impact and complexity.

**IMPORTANT:** After completing each phase, update CHANGELOG.md with the changes made.

### Current Test Coverage: ~8% (31 tests passing)

### Target Test Coverage: 80%+

---

## Phase 1: Testing Infrastructure Setup ✅ COMPLETED

> **Goal:** Set up testing frameworks and configuration files
> **Status:** 8/8 tasks completed

| Status | Task | Description |
|--------|------|-------------|
| [x] | 1.1 Install Vitest | Add Vitest as the unit/component test runner |
| [x] | 1.2 Install React Testing Library | Add @testing-library/react and related packages |
| [x] | 1.3 Install Playwright | Add Playwright for E2E testing |
| [x] | 1.4 Create Vitest config | Configure vitest.config.ts for Next.js |
| [x] | 1.5 Create test setup file | Configure vitest.setup.ts with RTL matchers |
| [x] | 1.6 Create Playwright config | Configure playwright.config.ts |
| [x] | 1.7 Update package.json | Add test scripts (test, test:ui, test:e2e, test:coverage) |
| [x] | 1.8 Create test utilities | Add test helpers and mock utilities |

**Installed packages:**
```bash
# Unit/Component Testing
vitest @vitejs/plugin-react jsdom
@testing-library/react @testing-library/jest-dom @testing-library/user-event

# E2E Testing
@playwright/test
```

**Available test scripts:**
```bash
npm test           # Run Vitest in watch mode
npm run test:run   # Run Vitest once
npm run test:ui    # Run Vitest with UI
npm run test:coverage  # Run with coverage report
npm run test:e2e   # Run Playwright E2E tests
npm run test:e2e:ui    # Run Playwright with UI
npm run test:e2e:install  # Install Playwright browsers
```

---

## Phase 2: Unit Tests - Utility Functions ✅ COMPLETED

> **Goal:** Test pure functions that can be extracted from components
> **Status:** 4/4 tasks completed

| Status | Task | Description |
|--------|------|-------------|
| [x] | 2.1 Extract formatUptime utility | Move formatUptime from SystemStats to utils/ |
| [x] | 2.2 Test formatUptime | Test edge cases: 0s, 59s, 60s, 3600s, large values |
| [x] | 2.3 Extract command parser | Extract command parsing logic from Terminal |
| [x] | 2.4 Test command parser | Test command + args splitting, edge cases |

---

## Phase 3: Component Tests - High Priority ✅ COMPLETED

> **Goal:** Test the most complex interactive components
> **Status:** 26/26 tasks completed
> **ESSENTIAL:** Update CHANGELOG.md after completing this phase

### 3.1 Terminal Component Tests ✅ COMPLETED

| Status | Task | Description |
|--------|------|-------------|
| [x] | 3.1.1 Test initial render | Verify welcome message and prompt display |
| [x] | 3.1.2 Test help command | Verify help output contains all commands |
| [x] | 3.1.3 Test about command | Verify about output content |
| [x] | 3.1.4 Test skills command | Verify skills output content |
| [x] | 3.1.5 Test projects command | Verify projects output content |
| [x] | 3.1.6 Test experience command | Verify experience output content |
| [x] | 3.1.7 Test contact command | Verify contact output content |
| [x] | 3.1.8 Test whoami command | Verify whoami output |
| [x] | 3.1.9 Test ls command | Verify ls output shows file listing |
| [x] | 3.1.10 Test clear command | Verify history is cleared |
| [x] | 3.1.11 Test cat resume.txt | Verify resume content displayed |
| [x] | 3.1.12 Test cat invalid file | Verify error message for unknown file |
| [x] | 3.1.13 Test cat without args | Verify usage message displayed |
| [x] | 3.1.14 Test unknown command | Verify "Command not found" message |
| [x] | 3.1.15 Test empty input | Verify no action on empty Enter |
| [x] | 3.1.16 Test ArrowUp navigation | Verify previous command recalled |
| [x] | 3.1.17 Test ArrowDown navigation | Verify next command in history |
| [x] | 3.1.18 Test Ctrl+L shortcut | Verify terminal cleared |
| [x] | 3.1.19 Test Ctrl+C shortcut | Verify input cleared |
| [x] | 3.1.20 Test onCommandEnter callback | Verify callback called with command |
| [x] | 3.1.21 Test auto-scroll behavior | Verify scroll to bottom on new output |

### 3.2 SystemStats Component Tests ✅ COMPLETED

| Status | Task | Description |
|--------|------|-------------|
| [x] | 3.2.1 Test initial render | Verify component renders with stats |
| [x] | 3.2.2 Test progress bars | Verify CPU and memory bars render |
| [x] | 3.2.3 Test uptime display | Verify uptime format is correct |
| [x] | 3.2.4 Test timer updates | Verify values update on interval (mock timers) |
| [x] | 3.2.5 Test cleanup | Verify interval cleared on unmount |

---

## Phase 4: Component Tests - Medium Priority ✅ COMPLETED

> **Goal:** Test interactive components with callbacks
> **Status:** 11/11 tasks completed
> **ESSENTIAL:** Update CHANGELOG.md after completing this phase

### 4.1 Header Component Tests ✅ COMPLETED

| Status | Task | Description |
|--------|------|-------------|
| [x] | 4.1.1 Test render | Verify header renders with logo |
| [x] | 4.1.2 Test time display | Verify time updates every second |
| [x] | 4.1.3 Test GitHub link | Verify correct href and target |
| [x] | 4.1.4 Test LinkedIn link | Verify correct href and target |
| [x] | 4.1.5 Test responsive hiding | Verify system info hidden on mobile |

### 4.2 QuickLinks Component Tests ✅ COMPLETED

| Status | Task | Description |
|--------|------|-------------|
| [x] | 4.2.1 Test render | Verify all 5 links render |
| [x] | 4.2.2 Test about click | Verify onCommandClick('about') called |
| [x] | 4.2.3 Test skills click | Verify onCommandClick('skills') called |
| [x] | 4.2.4 Test projects click | Verify onCommandClick('projects') called |
| [x] | 4.2.5 Test experience click | Verify onCommandClick('experience') called |
| [x] | 4.2.6 Test contact click | Verify onCommandClick('contact') called |

---

## Phase 5: Component Tests - Lower Priority ✅ COMPLETED

> **Goal:** Test simple presentational components
> **Status:** 9/9 tasks completed
> **ESSENTIAL:** Update CHANGELOG.md after completing this phase

### 5.1 MacTerminal Component Tests ✅ COMPLETED

| Status | Task | Description |
|--------|------|-------------|
| [x] | 5.1.1 Test default title | Verify "terminal" as default title |
| [x] | 5.1.2 Test custom title | Verify custom title renders |
| [x] | 5.1.3 Test children render | Verify children displayed in container |
| [x] | 5.1.4 Test traffic light buttons | Verify aria-labels present |

### 5.2 TerminalPrompt Component Tests ✅ COMPLETED

| Status | Task | Description |
|--------|------|-------------|
| [x] | 5.2.1 Test default path | Verify ~ renders when no path |
| [x] | 5.2.2 Test custom path | Verify custom path renders correctly |
| [x] | 5.2.3 Test prompt format | Verify "agustin@portfolio:path$" format |

### 5.3 ASCIIBanner Component Tests ✅ COMPLETED

| Status | Task | Description |
|--------|------|-------------|
| [x] | 5.3.1 Test render | Verify banner renders without errors |

### 5.4 HeroSection Component Tests ✅ COMPLETED

| Status | Task | Description |
|--------|------|-------------|
| [x] | 5.4.1 Test render | Verify hero section renders |

---

## Phase 6: E2E Tests

> **Goal:** Test complete user workflows with Playwright
> **Note:** Run `npm run test:e2e:install` to install browsers before running E2E tests
> **ESSENTIAL:** Update CHANGELOG.md after completing this phase

### 6.1 Terminal Workflow Tests

| Status | Task | Description |
|--------|------|-------------|
| [ ] | 6.1.1 Test homepage load | Verify terminal visible on homepage |
| [ ] | 6.1.2 Test type and execute | Type "help" → press Enter → see output |
| [ ] | 6.1.3 Test command history | Type commands → ArrowUp recalls them |
| [ ] | 6.1.4 Test all commands E2E | Execute each command, verify output |

### 6.2 Navigation Tests (Scaffolded)

| Status | Task | Description |
|--------|------|-------------|
| [~] | 6.2.1 Test /about page | Navigate and verify content loads |
| [~] | 6.2.2 Test /skills page | Navigate and verify content loads |
| [~] | 6.2.3 Test /projects page | Navigate and verify content loads |
| [~] | 6.2.4 Test /experience page | Navigate and verify content loads |
| [~] | 6.2.5 Test /contact page | Navigate and verify content loads |
| [~] | 6.2.6 Test 404 page | Navigate to invalid route, verify 404 |

> [~] = Test scaffolded in `__tests__/e2e/navigation.spec.ts`, needs browser install to run

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
> **ESSENTIAL:** Update CHANGELOG.md after completing this phase

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
| Phase 1: Infrastructure | 8 | 8 | 100% ✅ |
| Phase 2: Unit Tests | 4 | 4 | 100% ✅ |
| Phase 3: High Priority | 26 | 26 | 100% ✅ |
| Phase 4: Medium Priority | 11 | 11 | 100% ✅ |
| Phase 5: Lower Priority | 9 | 9 | 100% ✅ |
| Phase 6: E2E Tests | 14 | 0 | 0% (6 scaffolded) |
| Phase 7: CI/CD | 5 | 0 | 0% |
| **Total** | **77** | **58** | **75%** |

---

## Test Results

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
```

---

## Files Created

```
/
├── vitest.config.ts           # Vitest configuration
├── vitest.setup.ts            # Test setup with RTL matchers
├── playwright.config.ts       # Playwright E2E configuration
├── utils/
│   ├── formatUptime.ts        # Extracted utility function
│   └── parseCommand.ts        # Command parser utility function
└── __tests__/
    ├── test-utils.tsx         # Custom render and helpers
    ├── components/
    │   ├── TerminalPrompt.test.tsx  # Prompt component tests (3 tests)
    │   ├── Terminal.test.tsx        # Terminal component tests (30 tests)
    │   ├── SystemStats.test.tsx     # SystemStats component tests (26 tests)
    │   ├── Header.test.tsx          # Header component tests (19 tests)
    │   ├── QuickLinks.test.tsx      # QuickLinks component tests (18 tests)
    │   ├── MacTerminal.test.tsx     # MacTerminal component tests (20 tests)
    │   ├── ASCIIBanner.test.tsx     # ASCIIBanner component tests (24 tests)
    │   └── HeroSection.test.tsx     # HeroSection component tests (38 tests)
    ├── utils/
    │   ├── formatUptime.test.ts     # Uptime formatter tests (8 tests)
    │   └── parseCommand.test.ts     # Command parser tests (20 tests)
    └── e2e/
        └── navigation.spec.ts       # E2E navigation tests (scaffolded)
```

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
