'use client';

import { useEffect, useState } from 'react';

export default function SystemStats() {
  const [cpu, setCpu] = useState(0);
  const [memory, setMemory] = useState(0);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    // Simulate system stats
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 30) + 20);
      setMemory(Math.floor(Math.random() * 20) + 40);
      setUptime((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const ProgressBar = ({ value, color }: { value: number; color: string }) => {
    return (
      <div className="w-full bg-terminal-border h-2 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="bg-terminal-bg border border-terminal-border rounded-lg p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-terminal-green">●</span>
        <h3 className="text-terminal-cyan font-bold">SYSTEM MONITOR</h3>
      </div>

      <div className="space-y-3">
        {/* CPU */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-terminal-text text-xs">CPU Usage</span>
            <span className="text-terminal-green text-xs">{cpu}%</span>
          </div>
          <ProgressBar value={cpu} color="bg-terminal-green" />
        </div>

        {/* Memory */}
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-terminal-text text-xs">Memory</span>
            <span className="text-terminal-blue text-xs">{memory}%</span>
          </div>
          <ProgressBar value={memory} color="bg-terminal-blue" />
        </div>

        {/* Uptime */}
        <div className="pt-2 border-t border-terminal-border">
          <div className="flex justify-between text-xs">
            <span className="text-terminal-text">Uptime</span>
            <span className="text-terminal-yellow">{formatUptime(uptime)}</span>
          </div>
        </div>

        {/* System Info */}
        <div className="pt-2 border-t border-terminal-border text-xs space-y-1">
          <div className="flex justify-between">
            <span className="text-terminal-text">Kernel</span>
            <span className="text-terminal-purple">6.1.0-ai</span>
          </div>
          <div className="flex justify-between">
            <span className="text-terminal-text">Shell</span>
            <span className="text-terminal-cyan">bash 5.2.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-terminal-text">Processes</span>
            <span className="text-terminal-green">247</span>
          </div>
        </div>
      </div>
    </div>
  );
}
