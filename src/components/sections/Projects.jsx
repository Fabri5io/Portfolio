import { RevealOnScroll } from "../RevealOnScroll"
import { DiGithubFull } from "react-icons/di"

const featured = {
  title: "TritonTalk – Reliable Transport Protocol",
  description:
    "Built a sliding-window transport protocol in C that delivers messages reliably over a simulated lossy network. Implemented CRC-8 corruption recovery, cumulative and selective ACKs, and TCP-style congestion control (slow start, AIMD, fast retransmit) with per-RTT diagnostics logged to CSV.",
  techs: ["C", "POSIX Sockets", "Make", "Docker"],
  date: "Apr 2026",
  link: null,
}

const projects = [
  {
    title: "Shore",
    description:
      "A student-only mobile marketplace with listings, built-in chat, and verified account access.",
    techs: ["React Native", "TypeScript", "Expo", "Firebase"],
    link: "https://testflight.apple.com/join/BKDhr6VX",
    linkLabel: "TestFlight →",
  },
  {
    title: "Cookie Trailer",
    description:
      "Shopping screen system for a cookie game — ingredient selection, live cost tracking, and a dynamic customer order system.",
    techs: ["React", "Konva.js", "JavaScript"],
    date: "Sep–Dec 2025",
  },
  {
    title: "Taylored Text",
    description:
      "Chrome extension that turns any article into an AI-powered language learning experience using the Gemini API.",
    techs: ["JavaScript", "Vite", "Gemini API"],
    date: "June 2025",
    githubLink: "https://github.com/Fabri5io/tailortext",
  },
  {
    title: "Mastery IQ",
    description:
      "Adaptive learning platform with quizzes that adjust difficulty based on responses and Firebase auth.",
    techs: ["React", "Firebase", "Node.js"],
    githubLink: "https://github.com/Fabri5io/MasteryIQ",
  },
]

const TechTag = ({ tech }) => (
  <span className="bg-blue-500/10 text-blue-400 py-0.5 px-2.5 rounded-full text-xs hover:bg-blue-500/20 transition cursor-default">
    {tech}
  </span>
)

const LinkRow = ({ project }) => (
  <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
    {project.link && (
      <a href={project.link} target="_blank" rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
        {project.linkLabel || "View →"}
      </a>
    )}
    {project.githubLink && (
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
        className="text-gray-500 hover:text-white transition-colors">
        <DiGithubFull size={34} />
      </a>
    )}
    {!project.link && !project.githubLink && (
      <span className="text-gray-600 text-xs">Private / in progress</span>
    )}
  </div>
)

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-gray-200 via-gray-400 to-cyan-300
                          bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Hero card */}
          <div className="bg-white/3 border border-blue-500/20 rounded-2xl p-8 mb-6
                          hover:-translate-y-1 hover:border-blue-500/40
                          hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)]
                          transition-all duration-200">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
              <h3 className="text-2xl font-bold text-white">{featured.title}</h3>
              {featured.date && (
                <span className="text-xs text-gray-500 font-mono mt-1">{featured.date}</span>
              )}
            </div>
            <p className="text-gray-400 leading-relaxed mb-5 max-w-3xl">{featured.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {featured.techs.map((t) => <TechTag key={t} tech={t} />)}
            </div>
            <LinkRow project={featured} />
          </div>

          {/* Smaller project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-white/3 border border-white/10 rounded-2xl p-5
                            hover:-translate-y-1 hover:border-blue-500/30
                            hover:shadow-[0_4px_20px_rgba(59,130,246,0.07)]
                            transition-all duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between gap-1 mb-2">
                  <h3 className="text-sm font-semibold text-white leading-snug">{project.title}</h3>
                  {project.date && (
                    <span className="text-[10px] text-gray-600 font-mono whitespace-nowrap mt-0.5 shrink-0">{project.date}</span>
                  )}
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techs.map((t) => <TechTag key={t} tech={t} />)}
                </div>
                <LinkRow project={project} />
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
