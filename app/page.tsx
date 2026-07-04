'use client'

import { AnimatedBackground } from '@/components/AnimatedBackground'
import { CustomCursor } from '@/components/CustomCursor'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { CertificationsSection } from '@/components/CertificationsSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#030712] overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
