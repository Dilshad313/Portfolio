import React from 'react'
import { StarBackground } from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar (now includes ThemeToggle internally) */}
        <Navbar />
        {/* Main content */}
        <main>
          <HeroSection/>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* Footer */}
    </div>
  )
}

export default Home