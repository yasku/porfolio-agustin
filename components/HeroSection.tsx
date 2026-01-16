'use client';

export default function HeroSection() {
  return (
    <div className="relative">
      {/* File path indicator */}
      <div className="text-terminal-text/60 text-sm mb-6 font-mono">
        // portfolio.tsx
      </div>

      {/* Main Hero Content */}
      <div className="space-y-6">
        {/* Terminal prompt and name */}
        <div className="flex items-start gap-3">
          <span className="text-terminal-green text-5xl md:text-6xl font-bold mt-2">&gt;</span>
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Agustin Yaskuloski
            </h1>
            <div className="text-terminal-text/70 text-lg md:text-xl mt-2 font-mono">
              &gt; AI Developer & Engineer
            </div>
          </div>
        </div>

        {/* Code block style description */}
        <div className="bg-terminal-border/30 border border-terminal-border rounded-lg p-6 max-w-2xl">
          <div className="space-y-3 font-mono text-sm">
            <div>
              <span className="text-terminal-blue">const</span>{' '}
              <span className="text-terminal-cyan">expertise</span>{' '}
              <span className="text-terminal-text">=</span>{' '}
              <span className="text-terminal-yellow">&quot;AI & Machine Learning&quot;</span>
              <span className="text-terminal-text">;</span>
            </div>
            <div className="text-terminal-text/70 text-xs">
              // Building intelligent systems that solve real-world problems
            </div>
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-terminal-green font-mono text-sm">/**</span>
          <span className="px-3 py-1 bg-terminal-border border border-terminal-green/50 rounded text-terminal-green text-sm font-mono">
            Machine Learning
          </span>
          <span className="px-3 py-1 bg-terminal-border border border-terminal-blue/50 rounded text-terminal-blue text-sm font-mono">
            Deep Learning
          </span>
          <span className="px-3 py-1 bg-terminal-border border border-terminal-cyan/50 rounded text-terminal-cyan text-sm font-mono">
            NLP
          </span>
          <span className="px-3 py-1 bg-terminal-border border border-terminal-yellow/50 rounded text-terminal-yellow text-sm font-mono">
            Computer Vision
          </span>
          <span className="text-terminal-green font-mono text-sm">*/</span>
        </div>

        {/* Quick stats inline */}
        <div className="flex flex-wrap gap-6 font-mono text-sm pt-4">
          <div>
            <span className="text-terminal-green font-bold text-2xl">5+</span>
            <span className="text-terminal-text/70 ml-2">years experience</span>
          </div>
          <div>
            <span className="text-terminal-blue font-bold text-2xl">50+</span>
            <span className="text-terminal-text/70 ml-2">projects</span>
          </div>
          <div>
            <span className="text-terminal-yellow font-bold text-2xl">30+</span>
            <span className="text-terminal-text/70 ml-2">technologies</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-terminal-green hover:bg-terminal-green/80 text-terminal-bg font-mono font-bold rounded transition-all hover:scale-105"
          >
            $ view projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-terminal-border hover:bg-terminal-blue/20 border border-terminal-blue text-terminal-blue font-mono font-bold rounded transition-all hover:scale-105"
          >
            $ get in touch
          </a>
        </div>
      </div>

      {/* Decorative terminal cursor */}
      <div className="absolute -right-4 top-0 text-terminal-green/20 text-9xl font-mono hidden lg:block">
        _
      </div>
    </div>
  );
}
