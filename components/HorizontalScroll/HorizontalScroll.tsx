'use client'

import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import InteractiveHero from '@/components/InteractiveHero'
import CRMBenefits from '@/components/CRMBenefits'
import SEOProfile from '@/components/SEOProfile'
import styles from './HorizontalScroll.module.css'

export default function HorizontalScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const sections = [
    { id: 'interactive', component: <InteractiveHero />, title: 'Tự động hóa Zalo' },
    { id: 'crm', component: <CRMBenefits />, title: 'Giải pháp CRM' },
    { id: 'seo', component: <SEOProfile />, title: 'SEO Profile' }
  ]

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollToSection = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const sectionWidth = container.scrollWidth / sections.length
      container.scrollTo({
        left: sectionWidth * index,
        behavior: 'smooth'
      })
      setCurrentSection(index)
    }
  }

  const scrollLeft = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1)
    }
  }

  const scrollRight = () => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollButtons)
      checkScrollButtons()
      return () => container.removeEventListener('scroll', checkScrollButtons)
    }
  }, [])

  return (
    <section className={styles.horizontalSection}>
      <div className={styles.scrollWrapper}>
        {/* Navigation Arrows */}
        <button 
          className={`${styles.navButton} ${styles.navLeft} ${!canScrollLeft ? styles.disabled : ''}`}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <ChevronLeft size={32} />
        </button>

        <button 
          className={`${styles.navButton} ${styles.navRight} ${!canScrollRight ? styles.disabled : ''}`}
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <ChevronRight size={32} />
        </button>

        {/* Scroll Container */}
        <div className={styles.scrollContainer} ref={scrollContainerRef}>
          {sections.map((section, index) => (
            <div key={section.id} className={styles.scrollSection}>
              {section.component}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
