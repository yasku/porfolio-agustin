'use client';

import { useEffect, useState } from 'react';

export default function ASCIIBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const banner = `
   ▄████████    ▄██████▄  ███    █▄     ▄████████     ███      ▄█  ███▄▄▄▄
  ███    ███   ███    ███ ███    ███   ███    ███ ▀█████████▄ ███  ███▀▀▀██▄
  ███    ███   ███    █▀  ███    ███   ███    █▀     ▀███▀▀██ ███▌ ███   ███
  ███    ███  ▄███        ███    ███   ███            ███   ▀ ███▌ ███   ███
▀███████████ ▀▀███ ████▄  ███    ███ ▀███████████     ███     ███▌ ███   ███
  ███    ███   ███    ███ ███    ███          ███     ███     ███  ███   ███
  ███    ███   ███    ███ ███    ███    ▄█    ███     ███     ███  ███   ███
  ███    █▀    ████████▀  ████████▀   ▄████████▀     ▄████▀   █▀    ▀█   █▀
  `;

  return (
    <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <pre className="text-terminal-green text-[8px] sm:text-[10px] md:text-xs leading-tight overflow-x-auto whitespace-pre">
        {banner}
      </pre>
      <div className="mt-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-terminal-cyan mb-2">
          Agustin Yaskuloski
        </h2>
        <p className="text-terminal-yellow text-sm md:text-base">
          &lt; AI Developer & Engineer /&gt;
        </p>
        <div className="mt-4 flex justify-center gap-2 text-xs text-terminal-text">
          <span className="border border-terminal-border px-3 py-1 rounded">Machine Learning</span>
          <span className="border border-terminal-border px-3 py-1 rounded">Deep Learning</span>
          <span className="border border-terminal-border px-3 py-1 rounded">NLP</span>
        </div>
      </div>
    </div>
  );
}
