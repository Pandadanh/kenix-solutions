'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Sản phẩm', href: '/vi#services' },
    { label: 'Hồ sơ', href: '/vi#about' },
    { label: 'Đội ngũ', href: '/vi#projects' },
    { label: 'Chuyên môn', href: '/vi/solutions' },
    { label: 'Bài viết', href: '/vi/blog' },
  ]

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/vi" className={styles.logo}>
          <Image 
            src="/Kenix.png" 
            alt="Kenix Solutions" 
            width={1800}
            height={450}
            priority
            className={styles.logoImage}
          />
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${styles.menuLink} ${pathname === item.href ? styles.active : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.searchBtn}
            aria-label="Search posts"
            onClick={() => {/* Search functionality */}}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <Link href="/vi/contact" className={styles.signInBtn}>
            Liên hệ ngay
          </Link>
          <button
            className={styles.menuToggle}
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

