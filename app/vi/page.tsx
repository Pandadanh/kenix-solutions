import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import WhyChoose from '@/components/WhyChoose'
import ServicesPackages from '@/components/ServicesPackages'
import CallToAction from '@/components/CallToAction'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Kenix Solutions - Phần Mềm AI Giải Quyết Vấn Đề Doanh Nghiệp',
  description: 'Kenix Solutions phát triển phần mềm AI chuyên nghiệp, giải quyết các vấn đề doanh nghiệp bằng trí tuệ nhân tạo. Tự động hóa quy trình, tối ưu hiệu suất và tăng trưởng kinh doanh với giải pháp AI tùy chỉnh.',
  keywords: 'kenix solutions, phần mềm AI, giải pháp AI doanh nghiệp, trí tuệ nhân tạo, AI software, tự động hóa doanh nghiệp, machine learning, phần mềm tùy chỉnh, giải quyết vấn đề doanh nghiệp, AI automation, business intelligence',
  authors: [{ name: 'Kenix Solutions' }],
  alternates: {
    canonical: 'https://kenix-solutions.com/vi',
  },
  openGraph: {
    title: 'Kenix Solutions - Phần Mềm AI Giải Quyết Vấn Đề Doanh Nghiệp',
    description: 'Phát triển phần mềm AI chuyên nghiệp, giải quyết các vấn đề doanh nghiệp bằng trí tuệ nhân tạo. Tự động hóa quy trình và tối ưu hiệu suất.',
    url: 'https://kenix-solutions.com/vi',
    siteName: 'Kenix Solutions',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: 'https://kenix-solutions.com/Kenix.png',
        width: 1200,
        height: 630,
        alt: 'Kenix Solutions - Phần Mềm AI Doanh Nghiệp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenix Solutions - Phần Mềm AI Giải Quyết Vấn Đề Doanh Nghiệp',
    description: 'Phát triển phần mềm AI chuyên nghiệp, giải quyết các vấn đề doanh nghiệp bằng trí tuệ nhân tạo.',
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
      <ScrollToTop />
      <Hero />
      <WhyChoose />
      <ServicesPackages />
      <ContactSection />
    </>
  )
}

