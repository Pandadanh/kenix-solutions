import type { Metadata } from 'next'
import styles from './policy.module.css'

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Hành - Kenix Solutions',
  description: 'Chính sách bảo hành dịch vụ thiết kế website và các dịch vụ công nghệ của Kenix Solutions',
}

export default function WarrantyPolicyPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Chính Sách Bảo Hành</h1>
          <p className={styles.updated}>Cập nhật lần cuối: 29/11/2025</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.section}>
            <h2>1. Phạm Vi Bảo Hành</h2>
            <p>Kenix Solutions cam kết bảo hành miễn phí các lỗi kỹ thuật phát sinh trong quá trình sử dụng website/ứng dụng do chúng tôi phát triển, bao gồm:</p>
            <ul>
              <li>Lỗi hiển thị giao diện trên các trình duyệt phổ biến (Chrome, Firefox, Safari, Edge)</li>
              <li>Lỗi chức năng không hoạt động đúng như mô tả ban đầu</li>
              <li>Lỗi bảo mật do code của chúng tôi gây ra</li>
              <li>Lỗi responsive trên các thiết bị mobile, tablet</li>
              <li>Lỗi tương thích với hệ điều hành và phiên bản trình duyệt được cam kết</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>2. Thời Gian Bảo Hành</h2>
            <p><strong>Gói Cơ Bản:</strong> Bảo hành 3 tháng kể từ ngày bàn giao website</p>
            <p><strong>Gói Chuyên Nghiệp:</strong> Bảo hành 6 tháng kể từ ngày bàn giao website</p>
            <p><strong>Gói Thương Mại Điện Tử:</strong> Bảo hành 12 tháng kể từ ngày bàn giao website</p>
            <p className={styles.note}>
              <strong>Lưu ý:</strong> Thời gian bảo hành có thể được gia hạn bằng cách đăng ký gói bảo trì định kỳ.
            </p>
          </div>

          <div className={styles.section}>
            <h2>3. Điều Kiện Bảo Hành</h2>
            <p>Để được bảo hành miễn phí, website/ứng dụng cần đáp ứng các điều kiện sau:</p>
            <ul>
              <li>Khách hàng đã thanh toán đầy đủ chi phí theo hợp đồng</li>
              <li>Lỗi phát sinh thuộc trách nhiệm của Kenix Solutions</li>
              <li>Website/ứng dụng không bị thay đổi source code bởi bên thứ ba</li>
              <li>Hosting và domain còn hoạt động và không bị thay đổi cấu hình</li>
              <li>Khách hàng thông báo lỗi trong thời gian bảo hành</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>4. Những Trường Hợp Không Được Bảo Hành</h2>
            <p>Chính sách bảo hành không áp dụng cho các trường hợp sau:</p>
            <ul>
              <li>Lỗi do khách hàng hoặc bên thứ ba can thiệp, chỉnh sửa source code</li>
              <li>Lỗi do thay đổi môi trường hosting, server không tương thích</li>
              <li>Lỗi do virus, malware, hack từ bên ngoài (không do code của chúng tôi)</li>
              <li>Yêu cầu thay đổi, bổ sung tính năng mới nằm ngoài phạm vi dự án ban đầu</li>
              <li>Lỗi do thiên tai, sự cố ngoài tầm kiểm soát</li>
              <li>Website sử dụng plugin, theme của bên thứ ba gây xung đột</li>
              <li>Khách hàng chậm trễ thanh toán hoặc vi phạm hợp đồng</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>5. Quy Trình Yêu Cầu Bảo Hành</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div>
                  <h3>Gửi Yêu Cầu</h3>
                  <p>Khách hàng gửi yêu cầu bảo hành qua email, hotline hoặc form liên hệ, mô tả chi tiết lỗi và cung cấp ảnh/video minh họa nếu có</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div>
                  <h3>Kiểm Tra & Xác Nhận</h3>
                  <p>Đội ngũ kỹ thuật kiểm tra và xác nhận lỗi trong vòng 24 giờ làm việc, thông báo thời gian xử lý dự kiến</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div>
                  <h3>Khắc Phục Lỗi</h3>
                  <p>Tiến hành sửa lỗi và cập nhật lên website. Thời gian xử lý tùy mức độ nghiêm trọng: lỗi nhẹ 1-3 ngày, lỗi nghiêm trọng 3-7 ngày</p>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div>
                  <h3>Nghiệm Thu</h3>
                  <p>Thông báo khách hàng kiểm tra và xác nhận lỗi đã được khắc phục. Hỗ trợ thêm nếu vẫn còn vấn đề</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>6. Cam Kết Của Kenix Solutions</h2>
            <ul>
              <li>Phản hồi yêu cầu bảo hành trong vòng 24 giờ làm việc</li>
              <li>Khắc phục lỗi nhanh chóng, minh bạch tiến độ</li>
              <li>Không thu thêm chi phí cho các lỗi thuộc phạm vi bảo hành</li>
              <li>Hỗ trợ tận tình, giải thích chi tiết nguyên nhân và cách khắc phục</li>
              <li>Cung cấp tài liệu hướng dẫn sử dụng và bảo trì website</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>7. Dịch Vụ Hỗ Trợ Sau Bảo Hành</h2>
            <p>Sau khi hết thời gian bảo hành miễn phí, khách hàng có thể:</p>
            <ul>
              <li><strong>Đăng ký gói bảo trì:</strong> Các gói bảo trì định kỳ với mức giá ưu đãi</li>
              <li><strong>Hỗ trợ theo yêu cầu:</strong> Thanh toán phí hỗ trợ theo từng lần phát sinh</li>
              <li><strong>Nâng cấp dự án:</strong> Thêm tính năng mới, cải tiến giao diện với giá ưu đãi</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>8. Liên Hệ</h2>
            <p>Để được hỗ trợ bảo hành, vui lòng liên hệ:</p>
            <div className={styles.contact}>
              <p><strong>Hotline:</strong> <a href="tel:+84586997953">+84 586 997 953</a></p>
              <p><strong>Email:</strong> <a href="mailto:kenix.solutions@gmail.com">kenix.solutions@gmail.com</a></p>
              <p><strong>Địa chỉ:</strong> Tân Bình, TP. Hồ Chí Minh</p>
              <p><strong>Giờ làm việc:</strong> 8:00 - 18:00, Thứ 2 - Thứ 7</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
