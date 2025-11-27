import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Kenix Solutions | Kiến Thức Phần Mềm AI',
  description: 'Blog chia sẻ kiến thức về phần mềm AI, giải pháp trí tuệ nhân tạo cho doanh nghiệp, machine learning, và các case study thực tế.',
  keywords: 'blog phần mềm AI, kiến thức AI, machine learning, trí tuệ nhân tạo doanh nghiệp, case study AI, hướng dẫn AI',
  alternates: {
    canonical: 'https://kenix-solutions.com/vi/blog',
  },
  openGraph: {
    title: 'Blog - Kenix Solutions | Kiến Thức Phần Mềm AI',
    description: 'Blog chia sẻ kiến thức về phần mềm AI, giải pháp trí tuệ nhân tạo cho doanh nghiệp.',
    url: 'https://kenix-solutions.com/vi/blog',
    siteName: 'Kenix Solutions',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: 'https://kenix-solutions.com/Kenix.png',
        width: 1200,
        height: 630,
        alt: 'Kenix Solutions Blog',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

