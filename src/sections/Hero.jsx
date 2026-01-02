import Container from "../components/Container";
import useReveal from "../hooks/useReveal"; 
import Terminal from "../components/Terminal";

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <Container>
        {/* FIX: ref and reveal class moved here so the whole grid becomes visible together */}
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text & Buttons */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
 CS Student  <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
    & Developer
  </span>
</h1>

<p className="text-white/70 text-lg leading-relaxed mb-10">
  I build scalable, high-performance software systems. I specialize in architecting 
  distributed backends and integrating machine intelligence to solve 
  <span className="text-white border-b border-white/20 pb-0.5 ml-1">complex engineering problems</span>.
</p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Vedant_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-white text-black font-medium rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-white/30 font-medium rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                View Projects
              </a>
              <a
                href="https://github.com/OtherworldlyGod"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/30 font-medium rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right Side: Terminal Animation */}
          {/* Removed 'reveal' class from here because the parent now handles it */}
          <div className="hidden md:block">
            <Terminal />
          </div>
          
        </div>
      </Container>
    </section>
  );
}