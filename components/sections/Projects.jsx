import { RevealOnScroll } from "../RevealOnScroll"
import { FaGithub} from "react-icons/fa";
import {DiGithubFull} from "react-icons/di"


export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold  mb-8 bg-gradient-to-r from-gray-200 via-gray-400 to-cyan-300  bg-clip-text text-transparent text-center">
                        {" "}
                        Feature Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all
                                "
                        >
                            <h3 className="text-xl font-bold mb-2">Tailer Text</h3>
                            <p className="text-gray-400 mb-4"> TailorText is a Chrome extension that is integrated and tailored to your daily life.
                                It turns any article you're reading into an interactive, AI-powered language learning experience.
                                The tool pulls words from any given text you are currently reading,
                                translates them into flashcards, and quizzes you all from your browser.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "Node.js", "CSS", "VITE"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                            "
                                    >
                                        {tech}

                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/Fabri5io/tailortext"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center"
                                >
                                    <DiGithubFull size={48} />
                                </a>                        </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all
                                "
                        >
                            <h3 className="text-xl font-bold mb-2">Mastery IQ</h3>
                            <p className="text-gray-400 mb-4"> Mastery IQ is a website similar to Khan Academy that provides adaptive learning experiences for students.
                                It features a responsive interface with a dynamic navbar and interactive quizzes that adjust difficulty based on user responses,
                                uses Firebase Authentication to manage user accounts. </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "FireBase", "Node.js", "Html", "CSS"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                            "
                                    >
                                        {tech}

                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/Fabri5io/MasteryIQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center"
                                >
                                    <DiGithubFull size={48} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}