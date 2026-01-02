import Container from "../components/Container";
import useReveal from "../hooks/useReveal"; 
import SpotlightCard from "../components/SpotlightCard"; // Ensure you have this component from earlier

const PROJECTS = [
  {
  title: "Diabetic Retinopathy Detection",
  description:
    "Built a backend-focused full-stack system with a decoupled architecture, where a Node.js REST API handles authentication (JWT), image uploads, and user data, while a Dockerized Python TensorFlow service performs model inference. Designed for modularity, service isolation, and clean backend integration.",
  tech: ["React", "Node.js", "TensorFlow", "MongoDB", "Docker", "JWT"],
  link: "https://github.com/OtherworldlyGod/BDT-Project",
  image: "/images/dr-project.png"
}
,
  {
    title: "Python Quiz Game",
    description:
      "Designed and implemented a modular quiz game using Pygame with explicit game-state management, custom event handling, and reusable components. The project won 1st Prize among 600+ participants for clean architecture and code quality.",
    tech: ["Python", "Pygame"],
    link: null,
    image: "/images/quiz-game.png"
  },
  {
    title: "Intelligent Code Reviewer",
    description:
      "Developed a prototype intelligent code refactoring tool that analyzes source code and generates improvement suggestions using transformer-based language models. Focused on structured code input, explainable refactoring output, and a clean separation between analysis logic and UI.",
    tech: ["Python", "Transformers", "Gradio", "CodeLlama"],
    link: null,
    image: "/images/ai-code.png"
  },
];


export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="py-24 border-t border-white/10">
      <Container>
        <div ref={ref} className="reveal">
          <h2 className="text-4xl font-semibold tracking-tight mb-12">
            Featured Projects
          </h2>

          <div className="space-y-12">
            {PROJECTS.map((project, index) => (
              <SpotlightCard key={index} className="p-0 border-white/10 bg-white/[0.02]">
                <div className="flex flex-col md:flex-row items-stretch min-h-[300px]">
                  
                  {/* Image Side (Only renders if 'image' exists) */}
                  {project.image && (
                    <div className="w-full md:w-[45%] relative border-b md:border-b-0 md:border-r border-white/10 overflow-hidden group">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Dark overlay that fades out on hover */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  )}

                  {/* Text Side */}
                  <div className={`flex flex-col justify-between p-8 ${project.image ? 'md:w-[55%]' : 'w-full'}`}>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-white">
                        {project.title}
                      </h3>
                      <p className="text-white/60 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                          <span key={t} className="text-xs font-medium px-2.5 py-1 rounded bg-white/5 text-white/80 border border-white/10">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Only show the button if project.link exists */}
{project.link && (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors"
  >
    View Source Code 
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
  </a>
)}
                  </div>

                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}