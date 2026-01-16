'use client';

interface TerminalPromptProps {
  path?: string;
}

export default function TerminalPrompt({ path = '~' }: TerminalPromptProps) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <span className="text-terminal-green font-semibold">agustin@portfolio</span>
      <span className="text-terminal-text">:</span>
      <span className="text-terminal-blue font-semibold">{path}</span>
      <span className="text-terminal-text">$</span>
    </div>
  );
}
