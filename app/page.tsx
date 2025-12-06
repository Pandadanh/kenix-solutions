import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import HorizontalScroll from '@/components/HorizontalScroll'
import ZaloSection from '@/components/ZaloSection'
import CRMBenefitsMobile from '@/components/CRMBenefits/CRMBenefitsMobile'
import SEOProfileMobile from '@/components/SEOProfile/SEOProfileMobile'
import WhyChoose from '@/components/WhyChoose'
import ServicesPackages from '@/components/ServicesPackages'
import ServicesPackagesMobile from '@/components/ServicesPackages/ServicesPackagesMobile'
import ContactSection from '@/components/ContactSection'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Kenix Solutions - Phần Mềm AI Giải Quyết Vấn Đề Doanh Nghiệp',
  description: 'Kenix Solutions phát triển phần mềm AI chuyên nghiệp, giải quyết các vấn đề doanh nghiệp bằng trí tuệ nhân tạo. Tự động hóa quy trình, tối ưu hiệu suất và tăng trưởng kinh doanh với giải pháp AI tùy chỉnh.',
  keywords: 'kenix-solution, kenix solution, kenix solutions, kenix-solutions, thiết kế website, phát triển ứng dụng, chuyển đổi số, công nghệ, giải pháp doanh nghiệp, phần mềm AI, trí tuệ nhân tạo, AI software, tự động hóa doanh nghiệp, machine learning',
  authors: [{ name: 'Kenix Solutions', url: 'https://kenix-solutions.com' }],
  alternates: {
    canonical: 'https://kenix-solutions.com',
  },
  openGraph: {
    title: 'Kenix Solutions - Phần Mềm AI Giải Quyết Vấn Đề Doanh Nghiệp',
    description: 'Phát triển phần mềm AI chuyên nghiệp, giải quyết các vấn đề doanh nghiệp bằng trí tuệ nhân tạo. Tự động hóa quy trình và tối ưu hiệu suất.',
    url: 'https://kenix-solutions.com',
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

export default function RootPage() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <HorizontalScroll />
      <ZaloSection />
      <CRMBenefitsMobile />
      <SEOProfileMobile />
      <WhyChoose />
      <ServicesPackages />
      <ServicesPackagesMobile />
      <ContactSection />
    </>
  )
}

