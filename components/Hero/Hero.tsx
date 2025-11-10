'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Hero.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const splitscreenRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const title1Ref = useRef<HTMLDivElement>(null)
  const title2Ref = useRef<HTMLDivElement>(null)
  const afterSectionRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const scrollIndicator2Ref = useRef<HTMLDivElement>(null)

  // Handle smooth scroll to content section
  const scrollToContent = () => {
    if (afterSectionRef.current) {
      afterSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Handle smooth scroll to WhyChoose section
  const scrollToWhyChoose = () => {
    const whyChooseSection = document.getElementById('about')
    if (whyChooseSection) {
      whyChooseSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  useEffect(() => {
    if (!sectionRef.current || !wrapperRef.current || !splitscreenRef.current) return

    const section = sectionRef.current
    const top = topRef.current
    const bottom = bottomRef.current
    const title1 = title1Ref.current
    const title2 = title2Ref.current
    const afterSection = afterSectionRef.current
    const scrollIndicator = scrollIndicatorRef.current
    const scrollIndicator2 = scrollIndicator2Ref.current

    // Set initial positions cho text - fix bug khi refresh trên mobile
    if (title1) {
      gsap.set(title1, {
        x: '0vw',
        y: '0vh',
        force3D: true
      })
    }
    if (title2) {
      gsap.set(title2, {
        x: '0vw',
        force3D: true
      })
    }

    // Set initial height for the section - needs enough scroll space
    // Giảm scroll space để animation nhanh hơn
    const sectionHeight = window.innerHeight * 2
    gsap.set(section, { height: sectionHeight })

    // Create a timeline for all animations based on scroll progress
    // Tăng tốc độ animation - scrub thấp hơn = phản ứng nhanh hơn
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.2, // Giảm từ 0.5 xuống 0.2 để animation nhanh hơn
      onUpdate: (self) => {
        const progress = self.progress // 0 to 1
        const scrollPercent = progress * 100 // 0 to 100

        // Ẩn scroll indicator khi bắt đầu scroll
        if (scrollIndicator) {
          const indicatorOpacity = Math.max(0, 1 - (scrollPercent / 10)) // Fade out trong 10% đầu
          gsap.set(scrollIndicator, {
            opacity: indicatorOpacity,
            pointerEvents: indicatorOpacity > 0 ? 'auto' : 'none'
          })
        }

        // Hiện scroll indicator 2 khi vào transition section
        if (scrollIndicator2) {
          let indicator2Opacity = 0
          // Hiện từ 35% scroll (khi background bắt đầu fade in) và fade out ở 90%
          if (scrollPercent > 35 && scrollPercent < 90) {
            const fadeInProgress = Math.min((scrollPercent - 35) / 15, 1) // 35% -> 50% fade in
            const fadeOutProgress = scrollPercent > 80 ? Math.max(0, 1 - (scrollPercent - 80) / 10) : 1 // 80% -> 90% fade out
            indicator2Opacity = Math.min(fadeInProgress, fadeOutProgress)
          }
          gsap.set(scrollIndicator2, {
            opacity: indicator2Opacity,
            pointerEvents: indicator2Opacity > 0 ? 'auto' : 'none'
          })
        }

        // Splitscreen animation - tăng tốc độ mở
        // Animation nhanh hơn: mở đến 50% trong 25% scroll (thay vì 35%)
        if (top && bottom) {
          let topHeight = 0
          let bottomHeight = 0

          if (scrollPercent <= 25) {
            // Ease-out cubic cho chuyển động tự nhiên nhưng nhanh hơn
            const t = scrollPercent / 25
            const eased = 1 - Math.pow(1 - t, 3) // cubic ease-out
            topHeight = 50 * eased
            bottomHeight = 50 * eased
          } else {
            // Giữ ở 50% sau khi mở xong
            topHeight = 50
            bottomHeight = 50
          }

          // Đảm bảo phần còn lại luôn fill 100% (không có gap)
          const remainingHeight = 100 - topHeight - bottomHeight

          // Sử dụng GPU acceleration để mượt hơn
          gsap.set(top, {
            height: `${topHeight}%`,
            force3D: true
          })
          gsap.set(bottom, {
            height: `${bottomHeight}%`,
            force3D: true
          })

          // Nếu có gap, splitscreenWrapper sẽ fill background
          if (splitscreenRef.current) {
            gsap.set(splitscreenRef.current, {
              opacity: remainingHeight > 0 ? 1 : 0
            })
          }
        }

        // Text movement animations - tăng tốc độ di chuyển
        // Animation nhanh hơn: di chuyển trong 40% scroll (thay vì 50%)
        if (title1) {
          let x = 0
          let y = 0

          if (scrollPercent <= 40) {
            // Ease-in-out cho chuyển động tự nhiên
            const t = scrollPercent / 40
            const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
            x = -6 * eased // Tăng từ 0vw to -6vw
            y = -20 * eased // Tăng từ 0vh to -20vh
          } else {
            // Interpolate back với easing
            const t = (scrollPercent - 40) / 60
            const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
            x = -6 + (6 * eased) // Từ -6vw về 0vw
            y = -20 + (20 * eased) // Từ -20vh về 0vh
          }

          gsap.set(title1, {
            x: `${x}vw`,
            y: `${y}vh`,
            force3D: true
          })
        }

        if (title2) {
          let x = 0

          if (scrollPercent <= 40) {
            const t = scrollPercent / 40
            const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
            x = 20 * eased // Tăng từ 0vw to 20vw
          } else {
            const t = (scrollPercent - 40) / 60
            const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
            x = 20 - (20 * eased) // Từ 20vw về 0vw
          }

          gsap.set(title2, {
            x: `${x}vw`,
            force3D: true
          })
        }

        // Background fade-in nhanh hơn + đổi màu Hero section
        if (afterSection) {
          let opacity = 0
          // Bắt đầu fade từ 30% scroll progress (thay vì 40%)
          if (scrollPercent > 30) {
            const fadeProgress = (scrollPercent - 30) / 70 // 30% -> 100%
            const eased = fadeProgress * fadeProgress // ease-in
            opacity = Math.min(eased, 1)
          }
          gsap.set(afterSection, {
            backgroundColor: `rgba(255, 255, 255, ${opacity})`,
            force3D: true
          })
        }

        // Đổi background Hero section khi splitscreen mở
        if (section && scrollPercent > 25) {
          // Sau khi splitscreen mở xong (25%), đổi background sang trắng
          const bgProgress = Math.min((scrollPercent - 25) / 10, 1) // 25% -> 35%
          gsap.set(section, {
            backgroundColor: `rgb(${238 + (255 - 238) * bgProgress}, ${235 + (255 - 235) * bgProgress}, ${220 + (255 - 220) * bgProgress})`
          })
        }
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <section ref={sectionRef} className={styles.hero} data-section="intro">
        <div ref={wrapperRef} className={styles.introWrapper}>
          <div className={styles.introContent}>
            <div className={styles.introTextWrapper}>
              <div className={styles.introTitleWrapper}>
                <div ref={title1Ref} className={`${styles.introTitle} ${styles.titleWebdesign}`}>
                  KENIX
                </div>
                <div ref={title2Ref} className={`${styles.introTitle} ${styles.titleAnimation}`}>
                  SOLUTIONS
                </div>
              </div>
            </div>

            {/* Scroll Indicator - hint để scroll xuống */}
            <div
              ref={scrollIndicatorRef}
              className={styles.scrollIndicator}
              onClick={scrollToContent}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.scrollMouse}>
                <div className={styles.scrollWheel}></div>
              </div>
              <p className={styles.scrollText}>Lướt xuống</p>
            </div>
          </div>
          <div ref={splitscreenRef} className={styles.splitscreenWrapper}>
            <div ref={topRef} className={styles.splitscreenTop}></div>
            <div ref={bottomRef} className={styles.splitscreenBottom}></div>
          </div>
        </div>

        {/* Content bên dưới - hiện ra khi splitscreen mở */}
        <div ref={afterSectionRef} className={styles.transitionSection}>
          <div className={styles.transitionContent}>
            <div className={styles.content}>
              <h1 className={styles.headline}>
                Giải Pháp Công Nghệ Chuyên Nghiệp
              </h1>
              <p className={styles.subtext}>
                Kenix Solutions cung cấp các giải pháp thiết kế website, ứng dụng di động và chuyển đổi số toàn diện.
                Nhanh chóng, an toàn và hiệu quả cho doanh nghiệp của bạn.
              </p>

              <div
                ref={scrollIndicator2Ref}
                className={styles.scrollIndicator2}
                onClick={scrollToWhyChoose}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.scrollMouse}>
                  <div className={styles.scrollWheel}></div>
                </div>
                <p className={styles.scrollText}>Khám phá thêm</p>
              </div>
            </div>

            {/* Scroll Indicator 2 - hint để scroll xuống WhyChoose */}

          </div>
        </div>
      </section>
    </>
  )
}

