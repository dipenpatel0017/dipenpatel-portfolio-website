'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })
  const [activeCategory, setActiveCategory] = useState('all')

  const skills = {
    languages: [
      { name: 'JavaScript', level: 85, icon: '⚡' },
      { name: 'TypeScript', level: 80, icon: '📘' },
      { name: 'Python', level: 75, icon: '🐍' },
      { name: 'SQL', level: 80, icon: '💾' },
      { name: 'HTML/CSS', level: 90, icon: '🎨' },
    ],
    frontend: [
      { name: 'React.js', level: 88, icon: '⚛️' },
      { name: 'Next.js', level: 85, icon: '▲' },
      { name: 'Tailwind CSS', level: 90, icon: '🎯' },
      { name: 'Framer Motion', level: 82, icon: '✨' },
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🟩' },
      { name: 'Express.js', level: 82, icon: '🚀' },
      { name: 'MongoDB', level: 78, icon: '🍃' },
      { name: 'PostgreSQL', level: 80, icon: '🐘' },
      { name: 'Supabase', level: 80, icon: '💚' },
    ],
    devops: [
      { name: 'Docker', level: 80, icon: '🐳' },
      { name: 'Kubernetes', level: 72, icon: '☸️' },
      { name: 'Git/GitHub', level: 85, icon: '🐙' },
      { name: 'CI/CD', level: 75, icon: '🔄' },
    ],
    specialization: [
      { name: 'Blockchain', level: 78, icon: '⛓️' },
      { name: 'IoT', level: 75, icon: '📡' },
      { name: 'Cloud Infrastructure', level: 80, icon: '☁️' },
      { name: 'Machine Learning', level: 72, icon: '🤖' },
    ],
  }

  const categories = [
    { key: 'all', label: 'All Skills' },
    { key: 'languages', label: 'Languages' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'devops', label: 'DevOps' },
    { key: 'specialization', label: 'Specialization' },
  ]

  const getAllSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skills).flat()
    }
    return skills[activeCategory as keyof typeof skills] || []
  }

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
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
              Technical Skills
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/50'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-6"
        >
          {getAllSkills().map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ x: 5 }}
              className="glass p-6 rounded-lg hover:border-indigo-500/50 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h4 className="font-bold text-lg">{skill.name}</h4>
                </div>
                <span className="text-cyan-400 font-semibold">{skill.level}%</span>
              </div>
              
              {/* Proficiency Bar */}
              <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                  className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 rounded-full shadow-lg shadow-indigo-500/50"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
