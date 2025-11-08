import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            🎉 Chào Mừng đến với Landing Profile
          </div>
          <h1 className={styles.headline}>
            Thiết Kế & Lập Trình Website Chuyên Nghiệp
          </h1>
          <p className={styles.subtext}>
            Chúng tôi mang đến giải pháp website hoàn hảo, giúp bạn tăng doanh thu, 
            nâng tầm thương hiệu với tốc độ tải nhanh, giao diện độc quyền & chuẩn SEO!
          </p>
          <Link href="/vi/contact" className={styles.ctaButton}>
            Nhận báo giá miễn phí
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.heroImage}>
            {/* Placeholder for hero image - replace with actual image */}
            <div className={styles.imagePlaceholder}>
              <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none">
                <rect width="800" height="600" fill="#F8F9FA" />
                <rect x="50" y="50" width="700" height="500" rx="8" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2" />
                <circle cx="400" cy="200" r="60" fill="#FFD700" opacity="0.3" />
                <rect x="100" y="300" width="200" height="150" rx="4" fill="#FFD700" opacity="0.2" />
                <rect x="350" y="300" width="200" height="150" rx="4" fill="#FFD700" opacity="0.2" />
                <rect x="600" y="300" width="100" height="150" rx="4" fill="#FFD700" opacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.decorativeElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
      </div>
    </section>
  )
}

