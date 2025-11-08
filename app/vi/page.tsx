import Hero from '@/components/Hero'
import WhyChoose from '@/components/WhyChoose'
import ProjectsCarousel from '@/components/ProjectsCarousel'
import ServicesPackages from '@/components/ServicesPackages'
import CallToAction from '@/components/CallToAction'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <ProjectsCarousel />
      <ServicesPackages />
      <CallToAction />
      <Testimonials />
      <ContactSection />
    </>
  )
}

