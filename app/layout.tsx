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
  metadataBase: new URL('https://kenix-solutions.com'),
  title: {
    default: 'Kenix Solutions - Phần Mềm AI Giải Quyết Vấn Đề Doanh Nghiệp',
    template: '%s | Kenix Solutions',
  },
  description: 'Kenix Solutions phát triển phần mềm AI chuyên nghiệp, giải quyết các vấn đề doanh nghiệp bằng trí tuệ nhân tạo. Tự động hóa quy trình, tối ưu hiệu suất và tăng trưởng kinh doanh với giải pháp AI tùy chỉnh.',
  keywords: ['kenix-solution', 'kenix solution', 'kenix solutions', 'kenix-solutions', 'phần mềm AI', 'giải pháp AI doanh nghiệp', 'trí tuệ nhân tạo', 'AI software', 'tự động hóa doanh nghiệp', 'machine learning', 'phần mềm tùy chỉnh', 'giải quyết vấn đề doanh nghiệp', 'AI automation', 'business intelligence', 'chuyển đổi số AI', 'thiết kế website', 'phát triển ứng dụng'],
  authors: [{ name: 'Kenix Solutions', url: 'https://kenix-solutions.com' }],
  creator: 'Kenix Solutions',
  publisher: 'Kenix Solutions',
  applicationName: 'Kenix Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    'brand': 'Kenix Solutions',
    'company': 'Kenix Solutions',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://kenix-solutions.com',
    siteName: 'Kenix Solutions',
    title: 'Kenix Solutions - Phần Mềm AI Giải Quyết Vấn Đề Doanh Nghiệp',
    description: 'Phát triển phần mềm AI chuyên nghiệp, giải quyết các vấn đề doanh nghiệp bằng trí tuệ nhân tạo. Tự động hóa quy trình và tối ưu hiệu suất.',
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
  alternates: {
    canonical: 'https://kenix-solutions.com',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
      { url: '/Kenix.png', sizes: '192x192', type: 'image/png' },
      { url: '/Kenix.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/Kenix.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.png',
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
        {/* Favicon for Google Search - ưu tiên format .ico */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/Kenix.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        {/* Additional icon tags for better Google indexing */}
        <meta name="theme-color" content="#3B82F6" />
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

