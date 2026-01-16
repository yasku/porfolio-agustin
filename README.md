# Agustin Yaskuloski - AI Developer Portfolio

A unique dark-themed terminal/Unix-style portfolio website built with Next.js 15, featuring an interactive command-line interface.

## 🚀 Features

- **Interactive Terminal Interface** - Fully functional terminal with command history and autocomplete
- **Unix/Linux Aesthetic** - Authentic terminal design with CRT effects and scanlines
- **Dark Theme** - Eye-friendly dark color scheme with terminal green accents
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **System Monitor** - Real-time simulated CPU and memory usage display
- **Quick Access Panel** - Easy navigation through portfolio sections
- **Keyboard Shortcuts** - Ctrl+L to clear, Ctrl+C to cancel, Arrow keys for history

## 🎮 Available Commands

Type these commands in the terminal:

- `help` - Show all available commands
- `about` - Learn more about Agustin
- `skills` - View technical skills and expertise
- `projects` - See portfolio projects
- `experience` - View work history
- `contact` - Get contact information
- `whoami` - Display current user
- `ls` - List available sections
- `cat [file]` - Read file content (try: `cat resume.txt`)
- `clear` - Clear terminal screen

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** JetBrains Mono (monospace)
- **Animations:** Custom CSS keyframes and Tailwind animations

## 🎨 Design Features

- **CRT Effect:** Authentic retro monitor flicker
- **Scanline Animation:** Moving scanline for realistic terminal feel
- **Custom Scrollbar:** Terminal-themed scrollbar
- **Glitch Effects:** Subtle glitch animations on text
- **Blinking Cursor:** Classic terminal cursor animation
- **Color Scheme:** Terminal green, cyan, yellow, purple accents

## 📦 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles and animations
├── components/
│   ├── Terminal.tsx     # Interactive terminal component
│   ├── Header.tsx       # Top navigation bar
│   ├── ASCIIBanner.tsx  # ASCII art banner
│   ├── SystemStats.tsx  # System monitor widget
│   └── QuickLinks.tsx   # Quick access navigation
└── tailwind.config.ts   # Tailwind configuration
```

## 🚀 Getting Started

The development server is managed automatically by the platform.

## 🎯 Customization

To customize this portfolio for yourself:

1. **Update Personal Info** - Edit the Terminal.tsx commands (about, skills, experience, etc.)
2. **Change Colors** - Modify the terminal color scheme in tailwind.config.ts
3. **Add Commands** - Extend the commands object in Terminal.tsx
4. **Update Links** - Change social media links in Header.tsx and page.tsx
5. **Modify ASCII Art** - Create your own ASCII banner in ASCIIBanner.tsx

## 🌟 Key Components

### Terminal Component
- Command history with arrow key navigation
- Real-time command execution
- Auto-scrolling terminal output
- Support for multiple command types

### System Stats
- Simulated CPU and memory monitoring
- Uptime counter
- System information display

### Quick Links
- One-click access to portfolio sections
- Visual command reference
- Smooth scrolling to terminal

## 📝 License

This project is open source and available for personal use.

## 👨‍💻 Author

**Agustin Yaskuloski**
- AI Developer & Engineer
- Specializing in Machine Learning, Deep Learning, and NLP

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS
