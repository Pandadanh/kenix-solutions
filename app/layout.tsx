import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingActions from '@/components/FloatingActions'
import SEOHead from '@/components/SEOHead'

// Preload Inter font
const inter = Inter({ 
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://landingprofile.com'),
  title: {
    default: 'Kenix Solutions - Giải Pháp Công Nghệ Chuyên Nghiệp',
    template: '%s | Kenix Solutions',
  },
  description: 'Kenix Solutions cung cấp dịch vụ thiết kế website, phát triển ứng dụng di động và giải pháp chuyển đổi số. Nhanh chóng, an toàn, hiệu quả cho doanh nghiệp.',
  keywords: ['kenix solutions', 'thiết kế website', 'phát triển ứng dụng', 'chuyển đổi số', 'công nghệ', 'giải pháp doanh nghiệp', 'landing page', 'web design', 'mobile app development'],
  authors: [{ name: 'Kenix Solutions' }],
  creator: 'Kenix Solutions',
  publisher: 'Kenix Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://landingprofile.com',
    siteName: 'Kenix Solutions',
    title: 'Kenix Solutions - Giải Pháp Công Nghệ Chuyên Nghiệp',
    description: 'Kenix Solutions cung cấp dịch vụ thiết kế website, phát triển ứng dụng di động và giải pháp chuyển đổi số.',
    images: [
      {
        url: '/Kenix.png',
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
    images: ['/Kenix.png'],
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
  alternates: {
    canonical: 'https://landingprofile.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <head>
        <SEOHead />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-81YCGH9JY6"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-81YCGH9JY6');
            `,
          }}
        />
        {/* Google Tag Manager - placeholder */}
        {/* <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');`}} /> */}
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}

