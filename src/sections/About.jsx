import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20 relative">

      {/* subtle background layer */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0F172A]/40 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* HEADING */}
        <h2 className="text-3xl font-bold text-center mb-16">
          About Me
        </h2>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1E293B] border border-gray-700 rounded-2xl p-8 md:p-10 shadow-lg"
        >

          {/* QUOTE STYLE */}
          <div className="relative mb-8">

            <span className="absolute -top-6 -left-4 text-6xl text-[#6366F1] opacity-30">
              “
            </span>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed pl-4">
              I build structured, scalable web applications that solve real problems — 
              focusing not just on how things look, but how they work, perform, and deliver value.
            </p>

          </div>

          {/* DETAILS GRID */}
          <div className="grid md:grid-cols-2 gap-8 text-sm">

            {/* LEFT */}
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm a recent <span className="text-white">MCA postgraduate</span> with a strong 
                foundation in full stack development. I enjoy turning ideas into 
                functional products that are clean, efficient, and user focused.
              </p>

              <p>
                My work includes building systems like client management platforms, 
                asset tracking solutions, and responsive web applications that improve workflows 
                and reduce manual effort.
              </p>
            </div>

            {/* RIGHT */}
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I primarily work with technologies like React, Node.js, and modern UI tools, 
                focusing on writing maintainable code and building scalable solutions.
              </p>

              <p>
                I’m constantly learning, refining my approach, and aiming to build 
                applications that are not just functional, but meaningful and impactful.
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}

export default About