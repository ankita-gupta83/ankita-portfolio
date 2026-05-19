import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-[#0F172A] text-white flex items-center pt-5 overflow-hidden">

            {/* Background Glow */}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-24 right-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* LEFT */}
                <div>

                    {/* HEADLINE */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[36px] sm:text-[44px] md:text-[60px] font-semibold leading-tight">
                        Hi, I’m{" "}
                        <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Ankita
                        </span>
                        <br />
                        Full Stack Developer building{" "}
                        <span className="text-blue-400">
                            fast, user focused
                        </span>{" "}
                        web applications
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-gray-400 max-w-md text-[15px] leading-relaxed">
                        I develop responsive web applications using the MERN stack,
                        focusing on performance, clean UI, and real world functionality.
                    </motion.p>

                    {/* PROOF LINE */}
                    <p className="mt-3 text-sm text-gray-500">
                        Built full stack projects with real world use cases
                    </p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mt-8 text-center">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-medium inline-block">
                            View Projects
                        </a>

                        <button
                            onClick={() => {
                                window.open("/resume.pdf", "_blank");
                            }}
                            className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition">
                            View Resume
                        </button>
                    </motion.div>

                    {/* SOCIAL */}
                    <div className="flex gap-6 mt-8 text-gray-400 text-xl">
                        <a href="https://github.com/ankita-gupta83"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#0A66C2] transition">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/ankita-gupta004"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#0A66C2] transition">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <motion.div

                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}>
                    <div className="bg-[#0B1220] border border-white/10 rounded-2xl shadow-xl overflow-hidden hidden md:block">

                        {/* TOP BAR */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                            <span className="text-xs text-gray-400">project preview</span>
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 space-y-6">

                            {/* FEATURED PROJECT */}
                            <div className="bg-[#0F172A] border border-white/10 rounded-xl p-4">
                                <p className="text-xs text-gray-400">Featured Project</p>
                                <h3 className="text-lg font-medium mt-1">
                                    Asset Management System
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">
                                    Asset tracking with dashboard & authentication
                                </p>
                            </div>

                            {/* UI BLOCKS */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-20 bg-white/5 rounded-lg"></div>
                                <div className="h-20 bg-white/5 rounded-lg"></div>
                            </div>

                            {/* ACTIVITY BARS */}
                            <div className="space-y-2">
                                <div className="h-2 bg-blue-400/50 rounded w-[80%]"></div>
                                <div className="h-2 bg-cyan-400/50 rounded w-[60%]"></div>
                                <div className="h-2 bg-green-400/50 rounded w-[70%]"></div>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;