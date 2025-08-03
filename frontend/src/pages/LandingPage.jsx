import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import StatsSection from '../components/StatsSection'
import ServicesSection from '../components/Services'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'

export default function LandingPage() {
  return (
    <div>
      {/* <Navbar /> */}


        <HeroSection />









      {/* Hero Section Dummy */}
























      <div className="">
        {/* Job listings grid */}
        <AboutSection />
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
