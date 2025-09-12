import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills =
        [
            "CSS",
            "Expo",
            "HTML",
            "React",
            "React Native",
            "TailWindCSS",
        ]
    const backendSkills =
        [
            "C++",
            "Java",
            "Node.js",
            "Python",
            "TypeScript",
            "Firebase"
        ]
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-200 via-gray-400 to-cyan-300 
                                    bg-clip-text text-transparent text-center">
                        {" "}
                        About me
                    </h2>
                    <div className="glass rounded-xl p-8 border-white/30 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-400 mb-6">
                            Hi, I'm Junior. I’m a 20-year-old third-year student 
                            studying Mathematics and Computer Science at UC San Diego.
                            My current interests are in statistics and modeling.
                            I also enjoy coding, whether it be web development or competitive programming
                            here is some of the stack I'm familiar with.
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
                        <div className="p-6 rounded-xl border-white/30 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Education
                            </h3>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li>
                                    <strong className="text-gray-200"> B.S in Mathematics and Computer Science,</strong> <span className="text-blue-500 font-semibold">UC, San Diego (Expected 2026)</span> 
                                </li>
                                <li className="-mt-1">
                                    <strong className="text-gray-200">Current Relevant Courses<span className="block text-sm text-blue-500 -mt-0.5"> (Fall 2025)</span> </strong>
                                    <ul className="ml-10 list-disc space-y-1">
                                        <li>
                                            Putnam Seminar<br />
                                            <span className="font-mono">(Math 96)</span>
                                        </li>
                                        <li>
                                            Software Engineering<br />
                                            <span className="font-mono">(CSE 110)</span>
                                        </li>
                                        <li>
                                            Foundations of Real Analysis I<br />
                                            <span className="font-mono">(Math 140)</span>
                                        </li>
                                        <li>
                                            Recommender Systems and Web Mining<br />
                                            <span className="font-mono">(CSE 158)</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border-white/30 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Work Experience
                            </h3>
                            <div className="space-y-3 text-gray-400 ">
                                <div>
                                    <h4 className="font-semibold text-blue-500 leading-tight">Software Engineer Intern – San Diego Supercomputer Center 
                                       <span className="block font-mono text-gray-200 text-xs -mt-0.5">  June(2025) - September(2025)</span>
                                        </h4>
                                    {" "}
                                    <p className="mt-1.5 text-gray-400"> Worked full stack on a student-only selling app. 
                                        Designed and maintained the Firebase backend to securely handle user profiles, item listings, 
                                        chat messages, and image data. 
                                        Implemented user authentication, and image processing features. On the front end, 
                                        I used React Native to build responsive UI components and screens for listings, profiles, and chat. </p>
                                </div>
                            </div>
                        </div>

                    </dvi>
                </div>
            </RevealOnScroll>
        </section>
    );
}