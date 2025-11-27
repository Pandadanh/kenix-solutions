'use client'

import { useState } from 'react'
import styles from './pricing.module.css'
import { 
  FileText, 
  Building2, 
  ShoppingCart, 
  UtensilsCrossed,
  Sparkles,
  House,
  GraduationCap,
  Stethoscope,
  Newspaper,
  Palette,
  Briefcase,
  Calendar,
  Hotel,
  Store,
  Smartphone,
  Settings,
  Check
} from 'lucide-react'

// Icon component mapping
const iconComponents = {
  landing: FileText,
  business: Building2,
  ecommerce: ShoppingCart,
  restaurant: UtensilsCrossed,
  spa: Sparkles,
  realestate: House,
  education: GraduationCap,
  healthcare: Stethoscope,
  news: Newspaper,
  portfolio: Palette,
  recruitment: Briefcase,
  event: Calendar,
  hotel: Hotel,
  marketplace: Store,
  'ios-app': Smartphone,
  'android-app': Smartphone,
  'cross-platform-app': Smartphone,
  custom: Settings,
}

export default function PricingPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const pricingPackages = [
    {
      id: 'landing',
      title: 'Landing Page',
      description: 'Trang đích tối ưu chuyển đổi cho chiến dịch marketing',
      price: '5.000.000 ₫',
      features: [
        '1 trang thiết kế chuyên nghiệp',
        'Tối ưu tốc độ tải',
        'Responsive mobile',
        'Form liên hệ cơ bản',
        'Tích hợp Google Analytics'
      ],
      highlighted: false
    },
    {
      id: 'business',
      title: 'Website Doanh Nghiệp',
      description: 'Website giới thiệu công ty, dịch vụ chuyên nghiệp',
      price: '12.000.000 ₫',
      features: [
        '5-10 trang nội dung',
        'Thiết kế theo thương hiệu',
        'CMS quản lý nội dung',
        'Blog tích hợp',
        'SEO cơ bản',
        'Bảo trì 6 tháng'
      ],
      highlighted: true,
      badge: 'Phổ biến nhất'
    },
    {
      id: 'ecommerce',
      title: 'Website Thương Mại Điện Tử',
      description: 'Giải pháp bán hàng online hoàn chỉnh',
      price: '25.000.000 ₫',
      features: [
        'Quản lý sản phẩm không giới hạn',
        'Giỏ hàng & thanh toán',
        'Quản lý đơn hàng',
        'Tích hợp payment gateway',
        'Quản lý kho hàng',
        'Báo cáo doanh thu',
        'Bảo trì 12 tháng'
      ],
      highlighted: false
    },
    {
      id: 'restaurant',
      title: 'Website Nhà Hàng & F&B',
      description: 'Website cho nhà hàng, quán cafe, food delivery',
      price: '15.000.000 ₫',
      features: [
        'Menu điện tử với hình ảnh',
        'Đặt bàn online',
        'Order & Delivery',
        'Quản lý chi nhánh',
        'Tích hợp bản đồ',
        'Review & Rating'
      ],
      highlighted: false
    },
    {
      id: 'spa',
      title: 'Website Spa & Làm Đẹp',
      description: 'Website cho spa, salon, clinic thẩm mỹ',
      price: '14.000.000 ₫',
      features: [
        'Giới thiệu dịch vụ',
        'Đặt lịch hẹn online',
        'Quản lý khách hàng',
        'Gallery trước/sau',
        'Tư vấn online',
        'Chương trình khuyến mãi'
      ],
      highlighted: false
    },
    {
      id: 'realestate',
      title: 'Website Bất Động Sản',
      description: 'Website môi giới, quản lý bất động sản',
      price: '20.000.000 ₫',
      features: [
        'Danh sách BĐS với filter',
        'Tìm kiếm nâng cao',
        'Tích hợp bản đồ',
        'Virtual tour 360',
        'So sánh BĐS',
        'Quản lý agent'
      ],
      highlighted: false
    },
    {
      id: 'education',
      title: 'Website Giáo Dục & E-Learning',
      description: 'Website trường học, khóa học online',
      price: '18.000.000 ₫',
      features: [
        'Quản lý khóa học',
        'Video lessons',
        'Quiz & Assignment',
        'Student portal',
        'Certificate system',
        'Payment & Subscription'
      ],
      highlighted: false
    },
    {
      id: 'healthcare',
      title: 'Website Y Tế & Phòng Khám',
      description: 'Website bệnh viện, phòng khám, nha khoa',
      price: '16.000.000 ₫',
      features: [
        'Đặt lịch khám online',
        'Quản lý bệnh nhân',
        'Hồ sơ y tế điện tử',
        'Tư vấn trực tuyến',
        'Thanh toán viện phí',
        'Tra cứu kết quả'
      ],
      highlighted: false
    },
    {
      id: 'news',
      title: 'Website Tin Tức & Magazine',
      description: 'Website báo điện tử, tạp chí online',
      price: '13.000.000 ₫',
      features: [
        'Hệ thống bài viết',
        'Categories & Tags',
        'Comment system',
        'Newsletter',
        'Quảng cáo banner',
        'SEO tối ưu'
      ],
      highlighted: false
    },
    {
      id: 'portfolio',
      title: 'Website Portfolio & Nghệ Thuật',
      description: 'Website cá nhân, nghệ sĩ, nhiếp ảnh',
      price: '8.000.000 ₫',
      features: [
        'Gallery hình ảnh',
        'Video showcase',
        'About & Bio',
        'Contact form',
        'Blog cá nhân',
        'Social integration'
      ],
      highlighted: false
    },
    {
      id: 'recruitment',
      title: 'Website Tuyển Dụng',
      description: 'Website tìm việc, đăng tin tuyển dụng',
      price: '17.000.000 ₫',
      features: [
        'Đăng tin tuyển dụng',
        'Tìm kiếm việc làm',
        'CV management',
        'Ứng tuyển online',
        'Employer dashboard',
        'Matching algorithm'
      ],
      highlighted: false
    },
    {
      id: 'event',
      title: 'Website Sự Kiện',
      description: 'Website tổ chức sự kiện, bán vé',
      price: '14.000.000 ₫',
      features: [
        'Quản lý sự kiện',
        'Bán vé online',
        'Check-in QR code',
        'Agenda & Schedule',
        'Speaker profiles',
        'Live streaming'
      ],
      highlighted: false
    },
    {
      id: 'hotel',
      title: 'Website Khách Sạn & Du Lịch',
      description: 'Website đặt phòng, tour du lịch',
      price: '22.000.000 ₫',
      features: [
        'Đặt phòng online',
        'Quản lý phòng',
        'Calendar availability',
        'Payment gateway',
        'Review system',
        'Multi-language'
      ],
      highlighted: false
    },
    {
      id: 'marketplace',
      title: 'Website Marketplace',
      description: 'Sàn thương mại đa nhà cung cấp',
      price: '35.000.000 ₫',
      features: [
        'Multi-vendor system',
        'Vendor dashboard',
        'Commission management',
        'Product approval',
        'Payment split',
        'Advanced analytics'
      ],
      highlighted: false
    },
    {
      id: 'ios-app',
      title: 'Mobile App iOS',
      description: 'Ứng dụng di động cho iPhone & iPad',
      price: '40.000.000 ₫',
      features: [
        'Native iOS development (Swift)',
        'App Store deployment',
        'Push notifications',
        'Offline mode',
        'In-app purchases',
        'Face ID / Touch ID',
        'Bảo trì 12 tháng'
      ],
      highlighted: true,
      badge: 'Phổ biến nhất'
    },
    {
      id: 'android-app',
      title: 'Mobile App Android',
      description: 'Ứng dụng di động cho Android',
      price: '38.000.000 ₫',
      features: [
        'Native Android development (Kotlin)',
        'Google Play deployment',
        'Push notifications',
        'Offline mode',
        'In-app purchases',
        'Biometric authentication',
        'Bảo trì 12 tháng'
      ],
      highlighted: true,
      badge: 'Phổ biến nhất'
    },
    {
      id: 'cross-platform-app',
      title: 'Mobile App Cross-Platform',
      description: 'App đa nền tảng iOS & Android',
      price: '60.000.000 ₫',
      features: [
        'React Native / Flutter',
        'iOS & Android cùng lúc',
        'Shared codebase (70-80%)',
        'App Store & Google Play',
        'Push notifications',
        'Offline sync',
        'Native performance',
        'Bảo trì 12 tháng'
      ],
      highlighted: false
    },
    {
      id: 'custom',
      title: 'Giải Pháp Tùy Chỉnh',
      description: 'Phát triển theo yêu cầu đặc biệt',
      price: '50.000.000 ₫',
      features: [
        'Phân tích yêu cầu chi tiết',
        'Thiết kế & phát triển riêng',
        'Tích hợp hệ thống phức tạp',
        'Web/Mobile app',
        'API & Automation',
        'Hỗ trợ dài hạn'
      ],
      highlighted: false
    }
  ]

  return (
    <div className={styles.pricingPage}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>Tính Giá Thiết Kế Website</h1>
          <p className={styles.subtitle}>
            Công cụ tính giá tự động, minh bạch. Chọn loại website và tính năng để nhận báo giá ngay lập tức.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.featureDot}></span>
              <span>Báo giá tức thì</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureDot} style={{ backgroundColor: '#3B82F6' }}></span>
              <span>Minh bạch 100%</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureDot} style={{ backgroundColor: '#10B981' }}></span>
              <span>Tư vấn miễn phí</span>
            </div>
          </div>
        </div>

        <div className={styles.pricingGrid}>
          {pricingPackages.map((pkg) => {
            const IconComponent = iconComponents[pkg.id as keyof typeof iconComponents]
            
            return (
              <div
                key={pkg.id}
                className={`${styles.pricingCard} ${pkg.highlighted ? styles.highlighted : ''} ${selectedType === pkg.id ? styles.selected : ''}`}
                onClick={() => setSelectedType(pkg.id)}
              >
                {pkg.badge && (
                  <div className={styles.badge}>{pkg.badge}</div>
                )}
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    {IconComponent && <IconComponent size={48} strokeWidth={1.5} />}
                  </div>
                  <div className={styles.cardHeaderContent}>
                    <h3 className={styles.cardTitle}>{pkg.title}</h3>
                    <p className={styles.cardDescription}>{pkg.description}</p>
                  </div>
                </div>
                <div className={styles.price}>{pkg.price}</div>
                <div className={styles.cardContent}>
                  <ul className={styles.featureList}>
                    {pkg.features.map((feature, index) => (
                      <li key={index} className={styles.featureItem}>
                        <Check className={styles.checkIcon} size={16} strokeWidth={2} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Bạn cần tư vấn thêm?</h2>
          <p className={styles.ctaText}>
            Liên hệ với chúng tôi để được tư vấn chi tiết và nhận báo giá phù hợp nhất
          </p>
          <div className={styles.ctaButtons}>
            <a href="/vi/contact" className={styles.primaryButton}>
              Liên hệ ngay
            </a>
            <a href="tel:+84123456789" className={styles.secondaryButton}>
              Gọi điện tư vấn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
