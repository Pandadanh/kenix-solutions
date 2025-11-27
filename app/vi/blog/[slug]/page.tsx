import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogStructuredData from '@/components/BlogStructuredData'

// Sample blog post data - bạn có thể thay thế bằng CMS hoặc markdown
const blogPosts: Record<string, {
  title: string
  content: string
  excerpt: string
  date: string
  category: string
  author: string
  readTime: string
  image?: string
}> = {
  'phan-mem-ai-giai-quyet-van-de-doanh-nghiep': {
    title: 'Phần Mềm AI Giải Quyết Vấn Đề Doanh Nghiệp: Hướng Dẫn Toàn Diện',
    excerpt: 'Khám phá cách phần mềm AI có thể giải quyết các vấn đề thực tế trong doanh nghiệp, từ tự động hóa quy trình đến tối ưu hóa hiệu suất.',
    content: `
      <h2>Giới Thiệu</h2>
      <p>Phần mềm AI đang trở thành công cụ không thể thiếu trong việc giải quyết các vấn đề phức tạp của doanh nghiệp hiện đại. Từ tự động hóa quy trình đến phân tích dữ liệu thông minh, AI mang lại những giải pháp hiệu quả và tiết kiệm chi phí.</p>
      
      <h2>Tự Động Hóa Quy Trình Doanh Nghiệp</h2>
      <p>Với phần mềm AI, các quy trình lặp đi lặp lại có thể được tự động hóa hoàn toàn, giúp doanh nghiệp tiết kiệm thời gian và nhân lực. Ví dụ như xử lý đơn hàng, quản lý kho, hoặc trả lời khách hàng.</p>
      
      <h2>Phân Tích Dữ Liệu Thông Minh</h2>
      <p>AI có khả năng phân tích lượng lớn dữ liệu và đưa ra những insights có giá trị, giúp doanh nghiệp đưa ra quyết định dựa trên dữ liệu thay vì cảm tính.</p>
      
      <h2>Kết Luận</h2>
      <p>Phần mềm AI không chỉ là xu hướng mà còn là giải pháp thiết yếu cho doanh nghiệp muốn phát triển bền vững trong thời đại số.</p>
    `,
    date: '2024-01-15',
    category: 'AI Solutions',
    author: 'Kenix Solutions',
    readTime: '5 phút',
  },
  'machine-learning-cho-doanh-nghiep-viet-nam': {
    title: 'Machine Learning Cho Doanh Nghiệp Việt Nam: Case Study Thực Tế',
    excerpt: 'Case study về việc áp dụng machine learning trong các doanh nghiệp Việt Nam, những thách thức và giải pháp.',
    content: `
      <h2>Case Study: Ứng Dụng ML Trong E-commerce</h2>
      <p>Một doanh nghiệp thương mại điện tử tại Việt Nam đã áp dụng machine learning để tối ưu hóa hệ thống gợi ý sản phẩm, tăng doanh thu lên 30%.</p>
      
      <h2>Thách Thức</h2>
      <p>Việc triển khai ML trong môi trường doanh nghiệp Việt Nam gặp nhiều thách thức về dữ liệu, nhân lực và hạ tầng.</p>
      
      <h2>Giải Pháp</h2>
      <p>Với sự hỗ trợ của Kenix Solutions, doanh nghiệp đã xây dựng thành công hệ thống ML phù hợp với quy mô và ngân sách.</p>
    `,
    date: '2024-01-10',
    category: 'Case Study',
    author: 'Kenix Solutions',
    readTime: '8 phút',
  },
  'chatbot-ai-tu-dong-hoa-customer-service': {
    title: 'Chatbot AI: Tự Động Hóa Customer Service Hiệu Quả',
    excerpt: 'Hướng dẫn xây dựng chatbot AI để tự động hóa dịch vụ khách hàng, giảm chi phí và tăng trải nghiệm người dùng.',
    content: `
      <h2>Tại Sao Cần Chatbot AI?</h2>
      <p>Chatbot AI giúp doanh nghiệp xử lý hàng nghìn câu hỏi của khách hàng đồng thời, 24/7, mà không cần nhân viên trực.</p>
      
      <h2>Cách Xây Dựng Chatbot AI</h2>
      <p>Quy trình xây dựng chatbot AI bao gồm: thu thập dữ liệu, training model, tích hợp và testing.</p>
      
      <h2>Kết Quả</h2>
      <p>Chatbot AI có thể giảm 70% chi phí customer service và tăng 40% mức độ hài lòng của khách hàng.</p>
    `,
    date: '2024-01-05',
    category: 'Automation',
    author: 'Kenix Solutions',
    readTime: '6 phút',
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return {
      title: 'Bài Viết Không Tìm Thấy | Kenix Solutions',
    }
  }

  return {
    title: `${post.title} | Kenix Solutions Blog`,
    description: post.excerpt,
    keywords: `phần mềm AI, ${post.category.toLowerCase()}, trí tuệ nhân tạo, giải pháp doanh nghiệp, ${post.title.toLowerCase()}`,
    alternates: {
      canonical: `https://kenix-solutions.com/vi/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://kenix-solutions.com/vi/blog/${params.slug}`,
      siteName: 'Kenix Solutions',
      type: 'article',
      locale: 'vi_VN',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: 'https://kenix-solutions.com/Kenix.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['https://kenix-solutions.com/Kenix.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <>
      <BlogStructuredData 
        post={{
          title: post.title,
          excerpt: post.excerpt,
          date: post.date,
          author: post.author,
          slug: params.slug,
          category: post.category,
        }}
      />
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <header style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
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
          <span style={{ color: '#666', fontSize: '0.875rem' }}>• {post.author}</span>
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold', lineHeight: '1.2' }}>
          {post.title}
        </h1>
      </header>

      <div
        style={{
          lineHeight: '1.8',
          color: '#333',
        }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
        <a
          href="/vi/blog"
          style={{
            color: '#3B82F6',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          ← Quay lại Blog
        </a>
      </footer>
    </article>
    </>
  )
}

