export default function SEOHead() {
  const baseUrl = 'https://kenix-solutions.com'

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kenix Solutions",
    "alternateName": "Kenix AI Solutions",
    "description": "Phát triển phần mềm AI chuyên nghiệp, giải quyết các vấn đề doanh nghiệp bằng trí tuệ nhân tạo. Tự động hóa quy trình, tối ưu hiệu suất và tăng trưởng kinh doanh với giải pháp AI tùy chỉnh.",
    "url": baseUrl,
    "logo": `${baseUrl}/Kenix.png`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "VND"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "150"
    },
    "provider": {
      "@type": "Organization",
      "name": "Kenix Solutions",
      "logo": `${baseUrl}/Kenix.png`,
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
      ]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Vietnam"
    },
    "featureList": [
      "Phần mềm AI tùy chỉnh",
      "Tự động hóa quy trình doanh nghiệp",
      "Machine Learning & Deep Learning",
      "Business Intelligence",
      "Xử lý dữ liệu thông minh",
      "Chatbot & Virtual Assistant",
      "Phân tích dự đoán",
      "Tối ưu hóa quy trình"
    ],
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

