import { RevealOnScroll } from "../RevealOnScroll"
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Home = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY < 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Software Engineer Intern @ SDSC
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-gray-100 via-gray-300 to-cyan-400
                         bg-clip-text text-transparent leading-tight">
            Junior Castillo
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl mb-4 font-light">
            Math-CS @ UC San Diego
          </p>

          <p className="text-gray-500 text-base mb-10 max-w-lg mx-auto leading-relaxed">
            I code :)
          </p>

          <div className="flex justify-center gap-4 mb-10">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-7 rounded-lg font-medium transition-all
              hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white/20 text-gray-300 py-3 px-7 rounded-lg font-medium transition-all
              hover:-translate-y-0.5 hover:border-blue-500/50 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-5">
            <a
              href="https://github.com/fabri5io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/junior-castillo-8971692a2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {showScroll && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      )}
    </section>
  );
}
