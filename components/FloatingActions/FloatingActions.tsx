import Link from 'next/link'
import styles from './FloatingActions.module.css'

export default function FloatingActions() {
  return (
    <div className={styles.container}>
      <Link
        href="tel:+84374225294"
        className={styles.action}
        aria-label="Gọi điện thoại"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </Link>
      <Link
        href="https://zalo.me/84374225294"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.action}
        aria-label="Nhắn tin Zalo"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" />
          <text x="12" y="16" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">Z</text>
        </svg>
      </Link>
      <Link
        href="https://www.facebook.com/tanphatdigital"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.action}
        aria-label="Fanpage Facebook"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </Link>
    </div>
  )
}

