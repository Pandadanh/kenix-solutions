import styles from './ServicesPackages.module.css'

const packages = [
  {
    name: 'Cơ Bản',
    description: 'Dành cho cá nhân hoặc doanh nghiệp nhỏ cần website cơ bản với SEO tối ưu và tốc độ tải nhanh.',
    features: [
      'Thiết kế từ 1-5 trang (Giới thiệu, Dịch vụ, Liên hệ...)',
      'Giao diện tinh gọn, tối ưu trên mobile',
      'Tích hợp biểu mẫu liên hệ',
      'Chuẩn SEO, load nhanh',
      'Hỗ trợ Live Chat',
      'Bảo trì miễn phí 3 tháng',
      'Miễn phí domain 1 năm',
    ],
    popular: false,
  },
  {
    name: 'Chuyên Nghiệp',
    description: 'Phù hợp doanh nghiệp cần website chuyên nghiệp với tính năng nâng cao và SEO mạnh mẽ.',
    features: [
      'Thiết kế từ 5-15 trang (Giới thiệu, Dịch vụ, Blog, Liên hệ...)',
      'Giao diện thiết kế riêng theo thương hiệu',
      'Tối ưu SEO nâng cao, hỗ trợ đẩy top Google',
      'Tích hợp CMS giúp dễ dàng cập nhật nội dung',
      'Tích hợp Google Maps, Form liên hệ nâng cao',
      'Bảo trì miễn phí 6 tháng',
      'Miễn phí domain 1 năm',
    ],
    popular: false,
  },
  {
    name: 'Thương Mại Điện Tử',
    description: 'Giải pháp thiết kế website thương mại điện tử chuẩn SEO, tối ưu tốc độ, hỗ trợ thanh toán và quản lý đơn hàng hiệu quả.',
    features: [
      'Thiết kế UI/UX chuyên nghiệp, tối ưu trải nghiệm mua sắm',
      'Tích hợp giỏ hàng, thanh toán Momo, VNPay, Stripe, PayPal',
      'Quản lý sản phẩm, đơn hàng, khách hàng & kho hàng',
      'Tích hợp chatbot tư vấn, hệ thống mã giảm giá',
      'Đa ngôn ngữ, đa tiền tệ',
      'Bảo trì miễn phí 12 tháng',
      'Miễn phí domain 1 năm',
    ],
    popular: true,
  },
  {
    name: 'Giải Pháp Tùy Chỉnh',
    description: 'Phát triển ứng dụng web/mobile theo yêu cầu đặc biệt.',
    features: [
      'Thiết kế & lập trình theo yêu cầu đặc thù',
      'Ứng dụng Web App, Mobile App (iOS & Android)',
      'Hệ thống web app (CRM, ERP, SaaS...)',
      'Tích hợp API, hệ thống tự động hóa, quản lý nội bộ',
      'Hỗ trợ AI & Machine Learning nếu cần',
      'Hỗ trợ & bảo trì theo hợp đồng riêng',
      'Miễn phí domain 1 năm',
    ],
    popular: false,
  },
]

export default function ServicesPackages() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Gói Dịch Vụ Của Chúng Tôi</h2>
        <div className={styles.grid}>
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`${styles.card} ${pkg.popular ? styles.popular : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className={styles.badge}>
                  <span>Phổ Biến</span>
                </div>
              )}
              <h3 className={styles.packageName}>{pkg.name}</h3>
              <p className={styles.description}>{pkg.description}</p>
              <ul className={styles.features}>
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.ctaButton}>
                Đặt lịch demo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

