import Hero from '@/components/Hero'
import WhyChoose from '@/components/WhyChoose'
import ServicesPackages from '@/components/ServicesPackages'
import CallToAction from '@/components/CallToAction'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <ServicesPackages />
      <ContactSection />
    </>
  )
}

