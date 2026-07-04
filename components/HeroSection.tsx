'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Code, Briefcase, Mail, ArrowRight } from 'lucide-react'

const titles = ['Full Stack Developer', 'AI Enthusiast', 'Blockchain Explorer', 'Problem Solver']

export function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 3000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setTitleIndex((prev) => (prev + 1) % titles.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        )
      }, isDeleting ? 50 : 100)
    }

    return () => clearTimeout(timeout)
  }, [displayText, titleIndex, isDeleting])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Image with glow ring */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
            className="relative w-32 h-32 mx-auto mb-8"
          >
            <div className="relative w-full h-full rounded-full border-2 border-indigo-500 overflow-hidden shadow-2xl shadow-indigo-500/50 animate-pulse">
              <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">DP</span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-violet-400"
            />
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 font-serif">
              <span className="text-white">Hello, I&apos;m </span>
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Dipen Patel
              </span>
            </h1>
          </motion.div>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-12 flex items-center justify-center mb-8"
          >
            <span className="text-2xl sm:text-3xl font-mono text-cyan-400">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            MTech Computer Science student at CHARUSAT specializing in Blockchain, Cloud Computing, and Full-Stack Development. 
            Passionate about building scalable systems and exploring emerging technologies.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">7+</div>
              <div className="text-gray-400 text-sm">Months Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-400">15+</div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">4+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(79, 70, 229, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
            >
              View Projects <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all"
            >
              Get In Touch
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/DIPEN_PATEL_RESUME.pdf"
              download
              className="px-8 py-3 border-2 border-violet-400 text-violet-400 rounded-lg font-semibold hover:bg-violet-400/10 transition-all flex items-center gap-2"
            >
              <Download size={18} /> Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              whileHover={{ y: -5, boxShadow: '0 0 20px rgba(79, 70, 229, 0.6)' }}
              href="https://github.com/dipenpatel0017"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-indigo-400 hover:text-cyan-400 transition-colors"
            >
              <Code size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, boxShadow: '0 0 20px rgba(139, 92, 246, 0.6)' }}
              href="https://linkedin.com/in/dipen-patel-69520026a"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-violet-400 hover:text-cyan-400 transition-colors"
            >
              <Briefcase size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)' }}
              href="mailto:dipenpatelalpeshbhai@gmail.com"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-cyan-400 hover:text-violet-400 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 opacity-50"
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
