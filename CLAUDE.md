# CLAUDE.md - AI Assistant Guide

> **Last Updated:** 2026-01-18
> **Project:** Agustin Yaskuloski Portfolio
> **Type:** Next.js 15 Terminal-Style Portfolio Website

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Architecture & Patterns](#architecture--patterns)
5. [Design System](#design-system)
6. [Development Workflow](#development-workflow)
7. [Code Conventions](#code-conventions)
8. [Component Guidelines](#component-guidelines)
9. [Common Tasks](#common-tasks)
10. [Important Notes for AI Assistants](#important-notes-for-ai-assistants)

---

## Project Overview

This is a **terminal-themed portfolio website** for Agustin Yaskuloski, an AI Developer & Engineer. The site features:

- **Interactive terminal interface** with working commands
- **Unix/Linux aesthetic** with CRT monitor effects
- **Retro terminal design** with scanlines and authentic typography
- **Multiple dedicated pages** for About, Skills, Projects, Experience, and Contact
- **macOS-style terminal windows** using custom components
- **Dark theme** with terminal green, cyan, blue, yellow, and purple accents

### Key Features

- Fully functional command-line interface on home page
- Command history navigation (arrow keys)
- Real-time simulated system stats (CPU, memory, uptime)
- Responsive design (mobile, tablet, desktop)
- Keyboard shortcuts (Ctrl+L to clear, Ctrl+C to cancel)
- Custom CRT/scanline visual effects
- ASCII art banner with boot messages

---

## Tech Stack

### Core Framework
- **Next.js 15.1.0** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5.7.2** - Type safety

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.4.49** - CSS processing
- **Autoprefixer 10.4.20** - CSS vendor prefixing
- **JetBrains Mono** - Primary monospace font (via Google Fonts)

### Development Tools
- **ESLint 9.17.0** - Linting
- **eslint-config-next 15.1.0** - Next.js specific linting rules
- **TypeScript strict mode** - Enabled for type safety

### Configuration
- **Typed Routes** - Experimental Next.js feature enabled
- **Strict TypeScript** - All strict options enabled
- **Path Aliases** - `@/*` maps to project root

---

## Project Structure

```
porfolio-agustin/
├── app/                          # Next.js App Router pages
│   ├── about/
│   │   └── page.tsx             # About page (/about)
│   ├── skills/
│   │   └── page.tsx             # Skills page (/skills)
│   ├── projects/
│   │   └── page.tsx             # Projects page (/projects)
│   ├── experience/
│   │   └── page.tsx             # Experience page (/experience)
│   ├── contact/
│   │   └── page.tsx             # Contact page (/contact)
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page with terminal
│   ├── loading.tsx              # Loading screen
│   ├── not-found.tsx            # 404 page
│   └── globals.css              # Global styles, animations, CRT effects
│
├── components/                   # React components
│   ├── Terminal.tsx             # Interactive terminal component
│   ├── MacTerminal.tsx          # macOS window wrapper
│   ├── TerminalPrompt.tsx       # Reusable bash prompt
│   ├── Header.tsx               # Top navigation bar
│   ├── ASCIIBanner.tsx          # ASCII art banner
│   ├── HeroSection.tsx          # Hero section component
│   ├── SystemStats.tsx          # System monitor widget
│   └── QuickLinks.tsx           # Quick access navigation
│
├── assets/                       # Static assets
│   └── *.png                    # Image files
│
├── public/                       # Public static files
│   └── uploads/                 # User uploads
│
├── scripts/                      # Build/dev scripts
│   └── run-dev.js               # Custom dev server script
│
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and scripts
├── .gitignore                   # Git ignore rules
├── README.md                    # User-facing documentation
├── FEATURES.md                  # Features documentation
├── ENHANCEMENTS.md              # Enhancement details
└── CLAUDE.md                    # This file - AI assistant guide
```

### Key Directories Explained

- **`/app`** - Next.js 15 App Router. Each folder is a route. `page.tsx` is the page component.
- **`/components`** - Reusable React components. All use TypeScript and Tailwind.
- **`/public`** - Static assets served from root URL path.
- **`/scripts`** - Custom Node.js scripts for development/build tasks.

---

## Architecture & Patterns

### Next.js App Router

This project uses **Next.js 15 App Router** (not Pages Router):
- Routes are defined by folder structure in `/app`
- `page.tsx` files are route components
- `layout.tsx` wraps pages with common UI
- Server Components by default, Client Components use `'use client'`

### Component Patterns

#### Client vs Server Components

**Client Components** (use `'use client'` directive):
- `Terminal.tsx` - Uses state, effects, refs
- `SystemStats.tsx` - Uses setInterval, state
- All interactive components with hooks

**Server Components** (default):
- Most page components (`/app/*/page.tsx`)
- Layout components
- Static content components

### State Management

- **Local component state** - `useState` for UI state
- **Refs** - `useRef` for DOM manipulation and non-reactive values
- **Effects** - `useEffect` for side effects (auto-scroll, intervals)
- **No global state library** - Not needed for this project

### Styling Approach

1. **Tailwind utility classes** - Primary styling method
2. **CSS custom properties** - Color theme variables in `globals.css`
3. **Keyframe animations** - Defined in both `globals.css` and `tailwind.config.ts`
4. **Inline styles** - Only for dynamic values (e.g., progress bar widths)

---

## Design System

### Color Palette

Defined in `tailwind.config.ts` and `globals.css`:

```typescript
terminal: {
  bg: '#0a0e14',         // Deep dark blue background
  border: '#1a1f29',     // Subtle dark gray borders
  text: '#d4d4d4',       // Light gray text
  green: '#00ff41',      // Matrix-style green (commands, success)
  blue: '#61afef',       // Soft blue (usernames, info)
  yellow: '#e5c07b',     // Warm yellow (warnings, highlights)
  red: '#e06c75',        // Muted red (errors)
  purple: '#c678dd',     // Soft purple (directories)
  cyan: '#56b6c2',       // Bright cyan (timestamps, links)
}
```

### Section Color Coding

Each portfolio section has a dedicated color:

| Section    | Color  | Tailwind Class    | Hex Code |
|------------|--------|-------------------|----------|
| About      | Cyan   | `terminal-cyan`   | #56b6c2  |
| Skills     | Green  | `terminal-green`  | #00ff41  |
| Projects   | Blue   | `terminal-blue`   | #61afef  |
| Experience | Yellow | `terminal-yellow` | #e5c07b  |
| Contact    | Purple | `terminal-purple` | #c678dd  |

### Typography

- **Font Family:** `JetBrains Mono` (primary), `Fira Code`, `Consolas`, `Monaco` (fallbacks)
- **Base Size:** 14px
- **Line Height:** 1.6
- **Weight Range:** 300-700 (defined in Google Fonts import)

### Animations

Defined in `tailwind.config.ts` and `globals.css`:

1. **Blink** - Cursor blinking (1s interval)
2. **Scanline** - Vertical CRT scanline (8s loop)
3. **Flicker** - CRT screen flicker effect
4. **Glitch** - Text glitch effect (2.5-3s)
5. **FadeIn** - Smooth element appearance (0.5s)
6. **Typewriter** - Typing text effect (2s)

### Component Patterns

#### MacTerminal Window

```tsx
<MacTerminal title="filename.sh">
  <div className="p-6">
    <TerminalPrompt path="~/section" />
    {/* Content */}
  </div>
</MacTerminal>
```

#### Terminal Prompt

```tsx
<TerminalPrompt path="~/about" />
// Renders: agustin@portfolio:~/about$
```

#### Progress Bar

```tsx
<div className="w-full bg-terminal-border h-2 rounded-full overflow-hidden">
  <div className="bg-terminal-green h-full transition-all duration-1000"
       style={{ width: '85%' }}>
  </div>
</div>
```

---

## Development Workflow

### Available Scripts

```bash
npm run dev        # Start development server (uses scripts/run-dev.js)
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

### Development Server

- Custom dev script: `scripts/run-dev.js`
- Runs on default Next.js port (typically 3000)
- Hot reload enabled
- TypeScript type checking on save

### Building for Production

```bash
npm run build      # Creates optimized production build in .next/
npm start          # Serves production build
```

### File Watching

Next.js automatically watches:
- All files in `/app` directory
- All files in `/components` directory
- `tailwind.config.ts`
- `next.config.js`

### TypeScript Checking

- **Strict mode enabled** - All strict TypeScript options on
- **No implicit any** - Must type all variables
- **Strict null checks** - Handle null/undefined explicitly
- **Force consistent casing** - File names must match imports

---

## Code Conventions

### TypeScript Guidelines

1. **Always use TypeScript** - No `.js` or `.jsx` files
2. **Use interfaces for props**:
   ```typescript
   interface TerminalProps {
     onCommandEnter?: (command: string) => void;
   }
   ```
3. **Type all state**:
   ```typescript
   const [input, setInput] = useState<string>('');
   const [history, setHistory] = useState<Array<{ type: 'command' | 'output'; text: string }>>([]);
   ```
4. **Use React types**:
   ```typescript
   import type { ReactNode } from 'react';
   import type { Metadata } from 'next';
   ```

### React Conventions

1. **Functional components only** - No class components
2. **Named exports for components** - `export default function ComponentName()`
3. **Client components explicitly marked**:
   ```typescript
   'use client';

   import { useState } from 'react';
   ```
4. **Server components by default** - No `'use client'` unless needed

### Naming Conventions

- **Components:** PascalCase (`Terminal.tsx`, `MacTerminal.tsx`)
- **Files:** kebab-case for routes (`about/page.tsx`), PascalCase for components
- **Variables:** camelCase (`commandHistory`, `historyIndex`)
- **Constants:** UPPER_SNAKE_CASE or camelCase depending on usage
- **CSS Classes:** Tailwind utilities or kebab-case

### File Organization

1. **Imports order**:
   ```typescript
   // 1. React/Next.js imports
   import { useState, useEffect } from 'react';
   import type { Metadata } from 'next';

   // 2. Third-party imports
   // (none in this project currently)

   // 3. Local components
   import Terminal from '@/components/Terminal';

   // 4. Types/Interfaces
   interface Props { ... }
   ```

2. **Component structure**:
   ```typescript
   'use client'; // if needed

   // Imports

   // Types/Interfaces

   // Main component
   export default function Component() {
     // State
     // Refs
     // Effects
     // Event handlers
     // Helper functions
     // Render
   }
   ```

### Styling Conventions

1. **Prefer Tailwind utilities** over custom CSS
2. **Use terminal color classes** from config:
   ```typescript
   className="text-terminal-green bg-terminal-bg border-terminal-border"
   ```
3. **Responsive design**:
   ```typescript
   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
   ```
4. **Hover states**:
   ```typescript
   className="hover:scale-105 hover:border-terminal-green transition-all"
   ```

---

## Component Guidelines

### Terminal Component (`components/Terminal.tsx`)

**Purpose:** Interactive command-line interface on home page

**Key Features:**
- Command history with arrow key navigation
- Auto-scroll to bottom on new output
- Keyboard shortcuts (Ctrl+L, Ctrl+C)
- Customizable commands via `commands` object

**Adding New Commands:**

```typescript
const commands: Record<string, () => void> = {
  newcommand: () => {
    addOutput([
      'Line 1 of output',
      'Line 2 of output',
      '',  // Empty line for spacing
    ]);
  },
};
```

**State Structure:**
- `input` - Current input text
- `history` - Array of `{ type: 'command' | 'output', text: string }`
- `commandHistory` - Array of previously entered commands
- `historyIndex` - Current position in command history

### MacTerminal Component (`components/MacTerminal.tsx`)

**Purpose:** macOS-style window wrapper for content

**Props:**
```typescript
interface MacTerminalProps {
  children: ReactNode;
  title?: string;        // Window title (default: "terminal")
}
```

**Usage:**
```tsx
<MacTerminal title="about.sh">
  <div className="p-6">
    {/* Your content */}
  </div>
</MacTerminal>
```

### TerminalPrompt Component (`components/TerminalPrompt.tsx`)

**Purpose:** Reusable bash-style prompt display

**Props:**
```typescript
interface TerminalPromptProps {
  path?: string;         // Directory path (default: "~")
}
```

**Output Format:** `agustin@portfolio:~/path$`

### SystemStats Component (`components/SystemStats.tsx`)

**Purpose:** Simulated system monitoring widget

**Features:**
- Animated CPU usage (random 40-80%)
- Animated memory usage (random 50-70%)
- Live uptime counter
- System information display

**Uses `setInterval`** - Requires `'use client'`

---

## Common Tasks

### Adding a New Page

1. Create folder in `/app`:
   ```bash
   mkdir app/newpage
   ```

2. Create `page.tsx`:
   ```tsx
   import MacTerminal from '@/components/MacTerminal';
   import TerminalPrompt from '@/components/TerminalPrompt';

   export default function NewPage() {
     return (
       <div className="min-h-screen p-4 md:p-8">
         <MacTerminal title="newpage.sh">
           <div className="p-6">
             <TerminalPrompt path="~/newpage" />
             <div className="mt-4 space-y-4">
               {/* Content */}
             </div>
           </div>
         </MacTerminal>
       </div>
     );
   }
   ```

3. Add navigation link where appropriate

### Updating Personal Information

**Location: `components/Terminal.tsx`**

Update the command outputs in the `commands` object:
- `about` - Personal introduction
- `skills` - Technical skills
- `projects` - Portfolio projects
- `experience` - Work history
- `contact` - Contact details

**Location: Individual page files**

Update content in:
- `/app/about/page.tsx`
- `/app/skills/page.tsx`
- `/app/projects/page.tsx`
- `/app/experience/page.tsx`
- `/app/contact/page.tsx`

### Modifying Color Scheme

**Primary location: `tailwind.config.ts`**

```typescript
terminal: {
  green: '#00ff41',     // Change this
  blue: '#61afef',      // Change this
  // ... etc
}
```

**Also update: `app/globals.css`**

```css
:root {
  --terminal-green: #00ff41;
  --terminal-blue: #61afef;
  /* ... etc */
}
```

### Adding a New Component

1. Create file in `/components`:
   ```bash
   touch components/NewComponent.tsx
   ```

2. Basic structure:
   ```tsx
   'use client';  // Only if using hooks/state

   interface NewComponentProps {
     // Props here
   }

   export default function NewComponent({ /* props */ }: NewComponentProps) {
     return (
       <div className="...">
         {/* Component JSX */}
       </div>
     );
   }
   ```

3. Import where needed:
   ```tsx
   import NewComponent from '@/components/NewComponent';
   ```

### Customizing Animations

**Location: `tailwind.config.ts`**

Add to `theme.extend.animation`:
```typescript
animation: {
  'new-animation': 'keyframeName 2s ease-in-out infinite',
}
```

Add to `theme.extend.keyframes`:
```typescript
keyframes: {
  keyframeName: {
    '0%': { /* styles */ },
    '100%': { /* styles */ },
  }
}
```

Use in components:
```tsx
<div className="animate-new-animation">...</div>
```

---

## Important Notes for AI Assistants

### When Working on This Project

1. **Always preserve the terminal aesthetic** - This is the core theme of the project
2. **Use TypeScript strictly** - No type assertions unless absolutely necessary
3. **Follow existing component patterns** - Use MacTerminal and TerminalPrompt for new pages
4. **Maintain color consistency** - Use the defined terminal color palette
5. **Keep it responsive** - All changes must work on mobile, tablet, and desktop
6. **Test keyboard shortcuts** - Terminal functionality relies on keyboard interaction

### Code Quality Standards

1. **No unused imports** - Clean up all imports
2. **No console.logs** - Remove debugging code before committing
3. **Proper TypeScript types** - Don't use `any` unless absolutely necessary
4. **Semantic HTML** - Use appropriate HTML elements
5. **Accessibility** - Maintain keyboard navigation and focus management

### Common Pitfalls to Avoid

1. **Don't break Client/Server component boundaries**
   - Client components can't directly import Server components as children
   - Server components can't use hooks or browser APIs

2. **Don't forget `'use client'`** when using:
   - `useState`, `useEffect`, `useRef`
   - Event handlers (`onClick`, `onChange`, etc.)
   - Browser APIs (`window`, `document`, `localStorage`)

3. **Don't hardcode values that should be dynamic**
   - Use props or state for values that might change
   - Use environment variables for config

4. **Don't break the monospace font aesthetic**
   - All text should use JetBrains Mono or monospace fallbacks
   - Preserve terminal-style formatting

### Before Making Changes

1. **Read existing code** - Understand the current implementation
2. **Check similar components** - Follow established patterns
3. **Test thoroughly** - Check all breakpoints and interactions
4. **Verify TypeScript** - No type errors should exist
5. **Run lint** - `npm run lint` should pass

### When Adding Features

1. **Keep it simple** - Don't over-engineer
2. **Match the aesthetic** - Terminal theme is paramount
3. **Document complex logic** - Add comments for non-obvious code
4. **Update this file** - If you add significant patterns, document them here

### File Modification Guidelines

- **Always read files before editing** - Use Read tool first
- **Preserve formatting** - Match existing indentation and style
- **Update metadata** - Change "Last Updated" date at top of this file when making significant changes
- **Test builds** - Run `npm run build` to verify production builds work

### Terminal Command Guidelines

When adding new terminal commands in `Terminal.tsx`:

1. **Keep output concise** - Terminal screen space is limited
2. **Use box-drawing characters** - Match existing command output style
3. **Maintain color coding** - Use terminal color classes appropriately
4. **Add to help command** - Document new commands in the help output

### Responsive Design Breakpoints

Follow Tailwind's default breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

Most layouts use: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## Project-Specific Context

### This is a Portfolio Site

**Key Points:**
- All content is about Agustin Yaskuloski (AI Developer)
- Projects listed are placeholder examples
- Contact information is placeholder
- When updating, respect the personal branding

### Terminal Theme is Core to Identity

**Do Not:**
- Remove CRT effects or scanlines
- Change to a light theme
- Replace monospace fonts
- Remove terminal command functionality

**Do:**
- Enhance terminal features
- Add more commands if useful
- Improve terminal UX
- Maintain retro aesthetic

### Performance Considerations

- **Keep bundle size small** - Avoid heavy dependencies
- **Use dynamic imports** - For large components if needed
- **Optimize images** - Use Next.js Image component for photos
- **Minimize client components** - Use server components where possible

---

## Additional Resources

- **Next.js 15 Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/
- **React 19 Docs:** https://react.dev/

---

## Questions?

If you need clarification on any part of the codebase:

1. Check existing implementations in `/components` and `/app`
2. Review `README.md` for user-facing features
3. Check `FEATURES.md` for detailed feature list
4. Review `ENHANCEMENTS.md` for recent changes and v2.0 updates
5. Examine the code directly - it's well-structured and readable

---

**Remember:** This project values simplicity, aesthetics, and the terminal theme above all else. When in doubt, keep it simple and keep it terminal-styled.

**Last Updated:** 2026-01-18 by Claude (AI Assistant)
