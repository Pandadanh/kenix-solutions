'use client'

import { useRef } from 'react'
import styles from './ServicesPackagesMobile.module.css'

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
    popular: true,
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
    popular: false,
  },
]

export default function ServicesPackagesMobile() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Gói Dịch Vụ Của Chúng Tôi</h2>
        <p className={styles.subheading}>Lựa chọn gói dịch vụ phù hợp với nhu cầu của bạn</p>
        
        <div className={styles.scrollContainer} ref={scrollRef}>
          <div className={styles.scrollWrapper}>
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`${styles.card} ${pkg.popular ? styles.popular : ''}`}
              >
                {pkg.popular && (
                  <div className={styles.badge}>
                    <span>Phổ Biến Nhất</span>
                  </div>
                )}
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <p className={styles.description}>{pkg.description}</p>
                <ul className={styles.features}>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={styles.ctaButton}>
                  Chi Tiết
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.scrollHint}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
          <span>Vuốt để xem thêm gói dịch vụ</span>
        </div>
      </div>
    </section>
  )
}
