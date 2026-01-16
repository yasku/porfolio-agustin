export default function Loading() {
  return (
    <div className="min-h-screen bg-terminal-bg flex items-center justify-center">
      <div className="text-center font-mono">
        <div className="text-terminal-green text-2xl mb-4">
          <span className="inline-block animate-pulse">▋</span>
          <span className="ml-2">Loading...</span>
        </div>
        <div className="text-terminal-text text-sm space-y-1">
          <div>[ ✓ ] Initializing terminal...</div>
          <div>[ ✓ ] Loading system components...</div>
          <div>[ ✓ ] Starting portfolio server...</div>
        </div>
      </div>
    </div>
  );
}
