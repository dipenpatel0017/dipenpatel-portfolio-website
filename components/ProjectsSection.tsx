'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Code } from 'lucide-react'

export function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  const projects = [
    {
      title: 'Blockchain Fake Product Detection',
      description: 'A decentralized application for verifying product authenticity using blockchain technology. Implemented smart contracts for transparent supply chain tracking and product verification.',
      tags: ['Blockchain', 'Smart Contracts', 'React', 'Web3'],
      image: 'from-indigo-600/40 to-violet-600/40',
      role: 'Lead Developer',
      highlights: [
        'Designed and deployed smart contracts',
        'Built interactive React frontend',
        'Implemented secure verification system',
      ],
    },
    {
      title: 'MovieFlix - Video Streaming Platform',
      description: 'An interactive web application for seamless digital video and media browsing. Developed clean frontend design patterns with cross-browser responsiveness.',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      image: 'from-violet-600/40 to-cyan-600/40',
      role: 'Frontend Developer',
      highlights: [
        'Built responsive video player',
        'Implemented search and filters',
        'Optimized performance',
      ],
    },
    {
      title: 'Hospital Management System',
      description: 'A comprehensive healthcare management platform built with React.js and Tailwind CSS. Streamlined navigation flows and improved user experience for better system accessibility.',
      tags: ['React.js', 'Tailwind CSS', 'Healthcare', 'Full Stack'],
      image: 'from-cyan-600/40 to-indigo-600/40',
      role: 'Full Stack Developer',
      highlights: [
        'Built responsive dashboard',
        'Implemented patient management',
        'Created appointment system',
      ],
    },
  ]

  return (
    <section id="projects" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-serif mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(79, 70, 229, 0.3)' }}
              className="glass p-6 rounded-xl overflow-hidden group hover:border-indigo-500/50 transition-all"
            >
              {/* Project Image Background */}
              <div className={`h-40 bg-gradient-to-br ${project.image} rounded-lg mb-6 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl opacity-30 group-hover:scale-110 transition-transform">📱</div>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>

              {/* Role Badge */}
              <div className="inline-block mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/50">
                  {project.role}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">▪</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2 rounded-lg bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 text-sm font-semibold hover:bg-indigo-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <Code size={14} />
                  Code
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-sm font-semibold hover:bg-cyan-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink size={14} />
                  Demo
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/dipenpatel0017"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-indigo-500 text-indigo-400 font-semibold hover:bg-indigo-500/10 transition-all"
          >
            <Code size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
