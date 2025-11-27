import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tuyển Dụng - Kenix Solutions | Cơ Hội Nghề Nghiệp AI',
  description: 'Tham gia đội ngũ phát triển phần mềm AI tại Kenix Solutions. Tuyển dụng lập trình viên AI, Machine Learning Engineer, và chuyên gia phát triển phần mềm AI.',
  keywords: 'tuyển dụng kenix solutions, việc làm AI, tuyển dụng lập trình viên AI, machine learning engineer, việc làm phần mềm AI, cơ hội nghề nghiệp AI',
  alternates: {
    canonical: 'https://kenix-solutions.com/vi/careers',
  },
  openGraph: {
    title: 'Tuyển Dụng - Kenix Solutions | Cơ Hội Nghề Nghiệp AI',
    description: 'Tham gia đội ngũ phát triển phần mềm AI tại Kenix Solutions. Tuyển dụng lập trình viên AI và chuyên gia phát triển phần mềm AI.',
    url: 'https://kenix-solutions.com/vi/careers',
    siteName: 'Kenix Solutions',
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: 'https://kenix-solutions.com/Kenix.png',
        width: 1200,
        height: 630,
        alt: 'Kenix Solutions - Tuyển Dụng AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tuyển Dụng - Kenix Solutions | Cơ Hội Nghề Nghiệp AI',
    description: 'Tham gia đội ngũ phát triển phần mềm AI tại Kenix Solutions.',
    images: ['https://kenix-solutions.com/Kenix.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


