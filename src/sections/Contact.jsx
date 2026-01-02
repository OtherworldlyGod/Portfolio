import Container from "../components/Container";
import useReveal from "../hooks/useReveal"; // Adjust path if needed

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="py-24 border-t border-white/10 bg-black">
      <Container>
        <div ref={ref} className="reveal flex flex-col md:flex-row justify-between gap-12">
          
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
            <p className="text-white/70 mb-8 text-lg leading-relaxed">
  I am currently looking for <b>Software Engineering internships</b>. 
  I am eager to apply my skills in backend architecture and system design 
  to build robust production software.
</p>
            
            <div className="space-y-2">
              <p className="text-sm text-white/50 uppercase tracking-wider font-medium">Email</p>
              <a 
                href="mailto:vedantwade28@gmail.com" 
                className="text-2xl text-white hover:text-white/80 transition-colors border-b border-white/20 hover:border-white pb-1"
              >
                vedantwade28@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:text-right">
          
            <div className="space-y-4">
              <p className="text-sm text-white/50 uppercase tracking-wider font-medium">On the web</p>
              <div className="flex flex-col md:items-end gap-3 text-white/80">
                <a 
                  href="https://github.com/OtherworldlyGod" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white hover:underline decoration-white/30 underline-offset-4 w-max"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/vedant-wade-b6a2b1258/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white hover:underline decoration-white/30 underline-offset-4 w-max"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.codechef.com/users/sane_hitler_18" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white hover:underline decoration-white/30 underline-offset-4 w-max"
                >
                  CodeChef (3-Star)
                </a>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-white/50 uppercase tracking-wider font-medium">Based In</p>
              <p className="text-white/90">Pune, India</p>
            </div>
          </div>

        </div>
       
        <div className="mt-24 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Vedant Wade. Built with React & Tailwind.</p>
        </div>
      </Container>
    </section>
  );
}