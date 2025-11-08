import Link from 'next/link'
import styles from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.headline}>Hãy để website trở thành cỗ máy tạo doanh thu</h2>
          <p className={styles.subtext}>
            Liên hệ ngay để nhận tư vấn miễn phí & báo giá tốt nhất
          </p>
          <Link href="/vi/contact" className={styles.ctaButton}>
            Liên hệ ngay
          </Link>
        </div>
        <div className={styles.decorative}>
          <div className={styles.swirl}></div>
        </div>
      </div>
    </section>
  )
}

