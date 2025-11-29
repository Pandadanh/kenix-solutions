'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import styles from './faq.module.css'

const faqs = [
  {
    category: 'Dịch Vụ Website',
    questions: [
      {
        q: 'Thời gian hoàn thành một website mất bao lâu?',
        a: 'Tùy vào quy mô dự án, thông thường một website cơ bản mất 1-2 tuần, website chuyên nghiệp 3-4 tuần, và website thương mại điện tử 4-8 tuần. Chúng tôi sẽ đưa ra timeline chi tiết sau khi trao đổi yêu cầu.'
      },
      {
        q: 'Chi phí thiết kế website là bao nhiêu?',
        a: 'Chi phí tùy thuộc vào loại website và tính năng. Gói cơ bản từ 5-10 triệu, gói chuyên nghiệp 15-30 triệu, gói thương mại điện tử từ 30-80 triệu. Liên hệ để được báo giá chi tiết theo nhu cầu của bạn.'
      },
      {
        q: 'Tôi có được quyền sở hữu website sau khi hoàn thành?',
        a: 'Có, bạn sở hữu hoàn toàn website, source code và toàn bộ nội dung sau khi thanh toán đầy đủ. Chúng tôi sẽ bàn giao đầy đủ tài khoản quản trị, hosting và domain.'
      },
      {
        q: 'Website có responsive trên mobile không?',
        a: 'Tất cả website của chúng tôi đều responsive 100%, hiển thị hoàn hảo trên mọi thiết bị: desktop, tablet, mobile. Chúng tôi test kỹ lưỡng trên nhiều kích thước màn hình.'
      }
    ]
  },
  {
    category: 'SEO & Marketing',
    questions: [
      {
        q: 'SEO mất bao lâu để có hiệu quả?',
        a: 'SEO là quá trình dài hạn, thường mất 3-6 tháng để thấy kết quả rõ rệt. Với từ khóa cạnh tranh thấp có thể nhanh hơn, từ khóa cạnh tranh cao cần nhiều thời gian hơn. Chúng tôi có báo cáo định kỳ để bạn theo dõi tiến độ.'
      },
      {
        q: 'Google Ads có tốn kém không?',
        a: 'Chi phí Google Ads phụ thuộc vào ngành nghề và mức độ cạnh tranh. Bạn có thể bắt đầu với ngân sách nhỏ từ 5-10 triệu/tháng. Chúng tôi tối ưu để chi phí trên mỗi click và mỗi chuyển đổi thấp nhất.'
      },
      {
        q: 'Làm thế nào để đo lường hiệu quả SEO/Ads?',
        a: 'Chúng tôi sử dụng Google Analytics, Search Console và các công cụ chuyên nghiệp để theo dõi: lượng truy cập, thứ hạng từ khóa, tỷ lệ chuyển đổi, ROI. Báo cáo chi tiết được gửi hàng tháng.'
      }
    ]
  },
  {
    category: 'Bảo Trì & Hỗ Trợ',
    questions: [
      {
        q: 'Gói bảo trì bao gồm những gì?',
        a: 'Gói bảo trì bao gồm: sao lưu dữ liệu định kỳ, cập nhật bảo mật, theo dõi uptime, sửa lỗi, cập nhật nội dung, tối ưu tốc độ, hỗ trợ kỹ thuật 24/7. Phạm vi chi tiết tùy theo gói bạn chọn.'
      },
      {
        q: 'Nếu website gặp sự cố, bao lâu sẽ được khắc phục?',
        a: 'Với gói bảo trì, chúng tôi cam kết phản hồi trong vòng 1 giờ và xử lý sự cố trong vòng 4-24 giờ tùy mức độ nghiêm trọng. Hỗ trợ khẩn cấp 24/7 cho gói cao cấp.'
      },
      {
        q: 'Tôi có thể tự cập nhật nội dung website không?',
        a: 'Có, chúng tôi tích hợp CMS (hệ thống quản trị nội dung) dễ sử dụng và đào tạo chi tiết. Bạn có thể tự cập nhật tin tức, sản phẩm, hình ảnh mà không cần biết code.'
      }
    ]
  },
  {
    category: 'Thanh Toán & Chính Sách',
    questions: [
      {
        q: 'Hình thức thanh toán như thế nào?',
        a: 'Chúng tôi nhận thanh toán qua chuyển khoản ngân hàng, ví điện tử (Momo, VNPay). Thanh toán thường chia 2-3 đợt: đặt cọc 40-50%, giữa dự án 30-40%, nghiệm thu 20-30%.'
      },
      {
        q: 'Có chính sách hoàn tiền không?',
        a: 'Chúng tôi có chính sách hoàn tiền nếu không hài lòng với thiết kế ban đầu (trước khi bắt đầu code). Sau khi bắt đầu phát triển, chúng tôi cam kết sửa đổi cho đến khi bạn hài lòng.'
      },
      {
        q: 'Có hợp đồng bảo vệ quyền lợi khách hàng không?',
        a: 'Có, chúng tôi ký hợp đồng rõ ràng với đầy đủ điều khoản về: phạm vi công việc, thời gian, chi phí, quyền sở hữu, bảo mật thông tin và chính sách bảo hành.'
      }
    ]
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>FAQ</span>
          </div>
          <h1 className={styles.title}>
            Câu Hỏi <span className={styles.highlight}>Thường Gặp</span>
          </h1>
          <p className={styles.description}>
            Tìm câu trả lời nhanh chóng cho các thắc mắc thường gặp về dịch vụ của chúng tôi
          </p>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category.category}</h2>
              <div className={styles.accordion}>
                {category.questions.map((item, qIndex) => {
                  const index = `${catIndex}-${qIndex}`
                  const isOpen = openIndex === index
                  
                  return (
                    <div key={index} className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
                      <button 
                        className={styles.accordionHeader}
                        onClick={() => toggleAccordion(index)}
                      >
                        <span>{item.q}</span>
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          className={styles.icon}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      <div className={styles.accordionContent}>
                        <p>{item.a}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Vẫn Còn Thắc Mắc?</h2>
          <p>Liên hệ với chúng tôi để được tư vấn chi tiết hơn</p>
          <a href="/vi/contact" className={styles.ctaButton}>
            Liên Hệ Ngay
          </a>
        </div>
      </section>
    </main>
  )
}
