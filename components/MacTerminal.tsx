'use client';

import { ReactNode } from 'react';

interface MacTerminalProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function MacTerminal({ title = 'terminal', children, className = '' }: MacTerminalProps) {
  return (
    <div className={`bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden ${className}`}>
      {/* macOS Window Header */}
      <div className="bg-[#323232] px-4 py-3 flex items-center gap-2 border-b border-[#1a1a1a]">
        {/* Traffic Light Buttons */}
        <div className="flex items-center gap-2">
          <button
            className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors"
            aria-label="Close"
          />
          <button
            className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors"
            aria-label="Minimize"
          />
          <button
            className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors"
            aria-label="Maximize"
          />
        </div>

        {/* Window Title */}
        <div className="flex-1 text-center">
          <span className="text-sm text-gray-400 font-medium">{title}</span>
        </div>

        {/* Spacer for centering */}
        <div className="w-[60px]"></div>
      </div>

      {/* Terminal Content */}
      <div className="bg-[#1e1e1e] font-mono text-sm">
        {children}
      </div>
    </div>
  );
}
