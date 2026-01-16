'use client';

import Link from 'next/link';
import MacTerminal from '@/components/MacTerminal';
import TerminalPrompt from '@/components/TerminalPrompt';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'AI Chatbot Platform',
      description: 'Advanced conversational AI system using GPT-4 with custom fine-tuning and RAG implementation',
      tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Redis', 'OpenAI API'],
      highlights: [
        'Handles 100K+ daily conversations',
        'Context-aware responses with memory',
        'Multi-language support',
        'Custom knowledge base integration',
      ],
      github: 'https://github.com/agustinyaskuloski/ai-chatbot',
      demo: 'https://chatbot-demo.example.com',
      status: 'Production',
      color: 'terminal-green',
    },
    {
      title: 'Computer Vision System',
      description: 'Real-time object detection and tracking system for autonomous vehicles',
      tech: ['PyTorch', 'OpenCV', 'Docker', 'C++', 'CUDA'],
      highlights: [
        'Real-time processing at 60 FPS',
        'Multi-object tracking',
        'YOLO and custom models',
        'Edge deployment optimized',
      ],
      github: 'https://github.com/agustinyaskuloski/cv-system',
      demo: null,
      status: 'Production',
      color: 'terminal-blue',
    },
    {
      title: 'ML Model Deployment Pipeline',
      description: 'Automated infrastructure for training, versioning, and deploying ML models at scale',
      tech: ['Kubernetes', 'MLflow', 'TensorFlow', 'AWS', 'Terraform'],
      highlights: [
        'Automated model training pipeline',
        'A/B testing framework',
        'Model versioning and rollback',
        'Scalable inference endpoints',
      ],
      github: 'https://github.com/agustinyaskuloski/ml-pipeline',
      demo: null,
      status: 'Production',
      color: 'terminal-cyan',
    },
    {
      title: 'Sentiment Analysis API',
      description: 'High-performance sentiment analysis API for social media monitoring',
      tech: ['Transformers', 'FastAPI', 'Redis', 'Docker', 'PostgreSQL'],
      highlights: [
        'Processes 10M+ texts daily',
        'Multi-language sentiment analysis',
        'Real-time streaming support',
        '99.9% uptime SLA',
      ],
      github: 'https://github.com/agustinyaskuloski/sentiment-api',
      demo: 'https://sentiment-api.example.com',
      status: 'Production',
      color: 'terminal-yellow',
    },
    {
      title: 'Neural Style Transfer App',
      description: 'Mobile and web application for artistic style transfer using neural networks',
      tech: ['TensorFlow.js', 'React Native', 'Next.js', 'Node.js'],
      highlights: [
        'Client-side ML inference',
        'Real-time preview',
        'Custom style training',
        'Cross-platform support',
      ],
      github: 'https://github.com/agustinyaskuloski/style-transfer',
      demo: 'https://style-transfer.example.com',
      status: 'Active',
      color: 'terminal-purple',
    },
    {
      title: 'Document Intelligence System',
      description: 'OCR and document understanding system for automated data extraction',
      tech: ['Tesseract', 'spaCy', 'FastAPI', 'MongoDB', 'AWS Lambda'],
      highlights: [
        'Multi-format document support',
        'Named entity recognition',
        'Automated data extraction',
        'REST and webhook APIs',
      ],
      github: 'https://github.com/agustinyaskuloski/doc-intelligence',
      demo: null,
      status: 'Active',
      color: 'terminal-green',
    },
  ];

  return (
    <div className="min-h-screen bg-terminal-bg">
      {/* Header */}
      <header className="border-b border-terminal-border bg-terminal-bg/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-terminal-green font-bold text-lg hover:text-terminal-cyan transition-colors">
            ← Back to Home
          </Link>
          <div className="text-terminal-text text-sm">projects.sh</div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-terminal-cyan mb-2 font-mono">$ ls ~/projects/</h1>
          <p className="text-terminal-text opacity-70">Showcasing my AI/ML projects and contributions</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <MacTerminal key={index} title={`${project.title.toLowerCase().replace(/\s+/g, '-')}.sh`}>
              <div className="p-6">
                <div className="mb-4">
                  <TerminalPrompt path={`~/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`} />
                </div>

                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className={`text-xl font-bold text-${project.color} flex items-center gap-2`}>
                      {project.title}
                    </h2>
                    <span className={`px-2 py-1 text-xs rounded bg-${project.color}/20 text-${project.color} border border-${project.color}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-terminal-text text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="text-terminal-cyan text-sm font-semibold mb-2">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-terminal-border rounded text-xs text-terminal-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="text-terminal-cyan text-sm font-semibold mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-terminal-text text-sm flex items-start gap-2">
                        <span className="text-terminal-green mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-terminal-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-terminal-border hover:bg-terminal-green/20 border border-terminal-green text-terminal-green text-center py-2 rounded text-sm font-semibold transition-all hover:scale-105"
                  >
                    GitHub →
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-terminal-border hover:bg-terminal-blue/20 border border-terminal-blue text-terminal-blue text-center py-2 rounded text-sm font-semibold transition-all hover:scale-105"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>

                <div className="mt-4 opacity-50">
                  <TerminalPrompt path={`~/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`} />
                  <span className="ml-2 text-terminal-text animate-blink">▋</span>
                </div>
              </div>
            </MacTerminal>
          ))}
        </div>

        {/* Open Source Contributions */}
        <MacTerminal title="open-source.sh" className="mt-6">
          <div className="p-6">
            <TerminalPrompt path="~/projects/open-source" />

            <div className="mt-4">
              <h3 className="text-lg font-bold text-terminal-cyan mb-4">🌟 Open Source Contributions</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-terminal-border/30 rounded p-4 border-l-4 border-terminal-green">
                  <div className="font-bold text-terminal-green mb-2">TensorFlow</div>
                  <div className="text-sm text-terminal-text opacity-70 mb-2">
                    Contributed to core ML ops and documentation
                  </div>
                  <div className="text-xs text-terminal-green">+15 merged PRs</div>
                </div>

                <div className="bg-terminal-border/30 rounded p-4 border-l-4 border-terminal-blue">
                  <div className="font-bold text-terminal-blue mb-2">Hugging Face Transformers</div>
                  <div className="text-sm text-terminal-text opacity-70 mb-2">
                    Added model implementations and bug fixes
                  </div>
                  <div className="text-xs text-terminal-blue">+8 merged PRs</div>
                </div>

                <div className="bg-terminal-border/30 rounded p-4 border-l-4 border-terminal-yellow">
                  <div className="font-bold text-terminal-yellow mb-2">PyTorch</div>
                  <div className="text-sm text-terminal-text opacity-70 mb-2">
                    Performance optimizations and examples
                  </div>
                  <div className="text-xs text-terminal-yellow">+5 merged PRs</div>
                </div>

                <div className="bg-terminal-border/30 rounded p-4 border-l-4 border-terminal-purple">
                  <div className="font-bold text-terminal-purple mb-2">LangChain</div>
                  <div className="text-sm text-terminal-text opacity-70 mb-2">
                    Custom chains and integrations
                  </div>
                  <div className="text-xs text-terminal-purple">+12 merged PRs</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-terminal-border opacity-50">
              <TerminalPrompt path="~/projects/open-source" />
              <span className="ml-2 text-terminal-text animate-blink">▋</span>
            </div>
          </div>
        </MacTerminal>

        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Link
            href="/about"
            className="bg-terminal-border hover:bg-terminal-cyan/20 border border-terminal-cyan rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-cyan font-bold mb-1">→ About</div>
            <div className="text-terminal-text text-sm opacity-70">Learn more</div>
          </Link>
          <Link
            href="/skills"
            className="bg-terminal-border hover:bg-terminal-green/20 border border-terminal-green rounded-lg p-4 transition-all hover:scale-105"
          >
            <div className="text-terminal-green font-bold mb-1">→ Skills</div>
            <div className="text-terminal-text text-sm opacity-70">Technical expertise</div>
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
