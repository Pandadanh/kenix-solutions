import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../web-design/web-design.module.css'

export const metadata: Metadata = {
  title: 'Bảo Trì Website Chuyên Nghiệp - Kenix Solutions',
  description: 'Dịch vụ bảo trì website chuyên nghiệp, đảm bảo website hoạt động ổn định, an toàn và luôn được cập nhật mới nhất.',
  keywords: 'bảo trì website, bảo trì web, sửa website, cập nhật website',
}

export default function WebMaintenancePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <span>Bảo Trì Website</span>
          </div>
          <h1 className={styles.title}>
            Bảo Trì Website <span className={styles.highlight}>Chuyên Nghiệp</span>
          </h1>
          <p className={styles.description}>
            Đảm bảo website của bạn luôn hoạt động ổn định, an toàn và được cập nhật thường xuyên. Chúng tôi giúp bạn yên tâm tập trung vào kinh doanh.
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
          <h2 className={styles.sectionTitle}>Dịch Vụ Bảo Trì</h2>
          <div className={styles.grid}>
            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Bảo Mật & Sao Lưu</h3>
              <p>Cập nhật bản vá bảo mật, sao lưu dữ liệu tự động hàng ngày, phục hồi khi cần thiết</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3>Tối Ưu Hiệu Suất</h3>
              <p>Theo dõi tốc độ website, tối ưu database, cache, CDN để website luôn load nhanh</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Hỗ Trợ Kỹ Thuật</h3>
              <p>Đội ngũ kỹ thuật sẵn sàng hỗ trợ 24/7, xử lý sự cố nhanh chóng trong vòng 1 giờ</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3>Cập Nhật Nội Dung</h3>
              <p>Cập nhật tin tức, sản phẩm, hình ảnh theo yêu cầu, không giới hạn số lần</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Giám Sát Uptime</h3>
              <p>Giám sát website 24/7, thông báo ngay khi có sự cố, đảm bảo uptime 99.9%</p>
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
              <h3>Báo Cáo Định Kỳ</h3>
              <p>Báo cáo chi tiết về lượng truy cập, hiệu suất, bảo mật hàng tháng</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Gói Bảo Trì</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.stepNumber}>01</div>
              <h3>Gói Cơ Bản</h3>
              <p>Sao lưu hàng tuần, hỗ trợ kỹ thuật, cập nhật nội dung 2 lần/tháng</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepNumber}>02</div>
              <h3>Gói Chuyên Nghiệp</h3>
              <p>Sao lưu hàng ngày, hỗ trợ 24/7, cập nhật không giới hạn, báo cáo tháng</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepNumber}>03</div>
              <h3>Gói Doanh Nghiệp</h3>
              <p>Toàn bộ dịch vụ + tối ưu SEO, bảo mật nâng cao, dedicated support</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.stepNumber}>04</div>
              <h3>Gói Tùy Chỉnh</h3>
              <p>Thiết kế gói bảo trì riêng theo nhu cầu và quy mô doanh nghiệp</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta_section}>
        <div className={styles.container}>
          <h2>Để Website Luôn An Toàn & Ổn Định</h2>
          <p>Liên hệ ngay để được tư vấn gói bảo trì phù hợp nhất</p>
          <Link href="/vi/contact" className={styles.primaryBtn}>
            Liên Hệ Ngay
          </Link>
        </div>
      </section>
    </main>
  )
}
