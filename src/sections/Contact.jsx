import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="px-8 py-20 text-center">

      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-4">
        Let’s Connect
      </motion.h2>

      <p className="text-gray-400 mb-6">
        Let’s connect! Feel free to send a message.
      </p>

      {/* QUICK CONTACT LINKS */}
      <div className="flex justify-center gap-6 mb-10 text-gray-300">

        <a
          href="mailto:ankitagupta.sm@gmail.com"
          className="flex items-center gap-2 hover:text-[#6366F1] transition">
          <FaEnvelope /> ankitagupta.sm@gmail.com
        </a>

        <a
          href="https://github.com/ankita-gupta83"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#6366F1] transition">
          <FaGithub size={20} />
        </a>

        <a
          href="https://linkedin.com/in/ankita-gupta004"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#6366F1] transition">
          <FaLinkedin size={20} />
        </a>

      </div>

      {/* FORM */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.target.reset() 
          alert("Message sent!")
        }}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name (e.g. Rahul Sharma)"
          required
          className="p-3 rounded bg-[#1E293B] border border-gray-700 focus:outline-none focus:border-[#6366F1] transition"/>

        <input
          type="email"
          name="email"
          placeholder="Your Email (e.g. rahul@email.com)"
          required
          className="p-3 rounded bg-[#1E293B] border border-gray-700 focus:outline-none focus:border-[#6366F1] transition"/>

        <textarea
          name="message"
          placeholder="Your message here..."
          rows="5"
          required
          className="p-3 rounded bg-[#1E293B] border border-gray-700 focus:outline-none focus:border-[#6366F1] transition">
        </textarea>

        <button
          type="submit"
          className="bg-[#6366F1] py-3 rounded-lg hover:scale-105 hover:bg-[#4F46E5] transition">
          Send Message
        </button>

      </form>

    </section>
  )
}

export default Contact