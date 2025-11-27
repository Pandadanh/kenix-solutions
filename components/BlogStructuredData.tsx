export default function BlogStructuredData({ 
  post 
}: { 
  post: {
    title: string
    excerpt: string
    date: string
    author: string
    slug: string
    category: string
  } 
}) {
  const baseUrl = 'https://kenix-solutions.com'
  
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `${baseUrl}/Kenix.png`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kenix Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/Kenix.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/vi/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": [
      "phần mềm AI",
      "trí tuệ nhân tạo",
      "giải pháp doanh nghiệp",
      post.category.toLowerCase()
    ],
    "inLanguage": "vi-VN"
  }

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Trang chủ",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${baseUrl}/vi/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${baseUrl}/vi/blog/${post.slug}`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
    </>
  )
}


