'use client'

import { Search, TrendingUp, Target, Globe, BarChart3, Award, Zap, Eye } from 'lucide-react'
import styles from './SEOProfileMobile.module.css'

export default function SEOProfileMobile() {
  const seoFeatures = [
    {
      icon: <Search size={20} />,
      title: 'Tối Ưu Từ Khóa',
      description: 'Nghiên cứu và tối ưu từ khóa hiệu quả, tăng thứ hạng Google'
    },
    {
      icon: <Globe size={20} />,
      title: 'SEO Đa Kênh',
      description: 'Tối ưu cho Google, Facebook, Zalo và các nền tảng khác'
    },
    {
      icon: <BarChart3 size={20} />,
      title: 'Phân Tích Chuyên Sâu',
      description: 'Báo cáo chi tiết về traffic, conversion và hiệu suất'
    },
    {
      icon: <Target size={20} />,
      title: 'Nhắm Đúng Khách Hàng',
      description: 'Tiếp cận đúng đối tượng mục tiêu, tăng tỷ lệ chuyển đổi'
    }
  ]

  const stats = [
    { value: '200%', label: 'Tăng lượt truy cập', icon: <Eye size={18} /> },
    { value: 'Top 3', label: 'Thứ hạng Google', icon: <Award size={18} /> },
    { value: '150%', label: 'Tăng chuyển đổi', icon: <TrendingUp size={18} /> }
  ]

  const processSteps = [
    { number: 1, title: 'Phân Tích', desc: 'Nghiên cứu thị trường & đối thủ' },
    { number: 2, title: 'Chiến Lược', desc: 'Xây dựng kế hoạch SEO tối ưu' },
    { number: 3, title: 'Triển Khai', desc: 'Tối ưu website & nội dung' },
    { number: 4, title: 'Giám Sát', desc: 'Theo dõi & báo cáo hiệu quả' }
  ]

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <Search size={14} />
          <span>SEO & DIGITAL MARKETING</span>
        </div>
        
        <h2 className={styles.title}>
          THIẾT KẾ PROFILE SEO{' '}
          <span className={styles.highlight}>QUẢNG BÁ DOANH NGHIỆP</span>
        </h2>
        
        <p className={styles.description}>
          Giải pháp SEO toàn diện giúp doanh nghiệp của bạn xuất hiện trên top 
          Google, tăng nhận diện thương hiệu và thu hút khách hàng tiềm năng một cách bền vững.
        </p>
        <div className={styles.featuresList}>
          {seoFeatures.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
