'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const navItems = [
    { label: 'Home', id: 'home', href: null },
    { label: 'About', id: 'about', href: null },
    { label: 'Featured Projects', id: 'projects', href: '/projects' },
    { label: 'Certifications', id: 'certifications', href: null },
    { label: 'Contact', id: 'contact', href: null },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-white/10 py-3'
          : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent font-serif"
          >
            DP
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.href) {
                return (
                  <Link key={item.id} href={item.href}>
                    <motion.div
                      className="relative text-gray-300 hover:text-white transition-colors cursor-pointer"
                      whileHover="hover"
                      initial="initial"
                    >
                      <span>{item.label}</span>
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400"
                        initial={{ width: 0 }}
                        variants={{
                          hover: { width: '100%' },
                          initial: { width: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                )
              }
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-gray-300 hover:text-white transition-colors"
                  whileHover="hover"
                  initial="initial"
                >
                  <span>{item.label}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400"
                    initial={{ width: 0 }}
                    variants={{
                      hover: { width: '100%' },
                      initial: { width: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-4 space-y-2">
            {navItems.map((item) => {
              if (item.href) {
                return (
                  <Link key={item.id} href={item.href} onClick={() => setIsOpen(false)}>
                    <motion.div
                      className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                      whileHover={{ x: 4 }}
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                )
              }
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
