'use client';

interface QuickLink {
  command: string;
  description: string;
  icon: string;
}

const links: QuickLink[] = [
  { command: 'about', description: 'About Me', icon: '📝' },
  { command: 'skills', description: 'Technical Skills', icon: '⚡' },
  { command: 'projects', description: 'Portfolio', icon: '🚀' },
  { command: 'experience', description: 'Work History', icon: '💼' },
  { command: 'contact', description: 'Get in Touch', icon: '📧' },
];

interface QuickLinksProps {
  onCommandClick: (command: string) => void;
}

export default function QuickLinks({ onCommandClick }: QuickLinksProps) {
  return (
    <div className="bg-terminal-bg border border-terminal-border rounded-lg p-4 font-mono">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-terminal-yellow">●</span>
        <h3 className="text-terminal-cyan font-bold text-sm">QUICK ACCESS</h3>
      </div>

      <div className="space-y-2">
        {links.map((link) => (
          <button
            key={link.command}
            onClick={() => onCommandClick(link.command)}
            className="w-full text-left px-3 py-2 rounded bg-terminal-border hover:bg-terminal-border/60 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{link.icon}</span>
              <div className="flex-1">
                <div className="text-terminal-green text-sm group-hover:text-terminal-cyan transition-colors">
                  $ {link.command}
                </div>
                <div className="text-terminal-text text-xs opacity-70">{link.description}</div>
              </div>
              <span className="text-terminal-text opacity-50 text-xs">→</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-terminal-border">
        <div className="text-xs text-terminal-text opacity-70">
          <span className="text-terminal-yellow">Tip:</span> Type commands in the terminal above
        </div>
      </div>
    </div>
  );
}
