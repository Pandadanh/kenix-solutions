import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kenix Solutions - Giải Pháp Công Nghệ Chuyên Nghiệp',
  description: 'Kenix Solutions cung cấp dịch vụ thiết kế website, phát triển ứng dụng di động và giải pháp chuyển đổi số. Nhanh chóng, an toàn, hiệu quả cho doanh nghiệp.',
  keywords: 'kenix solutions, thiết kế website, phát triển ứng dụng, chuyển đổi số, công nghệ, giải pháp doanh nghiệp',
  alternates: {
    canonical: 'https://landingprofile.com',
  },
  openGraph: {
    title: 'Kenix Solutions - Giải Pháp Công Nghệ Chuyên Nghiệp',
    description: 'Kenix Solutions cung cấp dịch vụ thiết kế website, phát triển ứng dụng di động và giải pháp chuyển đổi số.',
    url: 'https://landingprofile.com',
    siteName: 'Kenix Solutions',
    type: 'website',
    locale: 'vi_VN',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootPage() {
  redirect('/vi')
}

