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
    { label: 'Về chúng tôi', href: '/vi#about' },
    { label: 'Dịch vụ', href: '/vi#services' },
    { label: 'Dự án', href: '/vi#projects' },
    { label: 'Giải pháp', href: '/vi/solutions' },
    { label: 'Tài nguyên', href: '/vi/resources' },
    { label: 'Tin tức & Blog', href: '/vi/blog' },
    { label: 'Báo giá', href: '/vi/cong-cu-tinh-gia-website' },
    { label: 'Tuyển dụng', href: '/vi/careers' },
    { label: 'Liên hệ', href: '/vi/contact' },
  ]

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/vi" className={styles.logo}>
          <div className={styles.logoText}>
            <span className={styles.logoAccent}>LP</span>
            <span>Landing Profile</span>
          </div>
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
          <Link href="/api/auth/signin" className={styles.signInBtn}>
            Sign In
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

