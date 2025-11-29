import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../web-design/web-design.module.css'

export const metadata: Metadata = {
  title: 'Thiết Kế UI/UX & Thương Hiệu - Kenix Solutions',
  description: 'Dịch vụ thiết kế UI/UX chuyên nghiệp, tạo trải nghiệm người dùng tuyệt vời và xây dựng bộ nhận diện thương hiệu độc đáo.',
  keywords: 'thiết kế UI UX, UI UX design, thiết kế thương hiệu, brand identity, logo design',
}

export default function UIUXPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            <span>UI/UX & Branding</span>
          </div>
          <h1 className={styles.title}>
            Thiết Kế UI/UX & <span className={styles.highlight}>Thương Hiệu</span>
          </h1>
          <p className={styles.description}>
            Tạo ra trải nghiệm người dùng tuyệt vời và bộ nhận diện thương hiệu độc đáo. Giúp doanh nghiệp nổi bật và ghi dấu ấn trong lòng khách hàng.
          </p>
          <div className={styles.cta}>
            <Link href="/vi/contact" className={styles.primaryBtn}>
              Tư Vấn Miễn Phí
            </Link>
            <Link href="/vi/pricing" className={styles.secondaryBtn}>
              Xem Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Dịch Vụ Thiết Kế</h2>
          <div className={styles.grid}>
            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3>UI/UX Design</h3>
              <p>Thiết kế giao diện đẹp mắt, trải nghiệm người dùng tuyệt vời, tăng tỷ lệ chuyển đổi</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Logo & Brand Identity</h3>
              <p>Thiết kế logo độc đáo, bộ nhận diện thương hiệu đầy đủ từ A-Z</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Website & App Design</h3>
              <p>Thiết kế website, mobile app với giao diện hiện đại, dễ sử dụng</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>Marketing Materials</h3>
              <p>Thiết kế brochure, banner, poster, card visit chuyên nghiệp</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Social Media Design</h3>
              <p>Thiết kế post, cover, story cho Facebook, Instagram, TikTok</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
                  <path d="M12 9v4M12 17h.01" />
                </svg>
              </div>
              <h3>Prototype & Mockup</h3>
              <p>Tạo prototype tương tác, mockup sản phẩm để test trước khi code</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Quy Trình Thiết Kế</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.stepNumber}>01</div>
              <h3>Research & Strategy</h3>
              <p>Nghiên cứu thị trường, đối thủ, khách hàng mục tiêu để định hướng design</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepNumber}>02</div>
              <h3>Wireframe & Concept</h3>
              <p>Vẽ wireframe, tạo concept design cho các màn hình chính</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepNumber}>03</div>
              <h3>UI Design & Prototype</h3>
              <p>Thiết kế UI chi tiết, tạo prototype tương tác để xem trước</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepNumber}>04</div>
              <h3>Handoff & Support</h3>
              <p>Bàn giao file design, hỗ trợ developer trong quá trình phát triển</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta_section}>
        <div className={styles.container}>
          <h2>Tạo Nên Thương Hiệu Độc Đáo</h2>
          <p>Liên hệ ngay để bắt đầu hành trình xây dựng thương hiệu của bạn</p>
          <Link href="/vi/contact" className={styles.primaryBtn}>
            Bắt Đầu Ngay
          </Link>
        </div>
      </section>
    </main>
  )
}
