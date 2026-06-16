'use client'

import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import AboutSection from '@/components/sections/AboutSection'
import AcademicPrograms from '@/components/sections/AcademicPrograms'
import CampusLife from '@/components/sections/CampusLife'
import AdmissionsSection from '@/components/sections/AdmissionsSection'
import FacultySection from '@/components/sections/FacultySection'
import NewsEvents from '@/components/sections/NewsEvents'
import GallerySection from '@/components/sections/GallerySection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <AcademicPrograms />
      <CampusLife />
      <AdmissionsSection />
      <FacultySection />
      <NewsEvents />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <ScrollToTop />
    </>
  )
}
