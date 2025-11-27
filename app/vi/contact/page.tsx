import type { Metadata } from 'next'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Liên Hệ - Kenix Solutions | Tư Vấn Miễn Phí Về Phần Mềm AI',
  description: 'Liên hệ với Kenix Solutions để nhận tư vấn miễn phí về phần mềm AI, giải pháp trí tuệ nhân tạo cho doanh nghiệp. Tư vấn giải quyết vấn đề doanh nghiệp bằng AI.',
  keywords: 'liên hệ kenix solutions, tư vấn phần mềm AI, tư vấn trí tuệ nhân tạo, giải pháp AI doanh nghiệp, tư vấn tự động hóa, hỗ trợ khách hàng AI',
  authors: [{ name: 'Kenix Solutions' }],
  alternates: {
    canonical: 'https://kenix-solutions.com/vi/contact',
  },
  openGraph: {
    title: 'Liên Hệ - Kenix Solutions | Tư Vấn Miễn Phí Về Phần Mềm AI',
    description: 'Liên hệ với Kenix Solutions để nhận tư vấn miễn phí về phần mềm AI, giải pháp trí tuệ nhân tạo cho doanh nghiệp.',
    url: 'https://kenix-solutions.com/vi/contact',
    siteName: 'Kenix Solutions',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: 'https://kenix-solutions.com/Kenix.png',
        width: 1200,
        height: 630,
        alt: 'Kenix Solutions - Liên Hệ Tư Vấn AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liên Hệ - Kenix Solutions | Tư Vấn Miễn Phí Về Phần Mềm AI',
    description: 'Liên hệ với Kenix Solutions để nhận tư vấn miễn phí về phần mềm AI, giải pháp trí tuệ nhân tạo cho doanh nghiệp.',
    images: ['https://kenix-solutions.com/Kenix.png'],
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

