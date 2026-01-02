import { useEffect, useState } from "react";

export default function SystemMonitor() {
  const [latency, setLatency] = useState(24);
  const [requests, setRequests] = useState(1420);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => Math.floor(Math.random() * (45 - 20) + 20)); // Random 20-45ms
      setRequests(prev => prev + Math.floor(Math.random() * 10 - 2)); // Fluctuating RPS
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl">
      
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
            <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping opacity-75" />
          </div>
          <span className="text-sm font-medium text-white/90">System Status</span>
        </div>
        <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-0.5 rounded">
          OPERATIONAL
        </span>
      </div>

      <div className="p-6 space-y-8">
        
        {/* Metric Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Latency</div>
            <div className="text-2xl font-mono text-white/90 flex items-baseline gap-1">
              {latency}<span className="text-sm text-white/50">ms</span>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="text-xs text-white/50 uppercase tracking-wider mb-1">Req/Sec</div>
            <div className="text-2xl font-mono text-white/90">{requests.toLocaleString()}</div>
          </div>
        </div>

        {/* Animated Graph Visual */}
        <div>
          <div className="flex justify-between text-xs text-white/50 mb-2">
            <span>Traffic Volume</span>
            <span>Live</span>
          </div>
          <div className="relative h-24 w-full border-l border-b border-white/10 overflow-hidden">
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            {/* The Moving Wave Line */}
            <svg className="absolute bottom-0 left-0 right-0 h-full w-[200%] animate-[slide_4s_linear_infinite] opacity-80" viewBox="0 0 200 100" preserveAspectRatio="none">
              <path 
                d="M0 80 Q 25 20 50 80 T 100 80 T 150 50 T 200 80" 
                fill="none" 
                stroke="#a855f7" 
                strokeWidth="2" 
                vectorEffect="non-scaling-stroke"
              />
              {/* Gradient Fill under the line */}
              <path 
                d="M0 80 Q 25 20 50 80 T 100 80 T 150 50 T 200 80 V 100 H 0 Z" 
                fill="url(#gradient)" 
                className="opacity-20"
              />
              <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Resource Bars */}
        <div className="space-y-3">
          <ResourceBar label="API Gateway" percent="42%" color="bg-blue-500" />
          <ResourceBar label="TensorFlow Inference" percent="78%" color="bg-purple-500" />
          <ResourceBar label="Redis Cache" percent="12%" color="bg-yellow-500" />
        </div>
      </div>
    </div>
  );
}

function ResourceBar({ label, percent, color }) {
  return (
    <div className="flex items-center gap-3 text-xs">
      <span className="w-24 text-white/60 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all duration-500`} style={{ width: percent }} />
      </div>
      <span className="w-8 text-right text-white/50 tabular-nums">{percent}</span>
    </div>
  );
}