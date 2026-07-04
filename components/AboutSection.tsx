'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Zap, Target } from 'lucide-react'

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  const timeline = [
    {
      year: '2025',
      degree: 'B.Tech in Computer Engineering',
      school: 'CVM University, Vallabh Vidyanagar',
      cgpa: '7.47 / 10.00',
    },
    {
      year: '2027 (Expected)',
      degree: 'M.Tech in Computer Engineering',
      school: 'CHARUSAT, Changa',
      cgpa: 'In Progress',
    },
  ]

  const expertise = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'React, Node.js, TypeScript, and modern web technologies',
    },
    {
      icon: Zap,
      title: 'Cloud & DevOps',
      description: 'Docker, Kubernetes, CI/CD, Cloud Infrastructure',
    },
    {
      icon: Target,
      title: 'Blockchain & IoT',
      description: 'Distributed Systems, Cryptography, Smart Contracts',
    },
  ]

  return (
    <section id="about" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
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
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I&apos;m a passionate computer science student pursuing my M.Tech at CHARUSAT, with a strong foundation in full-stack development and emerging technologies. With 7+ months of professional internship experience, I&apos;ve worked on building scalable web applications and exploring the intersection of blockchain, cloud computing, and AI.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My journey combines academic excellence with practical industry experience. I&apos;m particularly interested in distributed systems, cryptographic protocols, and building applications that solve real-world problems using cutting-edge technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I&apos;m conducting research in blockchain technology while maintaining a keen interest in cloud infrastructure and full-stack development. I believe in continuous learning and staying updated with the latest technological innovations.
            </p>
          </motion.div>

          {/* Right - Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass p-6 rounded-lg border-l-4 border-indigo-500 hover:border-cyan-500 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-indigo-400">{item.degree}</h3>
                    <span className="text-sm text-gray-400">{item.year}</span>
                  </div>
                  <p className="text-gray-300 mb-1">{item.school}</p>
                  <p className="text-sm text-cyan-400">CGPA: {item.cgpa}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold font-serif mb-12 text-center">Areas of Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(79, 70, 229, 0.2)' }}
                  className="glass p-8 rounded-lg text-center hover:border-indigo-500/50 transition-all"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-indigo-500/20 rounded-lg">
                      <Icon className="w-6 h-6 text-indigo-400" />
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
