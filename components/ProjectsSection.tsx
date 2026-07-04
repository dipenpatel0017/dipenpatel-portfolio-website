'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Code, Star } from 'lucide-react'

export function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  const featuredProject = {
    title: 'Hospital Management System',
    description: 'A comprehensive healthcare management platform for secure and efficient hospital operations. Integrates patient records, appointments, and secure medical data storage with SSL encryption and two-factor authentication.',
    longDescription: 'Built with modern technologies to streamline healthcare workflows. Features responsive design, optimized user experience for healthcare professionals, and enterprise-grade security measures.',
    tags: ['React.js', 'Tailwind CSS', 'Healthcare', 'Full Stack', 'Node.js', 'MongoDB'],
    role: 'Full Stack Developer',
    image: '/hospital-management-system.png',
    liveUrl: 'https://healthcare-management-system-git-main-dipenpatel0017s-projects.vercel.app/',
    highlights: [
      'Built responsive healthcare dashboard with React.js',
      'Implemented secure patient record management',
      'Created appointment scheduling system',
      'Integrated SSL encryption and two-factor authentication',
      'Optimized performance for enterprise use',
    ],
  }

  const otherProjects = [
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
  ]

  return (
    <section id="projects" ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold font-serif mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Showcase of my latest work in healthcare technology, blockchain, and modern web development</p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 mx-auto rounded-full mt-8" style={{
            boxShadow: '0 0 20px rgba(79, 70, 229, 0.6)',
          }} />
        </motion.div>

        {/* Featured Project - Hospital Management System */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="glass rounded-2xl border border-indigo-500/30 overflow-hidden hover:border-indigo-500/50 transition-all"
            style={{
              boxShadow: '0 0 40px rgba(79, 70, 229, 0.2)',
            }}
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Featured Project Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Star className="text-yellow-400" fill="currentColor" size={24} />
                  <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">Featured Project</span>
                </div>
                
                <h3 className="text-4xl font-bold mb-4 font-serif">
                  <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                    {featuredProject.title}
                  </span>
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {featuredProject.longDescription}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-indigo-400 mb-4 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-3">
                    {featuredProject.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-3">
                        <span className="text-cyan-400 mt-1.5">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-violet-400 mb-3 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30 text-indigo-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                  >
                    <ExternalLink size={18} />
                    Visit Live Site
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 border-2 border-indigo-500 text-indigo-300 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all flex items-center justify-center gap-2"
                  >
                    <Code size={18} />
                    View Code
                  </motion.button>
                </div>
              </motion.div>

              {/* Featured Project Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative group flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="w-full h-96 rounded-xl border border-indigo-500/30 group-hover:border-indigo-500/50 transition-all overflow-hidden bg-gradient-to-br from-blue-900/30 to-indigo-900/30">
                  <img 
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
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
        </motion.div>

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
