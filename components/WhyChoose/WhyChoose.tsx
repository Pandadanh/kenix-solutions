'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './WhyChoose.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

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
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
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
  const gridRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const autoScrollRef = useRef<NodeJS.Timeout>()
  const isScrollingRef = useRef(false)
  const isProgrammaticChangeRef = useRef(false)
  const [extendedReasons, setExtendedReasons] = useState([...reasons, ...reasons]) // Duplicate to 10 cards
  const lastDuplicateIndexRef = useRef(-1) // Track last activeIndex when we duplicated

  // Get real index from extended index (modulo with original reasons length)
  const getRealIndex = (extendedIndex: number): number => {
    return extendedIndex % reasons.length
  }

  // Get which card is currently centered
  const getCenteredCardIndex = (): number => {
    if (!gridRef.current) return 1
    
    const container = gridRef.current
    const containerWidth = container.clientWidth
    const scrollLeft = container.scrollLeft
    const cardWidth = 400 // card width
    const gap = 24 // gap between cards
    const cardWithGap = cardWidth + gap
    
    // Calculate center position of viewport
    const viewportCenter = scrollLeft + containerWidth / 2
    
    // Get all card elements
    const cards = container.children
    let closestIndex = 1
    let minDistance = Infinity
    
    // Find which card's center is closest to viewport center
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement
      const cardLeft = card.offsetLeft
      const cardCenter = cardLeft + cardWidth / 2
      const distance = Math.abs(viewportCenter - cardCenter)
      
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = i
      }
    }
    
    return closestIndex
  }

  // Scroll to specific card index (in extendedReasons) and center it
  const scrollToCard = (cardIndex: number, smooth = true) => {
    if (!gridRef.current) return
    
    isScrollingRef.current = true
    const container = gridRef.current
    const containerWidth = container.clientWidth
    const cardWidth = 400 // card width
    
    // Get the card element
    const cards = container.children
    if (cardIndex >= cards.length) return
    
    const targetCard = cards[cardIndex] as HTMLElement
    const cardLeft = targetCard.offsetLeft
    const cardCenter = cardLeft + cardWidth / 2
    
    // Calculate scroll position to center the card
    const scrollPosition = cardCenter - containerWidth / 2
    
    container.scrollTo({
      left: scrollPosition,
      behavior: smooth ? 'smooth' : 'auto'
    })

    // Reset scrolling flag after animation
    if (smooth) {
      setTimeout(() => {
        isScrollingRef.current = false
      }, 500)
    } else {
      isScrollingRef.current = false
    }
  }

  // Auto-duplicate when reaching the last card (activeIndex = 4, which is the 5th card)
  useEffect(() => {
    // When activeIndex reaches the last card (index 4 = 5th card), duplicate more cards
    if (activeIndex === reasons.length - 1) {
      // Only duplicate once per time we reach the last card
      if (lastDuplicateIndexRef.current === activeIndex) return
      
      if (!gridRef.current) return
      
      const container = gridRef.current
      const scrollLeft = container.scrollLeft
      const scrollWidth = container.scrollWidth
      const clientWidth = container.clientWidth
      
      // Calculate how close we are to the end
      const distanceToEnd = scrollWidth - (scrollLeft + clientWidth)
      const cardWidth = 400 + 24 // card + gap
      
      // If we're within 2 cards of the end, duplicate more
      if (distanceToEnd < cardWidth * 2) {
        lastDuplicateIndexRef.current = activeIndex
        setExtendedReasons(prev => {
          // Only duplicate if we haven't already added cards recently
          const currentLength = prev.length
          const expectedLength = reasons.length * Math.ceil(currentLength / reasons.length)
          
          // If current length matches expected (no recent duplicate), add more
          if (currentLength === expectedLength) {
            return [...prev, ...reasons]
          }
          return prev
        })
        
        // Reset after a delay so we can duplicate again if needed
        setTimeout(() => {
          lastDuplicateIndexRef.current = -1
        }, 2000)
      }
    } else {
      // Reset when we move away from last card
      if (activeIndex === 0) {
        lastDuplicateIndexRef.current = -1
      }
    }
  }, [activeIndex, extendedReasons.length])

  // Sync activeIndex with centered card when user scrolls
  useEffect(() => {
    const container = gridRef.current
    if (!container) return

    const handleScroll = () => {
      if (isScrollingRef.current || isProgrammaticChangeRef.current) return // Don't update if we're programmatically scrolling
      
      const centeredIndex = getCenteredCardIndex()
      const realIndex = getRealIndex(centeredIndex)
      
      setActiveIndex(realIndex)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // Initialize: scroll to first card
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      isProgrammaticChangeRef.current = true
      scrollToCard(0, false) // Start at first card
      setActiveIndex(0)
      setTimeout(() => {
        isProgrammaticChangeRef.current = false
      }, 100)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [activeIndex])

  // Find the best card index in extendedReasons that matches activeIndex
  const findCardIndexInExtended = (realIndex: number): number => {
    if (!gridRef.current) return realIndex
    
    const container = gridRef.current
    const scrollLeft = container.scrollLeft
    const containerWidth = container.clientWidth
    const viewportCenter = scrollLeft + containerWidth / 2
    
    // Find the closest card with matching realIndex
    const cards = container.children
    let bestIndex = realIndex
    let minDistance = Infinity
    
    for (let i = 0; i < cards.length; i++) {
      if (getRealIndex(i) === realIndex) {
        const card = cards[i] as HTMLElement
        const cardLeft = card.offsetLeft
        const cardCenter = cardLeft + 200 // half card width
        const distance = Math.abs(viewportCenter - cardCenter)
        
        // Prefer card that's ahead of current scroll position or closest to center
        if (distance < minDistance) {
          minDistance = distance
          bestIndex = i
        }
      }
    }
    
    // If no card found ahead, use the first matching card
    if (bestIndex === realIndex && cards.length > realIndex) {
      for (let i = 0; i < cards.length; i++) {
        if (getRealIndex(i) === realIndex) {
          return i
        }
      }
    }
    
    return bestIndex
  }

  // Ensure active card is centered when activeIndex changes programmatically
  useEffect(() => {
    if (!isProgrammaticChangeRef.current) return
    
    const scrollIndex = findCardIndexInExtended(activeIndex)
    scrollToCard(scrollIndex, true)
  }, [activeIndex, extendedReasons.length])

  const handleNext = () => {
    isProgrammaticChangeRef.current = true
    const nextRealIndex = (activeIndex + 1) % reasons.length
    setActiveIndex(nextRealIndex)
    setTimeout(() => {
      isProgrammaticChangeRef.current = false
    }, 600)
  }

  const handlePrev = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current)
    
    isProgrammaticChangeRef.current = true
    const prevRealIndex = (activeIndex - 1 + reasons.length) % reasons.length
    setActiveIndex(prevRealIndex)
    setTimeout(() => {
      isProgrammaticChangeRef.current = false
    }, 600)
  }

  const handleDotClick = (index: number) => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current)
    isProgrammaticChangeRef.current = true
    setActiveIndex(index)
    setTimeout(() => {
      isProgrammaticChangeRef.current = false
    }, 600)
  }

  return (
    <section id="about" className={styles.section} style={{ scrollMarginTop: '80px' }}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Tại sao chọn chúng tôi</h2>
        
        <div className={styles.carouselWrapper}>
          

          <div ref={gridRef} className={styles.grid}>
            {extendedReasons.map((reason, index) => {
              // Calculate if this card should be active using modulo
              const realIndex = getRealIndex(index)
              const isActive = realIndex === activeIndex
              
              return (
                <div 
                  key={`card-${index}`}
                  className={`${styles.card} ${isActive ? styles.cardActive : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.iconWrapper}>
                    {reason.icon}
                  </div>
                  <h3 className={styles.title}>{reason.title}</h3>
                  <p className={styles.description}>{reason.description}</p>
                </div>
              )
            })}
          </div>

        
        </div>

      

        {/* Scroll to next section */}
        <div className={styles.scrollIndicator} onClick={() => {
          const nextSection = document.querySelector('#services') || document.querySelector('section:nth-of-type(3)')
          nextSection?.scrollIntoView({ behavior: 'smooth' })
        }}>
          <p className={styles.scrollText}>Khám phá thêm</p>
          <svg className={styles.scrollArrow} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

      </div>
    </section>
  )
}

