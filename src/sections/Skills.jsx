import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa"
import { SiJavascript, SiTypescript, SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiBootstrap, SiSpringboot } from "react-icons/si"

const skillsData = [
  {
    title: "Frontend",
    icon: <FaReact className="text-4xl mx-auto mb-3 text-blue-400" />,
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend",
    icon: <FaNodeJs className="text-4xl mx-auto mb-3 text-green-400" />,
    skills: ["Node.js", "Express.js", "REST APIs", "Spring Boot"]
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-4xl mx-auto mb-3 text-yellow-400" />,
    skills: ["MongoDB", "MySQL"]
  },
  {
    title: "Languages",
    icon: <SiJavascript className="text-4xl mx-auto mb-3 text-yellow-300" />,
    skills: ["JavaScript", "Java"]
  },
  {
    title: "Tools & DevOps",
    icon: <FaGitAlt className="text-4xl mx-auto mb-3 text-orange-400" />,
    skills: ["Git", "GitHub", "Postman", "VS Code", "AI assisted development tools"]
  },
  {
    title: "UI & Design",
    icon: <SiTailwindcss className="text-4xl mx-auto mb-3 text-cyan-400" />,
    skills: ["Responsive Design", "UI/UX Basics", "Figma"]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="px-8 py-20">

      <h2 className="text-3xl font-bold text-center mb-4">
        Skills
      </h2>

      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        A blend of frontend, backend, and tools I use to build scalable and user friendly applications.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-[#1E293B] p-6 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
            {category.icon}

            <h3 className="text-xl font-semibold mb-4 text-center">
              {category.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-sm bg-slate-700 px-3 py-1 rounded-full hover:bg-blue-500/20 transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Skills
