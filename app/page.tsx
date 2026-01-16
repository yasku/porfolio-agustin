'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Terminal from '@/components/Terminal';
import SystemStats from '@/components/SystemStats';
import QuickLinks from '@/components/QuickLinks';
import MacTerminal from '@/components/MacTerminal';

export default function Home() {
  const terminalRef = useRef<HTMLDivElement>(null);

  const executeCommand = (command: string) => {
    // Scroll to terminal when quick link is clicked
    if (terminalRef.current) {
      terminalRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    {
      title: 'About Me',
      path: '/about',
      icon: '👨‍💻',
      description: 'Learn about my background and passion for AI',
      color: 'terminal-cyan',
    },
    {
      title: 'Skills',
      path: '/skills',
      icon: '⚡',
      description: 'Explore my technical expertise and tools',
      color: 'terminal-green',
    },
    {
      title: 'Projects',
      path: '/projects',
      icon: '🚀',
      description: 'Discover my portfolio and contributions',
      color: 'terminal-blue',
    },
    {
      title: 'Experience',
      path: '/experience',
      icon: '💼',
      description: 'View my professional journey',
      color: 'terminal-yellow',
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: '📧',
      description: 'Get in touch for opportunities',
      color: 'terminal-purple',
    },
  ];

  return (
    <div className="min-h-screen bg-terminal-bg">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <MacTerminal title="portfolio.tsx">
            <div className="p-8 md:p-12">
              <HeroSection />
            </div>
          </MacTerminal>
        </section>

        {/* Sections Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-terminal-cyan mb-6 font-mono flex items-center gap-2">
            <span className="text-terminal-green">$</span>
            Explore Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section) => (
              <Link
                key={section.path}
                href={section.path}
                className="bg-terminal-border hover:bg-opacity-80 border-2 border-terminal-border hover:border-terminal-green rounded-lg p-6 transition-all hover:scale-105 group"
              >
                <div className="text-4xl mb-3">{section.icon}</div>
                <h3 className="text-xl font-bold text-terminal-green mb-2 group-hover:underline">
                  {section.title}
                </h3>
                <p className="text-terminal-text text-sm opacity-70 mb-3">
                  {section.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-terminal-text opacity-50">
                  <span>View details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Terminal - Takes 2 columns */}
          <div ref={terminalRef} className="lg:col-span-2">
            <Terminal />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Stats */}
            <SystemStats />

            {/* Quick Links */}
            <QuickLinks onCommandClick={executeCommand} />

            {/* Additional Info Card */}
            <MacTerminal title="session-info.sh">
              <div className="p-4 font-mono text-xs">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-terminal-purple">●</span>
                  <h3 className="text-terminal-cyan font-bold">SESSION INFO</h3>
                </div>
                <div className="space-y-2 text-terminal-text">
                  <div className="flex justify-between">
                    <span>User:</span>
                    <span className="text-terminal-green">visitor</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shell:</span>
                    <span className="text-terminal-cyan">bash</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Theme:</span>
                    <span className="text-terminal-purple">dark-terminal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span className="text-terminal-yellow">v2.0.0</span>
                  </div>
                </div>
              </div>
            </MacTerminal>
          </div>
        </div>

        {/* Featured Technologies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-terminal-cyan mb-6 font-mono flex items-center gap-2">
            <span className="text-terminal-green">$</span>
            Tech Stack
          </h2>
          <MacTerminal title="technologies.sh">
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {[
                  { name: 'Python', color: 'terminal-green' },
                  { name: 'TensorFlow', color: 'terminal-blue' },
                  { name: 'PyTorch', color: 'terminal-cyan' },
                  { name: 'React', color: 'terminal-purple' },
                  { name: 'Next.js', color: 'terminal-green' },
                  { name: 'TypeScript', color: 'terminal-blue' },
                  { name: 'Docker', color: 'terminal-cyan' },
                  { name: 'AWS', color: 'terminal-yellow' },
                  { name: 'Kubernetes', color: 'terminal-green' },
                  { name: 'FastAPI', color: 'terminal-blue' },
                  { name: 'PostgreSQL', color: 'terminal-cyan' },
                  { name: 'Redis', color: 'terminal-red' },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className={`bg-terminal-border hover:bg-terminal-green/20 border border-terminal-border hover:border-terminal-green rounded px-3 py-2 text-center text-sm text-terminal-text transition-all hover:scale-105 cursor-default`}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </MacTerminal>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-terminal-text text-sm opacity-70 pb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-terminal-green">●</span>
            <span>Built with Next.js 15, TypeScript & Tailwind CSS</span>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terminal-green transition-colors"
            >
              GitHub
            </a>
            <span className="text-terminal-border">|</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-terminal-blue transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-terminal-border">|</span>
            <a
              href="mailto:agustin.yaskuloski@email.com"
              className="hover:text-terminal-cyan transition-colors"
            >
              Email
            </a>
          </div>
          <div className="mt-4 text-xs">
            © 2024 Agustin Yaskuloski. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
}
