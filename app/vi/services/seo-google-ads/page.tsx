import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './seo.module.css'

export const metadata: Metadata = {
  title: 'SEO Website & Quảng Cáo Google Ads - Kenix Solutions',
  description: 'Dịch vụ SEO website lên top Google, quảng cáo Google Ads và Digital Marketing hiệu quả. Tăng doanh số bền vững cho doanh nghiệp.',
  keywords: 'SEO, Google Ads, quảng cáo google, digital marketing, SEO website, dịch vụ SEO',
}

export default function SEOPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span>SEO & Digital Marketing</span>
          </div>
          <h1 className={styles.title}>
            SEO Website & <span className={styles.highlight}>Google Ads</span>
          </h1>
          <p className={styles.description}>
            Tăng thứ hạng website trên Google, thu hút khách hàng tiềm năng và tăng doanh số bán hàng với chiến lược SEO và quảng cáo Google Ads chuyên nghiệp.
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
          <h2 className={styles.sectionTitle}>Dịch Vụ Của Chúng Tôi</h2>
          <div className={styles.grid}>
            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3>SEO Tổng Thể</h3>
              <p>Tối ưu từ khóa, nội dung, kỹ thuật và backlink để đưa website lên top Google bền vững</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3>Google Ads</h3>
              <p>Chạy quảng cáo Google hiệu quả, tối ưu chi phí, đưa khách hàng đến website nhanh chóng</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
              </div>
              <h3>Phân Tích & Báo Cáo</h3>
              <p>Theo dõi hiệu quả SEO/Ads với báo cáo chi tiết, dữ liệu rõ ràng, minh bạch</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3>Content Marketing</h3>
              <p>Viết bài chuẩn SEO, tạo nội dung hấp dẫn, xây dựng thương hiệu và thu hút khách hàng</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Social Media Marketing</h3>
              <p>Quảng cáo Facebook, Instagram, TikTok, Zalo để tiếp cận đúng khách hàng mục tiêu</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg>
              </div>
              <h3>Conversion Optimization</h3>
              <p>Tối ưu tỷ lệ chuyển đổi, biến traffic thành khách hàng thực sự, tăng ROI</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Lợi Ích Khi Sử Dụng Dịch Vụ</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3>Tăng Lượng Truy Cập</h3>
                <p>Website xuất hiện ở vị trí cao trên Google, thu hút hàng nghìn lượt truy cập mỗi tháng</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3>Tiết Kiệm Chi Phí</h3>
                <p>SEO mang lại traffic miễn phí lâu dài, Google Ads được tối ưu để giảm chi phí quảng cáo</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3>Tăng Doanh Số</h3>
                <p>Khách hàng tiềm năng tìm đến bạn, tỷ lệ chuyển đổi tăng cao, doanh thu tăng trưởng bền vững</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3>Xây Dựng Thương Hiệu</h3>
                <p>Xuất hiện liên tục trên Google giúp khách hàng tin tưởng và nhớ đến thương hiệu của bạn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta_section}>
        <div className={styles.container}>
          <h2>Bắt Đầu Tăng Trưởng Ngay Hôm Nay!</h2>
          <p>Để lại thông tin để nhận tư vấn miễn phí và chiến lược SEO/Ads phù hợp</p>
          <Link href="/vi/contact" className={styles.primaryBtn}>
            Nhận Tư Vấn Miễn Phí
          </Link>
        </div>
      </section>
    </main>
  )
}
