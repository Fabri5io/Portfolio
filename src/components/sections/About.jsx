import { RevealOnScroll } from "../RevealOnScroll"

const experience = [
  {
    role: "Software Engineer Intern",
    company: "San Diego Supercomputer Center",
    dates: "Oct 2025 – Present",
    description:
      "Currently working on CAPCHD v2, a clinical database platform for scientists at SDSC Research Data Services. Previously built Go backend services for the Billing team — replacing a legacy Python pipeline, writing HTTP clients for Microsoft Dynamics CRM and StruxureWare, and implementing idempotent upsert workflows with multi-source change detection.",
  },
  {
    role: "Software Developer Intern",
    company: "San Diego Supercomputer Center",
    dates: "June – Sep 2025",
    description:
      "Designed and maintained the Firebase backend for a student-only mobile marketplace, handling profiles, listings, chat, and image data. Built UI screens in React Native for listings, profiles, and messaging.",
  },
]

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-gray-200 via-gray-400 to-cyan-300
                          bg-clip-text text-transparent text-center">
            About me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-16 max-w-2xl mx-auto text-center">
            I'm Junior — a third-year Math-CS student at UC San Diego who enjoys building things.
            I'm into computer networks, statistics, and machine learning. Outside of class I'm either working
            at SDSC or coding.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Education</h3>
              <div className="bg-white/3 border border-white/10 rounded-2xl p-6">
                <p className="text-white font-medium">B.S. Mathematics – Computer Science</p>
                <p className="text-blue-400 text-sm mt-1">UC San Diego</p>
                <p className="text-gray-500 text-sm mt-1">Sep 2023 – Dec 2026</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Spring 2026 courses</p>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    <li>Computer Networking</li>
                    <li>Deep Learning</li>
                    <li>Mathematical Statistics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Experience</h3>
              <div className="space-y-6">
                {experience.map((job, i) => (
                  <div key={i} className="relative pl-5 border-l-2 border-blue-500/30">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-500" />
                    <div className="flex flex-wrap justify-between items-start gap-1 mb-1">
                      <p className="text-white font-medium text-sm">{job.role}</p>
                      <span className="text-gray-500 text-xs font-mono">{job.dates}</span>
                    </div>
                    <p className="text-blue-400 text-xs mb-2">{job.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
