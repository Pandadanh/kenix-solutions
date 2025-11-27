import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bảng Giá - Kenix Solutions | Phần Mềm AI Doanh Nghiệp',
  description: 'Bảng giá phần mềm AI, giải pháp trí tuệ nhân tạo cho doanh nghiệp. Tính giá tự động, minh bạch cho các giải pháp AI tùy chỉnh.',
  keywords: 'bảng giá phần mềm AI, giá phần mềm AI, giá giải pháp AI, tính giá AI, phần mềm AI giá rẻ, giải pháp AI doanh nghiệp',
  alternates: {
    canonical: 'https://kenix-solutions.com/vi/pricing',
  },
  openGraph: {
    title: 'Bảng Giá - Kenix Solutions | Phần Mềm AI Doanh Nghiệp',
    description: 'Bảng giá phần mềm AI, giải pháp trí tuệ nhân tạo cho doanh nghiệp. Tính giá tự động, minh bạch.',
    url: 'https://kenix-solutions.com/vi/pricing',
    siteName: 'Kenix Solutions',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: 'https://kenix-solutions.com/Kenix.png',
        width: 1200,
        height: 630,
        alt: 'Kenix Solutions - Bảng Giá Phần Mềm AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bảng Giá - Kenix Solutions | Phần Mềm AI Doanh Nghiệp',
    description: 'Bảng giá phần mềm AI, giải pháp trí tuệ nhân tạo cho doanh nghiệp.',
    images: ['https://kenix-solutions.com/Kenix.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

