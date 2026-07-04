'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Download, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export function CertificationsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  const certifications = [
    {
      title: 'Code Unnati Program Participant',
      issuer: 'SAP India & Edunet Foundation',
      date: '2023-2024',
      description: 'Successfully completed training on Emerging Technologies including Machine Learning, IoT, Deep Learning, Computer Vision, and SAP ABAP on Business Technology Platform (BTP)',
      icon: '⛓️',
      certificateId: 'CU26_14249',
      image: 'from-indigo-500/20 via-violet-500/20 to-purple-500/20',
      skills: ['Machine Learning', 'IoT', 'Deep Learning', 'Computer Vision', 'SAP ABAP'],
      download: true,
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'Amazon Web Services',
      date: '2025 (In Progress)',
      description: 'Understanding of core AWS services and cloud infrastructure. Preparing for AWS certification with focus on cloud solutions and services.',
      icon: '☁️',
      image: 'from-orange-500/20 via-yellow-500/20 to-orange-500/20',
      skills: ['Cloud Computing', 'AWS Services', 'Infrastructure as Code'],
      download: false,
    },
  ]

  return (
    <section id="certifications" ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
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
              Certifications & Awards
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-xl overflow-hidden group hover:border-indigo-500/50 transition-all cursor-pointer"
              onClick={() => setSelectedCert(index)}
            >
              {/* Certificate Visual */}
              <div className={`h-32 bg-gradient-to-br ${cert.image} rounded-lg mb-6 flex items-center justify-center relative`}>
                <div className="text-5xl">{cert.icon}</div>
              </div>

              {/* Certificate Info */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-indigo-400 text-sm font-semibold">{cert.issuer}</p>
                </div>
                <Award className="w-5 h-5 text-cyan-400" />
              </div>

              {/* Date */}
              <p className="text-gray-400 text-sm mb-4">{cert.date}</p>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certificate ID and Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                {cert.certificateId && (
                  <div className="text-xs text-gray-500">
                    ID: <span className="text-gray-400 font-mono">{cert.certificateId}</span>
                  </div>
                )}
                {cert.download && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/SAP-Certificate.pdf"
                    download="Code-Unnati-Certificate.pdf"
                    className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 text-sm font-semibold hover:bg-indigo-500/30 transition-all"
                  >
                    <Download size={14} />
                    Download
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-cyan-400" />
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <span className="text-indigo-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Code Unnati Program</h4>
                <p className="text-gray-400 text-sm">
                  Developed core competencies in ML, AI, IoT, and Cloud Computing through SAP&apos;s CSR initiative
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                  <span className="text-violet-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Professional Internships</h4>
                <p className="text-gray-400 text-sm">
                  7+ months of hands-on experience in full-stack development and healthcare systems
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Technical Research</h4>
                <p className="text-gray-400 text-sm">
                  Currently conducting graduate-level research in blockchain technology and cryptography
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                  <span className="text-pink-400 font-bold">✓</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Continuous Learning</h4>
                <p className="text-gray-400 text-sm">
                  Active engagement with emerging technologies including blockchain, IoT, and cloud services
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
