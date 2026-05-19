import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-gray-400 px-8 py-10 mt-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LEFT: Branding */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            Ankita
          </h2>
          <p className="text-sm">
            Building modern web applications with clean UI and scalable backend.
          </p>
        </div>

        {/* CENTER: Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT: Socials */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 text-xl">

            <a 
              href="https://github.com/ankita-gupta83" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition">
              <FaGithub />
            </a>

            <a 
              href="https://linkedin.com/in/ankita-gupta004" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition">
              <FaLinkedin />
            </a>

            <a 
              href="mailto:ankitagupta.sm@gmail.com"
              className="hover:text-[#6366F1] transition">
              <FaEnvelope />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Ankita. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer