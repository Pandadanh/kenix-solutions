'use client'

import { CheckCircle2, TrendingUp, Users, BarChart3, Shield, Zap } from 'lucide-react'
import styles from './CRMBenefits.module.css'

export default function CRMBenefits() {
  const benefits = [
    {
      icon: <Users size={24} />,
      title: 'Quản Lý Khách Hàng Tập Trung',
      description: 'Lưu trữ và quản lý toàn bộ thông tin khách hàng ở một nơi duy nhất'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Tăng Doanh Thu',
      description: 'Theo dõi cơ hội bán hàng và tối ưu hóa quy trình chốt đơn'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Báo Cáo Thông Minh',
      description: 'Phân tích dữ liệu và báo cáo chi tiết về hiệu suất kinh doanh'
    },
    {
      icon: <Zap size={24} />,
      title: 'Tự Động Hóa Quy Trình',
      description: 'Giảm công việc thủ công, tăng hiệu suất làm việc của đội ngũ'
    },
    {
      icon: <Shield size={24} />,
      title: 'Bảo Mật Dữ Liệu',
      description: 'An toàn tuyệt đối cho thông tin khách hàng và doanh nghiệp'
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: 'Tích Hợp Đa Kênh',
      description: 'Kết nối với email, điện thoại, mạng xã hội và các công cụ khác'
    }
  ]

  return (
    <section className={styles.crmSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <div className={styles.badge}>
              <Zap size={16} />
              <span>GIẢI PHÁP CRM THÔNG MINH</span>
            </div>
            <h2 className={styles.title}>
              QUẢN LÝ KHÁCH HÀNG HIỆU QUẢ, TĂNG TRƯỞNG{' '}
              <span className={styles.highlight}>VƯỢT BẬC</span>
            </h2>
            <p className={styles.description}>
              Phần mềm CRM giúp doanh nghiệp quản lý mối quan hệ khách hàng một cách 
              chuyên nghiệp, tự động hóa quy trình bán hàng và nâng cao trải nghiệm khách hàng.
            </p>

            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    {benefit.icon}
                  </div>
                  <div className={styles.benefitContent}>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDesc}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Images */}
          <div className={styles.rightImages}>
            <div className={styles.imageGrid}>
              <div className={styles.imageCard}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.statsCard}>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>250+</div>
                      <div className={styles.statLabel}>Doanh nghiệp tin dùng</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.imageCard}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.statsCard}>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>98%</div>
                      <div className={styles.statLabel}>Khách hàng hài lòng</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.imageCard}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.statsCard}>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>3.5x</div>
                      <div className={styles.statLabel}>Tăng trưởng doanh thu</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Scroll */}
        <div className={styles.partnerSection}>
          <div className={styles.partnerTrack}>
            <div className={styles.partnerItem}>
              <div className={styles.partnerLogo}>Meta Business</div>
            </div>
            <div className={styles.partnerItem}>
              <div className={styles.partnerLogo}>Google Partner</div>
            </div>
            <div className={styles.partnerItem}>
              <div className={styles.partnerLogo}>Google Retail</div>
            </div>
            <div className={styles.partnerItem}>
              <div className={styles.partnerLogo}>Meta Business</div>
            </div>
            <div className={styles.partnerItem}>
              <div className={styles.partnerLogo}>Google Partner</div>
            </div>
            <div className={styles.partnerItem}>
              <div className={styles.partnerLogo}>Google Retail</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
