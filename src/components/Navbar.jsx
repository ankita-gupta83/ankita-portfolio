import { motion } from "framer-motion"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-4 md:px-8 py-4 bg-[#1E293B]/80 backdrop-blur-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-[#6366F1]">Ankita</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-md text-white">
        <a
          href="/"
          className="px-3 py-1.5 rounded-full transition-all duration-200 hover:text-blue-300 hover:bg-white/5 hover:shadow-sm">
          Home
        </a>

        <a
          href="#about"
          className="px-3 py-1.5 rounded-full transition-all duration-200 hover:text-blue-300 hover:bg-white/5 hover:shadow-sm">
          About Me
        </a>

        <a
          href="#projects"
          className="px-3 py-1.5 rounded-full transition-all duration-200 hover:text-blue-300 hover:bg-white/5 hover:shadow-sm">
          Projects
        </a>

        <a
          href="#skills"
          className="px-3 py-1.5 rounded-full transition-all duration-200 hover:text-blue-300 hover:bg-white/5 hover:shadow-sm">
          Skills
        </a>

        <a
          href="#contact"
          className="px-3 py-1.5 rounded-full transition-all duration-200 hover:text-blue-300 hover:bg-white/5 hover:shadow-sm">
          Contact
        </a>
      </div>

      {/* Mobile Button */}
      <button className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: 260 }}
          animate={{ x: 0 }}
          exit={{ x: 260 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-screen w-65 max-w-full bg-[#1E293B] shadow-lg flex flex-col gap-6 p-4 md:hidden z-50 box-border overflow-x-hidden"
        >
          <button
            className="self-end text-xl"
            onClick={() => setIsOpen(false)} >
            ✕
          </button>

          <a href="/" className="w-full px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/5 active:bg-white/10"
            onClick={() => setIsOpen(false)}>
            Home
          </a>

          <a href="#about" className="w-full px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/5 active:bg-white/10"
            onClick={() => setIsOpen(false)}>
            About
          </a>

          <a href="#projects" className="w-full px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/5 active:bg-white/10"
            onClick={() => setIsOpen(false)}>
            Projects
          </a>

          <a href="#skills" className="w-full px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/5 active:bg-white/10"
            onClick={() => setIsOpen(false)}>
            Skills
          </a>

          <a href="#contact" className="w-full px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/5 active:bg-white/10"
            onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </motion.div>
      )}

    </motion.nav>
  )
}

export default Navbar