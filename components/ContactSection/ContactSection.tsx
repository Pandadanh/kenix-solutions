'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.heading}>Liên Hệ</h2>
            <p className={styles.subtext}>
              Vui lòng điền vào biểu mẫu dưới đây để liên hệ với chúng tôi.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.contactLabel}>Điện thoại</h3>
                  <a href="tel:+84586997953" className={styles.contactValue}>
                    +84 586 997 953
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.contactLabel}>Email</h3>
                  <a href="mailto:kenis.solutions@gmail.com" className={styles.contactValue}>
                    kenis.solutions@gmail.com
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.contactLabel}>Địa chỉ</h3>
                  <p className={styles.contactValue}>Tân Bình, TP. Hồ Chí Minh</p>
                </div>
              </div>
            </div>
           
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Họ và Tên
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  aria-required="true"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  aria-required="true"
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={styles.input}
                aria-required="true"
              />
            </div>
           
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Nội dung
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={styles.textarea}
                placeholder="Mô tả yêu cầu của bạn..."
                aria-required="true"
              />
            </div>
            {submitStatus === 'success' && (
              <div className={styles.successMessage} role="alert">
                Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className={styles.errorMessage} role="alert">
                Có lỗi xảy ra. Vui lòng thử lại sau.
              </div>
            )}
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Đang gửi...' : 'Nhận tư vấn ngay'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

