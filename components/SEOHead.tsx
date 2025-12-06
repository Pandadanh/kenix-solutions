export default function SEOHead() {
  const baseUrl = 'https://kenix-solutions.com'

  // Organization Schema - chính
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kenix Solutions",
    "alternateName": ["Kenix-Solution", "Kenix Solution", "Kenix-Solutions"],
    "url": baseUrl,
    "logo": `${baseUrl}/Kenix.png`,
    "description": "Kenix Solutions - Công ty phát triển phần mềm AI và giải pháp công nghệ chuyên nghiệp tại Việt Nam. Chuyên về thiết kế website, phát triển ứng dụng, tự động hóa doanh nghiệp.",
    "telephone": "+84586997953",
    "email": "kenis.solutions@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tân Bình",
      "addressRegion": "TP. Hồ Chí Minh",
      "addressCountry": "VN"
    },
    "sameAs": [
      "https://www.facebook.com/tanphatdigital",
      "https://www.instagram.com/tanphatdigital"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Vietnam"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Web Development",
      "Mobile Application Development",
      "Machine Learning",
      "Business Intelligence"
    ]
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kenix Solutions",
    "alternateName": ["Kenix-Solution", "Kenix Solution"],
    "url": baseUrl,
    "description": "Phát triển phần mềm AI chuyên nghiệp, thiết kế website, phát triển ứng dụng di động và giải pháp chuyển đổi số cho doanh nghiệp",
    "inLanguage": "vi-VN",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/vi/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  // Software Application Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kenix Solutions",
    "alternateName": "Kenix AI Solutions",
    "description": "Phát triển phần mềm AI chuyên nghiệp, giải quyết các vấn đề doanh nghiệp bằng trí tuệ nhân tạo. Tự động hóa quy trình, tối ưu hiệu suất và tăng trưởng kinh doanh với giải pháp AI tùy chỉnh.",
    "url": baseUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "VND",
      "lowPrice": "0",
      "highPrice": "100000000"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "provider": {
      "@type": "Organization",
      "name": "Kenix Solutions"
    }
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
      
      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Structured Data - Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      {/* Structured Data - Software Application */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  )
}

