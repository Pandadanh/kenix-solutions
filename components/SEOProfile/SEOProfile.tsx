'use client'

import { Search, TrendingUp, Target, Globe, BarChart3, Award, Zap, Eye } from 'lucide-react'
import styles from './SEOProfile.module.css'

export default function SEOProfile() {
  const seoFeatures = [
    {
      icon: <Search size={24} />,
      title: 'Tối Ưu Từ Khóa',
      description: 'Nghiên cứu và tối ưu từ khóa hiệu quả, tăng thứ hạng Google'
    },
    {
      icon: <Globe size={24} />,
      title: 'SEO Đa Kênh',
      description: 'Tối ưu cho Google, Facebook, Zalo và các nền tảng khác'
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Phân Tích Chuyên Sâu',
      description: 'Báo cáo chi tiết về traffic, conversion và hiệu suất'
    },
    {
      icon: <Target size={24} />,
      title: 'Nhắm Đúng Khách Hàng',
      description: 'Tiếp cận đúng đối tượng mục tiêu, tăng tỷ lệ chuyển đổi'
    }
  ]

  const stats = [
    { value: '200%', label: 'Tăng lượt truy cập', icon: <Eye size={20} /> },
    { value: 'Top 3', label: 'Thứ hạng Google', icon: <Award size={20} /> },
    { value: '150%', label: 'Tăng chuyển đổi', icon: <TrendingUp size={20} /> },
    { value: '24/7', label: 'Giám sát tự động', icon: <Zap size={20} /> }
  ]

  return (
    <section className={styles.seoSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Right Content */}
          <div className={styles.rightContent}>
            <div className={styles.badge}>
              <Search size={16} />
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
                <div key={index} className={styles.featureItem}>
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

            <div className={styles.statsRow}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statBox}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Visual */}
          <div className={styles.leftVisual}>
            <div className={styles.searchCard}>
              <div className={styles.searchHeader}>
                <Search size={20} />
                <span>Google Search</span>
              </div>
              <div className={styles.searchInput}>
                <input type="text" placeholder="Phần mềm quản lý bán hàng..." readOnly />
              </div>
              <div className={styles.searchResults}>
                <div className={`${styles.resultItem} ${styles.featured}`}>
                  <div className={styles.resultBadge}>Quảng cáo</div>
                  <div className={styles.resultTitle}>Kenix Solutions - Phần Mềm Quản Lý Chuyên Nghiệp</div>
                  <div className={styles.resultUrl}>kenix-solutions.com</div>
                  <div className={styles.resultDesc}>Giải pháp phần mềm AI tùy chỉnh cho doanh nghiệp. Tự động hóa quy trình...</div>
                </div>
                <div className={styles.resultItem}>
                  <div className={styles.resultTitle}>Top 10 Phần Mềm Quản Lý Bán Hàng 2025</div>
                  <div className={styles.resultUrl}>example.com</div>
                  <div className={styles.resultDesc}>Đánh giá chi tiết về các phần mềm quản lý bán hàng...</div>
                </div>
                <div className={styles.resultItem}>
                  <div className={styles.resultTitle}>Hướng Dẫn Chọn Phần Mềm Quản Lý</div>
                  <div className={styles.resultUrl}>guide.com</div>
                  <div className={styles.resultDesc}>Các tiêu chí quan trọng khi lựa chọn phần mềm...</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Process Timeline */}
        <div className={styles.processSection}>
          <h3 className={styles.processTitle}>Quy Trình SEO Chuyên Nghiệp</h3>
          <div className={styles.processTimeline}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h4>Phân Tích</h4>
                <p>Nghiên cứu thị trường & đối thủ</p>
              </div>
            </div>
            <div className={styles.processLine}></div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h4>Chiến Lược</h4>
                <p>Xây dựng kế hoạch SEO tối ưu</p>
              </div>
            </div>
            <div className={styles.processLine}></div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h4>Triển Khai</h4>
                <p>Tối ưu website & nội dung</p>
              </div>
            </div>
            <div className={styles.processLine}></div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h4>Giám Sát</h4>
                <p>Theo dõi & báo cáo hiệu quả</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
