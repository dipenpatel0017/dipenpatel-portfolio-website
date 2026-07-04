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
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold font-serif mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">Transforming ideas into scalable solutions through real-world experience in healthcare technology and modern web development</p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 mx-auto rounded-full" style={{
            boxShadow: '0 0 20px rgba(79, 70, 229, 0.6)',
          }} />
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              {/* Card */}
              <div 
                className={`relative glass p-8 lg:p-10 rounded-2xl border transition-all backdrop-blur-md overflow-hidden ${
                  index === 0 
                    ? 'border-indigo-500/30 hover:border-indigo-500/60 hover:shadow-lg hover:shadow-indigo-500/20' 
                    : 'border-violet-500/30 hover:border-violet-500/60 hover:shadow-lg hover:shadow-violet-500/20'
                }`}
              >
                {/* Background glow */}
                <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                  index === 0 ? 'bg-indigo-500' : 'bg-violet-500'
                }`} />
                
                <div className="relative z-10">
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/5">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2">{exp.position}</h3>
                      <p className={`text-lg font-semibold ${
                        index === 0 ? 'text-indigo-400' : 'text-violet-400'
                      }`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-5xl ml-4 flex-shrink-0">{exp.icon}</span>
                  </div>

                  {/* Location & Duration Row */}
                  <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <Calendar size={20} className={index === 0 ? 'text-indigo-400' : 'text-violet-400'} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Duration</p>
                        <p className="text-gray-200 font-medium">{exp.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className={index === 0 ? 'text-cyan-400' : 'text-violet-400'} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                        <p className="text-gray-200 font-medium">{exp.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  {/* Two Column Layout for Achievements and Technologies */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Achievements */}
                    <div>
                      <h4 className={`font-bold text-sm mb-4 uppercase tracking-widest ${
                        index === 0 ? 'text-indigo-400' : 'text-violet-400'
                      }`}>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 flex items-start gap-3">
                            <span className={`mt-1.5 flex-shrink-0 ${
                              index === 0 ? 'text-indigo-400' : 'text-violet-400'
                            }`}>
                              ✓
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className={`font-bold text-sm mb-4 uppercase tracking-widest ${
                        index === 0 ? 'text-cyan-400' : 'text-violet-400'
                      }`}>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs px-4 py-2 rounded-full font-medium transition-all border ${
                              index === 0
                                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300 group-hover:border-indigo-500/50'
                                : 'bg-violet-500/10 border-violet-500/30 text-violet-300 group-hover:border-violet-500/50'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
