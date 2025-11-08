export default function SEOHead() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Landing Profile",
    "description": "Dịch vụ thiết kế website chuyên nghiệp",
    "url": "https://landingprofile.com",
    "telephone": "+84374225294",
    "email": "nguyenvantanphat.it@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bình Thạnh",
      "addressRegion": "TP. Hồ Chí Minh",
      "addressCountry": "VN"
    },
    "sameAs": [
      "https://www.facebook.com/tanphatdigital",
      "https://www.instagram.com/tanphatdigital"
    ]
  }

  return (
    <>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://landingprofile.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}

