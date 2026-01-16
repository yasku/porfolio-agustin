'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full border-b border-terminal-border bg-terminal-bg/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center gap-3">
            <div className="text-terminal-green text-xl font-bold">
              <span className="text-terminal-blue">$</span> agustin
              <span className="animate-blink text-terminal-green">_</span>
            </div>
          </div>

          {/* System Info */}
          <div className="hidden md:flex items-center gap-6 text-xs text-terminal-text">
            <div className="flex items-center gap-2">
              <span className="text-terminal-yellow">●</span>
              <span>System: Linux 6.1.0</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-terminal-green">●</span>
              <span>Status: Online</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-terminal-cyan">●</span>
              <span>{time.toLocaleTimeString()}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-text hover:text-terminal-green transition-colors"
            >
              [GitHub]
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-text hover:text-terminal-blue transition-colors"
            >
              [LinkedIn]
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
