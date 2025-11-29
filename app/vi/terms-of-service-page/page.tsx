import type { Metadata } from 'next'
import styles from '../warranty-policy-page/policy.module.css'

export const metadata: Metadata = {
  title: 'Điều Khoản Sử Dụng - Kenix Solutions',
  description: 'Điều khoản và điều kiện sử dụng dịch vụ của Kenix Solutions',
}

export default function TermsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Điều Khoản Sử Dụng</h1>
          <p className={styles.updated}>Cập nhật lần cuối: 29/11/2025</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.section}>
            <h2>1. Chấp Nhận Điều Khoản</h2>
            <p>Bằng việc sử dụng dịch vụ của Kenix Solutions, bạn đồng ý tuân thủ và chịu sự ràng buộc bởi các điều khoản và điều kiện sau đây. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng không sử dụng dịch vụ của chúng tôi.</p>
          </div>

          <div className={styles.section}>
            <h2>2. Định Nghĩa</h2>
            <ul>
              <li><strong>&ldquo;Chúng tôi&rdquo;, &ldquo;Kenix Solutions&rdquo;:</strong> Là công ty cung cấp dịch vụ thiết kế website, SEO, Digital Marketing và các dịch vụ công nghệ liên quan</li>
              <li><strong>&ldquo;Khách hàng&rdquo;, &ldquo;Bạn&rdquo;:</strong> Là cá nhân hoặc tổ chức sử dụng dịch vụ của Kenix Solutions</li>
              <li><strong>&ldquo;Dịch vụ&rdquo;:</strong> Bao gồm thiết kế website, SEO, Google Ads, bảo trì website, UI/UX design và các dịch vụ liên quan</li>
              <li><strong>&ldquo;Sản phẩm&rdquo;:</strong> Là website, ứng dụng hoặc các sản phẩm công nghệ được phát triển bởi Kenix Solutions</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>3. Phạm Vi Dịch Vụ</h2>
            <p>Kenix Solutions cung cấp các dịch vụ sau:</p>
            <ul>
              <li>Thiết kế và phát triển website theo yêu cầu</li>
              <li>Dịch vụ SEO và tối ưu website lên top Google</li>
              <li>Quản lý và triển khai quảng cáo Google Ads, Facebook Ads</li>
              <li>Thiết kế UI/UX và bộ nhận diện thương hiệu</li>
              <li>Bảo trì, nâng cấp và hỗ trợ kỹ thuật website</li>
              <li>Tư vấn Digital Marketing và chiến lược online</li>
            </ul>
            <p className={styles.note}>
              <strong>Lưu ý:</strong> Phạm vi cụ thể của từng dự án sẽ được thỏa thuận và ghi rõ trong hợp đồng ký kết.
            </p>
          </div>

          <div className={styles.section}>
            <h2>4. Quyền và Trách Nhiệm Của Kenix Solutions</h2>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginTop: '24px', marginBottom: '16px' }}>Quyền:</h3>
            <ul>
              <li>Từ chối hoặc hủy bỏ dự án nếu phát hiện khách hàng cung cấp thông tin sai lệch hoặc vi phạm pháp luật</li>
              <li>Thay đổi giá dịch vụ theo thông báo trước ít nhất 30 ngày</li>
              <li>Sử dụng dự án đã hoàn thành làm portfolio (trừ khi có thỏa thuận bảo mật riêng)</li>
              <li>Tạm dừng dịch vụ nếu khách hàng chậm thanh toán quá 15 ngày</li>
            </ul>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginTop: '24px', marginBottom: '16px' }}>Trách nhiệm:</h3>
            <ul>
              <li>Thực hiện dự án đúng phạm vi và thời gian đã thỏa thuận</li>
              <li>Đảm bảo chất lượng sản phẩm theo tiêu chuẩn đã cam kết</li>
              <li>Bảo mật thông tin khách hàng và dự án</li>
              <li>Hỗ trợ kỹ thuật trong thời gian bảo hành</li>
              <li>Thông báo kịp thời nếu có sự thay đổi về tiến độ hoặc vấn đề phát sinh</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>5. Quyền và Trách Nhiệm Của Khách Hàng</h2>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginTop: '24px', marginBottom: '16px' }}>Quyền:</h3>
            <ul>
              <li>Được tư vấn miễn phí trước khi ký hợp đồng</li>
              <li>Theo dõi tiến độ dự án và yêu cầu báo cáo định kỳ</li>
              <li>Yêu cầu chỉnh sửa trong phạm vi đã thỏa thuận</li>
              <li>Sở hữu hoàn toàn sản phẩm sau khi thanh toán đầy đủ</li>
              <li>Được bảo hành theo chính sách đã cam kết</li>
            </ul>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginTop: '24px', marginBottom: '16px' }}>Trách nhiệm:</h3>
            <ul>
              <li>Cung cấp thông tin chính xác, đầy đủ và kịp thời</li>
              <li>Thanh toán đúng hạn theo hợp đồng</li>
              <li>Phản hồi yêu cầu xác nhận, duyệt mẫu trong thời gian hợp lý (không quá 7 ngày)</li>
              <li>Không sử dụng dịch vụ cho mục đích vi phạm pháp luật</li>
              <li>Tôn trọng quyền sở hữu trí tuệ của Kenix Solutions</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>6. Thanh Toán và Hoàn Tiền</h2>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginTop: '24px', marginBottom: '16px' }}>Phương thức thanh toán:</h3>
            <ul>
              <li>Chuyển khoản ngân hàng</li>
              <li>Ví điện tử (Momo, VNPay, ZaloPay)</li>
              <li>Tiền mặt (tại văn phòng)</li>
            </ul>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginTop: '24px', marginBottom: '16px' }}>Lịch thanh toán:</h3>
            <ul>
              <li>Đặt cọc: 40-50% sau khi ký hợp đồng</li>
              <li>Giữa dự án: 30-40% sau khi hoàn thành design</li>
              <li>Nghiệm thu: 20-30% sau khi bàn giao hoàn thiện</li>
            </ul>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginTop: '24px', marginBottom: '16px' }}>Chính sách hoàn tiền:</h3>
            <ul>
              <li>Hoàn 100% nếu hủy trước khi bắt đầu dự án</li>
              <li>Hoàn 50% nếu hủy sau khi bắt đầu nhưng trước khi hoàn thành design</li>
              <li>Không hoàn tiền sau khi bắt đầu giai đoạn code</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>7. Quyền Sở Hữu Trí Tuệ</h2>
            <ul>
              <li>Kenix Solutions giữ quyền sở hữu trí tuệ đối với code, design cho đến khi khách hàng thanh toán đầy đủ</li>
              <li>Sau khi thanh toán, khách hàng sở hữu hoàn toàn sản phẩm (source code, design files)</li>
              <li>Kenix Solutions được phép sử dụng dự án làm portfolio trừ khi có thỏa thuận bảo mật</li>
              <li>Khách hàng không được bán lại, phân phối source code cho bên thứ ba dưới mọi hình thức</li>
              <li>Framework, thư viện mã nguồn mở vẫn thuộc quyền sở hữu của tác giả gốc</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>8. Giới Hạn Trách Nhiệm</h2>
            <p>Kenix Solutions không chịu trách nhiệm cho:</p>
            <ul>
              <li>Mất mát dữ liệu do lỗi hosting, server của bên thứ ba</li>
              <li>Thiệt hại từ hành vi hack, virus từ bên ngoài (không do lỗi code)</li>
              <li>Sự cố do khách hàng hoặc bên thứ ba can thiệp vào hệ thống</li>
              <li>Thay đổi chính sách, thuật toán của Google, Facebook, các nền tảng khác</li>
              <li>Thiệt hại gián tiếp, mất doanh thu, mất uy tín thương hiệu</li>
            </ul>
            <p className={styles.note}>
              <strong>Lưu ý:</strong> Tổng trách nhiệm bồi thường của Kenix Solutions không vượt quá giá trị hợp đồng.
            </p>
          </div>

          <div className={styles.section}>
            <h2>9. Bảo Mật Thông Tin</h2>
            <p>Kenix Solutions cam kết:</p>
            <ul>
              <li>Bảo mật tuyệt đối thông tin dự án, dữ liệu khách hàng</li>
              <li>Không chia sẻ thông tin cho bên thứ ba trừ khi có yêu cầu pháp luật</li>
              <li>Sử dụng thông tin khách hàng chỉ cho mục đích thực hiện dự án</li>
              <li>Xóa dữ liệu trên server làm việc sau khi bàn giao</li>
              <li>Ký thỏa thuận bảo mật riêng nếu khách hàng yêu cầu</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2>10. Chấm Dứt Hợp Đồng</h2>
            <p>Hợp đồng có thể chấm dứt khi:</p>
            <ul>
              <li>Hai bên thỏa thuận chấm dứt bằng văn bản</li>
              <li>Một bên vi phạm nghiêm trọng điều khoản hợp đồng</li>
              <li>Khách hàng chậm thanh toán quá 30 ngày không lý do</li>
              <li>Có sự kiện bất khả kháng kéo dài quá 60 ngày</li>
            </ul>
            <p>Khi chấm dứt, hai bên thanh lý công việc và tài chính theo thỏa thuận.</p>
          </div>

          <div className={styles.section}>
            <h2>11. Thay Đổi Điều Khoản</h2>
            <p>Kenix Solutions có quyền thay đổi các điều khoản này bất cứ lúc nào. Thay đổi sẽ có hiệu lực sau 30 ngày kể từ khi thông báo trên website. Việc bạn tiếp tục sử dụng dịch vụ sau khi thay đổi có hiệu lực đồng nghĩa với việc bạn chấp nhận các điều khoản mới.</p>
          </div>

          <div className={styles.section}>
            <h2>12. Liên Hệ</h2>
            <p>Nếu bạn có bất kỳ câu hỏi nào về Điều khoản sử dụng này, vui lòng liên hệ:</p>
            <div className={styles.contact}>
              <p><strong>Công ty:</strong> Kenix Solutions</p>
              <p><strong>Địa chỉ:</strong> Tân Bình, TP. Hồ Chí Minh</p>
              <p><strong>Hotline:</strong> <a href="tel:+84586997953">+84 586 997 953</a></p>
              <p><strong>Email:</strong> <a href="mailto:kenix.solutions@gmail.com">kenix.solutions@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
