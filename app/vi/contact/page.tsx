import type { Metadata } from 'next'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Liên Hệ - Kenix Solutions | Tư Vấn Miễn Phí',
  description: 'Liên hệ với Kenix Solutions để nhận tư vấn miễn phí về dịch vụ thiết kế website, phát triển ứng dụng di động và giải pháp chuyển đổi số chuyên nghiệp.',
  keywords: 'liên hệ kenix solutions, tư vấn thiết kế website, tư vấn phát triển ứng dụng, liên hệ chuyển đổi số, hỗ trợ khách hàng',
  authors: [{ name: 'Kenix Solutions' }],
  alternates: {
    canonical: 'https://kenix-solutions.com/vi/contact',
  },
  openGraph: {
    title: 'Liên Hệ - Kenix Solutions | Tư Vấn Miễn Phí',
    description: 'Liên hệ với Kenix Solutions để nhận tư vấn miễn phí về dịch vụ thiết kế website, phát triển ứng dụng di động và giải pháp chuyển đổi số chuyên nghiệp.',
    url: 'https://kenix-solutions.com/vi/contact',
    siteName: 'Kenix Solutions',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary',
    title: 'Liên Hệ - Kenix Solutions',
    description: 'Liên hệ với Kenix Solutions để nhận tư vấn miễn phí về dịch vụ thiết kế website chuyên nghiệp.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
   <ContactSection />
  )
}

