import type { Metadata } from 'next'
import styles from '../warranty-policy-page/policy.module.css'

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Mật - Kenix Solutions',
  description: 'Chính sách bảo mật thông tin khách hàng của Kenix Solutions',
}

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Chính Sách Bảo Mật</h1>
          <p className={styles.updated}>Cập nhật lần cuối: 29/11/2025</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.section}>
            <h2>1. Giới Thiệu</h2>
            <p>Kenix Solutions cam kết bảo vệ quyền riêng tư và bảo mật thông tin cá nhân của khách hàng. Chính sách này mô tả cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin của bạn khi sử dụng dịch vụ của chúng tôi.</p>
            <p>Bằng việc sử dụng dịch vụ của Kenix Solutions, bạn đồng ý với các điều khoản được mô tả trong chính sách này.</p>
          </div>

          <div className={styles.section}>
            <h2>2. Thông Tin Chúng Tôi Thu Thập</h2>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginTop: '24px', marginBottom: '16px' }}>2.1. Thông tin cá nhân:</h3>
            <ul>
              <li>Họ tên, địa chỉ email, số điện thoại</li>
              <li>Tên công ty, địa chỉ doanh nghiệp, mã số thuế</li>
              <li>Thông tin thanh toán (số tài khoản, thông tin thẻ)</li>
              <li>Nội dung liên hệ, yêu cầu dịch vụ</li>
            </ul>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginTop: '24px', marginBottom: '16px' }}>2.2. Thông tin tự động:</h3>
            <ul>
              <li>Địa chỉ IP, loại trình duyệt, thiết bị</li>
              <li>Thời gian truy cập, trang web truy cập</li>
              <li>Cookies và công nghệ theo dõi tương tự</li>
              <li>Dữ liệu Google Analytics (lượng truy cập, hành vi người dùng)</li>
            </ul>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginTop: '24px', marginBottom: '16px' }}>2.3. Thông tin dự án:</h3>
            <ul>
              <li>Yêu cầu thiết kế, nội dung website</li>
              <li>Hình ảnh, logo, tài liệu liên quan</li>
              <li>Thông tin đăng nhập hosting, domain</li>
              <li>Source code và dữ liệu dự án</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>3. Mục Đích Sử Dụng Thông Tin</h2>
            <p>Chúng tôi sử dụng thông tin của bạn cho các mục đích sau:</p>
            <ul>
              <li><strong>Cung cấp dịch vụ:</strong> Thực hiện dự án, liên hệ trao đổi, bàn giao sản phẩm</li>
              <li><strong>Thanh toán:</strong> Xử lý thanh toán, xuất hóa đơn, lưu trữ chứng từ</li>
              <li><strong>Hỗ trợ khách hàng:</strong> Giải đáp thắc mắc, xử lý khiếu nại, bảo hành</li>
              <li><strong>Cải thiện dịch vụ:</strong> Phân tích nhu cầu, tối ưu trải nghiệm người dùng</li>
              <li><strong>Marketing:</strong> Gửi email thông báo, khuyến mãi (chỉ khi có sự đồng ý)</li>
              <li><strong>Bảo mật:</strong> Phát hiện gian lận, bảo vệ hệ thống</li>
              <li><strong>Tuân thủ pháp luật:</strong> Đáp ứng yêu cầu của cơ quan nhà nước</li>
            </ul>
            <p className={styles.note}>
              <strong>Lưu ý:</strong> Chúng tôi không bán hoặc cho thuê thông tin cá nhân của bạn cho bên thứ ba.
            </p>
          </div>

          <div className={styles.section}>
            <h2>4. Chia Sẻ Thông Tin</h2>
            <p>Kenix Solutions chỉ chia sẻ thông tin của bạn trong các trường hợp sau:</p>
            <ul>
              <li><strong>Đối tác dịch vụ:</strong> Hosting provider, payment gateway, email marketing (với hợp đồng bảo mật)</li>
              <li><strong>Yêu cầu pháp luật:</strong> Khi có lệnh của tòa án, cơ quan chức năng</li>
              <li><strong>Bảo vệ quyền lợi:</strong> Ngăn chặn gian lận, vi phạm điều khoản sử dụng</li>
              <li><strong>Sáp nhập/mua lại:</strong> Trong trường hợp Kenix Solutions sáp nhập với công ty khác</li>
              <li><strong>Với sự đồng ý:</strong> Khi bạn cho phép rõ ràng</li>
            </ul>
            <p>Tất cả các bên thứ ba đều phải tuân thủ nghiêm ngặt các tiêu chuẩn bảo mật thông tin.</p>
          </div>

          <div className={styles.section}>
            <h2>5. Bảo Mật Thông Tin</h2>
            <p>Chúng tôi áp dụng các biện pháp bảo mật sau để bảo vệ thông tin của bạn:</p>
            <ul>
              <li><strong>Mã hóa SSL/TLS:</strong> Tất cả dữ liệu truyền tải được mã hóa</li>
              <li><strong>Tường lửa:</strong> Bảo vệ server khỏi tấn công từ bên ngoài</li>
              <li><strong>Kiểm soát truy cập:</strong> Chỉ nhân viên được ủy quyền mới có quyền truy cập</li>
              <li><strong>Sao lưu định kỳ:</strong> Backup dữ liệu hàng ngày/tuần</li>
              <li><strong>Cập nhật bảo mật:</strong> Thường xuyên cập nhật hệ thống</li>
              <li><strong>Đào tạo nhân viên:</strong> Nâng cao nhận thức về bảo mật</li>
            </ul>
            <p className={styles.note}>
              <strong>Lưu ý:</strong> Không có hệ thống nào an toàn 100%. Chúng tôi khuyến khích bạn sử dụng mật khẩu mạnh và không chia sẻ thông tin đăng nhập.
            </p>
          </div>

          <div className={styles.section}>
            <h2>6. Lưu Trữ Thông Tin</h2>
            <p>Thông tin của bạn được lưu trữ:</p>
            <ul>
              <li><strong>Thời gian:</strong> Trong suốt thời gian hợp đồng và 5 năm sau đó (theo quy định pháp luật)</li>
              <li><strong>Địa điểm:</strong> Server tại Việt Nam và các nước có luật bảo mật tương đương</li>
              <li><strong>Xóa dữ liệu:</strong> Bạn có thể yêu cầu xóa thông tin bất cứ lúc nào (trừ dữ liệu bắt buộc lưu theo pháp luật)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>7. Cookies và Công Nghệ Theo Dõi</h2>
            <p>Chúng tôi sử dụng cookies và công nghệ tương tự để:</p>
            <ul>
              <li>Ghi nhớ tùy chọn của bạn (ngôn ngữ, đăng nhập)</li>
              <li>Phân tích lượng truy cập, hành vi người dùng</li>
              <li>Cá nhân hóa nội dung, quảng cáo</li>
              <li>Theo dõi hiệu quả chiến dịch marketing</li>
            </ul>
            <p>Bạn có thể tắt cookies trong cài đặt trình duyệt, nhưng một số tính năng có thể không hoạt động đầy đủ.</p>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginTop: '24px', marginBottom: '16px' }}>Loại cookies chúng tôi sử dụng:</h3>
            <ul>
              <li><strong>Cookies cần thiết:</strong> Giúp website hoạt động</li>
              <li><strong>Cookies phân tích:</strong> Google Analytics, Facebook Pixel</li>
              <li><strong>Cookies marketing:</strong> Quảng cáo, remarketing</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>8. Quyền Của Bạn</h2>
            <p>Bạn có các quyền sau đối với thông tin cá nhân:</p>
            <ul>
              <li><strong>Quyền truy cập:</strong> Xem thông tin chúng tôi đang lưu trữ</li>
              <li><strong>Quyền chỉnh sửa:</strong> Yêu cầu cập nhật thông tin sai lệch</li>
              <li><strong>Quyền xóa:</strong> Yêu cầu xóa thông tin cá nhân</li>
              <li><strong>Quyền từ chối:</strong> Từ chối nhận email marketing</li>
              <li><strong>Quyền khiếu nại:</strong> Khiếu nại với cơ quan quản lý nếu có vi phạm</li>
              <li><strong>Quyền rút lại:</strong> Rút lại sự đồng ý bất cứ lúc nào</li>
            </ul>
            <p>Để thực hiện các quyền này, vui lòng liên hệ email: <a href="mailto:kenix.solutions@gmail.com">kenix.solutions@gmail.com</a></p>
          </div>

          <div className={styles.section}>
            <h2>9. Bảo Vệ Trẻ Em</h2>
            <p>Dịch vụ của chúng tôi không dành cho trẻ em dưới 16 tuổi. Chúng tôi không cố ý thu thập thông tin từ trẻ em. Nếu phát hiện, chúng tôi sẽ xóa ngay lập tức.</p>
          </div>

          <div className={styles.section}>
            <h2>10. Liên Kết Bên Thứ Ba</h2>
            <p>Website của chúng tôi có thể chứa liên kết đến các trang web khác. Chúng tôi không chịu trách nhiệm về chính sách bảo mật của các trang web đó. Bạn nên đọc kỹ chính sách bảo mật của từng trang web bạn truy cập.</p>
          </div>

          <div className={styles.section}>
            <h2>11. Thay Đổi Chính Sách</h2>
            <p>Kenix Solutions có quyền cập nhật chính sách này bất cứ lúc nào. Thay đổi quan trọng sẽ được thông báo qua email hoặc thông báo trên website. Ngày cập nhật được ghi rõ ở đầu trang.</p>
            <p>Việc bạn tiếp tục sử dụng dịch vụ sau khi thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.</p>
          </div>

          <div className={styles.section}>
            <h2>12. Liên Hệ</h2>
            <p>Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về Chính sách bảo mật này, vui lòng liên hệ:</p>
            <div className={styles.contact}>
              <p><strong>Công ty:</strong> Kenix Solutions</p>
              <p><strong>Địa chỉ:</strong> Tân Bình, TP. Hồ Chí Minh</p>
              <p><strong>Hotline:</strong> <a href="tel:+84586997953">+84 586 997 953</a></p>
              <p><strong>Email:</strong> <a href="mailto:kenix.solutions@gmail.com">kenix.solutions@gmail.com</a></p>
              <p><strong>Giờ làm việc:</strong> 8:00 - 18:00, Thứ 2 - Thứ 7</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
