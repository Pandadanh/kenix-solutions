import styles from './WhyChoose.module.css'

const reasons = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Thiết kế website theo yêu cầu',
    description: 'Website chuẩn UX/UI, tối ưu SEO, giao diện độc quyền giúp thương hiệu chuyên nghiệp hơn.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Chuẩn SEO, chuẩn UI/UX',
    description: 'Tối ưu SEO & UX giúp tăng chuyển đổi, thu hút khách hàng!',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Tốc độ cao & bảo mật',
    description: 'Website tải nhanh, bảo mật vững chắc chống hacker & tấn công DDoS.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Dễ quản lý & nâng cấp',
    description: 'Tích hợp CMS mạnh mẽ giúp quản lý nội dung dễ dàng.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Hỗ trợ lâu dài',
    description: 'Bảo trì, cập nhật website miễn phí trọn đời!',
  },
]

export default function WhyChoose() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Tại sao chọn chúng tôi</h2>
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.iconWrapper}>
                {reason.icon}
              </div>
              <h3 className={styles.title}>{reason.title}</h3>
              <p className={styles.description}>{reason.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.decorativeImage}>
          {/* Decorative 3D icons placeholder */}
          <div className={styles.iconsContainer}>
            {[...Array(12)].map((_, i) => (
              <div key={i} className={styles.icon3d} style={{ animationDelay: `${i * 0.2}s` }}>
                <div className={styles.iconShape}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

