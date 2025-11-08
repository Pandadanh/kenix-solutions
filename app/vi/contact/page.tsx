import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: 'Liên Hệ - Landing Profile',
  description: 'Liên hệ với chúng tôi để nhận tư vấn miễn phí về dịch vụ thiết kế website chuyên nghiệp.',
}

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <ContactSection />
    </div>
  )
}

