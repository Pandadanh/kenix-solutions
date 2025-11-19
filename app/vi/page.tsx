import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import WhyChoose from '@/components/WhyChoose'
import ServicesPackages from '@/components/ServicesPackages'
import CallToAction from '@/components/CallToAction'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Kenix Solutions - Giải Pháp Công Nghệ Chuyên Nghiệp',
  description: 'Kenix Solutions cung cấp dịch vụ thiết kế website, phát triển ứng dụng di động và giải pháp chuyển đổi số. Nhanh chóng, an toàn, hiệu quả cho doanh nghiệp.',
  keywords: 'kenix solutions, thiết kế website, phát triển ứng dụng, chuyển đổi số, công nghệ, giải pháp doanh nghiệp, landing page, web design, mobile app development',
  authors: [{ name: 'Kenix Solutions' }],
  alternates: {
    canonical: 'https://kenix-solutions.com/vi',
  },
  openGraph: {
    title: 'Kenix Solutions - Giải Pháp Công Nghệ Chuyên Nghiệp',
    description: 'Kenix Solutions cung cấp dịch vụ thiết kế website, phát triển ứng dụng di động và giải pháp chuyển đổi số.',
    url: 'https://kenix-solutions.com/vi',
    siteName: 'Kenix Solutions',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: 'https://kenix-solutions.com/Kenix.png',
        width: 1200,
        height: 630,
        alt: 'Kenix Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenix Solutions - Giải Pháp Công Nghệ Chuyên Nghiệp',
    description: 'Kenix Solutions cung cấp dịch vụ thiết kế website, phát triển ứng dụng di động và giải pháp chuyển đổi số.',
    images: ['https://kenix-solutions.com/Kenix.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googlea4ace78080f0fa0f',
  },
}

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

