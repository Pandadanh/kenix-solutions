import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <Image 
                src="/Kenix.png" 
                alt="Kenix Solutions" 
                width={1620}
                height={405}
              />
            </div>
            <p className={styles.tagline}>
              Giải pháp công nghệ chuyên nghiệp – Nhanh, an toàn, hiệu quả cho doanh nghiệp!
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+84374225294">+84 586 997 953</a>
              </div>
              <div className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:kenix.solutions@gmail.com">kenix.solutions@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Tân Bình, TP. Hồ Chí Minh</span>
              </div>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Dịch vụ</h3>
            <ul className={styles.links}>
              <li><Link href="/vi/services/web-design">Thiết kế website</Link></li>
              <li><Link href="/vi/services/seo-google-ads">SEO Website, Quảng Cáo Google Ads & Digital Marketing</Link></li>
              <li><Link href="/vi/services/web-maintenance">Bảo trì website</Link></li>
              <li><Link href="/vi/services/ui-ux-design">Thiết Kế UI/UX & Thương Hiệu</Link></li>
              <li><Link href="https://neyul.com/tu-van-marketing" target="_blank" rel="noopener noreferrer">Tư vấn marketing</Link></li>
              <li><Link href="https://neyul.com/dich-vu-lap-ke-hoach-marketing" target="_blank" rel="noopener noreferrer">Lập kế hoạch marketing</Link></li>
              <li><Link href="https://neyul.com/set-up-phong-marketing" target="_blank" rel="noopener noreferrer">Setup phòng marketing</Link></li>
              <li><Link href="https://neyul.com/trien-khai-marketing" target="_blank" rel="noopener noreferrer">Triển khai marketing</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Liên kết nhanh</h3>
            <ul className={styles.links}>
              <li><Link href="/vi/blog">Tin tức & Blog</Link></li>
              <li><Link href="/vi/faq">Câu hỏi thường gặp</Link></li>
              <li><Link href="/vi/warranty-policy-page">Chính sách bảo hành</Link></li>
              <li><Link href="/vi/terms-of-service-page">Điều khoản sử dụng</Link></li>
              <li><Link href="/vi/privacy-policy-page">Chính sách bảo mật</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Kết nối với chúng tôi</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/profile.php?id=61584215651015"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
          
              <a
                href="#"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
           
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2025 Kenix Solutions. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}

