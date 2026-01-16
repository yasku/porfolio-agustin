'use client';

import Link from 'next/link';
import MacTerminal from '@/components/MacTerminal';
import TerminalPrompt from '@/components/TerminalPrompt';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-terminal-bg">
      {/* Header */}
      <header className="border-b border-terminal-border bg-terminal-bg/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-terminal-green font-bold text-lg hover:text-terminal-cyan transition-colors">
            ← Back to Home
          </Link>
          <div className="text-terminal-text text-sm">about.sh</div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-terminal-cyan mb-2 font-mono">$ cat about.txt</h1>
          <p className="text-terminal-text opacity-70">Learn more about Agustin Yaskuloski</p>
        </div>

        {/* Main About Section */}
        <MacTerminal title="about.sh — agustin@portfolio">
          <div className="p-6 space-y-4">
            <TerminalPrompt path="~/about" />

            <div className="mt-4 space-y-6 text-terminal-text">
              <div className="border-l-4 border-terminal-green pl-4">
                <h2 className="text-2xl font-bold text-terminal-cyan mb-3">About Me</h2>
                <p className="leading-relaxed mb-4">
                  Hello! I&apos;m <span className="text-terminal-green font-semibold">Agustin Yaskuloski</span>,
                  a passionate AI Developer and Engineer specializing in building intelligent systems
                  that solve real-world problems. With a strong foundation in machine learning,
                  deep learning, and natural language processing, I create innovative solutions
                  that push the boundaries of what&apos;s possible with artificial intelligence.
                </p>
                <p className="leading-relaxed">
                  My journey in AI began with a fascination for how machines can learn and adapt.
                  Today, I work on cutting-edge projects ranging from neural network architectures
                  to production-ready AI systems that handle millions of requests daily.
                </p>
              </div>

              <div className="border-l-4 border-terminal-blue pl-4">
                <h3 className="text-xl font-bold text-terminal-blue mb-3">🎯 What I Do</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-green mt-1">▹</span>
                    <span>Design and implement machine learning models for various applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-green mt-1">▹</span>
                    <span>Build scalable AI infrastructure and deployment pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-green mt-1">▹</span>
                    <span>Develop NLP solutions for text understanding and generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-green mt-1">▹</span>
                    <span>Create computer vision systems for object detection and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-terminal-green mt-1">▹</span>
                    <span>Optimize and fine-tune large language models</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-terminal-yellow pl-4">
                <h3 className="text-xl font-bold text-terminal-yellow mb-3">💡 My Approach</h3>
                <p className="leading-relaxed mb-3">
                  I believe in building AI systems that are not only powerful but also ethical,
                  explainable, and accessible. My approach combines:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-terminal-border/30 rounded p-3">
                    <div className="text-terminal-cyan font-semibold mb-1">Research-Driven</div>
                    <div className="text-sm opacity-80">Stay updated with latest AI research and techniques</div>
                  </div>
                  <div className="bg-terminal-border/30 rounded p-3">
                    <div className="text-terminal-cyan font-semibold mb-1">Practical Focus</div>
                    <div className="text-sm opacity-80">Build solutions that work in production environments</div>
                  </div>
                  <div className="bg-terminal-border/30 rounded p-3">
                    <div className="text-terminal-cyan font-semibold mb-1">Collaborative</div>
                    <div className="text-sm opacity-80">Work closely with teams to achieve common goals</div>
                  </div>
                  <div className="bg-terminal-border/30 rounded p-3">
                    <div className="text-terminal-cyan font-semibold mb-1">Continuous Learning</div>
                    <div className="text-sm opacity-80">Always exploring new technologies and methodologies</div>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-terminal-purple pl-4">
                <h3 className="text-xl font-bold text-terminal-purple mb-3">🌟 Interests & Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-terminal-border rounded-full text-sm">🤖 AI Research</span>
                  <span className="px-3 py-1 bg-terminal-border rounded-full text-sm">📚 Reading Papers</span>
                  <span className="px-3 py-1 bg-terminal-border rounded-full text-sm">💻 Open Source</span>
                  <span className="px-3 py-1 bg-terminal-border rounded-full text-sm">🎮 Gaming</span>
                  <span className="px-3 py-1 bg-terminal-border rounded-full text-sm">🎵 Music</span>
                  <span className="px-3 py-1 bg-terminal-border rounded-full text-sm">✈️ Travel</span>
                  <span className="px-3 py-1 bg-terminal-border rounded-full text-sm">📸 Photography</span>
                  <span className="px-3 py-1 bg-terminal-border rounded-full text-sm">♟️ Chess</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-terminal-border">
              <TerminalPrompt path="~/about" />
              <span className="ml-2 text-terminal-text animate-blink">▋</span>
            </div>
          </div>
        </MacTerminal>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Link
            href="/skills"
            className="bg-terminal-border hover:bg-terminal-green/20 border border-terminal-green rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-green font-bold mb-1">→ Skills</div>
            <div className="text-terminal-text text-sm opacity-70">Technical expertise</div>
          </Link>
          <Link
            href="/projects"
            className="bg-terminal-border hover:bg-terminal-blue/20 border border-terminal-blue rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-blue font-bold mb-1">→ Projects</div>
            <div className="text-terminal-text text-sm opacity-70">Portfolio work</div>
          </Link>
          <Link
            href="/experience"
            className="bg-terminal-border hover:bg-terminal-yellow/20 border border-terminal-yellow rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-yellow font-bold mb-1">→ Experience</div>
            <div className="text-terminal-text text-sm opacity-70">Work history</div>
          </Link>
          <Link
            href="/contact"
            className="bg-terminal-border hover:bg-terminal-purple/20 border border-terminal-purple rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-purple font-bold mb-1">→ Contact</div>
            <div className="text-terminal-text text-sm opacity-70">Get in touch</div>
          </Link>
        </div>
      </main>
    </div>
  );
}
