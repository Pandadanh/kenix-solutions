import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './web-design.module.css'

export const metadata: Metadata = {
  title: 'Thiết Kế Website Chuyên Nghiệp - Kenix Solutions',
  description: 'Dịch vụ thiết kế website chuyên nghiệp, hiện đại, tối ưu SEO và tốc độ tải nhanh. Giúp doanh nghiệp tạo ấn tượng mạnh mẽ với khách hàng.',
  keywords: 'thiết kế website, web design, thiết kế web chuyên nghiệp, làm website, thiết kế website giá rẻ',
}

export default function WebDesignPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>Thiết Kế Website</span>
          </div>
          <h1 className={styles.title}>
            Thiết Kế Website <span className={styles.highlight}>Chuyên Nghiệp</span>
          </h1>
          <p className={styles.description}>
            Tạo dựng website đẹp mắt, hiện đại và tối ưu hiệu suất. Giúp doanh nghiệp của bạn nổi bật và thu hút khách hàng hiệu quả.
          </p>
          <div className={styles.cta}>
            <Link href="/vi/contact" className={styles.primaryBtn}>
              Tư Vấn Miễn Phí
            </Link>
            <Link href="/vi/pricing" className={styles.secondaryBtn}>
              Xem Bảng Giá
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Tính Năng Nổi Bật</h2>
          <div className={styles.grid}>
            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3>Responsive Design</h3>
              <p>Giao diện tự động điều chỉnh hoàn hảo trên mọi thiết bị: desktop, tablet, mobile</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Tốc Độ Tải Nhanh</h3>
              <p>Tối ưu hiệu suất với công nghệ Next.js, đảm bảo trang web load dưới 2 giây</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3>Chuẩn SEO</h3>
              <p>Tối ưu SEO onpage, giúp website dễ dàng lên top Google, thu hút khách hàng tự nhiên</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Bảo Mật Cao</h3>
              <p>SSL miễn phí, bảo vệ dữ liệu khách hàng, tuân thủ chuẩn bảo mật quốc tế</p>
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
              <h3>CMS Dễ Quản Lý</h3>
              <p>Hệ thống quản trị nội dung đơn giản, dễ cập nhật tin tức, sản phẩm không cần code</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <h3>Hosting Miễn Phí</h3>
              <p>Tặng kèm hosting 1 năm đầu, băng thông không giới hạn, uptime 99.9%</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Quy Trình Làm Việc</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.stepNumber}>01</div>
              <h3>Tư Vấn & Lên Ý Tưởng</h3>
              <p>Tìm hiểu nhu cầu, đối tượng khách hàng và mục tiêu kinh doanh của bạn</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepNumber}>02</div>
              <h3>Thiết Kế Giao Diện</h3>
              <p>Thiết kế UI/UX đẹp mắt, hiện đại, phù hợp với thương hiệu của bạn</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepNumber}>03</div>
              <h3>Lập Trình & Tối Ưu</h3>
              <p>Code chuẩn, tối ưu tốc độ, SEO, bảo mật và responsive trên mọi thiết bị</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepNumber}>04</div>
              <h3>Test & Bàn Giao</h3>
              <p>Kiểm tra kỹ lưỡng, đào tạo sử dụng và bàn giao website hoàn chỉnh</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta_section}>
        <div className={styles.container}>
          <h2>Sẵn Sàng Xây Dựng Website?</h2>
          <p>Liên hệ ngay để nhận tư vấn miễn phí và báo giá chi tiết</p>
          <Link href="/vi/contact" className={styles.primaryBtn}>
            Liên Hệ Ngay
          </Link>
        </div>
      </section>
    </main>
  )
}
