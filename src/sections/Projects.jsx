import { motion } from "framer-motion"
import portfolio from "../assets/Portfolio.png"
import assetManagement from "../assets/ams.png"
import rmrs from "../assets/RMRS.png"

const projects = [
  {
    title: "Asset Management System",
    impact: "Minimized asset tracking errors and improved allocation efficiency",
    desc: "System to monitor, allocate, and manage organizational assets with ease.",
    tech: ["React", "Express", "MongoDB"],
    highlights: ["CRUD operations", "Asset allocation", "Data tracking"],
    role: "Full Stack Developer",
    image: assetManagement,

    live: "https://asset-management-system-sandy.vercel.app",
    github: "https://github.com/ankita-gupta83/asset-management-system",
  },
  {
    title: "Rapid Maintenance Response System",
    impact: "Reduced issue reporting time with streamlined request tracking",
    desc: "Platform for quick reporting and tracking of maintenance requests.",
    tech: ["Java", "MySQL"],
    highlights: ["Request logging", "Status tracking", "Database design"],
    role: "Backend + Database",
    image: rmrs,

    live: "",
    github: "",
  },
  {
    title: "Portfolio Website",
    impact: "Built high performance UI with smooth and engaging interactions",
    desc: "Personal portfolio focused on performance, animation, and clean UI.",
    tech: ["React", "Tailwind", "Framer Motion"],
    highlights: ["Animations", "Responsive design", "Clean UI"],
    role: "Frontend Developer",
    image: portfolio,

    live: "/",
    github: "https://github.com/ankita-gupta83/ankita-portfolio",
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">

      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-3"> Projects</h2>
        <p className="text-gray-400 text-sm">
          A selection of projects focused on solving real world problems with scalable and user friendly solutions.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 space-y-20">

        {projects.map((project, index) => {
          const isReverse = index % 2 !== 0

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="border-b border-gray-700 pb-16">
              <div className={`flex flex-col md:flex-row items-center gap-10 ${isReverse ? "md:flex-row-reverse" : ""}`}>

                {/* IMAGE */}
                <div className="w-full md:w-1/2">
                  <div className="overflow-hidden rounded-lg border border-gray-700">
                    <img
                      src={project.image}
                      alt="project"
                      className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  </div>
                </div>

                {/* TEXT */}
                <div className="w-full md:w-1/2">

                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-gray-500 mb-2">
                    Role: {project.role}
                  </p>

                  <p className="text-[#818CF8] text-sm mb-3">
                    {project.impact}
                  </p>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* HIGHLIGHTS */}
                  <ul className="text-xs text-gray-400 mb-4 space-y-1">
                    {project.highlights.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>

                  {/* TECH */}
                  <p className="text-xs text-gray-400 mb-5">
                    Tech: {project.tech.join(" • ")}
                  </p>

                  {/* ACTIONS */}
                  <div className="flex gap-4">

                    {/* LIVE DEMO BUTTON */}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#818CF8] text-sm hover:underline cursor-pointer"
                      >
                        View Project →
                      </a>
                    ) : (
                      <button
                        disabled
                        className="text-gray-500 text-sm"
                      >
                        View Project →
                      </button>
                    )}

                    {/* GITHUB BUTTON */}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-sm hover:text-white transition cursor-pointer"
                      >
                        Code
                      </a>
                    ) : (
                      <button
                        disabled
                        className="text-gray-500 text-sm"
                      >
                        Code
                      </button>
                    )}

                  </div>

                </div>

              </div>
            </motion.div>
          )
        })}

      </div>
    </section>
  )
}

export default Projects