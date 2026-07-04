'use client'

import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { CustomCursor } from '@/components/CustomCursor'
import { Footer } from '@/components/Footer'
import { ExternalLink, Code, Star } from 'lucide-react'
import Link from 'next/link'

const featuredProjects = [
  {
    id: 1,
    title: 'Healthcare Management System',
    description: 'A comprehensive hospital management platform with patient records, appointment scheduling, secure medical data storage, SSL encryption, two-factor authentication, and cloud security for seamless and secure healthcare operations.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-07-04%20230342-JLoGwFJmaayJXnhjntj8och0KnvW1d.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Authentication', 'Healthcare'],
    link: 'https://healthcare-management-system-git-main-dipenpatel0017s-projects.vercel.app/',
    featured: true,
    stats: {
      users: '500+',
      hospitals: '15+',
      rating: '4.8'
    }
  },
  {
    id: 2,
    title: 'Blockchain Fake Product Detection',
    description: 'Anti-counterfeiting solution using blockchain technology to verify product authenticity. Integrates QR codes and distributed ledger for supply chain transparency and consumer protection.',
    tags: ['Blockchain', 'Web3', 'Solidity', 'React', 'Ethereum'],
    link: '#',
    featured: false,
    stats: {
      products: '1000+',
      verified: '99.9%',
      rating: '4.7'
    }
  },
  {
    id: 3,
    title: 'MovieFlix - Streaming Platform',
    description: 'Entertainment platform with movie recommendations, user ratings, watchlist management, and personalized content discovery. Built with modern streaming architecture and responsive design.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'API Integration', 'Movie Database'],
    link: '#',
    featured: false,
    stats: {
      movies: '5000+',
      users: '10000+',
      rating: '4.6'
    }
  },
  {
    id: 4,
    title: 'Hospital Management System',
    description: 'Full-stack hospital management solution featuring patient appointment scheduling, medical records management, doctor availability tracking, and secure HIPAA-compliant data storage.',
    tags: ['Full Stack', 'Healthcare IT', 'Database Design', 'Security'],
    link: '#',
    featured: false,
    stats: {
      features: '50+',
      uptime: '99.9%',
      rating: '4.9'
    }
  },
]

export default function ProjectsPage() {
  const featured = featuredProjects.find(p => p.featured)
  const otherProjects = featuredProjects.filter(p => !p.featured)

  return (
    <main className="relative w-full min-h-screen bg-[#030712] overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />

        {/* Header */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Explore my portfolio of innovative solutions spanning healthcare technology, blockchain, and modern web applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Project - Large Card */}
        {featured && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden glass border border-indigo-500/30"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-cyan-500/10" />

                <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                  >
                    <div className="inline-flex items-center gap-2 mb-4 w-fit px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/50">
                      <Star size={16} className="text-indigo-400" />
                      <span className="text-sm font-semibold text-indigo-300">Featured Project</span>
                    </div>

                    <h2 className="text-4xl font-bold mb-4 text-white">
                      {featured.title}
                    </h2>

                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                      {featured.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(featured.stats).map(([key, value]) => (
                        <div key={key} className="rounded-lg bg-slate-800/50 p-3">
                          <p className="text-sm text-slate-400 capitalize">{key}</p>
                          <p className="text-xl font-bold text-cyan-400">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-lg bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 flex-wrap">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={featured.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold hover:from-indigo-600 hover:to-violet-700 transition-all flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        Visit Live Site
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="px-8 py-3 rounded-lg border-2 border-indigo-500 text-indigo-400 font-semibold hover:bg-indigo-500/10 transition-all flex items-center gap-2"
                      >
                        <Code size={18} />
                        View Code
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative h-96 rounded-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-lg" />
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Other Projects Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-white"
            >
              Other Notable Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-xl glass border border-slate-700/50 overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <Star size={20} className="text-yellow-400" />
                    </div>

                    <p className="text-slate-300 text-sm mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="rounded bg-slate-800/50 p-2 text-center">
                          <p className="text-xs text-slate-400">{key}</p>
                          <p className="text-sm font-bold text-cyan-400">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded text-xs bg-violet-500/20 border border-violet-500/50 text-violet-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.link}
                      className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-cyan-400 transition-colors"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Interested in Collaboration?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Let&apos;s create something amazing together. I&apos;m always open to new opportunities and exciting projects.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/#contact"
                  className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold hover:from-indigo-600 hover:to-violet-700 transition-all"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
