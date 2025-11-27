'use client'

import { useState } from 'react'
import { Briefcase, MapPin, Clock, DollarSign, Users, Target, TrendingUp, Award, Check, X } from 'lucide-react'
import styles from './careers.module.css'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  salary: string
  experience: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  badge?: string
}

const jobs: Job[] = [
  {
    id: 'collaborator',
    title: 'Collaborator',
    department: 'Đối tác chiến lược',
    location: 'Remote/Hybrid',
    type: 'Partnership',
    salary: 'Hoa hồng 15-30%',
    experience: 'Không yêu cầu',
    badge: 'Phổ biến',
    description: 'Trở thành đối tác chiến lược trong các dự án lớn với mức hoa hồng hấp dẫn và các cơ hội phát triển dài hạn',
    responsibilities: [
      'Tìm kiếm và giới thiệu khách hàng tiềm năng',
      'Hỗ trợ trong quá trình tư vấn giải pháp',
      'Duy trì mối quan hệ với khách hàng',
      'Tham gia các buổi đào tạo chuyên sâu'
    ],
    requirements: [
      'Có mạng lưới quan hệ rộng',
      'Kỹ năng giao tiếp tốt',
      'Hiểu biết về công nghệ là một lợi thế',
      'Có khả năng làm việc độc lập'
    ],
    benefits: [
      'Hoa hồng 15-30% trên doanh số',
      'Hỗ trợ marketing chất lượng cao',
      'Đào tạo chuyên sâu về sản phẩm',
      'Cơ hội phát triển dài hạn'
    ]
  },
  {
    id: 'freelancer',
    title: 'Freelancer',
    department: 'Chuyên gia tự do',
    location: 'Remote',
    type: 'Contract',
    salary: 'Theo dự án',
    experience: '1-3 năm',
    badge: 'Phổ biến',
    description: 'Làm việc linh hoạt với các dự án đa dạng, phát triển kỹ năng và xây dựng portfolio chuyên nghiệp',
    responsibilities: [
      'Thực hiện các dự án được giao',
      'Đảm bảo chất lượng và tiến độ',
      'Báo cáo tiến trình công việc',
      'Hỗ trợ team khi cần thiết'
    ],
    requirements: [
      'Có kinh nghiệm làm dự án thực tế',
      'Thành thạo ít nhất 1 lĩnh vực (Web/Mobile/Design)',
      'Có khả năng làm việc độc lập',
      'Quản lý thời gian tốt'
    ],
    benefits: [
      'Linh hoạt thời gian làm việc',
      'Mức lương cạnh tranh theo dự án',
      'Cơ hội tham gia dự án đa dạng',
      'Skill development support'
    ]
  },
  {
    id: 'intern',
    title: 'Thực Tập Sinh',
    department: 'IT & Marketing',
    location: 'Office/Remote',
    type: 'Internship',
    salary: '2-5 triệu/tháng',
    experience: 'Sinh viên',
    badge: 'Mới',
    description: 'Chương trình thực tập chuyên nghiệp cho sinh viên IT và Marketing với mentor 1-1 và cơ hội full-time',
    responsibilities: [
      'Học hỏi và thực hành kỹ năng chuyên môn',
      'Hỗ trợ team trong các dự án thực tế',
      'Tham gia các buổi training',
      'Hoàn thành các assignment được giao'
    ],
    requirements: [
      'Sinh viên năm 3, 4 hoặc mới tốt nghiệp',
      'Đam mê công nghệ/marketing',
      'Có thể làm full-time ít nhất 3 tháng',
      'Thái độ học hỏi tích cực'
    ],
    benefits: [
      'Mentor 1-1 từ Senior',
      'Được làm dự án thực tế',
      'Chứng chỉ hoàn thành',
      'Cơ hội full-time sau thực tập'
    ]
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Hà Nội/Remote',
    type: 'Full-time',
    salary: '15-25 triệu',
    experience: '2+ năm',
    description: 'Xây dựng các ứng dụng web hiện đại với React, Next.js và TypeScript',
    responsibilities: [
      'Phát triển giao diện người dùng responsive',
      'Tối ưu hiệu năng ứng dụng web',
      'Làm việc với team backend để tích hợp API',
      'Code review và mentor junior developers'
    ],
    requirements: [
      'Thành thạo React, Next.js, TypeScript',
      'Kinh nghiệm với CSS Modules, Tailwind',
      'Hiểu biết về responsive design',
      'Kinh nghiệm làm việc với Git'
    ],
    benefits: [
      'Lương cạnh tranh + thưởng dự án',
      'WFH linh hoạt',
      'Bảo hiểm sức khỏe',
      'Ngân sách học tập'
    ]
  },
  {
    id: 'backend-dev',
    title: 'Backend Developer',
    department: 'Engineering',
    location: 'Hà Nội/Remote',
    type: 'Full-time',
    salary: '18-30 triệu',
    experience: '3+ năm',
    description: 'Phát triển và duy trì các hệ thống backend mạnh mẽ, scalable',
    responsibilities: [
      'Thiết kế và phát triển RESTful APIs',
      'Tối ưu database và queries',
      'Đảm bảo security và performance',
      'Viết documentation và unit tests'
    ],
    requirements: [
      'Thành thạo Node.js hoặc Java/Spring Boot',
      'Kinh nghiệm với SQL và NoSQL databases',
      'Hiểu biết về microservices',
      'Kinh nghiệm với cloud platforms (AWS/Azure)'
    ],
    benefits: [
      'Lương cao + bonus',
      'Remote 100%',
      'Bảo hiểm cao cấp',
      'Công nghệ mới nhất'
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Hà Nội/Remote',
    type: 'Full-time',
    salary: '12-20 triệu',
    experience: '2+ năm',
    description: 'Thiết kế trải nghiệm người dùng xuất sắc cho web và mobile applications',
    responsibilities: [
      'Nghiên cứu và phân tích user behavior',
      'Thiết kế wireframes, mockups, prototypes',
      'Tạo design system và style guides',
      'Làm việc chặt chẽ với developers'
    ],
    requirements: [
      'Thành thạo Figma, Adobe XD',
      'Portfolio mạnh về UI/UX',
      'Hiểu biết về design principles',
      'Kỹ năng giao tiếp tốt'
    ],
    benefits: [
      'Môi trường sáng tạo',
      'Tools thiết kế đầy đủ',
      'Flexible working hours',
      'Team events thường xuyên'
    ]
  }
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [filterType, setFilterType] = useState<string>('all')
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    cvUrl: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const filteredJobs = filterType === 'all' 
    ? jobs 
    : jobs.filter(job => job.type.toLowerCase() === filterType.toLowerCase())

  const handleApplyClick = () => {
    setShowApplicationForm(true)
    setSubmitMessage(null)
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          position: selectedJob?.title || ''
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: data.message })
        setFormData({
          name: '',
          email: '',
          phone: '',
          experience: '',
          coverLetter: '',
          cvUrl: ''
        })
        setTimeout(() => {
          setShowApplicationForm(false)
          setSelectedJob(null)
        }, 3000)
      } else {
        setSubmitMessage({ type: 'error', text: data.error || 'Có lỗi xảy ra' })
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Không thể kết nối đến server. Vui lòng thử lại.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className={styles.careersPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Tham Gia Đội Ngũ Chuyên Gia</h1>
          <p className={styles.subtitle}>
            Cơ hội nghề nghiệp hấp dẫn trong lĩnh vực công nghệ và marketing
          </p>
          <p className={styles.description}>
            Chúng tôi đang tìm kiếm những tài năng xuất sắc để cùng xây dựng các sản phẩm công nghệ tiên tiến và chiến lược marketing đột phá.
          </p>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>20%</div>
            <div className={styles.statLabel}>Hoa hồng trung bình</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statLabel}>Cộng tác viên đang hoạt động</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Tỷ lệ hài lòng</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>7 ngày</div>
            <div className={styles.statLabel}>Chu kỳ thanh toán</div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.filterSection}>
        <div className={styles.filterButtons}>
          <button 
            className={`${styles.filterBtn} ${filterType === 'all' ? styles.active : ''}`}
            onClick={() => setFilterType('all')}
          >
            Tất cả
          </button>
          <button 
            className={`${styles.filterBtn} ${filterType === 'full-time' ? styles.active : ''}`}
            onClick={() => setFilterType('full-time')}
          >
            Full-time
          </button>
          <button 
            className={`${styles.filterBtn} ${filterType === 'contract' ? styles.active : ''}`}
            onClick={() => setFilterType('contract')}
          >
            Contract
          </button>
          <button 
            className={`${styles.filterBtn} ${filterType === 'partnership' ? styles.active : ''}`}
            onClick={() => setFilterType('partnership')}
          >
            Partnership
          </button>
          <button 
            className={`${styles.filterBtn} ${filterType === 'internship' ? styles.active : ''}`}
            onClick={() => setFilterType('internship')}
          >
            Internship
          </button>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className={styles.jobsSection}>
        <div className={styles.jobsGrid}>
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className={styles.jobCard}
              onClick={() => setSelectedJob(job)}
            >
              {job.badge && (
                <div className={styles.badge}>{job.badge}</div>
              )}
              
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <Briefcase size={32} />
                </div>
                <div>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <p className={styles.department}>{job.department}</p>
                </div>
              </div>

              <div className={styles.jobMeta}>
                <div className={styles.metaItem}>
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={16} />
                  <span>{job.type}</span>
                </div>
                <div className={styles.metaItem}>
                  <DollarSign size={16} />
                  <span>{job.salary}</span>
                </div>
              </div>

              <button className={styles.viewBtn}>
                Tìm hiểu thêm →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionTitle}>Lợi Ích Khi Trở Thành Cộng Tác Viên</h2>
        <p className={styles.sectionSubtitle}>Chúng tôi cam kết mang đến những lợi ích tốt nhất cho các cộng tác viên</p>
        
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <DollarSign size={32} />
            </div>
            <h3>Hoa Hồng Hấp Dẫn</h3>
            <p>Nhận hoa hồng 15-30% giá trị hợp đồng với khách hàng bản mở khách hàng ban giới thiệu. Thanh toán nhanh.</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <Target size={32} />
            </div>
            <h3>Thanh Toán Nhanh Chóng</h3>
            <p>Hoa hồng được thanh toán trong vòng 7 ngày sau khi khách hàng hoàn tất thanh toán. Căng tốc lương khách hàng bạn có thể.</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <Users size={32} />
            </div>
            <h3>Hỗ Trợ Chuyên Nghiệp</h3>
            <p>Được tập lại do đội ngũ marketing chuyên nghiệp, cung cấp tài liệu và công cụ marketing chất lượng cao.</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <TrendingUp size={32} />
            </div>
            <h3>Thu Nhập Không Giới Hạn</h3>
            <p>Không có khoảng cách trong về số lượng khách hàng bạn có thể giới thiệu. Càng giới thiệu nhiều, càng thu nhập cao hơn.</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <Award size={32} />
            </div>
            <h3>Đào Tạo Chuyên Sâu</h3>
            <p>Tham gia các khóa đào tạo về sản phẩm, kỹ năng bán hàng và tư vấn giải pháp công nghệ miễn phí.</p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <Award size={32} />
            </div>
            <h3>Chương Trình Thưởng</h3>
            <p>Nhiều chương trình khuyến khích hấp dẫn cho các cộng tác viên xuất sắc và doanh số cao trong tháng.</p>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className={styles.modal} onClick={() => setSelectedJob(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeBtn}
              onClick={() => setSelectedJob(null)}
            >
              <X size={24} />
            </button>

            <div className={styles.modalHeader}>
              {selectedJob.badge && (
                <div className={styles.modalBadge}>{selectedJob.badge}</div>
              )}
              <h2 className={styles.modalTitle}>{selectedJob.title}</h2>
              <p className={styles.modalDepartment}>{selectedJob.department}</p>
              
              <div className={styles.modalMeta}>
                <div className={styles.metaItem}>
                  <MapPin size={18} />
                  <span>{selectedJob.location}</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={18} />
                  <span>{selectedJob.type}</span>
                </div>
                <div className={styles.metaItem}>
                  <DollarSign size={18} />
                  <span>{selectedJob.salary}</span>
                </div>
                <div className={styles.metaItem}>
                  <Award size={18} />
                  <span>{selectedJob.experience}</span>
                </div>
              </div>
            </div>

            <div className={styles.modalBody}>
              <section className={styles.modalSection}>
                <h3>Mô tả công việc</h3>
                <p>{selectedJob.description}</p>
              </section>

              <section className={styles.modalSection}>
                <h3>Trách nhiệm</h3>
                <ul className={styles.modalList}>
                  {selectedJob.responsibilities.map((item, index) => (
                    <li key={index}>
                      <Check size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className={styles.modalSection}>
                <h3>Yêu cầu</h3>
                <ul className={styles.modalList}>
                  {selectedJob.requirements.map((item, index) => (
                    <li key={index}>
                      <Check size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className={styles.modalSection}>
                <h3>Quyền lợi</h3>
                <ul className={styles.modalList}>
                  {selectedJob.benefits.map((item, index) => (
                    <li key={index}>
                      <Check size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className={styles.modalFooter}>
              {!showApplicationForm ? (
                <button className={styles.applyBtn} onClick={handleApplyClick}>
                  Ứng tuyển ngay
                </button>
              ) : (
                <form onSubmit={handleSubmitApplication} className={styles.applicationForm}>
                  <h3 className={styles.formTitle}>📝 Điền thông tin ứng tuyển</h3>
                  
                  {submitMessage && (
                    <div className={`${styles.submitMessage} ${styles[submitMessage.type]}`}>
                      {submitMessage.text}
                    </div>
                  )}

                  <div className={styles.formGroup}>
                    <label htmlFor="name">
                      Họ và tên <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      placeholder="Nguyễn Văn A"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">
                        Email <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        placeholder="email@example.com"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">
                        Số điện thoại <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                        placeholder="0123456789"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="experience">
                      Kinh nghiệm làm việc
                    </label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleFormChange}
                      placeholder="VD: 3 năm kinh nghiệm Frontend Developer"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="cvUrl">
                      Link CV/Portfolio (Google Drive, Dropbox, v.v.)
                    </label>
                    <input
                      type="url"
                      id="cvUrl"
                      name="cvUrl"
                      value={formData.cvUrl}
                      onChange={handleFormChange}
                      placeholder="https://drive.google.com/..."
                      disabled={isSubmitting}
                    />
                    <small className={styles.helpText}>
                      Tải CV lên Google Drive hoặc Dropbox và chia sẻ link ở đây
                    </small>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="coverLetter">
                      Thư xin việc / Giới thiệu bản thân
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleFormChange}
                      rows={6}
                      placeholder="Chia sẻ về bản thân, kỹ năng và lý do bạn phù hợp với vị trí này..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button
                      type="button"
                      className={styles.cancelBtn}
                      onClick={() => setShowApplicationForm(false)}
                      disabled={isSubmitting}
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Đang gửi...' : '📨 Gửi hồ sơ'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
