'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './ProjectsCarousel.module.css'

const projects = [
  {
    name: 'Website Thương Mại Điện Tử – EchoMedi',
    url: 'https://echomedi.com',
    image: '/images/projects/echomedi.png',
  },
  {
    name: 'Website Amor Spa',
    url: 'https://amorspa.vn',
    image: '/images/projects/amorspa.png',
  },
  {
    name: 'Website Giới Thiệu Công Ty ABC',
    url: 'https://tamly.echomedi.com',
    image: '/images/projects/abc.png',
  },
  {
    name: 'Website Mera Tech',
    url: 'https://www.mera-tech.vn',
    image: '/images/projects/mera.png',
  },
  {
    name: 'Website Bán Hàng Thời Trang',
    url: 'https://maidodesigner.com',
    image: '/images/projects/maido.png',
  },
  {
    name: 'Website BYD Long Biên',
    url: 'https://bydlongbien4s.vn',
    image: '/images/projects/byd.png',
  },
  {
    name: 'Website CUP CUP',
    url: 'https://cupcupbakery.com',
    image: '/images/projects/cupcup.png',
  },
  {
    name: 'Website VNCM',
    url: 'https://www.vncm.net',
    image: '/images/projects/vncm.png',
  },
  {
    name: 'Website DZUS',
    url: 'https://www.dzus.edu.vn',
    image: '/images/projects/dzus.png',
  },
  {
    name: 'Website Tài Khoản Mavis',
    url: 'https://taikhoanmavis.com',
    image: '/images/projects/mavis.png',
  },
]

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3

  const totalSlides = Math.ceil(projects.length / itemsPerView)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const visibleProjects = projects.slice(
    currentIndex * itemsPerView,
    (currentIndex + 1) * itemsPerView
  )

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Dự Án Tiêu Biểu – Khách Hàng Đã Thành Công!</h2>
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
                  {projects
                    .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                    .map((project, index) => (
                      <Link
                        key={project.url}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectCard}
                      >
                        <div className={styles.imageWrapper}>
                          <div className={styles.imagePlaceholder}>
                            <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
                              <rect width="400" height="300" fill="#F8F9FA" />
                              <rect x="20" y="20" width="360" height="260" rx="8" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2" />
                              <rect x="40" y="40" width="120" height="80" rx="4" fill="#FFD700" opacity="0.3" />
                              <rect x="180" y="40" width="200" height="80" rx="4" fill="#FFD700" opacity="0.2" />
                              <rect x="40" y="140" width="340" height="120" rx="4" fill="#FFD700" opacity="0.1" />
                            </svg>
                          </div>
                          <div className={styles.overlay}>
                            <span className={styles.viewText}>Xem dự án</span>
                          </div>
                        </div>
                        <h3 className={styles.projectName}>{project.name}</h3>
                      </Link>
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
        <Link href="/vi/projects/featured" className={styles.viewMoreBtn}>
          Xem thêm dự án
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

