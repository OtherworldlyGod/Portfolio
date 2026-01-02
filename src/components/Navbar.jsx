import Container from "./Container"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <Container>
        <div className="flex justify-between items-center py-4">
          <span className="text-lg font-semibold">Vedant Wade</span>
          <div className="space-x-6 text-sm text-white/70">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </Container>
    </nav>
  )
}
