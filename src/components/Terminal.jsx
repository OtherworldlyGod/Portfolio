import { useEffect, useState } from "react";

export default function Terminal() {
  const [text, setText] = useState("");
  const fullText = "> npm run start:dev\n> Starting server on port 8000...\n> [INFO] Connected to MongoDB\n> [INFO] Redis Cache: OK\n> System Ready.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-10 md:mt-0 bg-[#0d1117] border border-white/10 rounded-lg overflow-hidden font-mono text-sm shadow-2xl">
      <div className="flex gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="p-4 text-green-400 min-h-[160px] whitespace-pre-line">
        {text}
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
}