import Container from "../components/Container";
import useReveal from "../hooks/useReveal"; // Adjust path if needed

const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true }, // Invert for dark mode
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ]
  },
  {
    category: "ML & Tools",
    items: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ]
  }
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section className="py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] -z-10" />

      <Container>
        <div ref={ref} className="reveal">
          <h2 className="text-4xl font-semibold tracking-tight mb-12">
            Tech Stack
          </h2>

          <div className="space-y-12">
            {SKILLS.map((grp, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium text-white/50 mb-6 uppercase tracking-wider">
                  {grp.category}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {grp.items.map((skill) => (
                    <div 
                      key={skill.name}
                      className="group flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`w-10 h-10 shrink-0 ${skill.invert ? 'brightness-0 invert' : ''}`}>
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-full h-full object-contain drop-shadow-md"
                        />
                      </div>
                      <span className="font-medium text-white/90 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}