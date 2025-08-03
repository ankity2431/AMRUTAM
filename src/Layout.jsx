import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import {Featured} from './components/Featured'
import DoctorPromotion from './components/DoctorPromotion'
import JoinCircle from './components/JoinCircle'
import ConsultationSection from './components/ConsultationSection'
import Testimonials from './components/Testimonials'
import FaqSection from './components/FaqSection'
import AppPromo from './components/AppPromo'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Featured />
      <DoctorPromotion />
      <JoinCircle />   
      <ConsultationSection />
      <Testimonials />
      <FaqSection />
      <AppPromo />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Layout
