import React from 'react'
import PageHero from '../components/PageHero'
import Navbar from '../components/Navbar'
import TechStacks from '../components/TechStacks'
import Footer from '../components/Footer'

export default function SpecializationPage() {
  return (
    <div>
      <Navbar />
      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Specialization', href: '/specialization' },
        ]}
      />
      <TechStacks />
      <Footer />
    </div>
  );
}
