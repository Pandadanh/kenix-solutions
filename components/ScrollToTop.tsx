'use client'

import { useEffect } from 'react'

export default function ScrollToTop() {
  useEffect(() => {
    // Đảm bảo scroll về đầu trang khi vào page này
    // Chỉ scroll nếu không có hash trong URL
    if (typeof window !== 'undefined' && !window.location.hash) {
      // Scroll ngay lập tức (không smooth) để tránh browser restore scroll position
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      
      // Đảm bảo scroll lại sau một frame để override browser restore
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      })
    }
  }, [])

  return null
}

