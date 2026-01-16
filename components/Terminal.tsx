'use client';

import { useState, useEffect, useRef } from 'react';

interface TerminalProps {
  onCommandEnter?: (command: string) => void;
}

export default function Terminal({ onCommandEnter }: TerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ type: 'command' | 'output'; text: string }>>([
    { type: 'output', text: 'Welcome to Agustin Yaskuloski\'s Portfolio Terminal v1.0.0' },
    { type: 'output', text: 'Type "help" for available commands' },
    { type: 'output', text: '' },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, () => void> = {
    help: () => {
      addOutput([
        'Available commands:',
        '  help       - Show this help message',
        '  about      - Learn more about me',
        '  skills     - View my technical skills',
        '  projects   - See my projects',
        '  contact    - Get contact information',
        '  experience - View work experience',
        '  clear      - Clear terminal',
        '  whoami     - Display current user',
        '  ls         - List available sections',
        '  cat [file] - Read file content (e.g., cat resume.txt)',
      ]);
    },
    about: () => {
      addOutput([
        '╔═══════════════════════════════════════════════════════════╗',
        '║                    ABOUT AGUSTIN YASKULOSKI               ║',
        '╚═══════════════════════════════════════════════════════════╝',
        '',
        '👨‍💻 AI Developer & Engineer',
        '📍 Based in [Your Location]',
        '🎓 Specialized in Artificial Intelligence and Machine Learning',
        '',
        'I\'m a passionate AI developer focused on building intelligent',
        'systems that solve real-world problems. With expertise in',
        'machine learning, deep learning, and NLP, I create innovative',
        'solutions that push the boundaries of what\'s possible with AI.',
        '',
        'My work spans from developing neural networks to deploying',
        'production-ready AI systems at scale.',
      ]);
    },
    skills: () => {
      addOutput([
        '╔═══════════════════════════════════════════════════════════╗',
        '║                    TECHNICAL SKILLS                       ║',
        '╚═══════════════════════════════════════════════════════════╝',
        '',
        '🤖 AI/ML:',
        '   • TensorFlow, PyTorch, Keras',
        '   • Neural Networks & Deep Learning',
        '   • NLP & Computer Vision',
        '   • LLMs & GPT Integration',
        '',
        '💻 Programming:',
        '   • Python, JavaScript/TypeScript',
        '   • React, Next.js, Node.js',
        '   • FastAPI, Flask, Django',
        '',
        '🛠️ Tools & Technologies:',
        '   • Docker, Kubernetes',
        '   • AWS, GCP, Azure',
        '   • Git, CI/CD',
        '   • Vector Databases (Pinecone, Weaviate)',
        '',
        '📊 Data Science:',
        '   • Pandas, NumPy, Scikit-learn',
        '   • Data Visualization',
        '   • Statistical Analysis',
      ]);
    },
    projects: () => {
      addOutput([
        '╔═══════════════════════════════════════════════════════════╗',
        '║                       PROJECTS                            ║',
        '╚═══════════════════════════════════════════════════════════╝',
        '',
        '🔹 AI Chatbot Platform',
        '   Advanced conversational AI using GPT-4 and custom NLP',
        '   Stack: Python, FastAPI, React, PostgreSQL',
        '   [View on GitHub]',
        '',
        '🔹 Computer Vision System',
        '   Real-time object detection and tracking system',
        '   Stack: PyTorch, OpenCV, Docker',
        '   [View on GitHub]',
        '',
        '🔹 ML Model Deployment Pipeline',
        '   Automated ML model training and deployment infrastructure',
        '   Stack: TensorFlow, Kubernetes, MLflow',
        '   [View on GitHub]',
        '',
        '🔹 Sentiment Analysis API',
        '   High-performance sentiment analysis for social media',
        '   Stack: Transformers, FastAPI, Redis',
        '   [View on GitHub]',
      ]);
    },
    experience: () => {
      addOutput([
        '╔═══════════════════════════════════════════════════════════╗',
        '║                   WORK EXPERIENCE                         ║',
        '╚═══════════════════════════════════════════════════════════╝',
        '',
        '🏢 Senior AI Engineer @ TechCorp',
        '   2022 - Present',
        '   • Led development of AI-powered recommendation system',
        '   • Improved model accuracy by 35%',
        '   • Managed team of 5 ML engineers',
        '',
        '🏢 ML Engineer @ StartupAI',
        '   2020 - 2022',
        '   • Built NLP pipeline for document processing',
        '   • Deployed models handling 1M+ requests/day',
        '   • Reduced inference time by 60%',
        '',
        '🏢 AI Research Intern @ AI Lab',
        '   2019 - 2020',
        '   • Conducted research on neural architecture search',
        '   • Published paper at major ML conference',
        '   • Developed novel optimization techniques',
      ]);
    },
    contact: () => {
      addOutput([
        '╔═══════════════════════════════════════════════════════════╗',
        '║                    CONTACT INFO                           ║',
        '╚═══════════════════════════════════════════════════════════╝',
        '',
        '📧 Email:     agustin.yaskuloski@email.com',
        '🐙 GitHub:    github.com/agustinyaskuloski',
        '💼 LinkedIn:  linkedin.com/in/agustinyaskuloski',
        '🐦 Twitter:   @ayaskuloski',
        '🌐 Website:   agustinyaskuloski.dev',
        '',
        'Feel free to reach out for collaborations or opportunities!',
      ]);
    },
    whoami: () => {
      addOutput(['agustin@portfolio:~$ Agustin Yaskuloski - AI Developer & Engineer']);
    },
    ls: () => {
      addOutput([
        'about.txt      skills.md      projects/',
        'experience.md  contact.txt    resume.pdf',
      ]);
    },
    clear: () => {
      setHistory([]);
    },
    cat: () => {
      addOutput(['Usage: cat [filename]', 'Try: cat resume.txt']);
    },
  };

  const addOutput = (lines: string[]) => {
    setHistory((prev) => [
      ...prev,
      ...lines.map((line) => ({ type: 'output' as const, text: line })),
      { type: 'output' as const, text: '' },
    ]);
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    setHistory((prev) => [...prev, { type: 'command', text: trimmedCmd }]);
    setCommandHistory((prev) => [...prev, trimmedCmd]);

    const [command, ...args] = trimmedCmd.split(' ');

    if (command === 'cat' && args.length > 0) {
      if (args[0] === 'resume.txt') {
        addOutput([
          '════════════════════════════════════════════════════════',
          '               AGUSTIN YASKULOSKI - RESUME              ',
          '════════════════════════════════════════════════════════',
          '',
          'AI Developer & Engineer specializing in building',
          'intelligent systems and deploying ML models at scale.',
          '',
          'Key Achievements:',
          '• Built AI systems processing 10M+ daily requests',
          '• Improved model accuracy by 35% through novel techniques',
          '• Led teams developing production ML infrastructure',
          '',
          'For full resume, contact me at: agustin.yaskuloski@email.com',
        ]);
      } else {
        addOutput([`cat: ${args[0]}: No such file or directory`]);
      }
    } else if (commands[command]) {
      commands[command]();
    } else {
      addOutput([`Command not found: ${command}`, 'Type "help" for available commands']);
    }

    if (onCommandEnter) {
      onCommandEnter(trimmedCmd);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex] || '');
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setHistory([]);
    } else if (e.key === 'c' && e.ctrlKey) {
      e.preventDefault();
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="w-full h-full bg-terminal-bg border border-terminal-border rounded-lg shadow-2xl overflow-hidden flex flex-col font-mono"
      onClick={focusInput}
    >
      {/* Terminal Header */}
      <div className="bg-terminal-border px-4 py-2 flex items-center gap-2 border-b border-terminal-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-terminal-red"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-yellow"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
        </div>
        <div className="flex-1 text-center text-terminal-text text-sm">
          agustin@portfolio: ~/portfolio
        </div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 space-y-1"
        style={{ maxHeight: 'calc(100vh - 200px)' }}
      >
        {history.map((item, index) => (
          <div key={index} className={item.type === 'command' ? 'text-terminal-green' : 'text-terminal-text'}>
            {item.type === 'command' && (
              <span className="text-terminal-blue">agustin@portfolio</span>
            )}
            {item.type === 'command' && <span className="text-terminal-text">:</span>}
            {item.type === 'command' && <span className="text-terminal-purple">~</span>}
            {item.type === 'command' && <span className="text-terminal-text">$ </span>}
            {item.text}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center">
          <span className="text-terminal-blue">agustin@portfolio</span>
          <span className="text-terminal-text">:</span>
          <span className="text-terminal-purple">~</span>
          <span className="text-terminal-text">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-terminal-green caret-terminal-green ml-1"
            autoFocus
            spellCheck={false}
          />
          <span className="cursor"></span>
        </div>
      </div>
    </div>
  );
}
