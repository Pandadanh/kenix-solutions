'use client'

import { useState } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Hoàng Minh Tú',
    role: 'CEO Công ty BĐS Minh Tú',
    rating: 5,
    text: 'Tôi thực sự ấn tượng với dịch vụ của Landing Profile. Website được thiết kế rất chuyên nghiệp, tối ưu SEO tốt, giúp chúng tôi tiếp cận khách hàng tiềm năng dễ dàng hơn. Đội ngũ hỗ trợ nhanh chóng và tận tâm.',
    avatar: '/images/testimonials/tu.png',
  },
  {
    name: 'Nguyễn Thị Hạnh',
    role: 'Chủ cửa hàng mỹ phẩm',
    rating: 5,
    text: 'Trang web không chỉ đẹp mà còn giúp khách hàng dễ dàng mua sắm hơn. Nhờ có giao diện thân thiện và tốc độ tải nhanh, doanh số của chúng tôi tăng đáng kể trong vài tháng qua.',
    avatar: '/images/testimonials/hanh.png',
  },
  {
    name: 'Phạm Văn Khánh',
    role: 'Giám đốc điều hành',
    rating: 5,
    text: 'Đội ngũ Landing Profile làm việc rất chuyên nghiệp và chu đáo. Họ tư vấn rõ ràng, bám sát yêu cầu của chúng tôi và hoàn thành dự án đúng tiến độ. Rất đáng tin cậy!',
    avatar: '/images/testimonials/khanh.png',
  },
  {
    name: 'Trần Thanh Trúc',
    role: 'Founder thương hiệu thời trang',
    rating: 5,
    text: 'Từ ngày có website mới, thương hiệu của tôi trông chuyên nghiệp hơn rất nhiều. Khách hàng cũng đánh giá cao trải nghiệm mua sắm trực tuyến. Cảm ơn đội ngũ Landing Profile!',
    avatar: '/images/testimonials/truc.png',
  },
  {
    name: 'Thầy Thạch',
    role: 'Dạy lái xe An cư - Thầy Thạch',
    rating: 5,
    text: 'Website được thiết kế chuyên nghiệp, đẹp, dễ sử dụng, giúp học viên đăng ký nhanh chóng và tiếp cận thông tin dễ dàng. Rất hài lòng với dịch vụ của Landing Profile!',
    avatar: '/images/testimonials/thach.png',
  },
  {
    name: 'Hoàng Trung',
    role: 'Website thương mại điện tử - Bán Giày',
    rating: 5,
    text: 'Dịch vụ bên anh quá ok, hỗ trợ nhiệt tình tận tâm chỉ từng chi tiết',
    avatar: '/images/testimonials/trung.png',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const totalSlides = Math.ceil(testimonials.length / itemsPerView)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const StarRating = ({ rating }: { rating: number }) => (
    <div className={styles.rating}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Khách Hàng Nói Gì Về Chúng Tôi</h2>
          <p className={styles.subtext}>
            Những đánh giá chân thực từ khách hàng đã trải nghiệm dịch vụ của chúng tôi
          </p>
        </div>
        <div className={styles.carousel}>
          <button
            className={styles.navButton}
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className={styles.slidesContainer}>
            <div
              className={styles.slides}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className={styles.slide}>
                  {testimonials
                    .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                    .map((testimonial, index) => (
                      <div key={index} className={styles.card}>
                        <div className={styles.cardHeader}>
                          <div className={styles.avatar}>
                            <div className={styles.avatarPlaceholder}>
                              {testimonial.name.charAt(0)}
                            </div>
                          </div>
                          <div className={styles.info}>
                            <h3 className={styles.name}>{testimonial.name}</h3>
                            <p className={styles.role}>{testimonial.role}</p>
                          </div>
                        </div>
                        <StarRating rating={testimonial.rating} />
                        <p className={styles.text}>{testimonial.text}</p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
          <button
            className={styles.navButton}
            onClick={goToNext}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

