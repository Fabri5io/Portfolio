
export const About = () => {

    const frontendSkills =
        [
            "React",
            "Vue",
            "TypeScript",
            "TailWindCSS"
        ]
    const backendSkills =
        [
            "C++",
            "Node.js",
            "Python",
            "C"
        ]
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    About me
                </h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        About me and the stuff I have accomplished
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
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

                        </div>

                          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
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

                        </div>

                    </div>
                </div>

                <dvi className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 
                        Education
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> B.S in Mathematics-Computer Science </strong> - University of California, San Deigo (2023-2026)
                            </li>
                            <li>
                                Relavant Coursework: Data Structures, ....
                            </li>
                        </ul>
                    </div>

                     <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 
                        Work Experience
                        </h3>
                        <div className ="space-y-4 text-gray-300 ">
                            <div>
                                <h4 className="font-semibold"> Software Engineer intern at San Diego Super Computer (Summer 2025)</h4>
                                {" "}
                                <p> What did I do???</p>
                            </div>
                        </div>
                    </div>

                </dvi>
            </div>

        </section>
    );
}