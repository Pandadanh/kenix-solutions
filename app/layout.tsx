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
  title: 'Thiết Kế Website Chuyên Nghiệp - Chuẩn SEO, Tốc Độ Cao | Landing Profile',
  description: 'Dịch vụ thiết kế website chuyên nghiệp theo yêu cầu, tối ưu SEO, tốc độ cao, bảo mật chặt chẽ. Thiết kế web bán hàng, doanh nghiệp, landing page, blog. Đặt lịch tư vấn ngay!',
  keywords: 'thiết kế website, thiết kế website chuyên nghiệp, thiết kế website chuẩn SEO, landing page, website bán hàng, website doanh nghiệp',
  authors: [{ name: 'Landing Profile' }],
  openGraph: {
    title: 'Thiết Kế Website Chuyên Nghiệp | Landing Profile',
    description: 'Dịch vụ thiết kế website chuyên nghiệp theo yêu cầu, tối ưu SEO, tốc độ cao, bảo mật chặt chẽ.',
    type: 'website',
    locale: 'vi_VN',
  },
  robots: {
    index: true,
    follow: true,
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

