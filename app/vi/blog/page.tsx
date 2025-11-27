import type { Metadata } from 'next'
import Link from 'next/link'

// Sample blog posts - bạn có thể thay thế bằng data từ CMS hoặc markdown files
const blogPosts = [
  {
    slug: 'phan-mem-ai-giai-quyet-van-de-doanh-nghiep',
    title: 'Phần Mềm AI Giải Quyết Vấn Đề Doanh Nghiệp: Hướng Dẫn Toàn Diện',
    excerpt: 'Khám phá cách phần mềm AI có thể giải quyết các vấn đề thực tế trong doanh nghiệp, từ tự động hóa quy trình đến tối ưu hóa hiệu suất.',
    date: '2024-01-15',
    category: 'AI Solutions',
    readTime: '5 phút',
  },
  {
    slug: 'machine-learning-cho-doanh-nghiep-viet-nam',
    title: 'Machine Learning Cho Doanh Nghiệp Việt Nam: Case Study Thực Tế',
    excerpt: 'Case study về việc áp dụng machine learning trong các doanh nghiệp Việt Nam, những thách thức và giải pháp.',
    date: '2024-01-10',
    category: 'Case Study',
    readTime: '8 phút',
  },
  {
    slug: 'chatbot-ai-tu-dong-hoa-customer-service',
    title: 'Chatbot AI: Tự Động Hóa Customer Service Hiệu Quả',
    excerpt: 'Hướng dẫn xây dựng chatbot AI để tự động hóa dịch vụ khách hàng, giảm chi phí và tăng trải nghiệm người dùng.',
    date: '2024-01-05',
    category: 'Automation',
    readTime: '6 phút',
  },
]

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
  },
}

export default function BlogPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          Blog - Kiến Thức Phần Mềm AI
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#666' }}>
          Chia sẻ kiến thức về phần mềm AI, giải pháp trí tuệ nhân tạo cho doanh nghiệp
        </p>
      </header>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '2rem',
              transition: 'all 0.3s',
            }}
          >
            <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span
                style={{
                  background: '#3B82F6',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                }}
              >
                {post.category}
              </span>
              <time style={{ color: '#666', fontSize: '0.875rem' }}>{post.date}</time>
              <span style={{ color: '#666', fontSize: '0.875rem' }}>• {post.readTime}</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: '600' }}>
              <Link
                href={`/vi/blog/${post.slug}`}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {post.title}
              </Link>
            </h2>
            <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
              {post.excerpt}
            </p>
            <Link
              href={`/vi/blog/${post.slug}`}
              style={{
                color: '#3B82F6',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              Đọc thêm →
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}


