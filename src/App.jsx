import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import GrowthSection from './components/GrowthSection'
import ServicesSection from './components/Services'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <GrowthSection/>
      <ServicesSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <FooterSection/>
      {/* Add other sections here later */}
    </>
  )
}

export default App;