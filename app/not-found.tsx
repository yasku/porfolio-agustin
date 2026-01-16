export default function NotFound() {
  return (
    <div className="min-h-screen bg-terminal-bg flex items-center justify-center px-4">
      <div className="font-mono max-w-2xl w-full">
        <div className="bg-terminal-bg border border-terminal-border rounded-lg p-8 shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-terminal-border">
            <div className="w-3 h-3 rounded-full bg-terminal-red"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
            <span className="ml-2 text-terminal-text text-sm">bash: error</span>
          </div>

          {/* Error Content */}
          <div className="space-y-4 text-sm">
            <div className="text-terminal-text">
              <span className="text-terminal-blue">agustin@portfolio</span>
              <span>:</span>
              <span className="text-terminal-purple">~</span>
              <span>$ cd {typeof window !== 'undefined' ? window.location.pathname : '/unknown'}</span>
            </div>

            <div className="text-terminal-red">
              bash: cd: {typeof window !== 'undefined' ? window.location.pathname : '/unknown'}: No such file or directory
            </div>

            <div className="my-6 text-center">
              <div className="text-terminal-red text-6xl font-bold mb-2">404</div>
              <div className="text-terminal-yellow text-lg">ERROR: Page Not Found</div>
            </div>

            <div className="bg-black/30 rounded p-4 space-y-2 text-terminal-text">
              <div><span className="text-terminal-yellow">└─</span> The requested resource could not be located.</div>
              <div><span className="text-terminal-yellow">└─</span> The page may have been moved or deleted.</div>
              <div><span className="text-terminal-yellow">└─</span> Try navigating from the home page.</div>
            </div>

            <div className="pt-4 text-center">
              <a
                href="/"
                className="inline-block bg-terminal-border hover:bg-terminal-green text-terminal-green hover:text-terminal-bg transition-colors px-6 py-3 rounded font-bold"
              >
                $ cd ~
              </a>
              <div className="mt-2 text-xs text-terminal-text opacity-70">
                (Return to Home)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
