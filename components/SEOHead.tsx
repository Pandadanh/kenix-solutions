export default function SEOHead() {
  const baseUrl = 'https://landingprofile.com'

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kenix Solutions",
    "alternateName": "Landing Profile",
    "description": "Dịch vụ thiết kế website, phát triển ứng dụng di động và giải pháp chuyển đổi số chuyên nghiệp",
    "url": baseUrl,
    "logo": `${baseUrl}/Kenix.png`,
    "telephone": "+84374225294",
    "email": "nguyenvantanphat.it@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bình Thạnh",
      "addressRegion": "TP. Hồ Chí Minh",
      "addressCountry": "VN"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Vietnam"
    },
    "serviceType": [
      "Thiết kế Website",
      "Phát triển Ứng dụng Di động",
      "Chuyển đổi Số",
      "Tư vấn Công nghệ"
    ],
    "sameAs": [
      "https://www.facebook.com/tanphatdigital",
      "https://www.instagram.com/tanphatdigital"
    ],
    "priceRange": "$$"
  }

  return (
    <>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}

