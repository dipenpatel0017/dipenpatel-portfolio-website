'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  const experiences = [
    {
      position: 'Frontend Developer Intern',
      company: 'Tech Elecone Pvt. Ltd.',
      duration: 'Jan 2025 - Jun 2025',
      location: 'Remote',
      description: 'Built a comprehensive Hospital Management System using modern technologies. Implemented responsive design and optimized user experience for healthcare professionals.',
      achievements: [
        'Developed responsive Hospital Management System with React.js',
        'Implemented Tailwind CSS for modern, accessible UI',
        'Streamlined navigation flows and improved accessibility',
        'Enhanced system performance and user experience',
      ],
      technologies: ['React.js', 'Tailwind CSS', 'TypeScript', 'REST APIs', 'Healthcare Systems'],
      icon: '🏥',
    },
    {
      position: 'Web Development Intern',
      company: 'Help Me Buddy IT Pvt. Ltd.',
      duration: 'Jun 2024 - Jul 2024',
      location: 'Nadiad, Gujarat',
      description: 'Built MovieFlix, an interactive web application for digital video and media browsing. Focused on delivering clean design patterns and cross-browser compatibility.',
      achievements: [
        'Developed MovieFlix video streaming application',
        'Implemented clean frontend design patterns',
        'Ensured cross-browser responsiveness',
        'Delivered sharp layout aesthetics and smooth interactions',
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Video Streaming API', 'Responsive Design'],
      icon: '🎬',
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-serif mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-500 transform -translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`md:grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:direction-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 ring-4 ring-slate-900" />
                </div>

                {/* Content - Left on even, Right on odd */}
                {index % 2 === 0 ? (
                  <>
                    <motion.div
                      whileHover={{ x: -10 }}
                      className="glass p-8 rounded-xl hover:border-indigo-500/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                          <p className="text-indigo-400 font-semibold text-lg">{exp.company}</p>
                        </div>
                        <span className="text-4xl">{exp.icon}</span>
                      </div>

                      <div className="space-y-3 mb-6 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-cyan-400" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-violet-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-bold text-sm text-indigo-400 mb-3">KEY ACHIEVEMENTS</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▪</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-sm text-violet-400 mb-3">TECHNOLOGIES USED</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="glass p-8 rounded-xl hover:border-indigo-500/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                          <p className="text-indigo-400 font-semibold text-lg">{exp.company}</p>
                        </div>
                        <span className="text-4xl">{exp.icon}</span>
                      </div>

                      <div className="space-y-3 mb-6 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-cyan-400" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-violet-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-bold text-sm text-indigo-400 mb-3">KEY ACHIEVEMENTS</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">▪</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-sm text-violet-400 mb-3">TECHNOLOGIES USED</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
