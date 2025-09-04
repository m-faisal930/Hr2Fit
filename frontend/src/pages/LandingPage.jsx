import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import StatsSection from '../components/StatsSection'
import ServicesSection from '../components/Services'
import FeaturedHRServices from '../components/FeaturedHRServices'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'

export default function LandingPage() {
  return (
    <div>
      {/* <Navbar /> */}

      <HeroSection />
      <div className="">
        {/* Job listings grid */}
        <AboutSection />
        <FeaturedHRServices />
        <StatsSection />
        <ServicesSection />
        <Team />
        <Testimonial />
        {/* <TechStacks /> */}
        {/* <HowItWorksSection /> */}
        {/* <ContactSection /> */}
      </div>
      <Footer />
    </div>
  );
}
