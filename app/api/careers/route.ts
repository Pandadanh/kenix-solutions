import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, position, experience, coverLetter, cvUrl } = body

    // Validation
    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin bắt buộc' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email không hợp lệ' },
        { status: 400 }
      )
    }

    // Phone validation
    const phoneRegex = /^[0-9+\-\s()]+$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Số điện thoại không hợp lệ' },
        { status: 400 }
      )
    }

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to admin (notification about new applicant)
    const adminMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USERNAME,
      subject: `Hồ sơ ứng tuyển mới: ${position} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; background-color: #f5f5f5; }
            .container { max-width: 700px; margin: 40px auto; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: #1e3c72; color: white; padding: 32px 40px; border-bottom: 3px solid #FF6B35; }
            .header h1 { margin: 0 0 8px 0; font-size: 22px; font-weight: 600; letter-spacing: -0.3px; }
            .header p { margin: 0; font-size: 14px; opacity: 0.9; font-weight: 400; }
            .position-badge { display: inline-block; background: #FF6B35; color: white; padding: 8px 16px; border-radius: 4px; font-size: 13px; font-weight: 600; margin-top: 12px; }
            .content { padding: 40px; }
            .section { margin-bottom: 32px; }
            .section-title { font-size: 13px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #FF6B35; }
            .info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
            .info-item { background: #f8f8f8; padding: 16px; border-radius: 4px; border-left: 3px solid #FF6B35; }
            .info-label { font-size: 11px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
            .info-value { color: #1a1a1a; font-size: 15px; font-weight: 500; }
            .cover-letter { background: #f8f8f8; border: 1px solid #e5e5e5; border-radius: 4px; padding: 20px; margin-top: 12px; }
            .cover-letter-text { color: #333; line-height: 1.7; white-space: pre-wrap; font-size: 14px; }
            .cv-link { display: inline-block; background: #FF6B35; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 600; margin-top: 12px; font-size: 14px; }
            .footer { text-align: center; padding: 24px 40px; background: #2c3e50; color: #ecf0f1; }
            .footer p { margin: 4px 0; font-size: 13px; }
            .timestamp { background: #f8f8f8; padding: 16px 20px; border-radius: 4px; text-align: center; color: #666; font-size: 13px; margin-top: 24px; }
            @media (max-width: 600px) {
              .info-grid { grid-template-columns: 1fr; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Hồ sơ ứng tuyển mới</h1>
              <p>Hệ thống tuyển dụng Kenix Solutions</p>
              <div class="position-badge">${position}</div>
            </div>
            
            <div class="content">
              <div class="section">
                <div class="section-title">Thông tin ứng viên</div>
                <div class="info-grid">
                  <div class="info-item">
                    <div class="info-label">Họ và tên</div>
                    <div class="info-value">${name}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Email</div>
                    <div class="info-value">${email}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Số điện thoại</div>
                    <div class="info-value">${phone}</div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Kinh nghiệm</div>
                    <div class="info-value">${experience || 'Chưa cung cấp'}</div>
                  </div>
                </div>
              </div>

              ${coverLetter ? `
              <div class="section">
                <div class="section-title">Thư xin việc</div>
                <div class="cover-letter">
                  <div class="cover-letter-text">${coverLetter.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              ` : ''}

              ${cvUrl ? `
              <div class="section">
                <div class="section-title">Hồ sơ đính kèm</div>
                <a href="${cvUrl}" class="cv-link" target="_blank">Xem CV của ứng viên</a>
              </div>
              ` : ''}

              <div class="timestamp">
                Thời gian nộp: ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}
              </div>
            </div>

            <div class="footer">
              <p><strong>Kenix Solutions</strong></p>
              <p>© ${new Date().getFullYear()} Kenix Solutions. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    }

    // Email to candidate (confirmation)
    const candidateMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: `Xác nhận đã nhận hồ sơ ứng tuyển - ${position}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
              line-height: 1.6; 
              color: #1a1a1a; 
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container { 
              max-width: 600px; 
              margin: 40px auto; 
              background: white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            .header { 
              background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); 
              color: white; 
              padding: 40px; 
              text-align: center; 
            }
            .header h1 {
              margin: 0 0 8px 0;
              font-size: 24px;
              font-weight: 600;
              letter-spacing: -0.5px;
            }
            .header p {
              margin: 0;
              font-size: 14px;
              opacity: 0.95;
              font-weight: 400;
            }
            .content { 
              padding: 40px;
            }
            .greeting {
              font-size: 18px;
              font-weight: 600;
              color: #1a1a1a;
              margin-bottom: 24px;
            }
            .message-box {
              background: #e8f5e9;
              border-left: 3px solid #4caf50;
              padding: 24px;
              margin: 24px 0;
              line-height: 1.7;
            }
            .message-box p {
              margin: 0;
              color: #1b5e20;
            }
            .info-box {
              background: #f8f8f8;
              padding: 24px;
              margin: 24px 0;
              border-radius: 4px;
            }
            .info-box h3 {
              margin: 0 0 16px 0;
              font-size: 14px;
              font-weight: 600;
              color: #666;
              text-transform: uppercase;
              letter-spacing: 0.8px;
            }
            .info-item {
              padding: 12px 0;
              border-bottom: 1px solid #e5e5e5;
              display: flex;
              justify-content: space-between;
            }
            .info-item:last-child {
              border-bottom: none;
            }
            .info-label {
              font-weight: 500;
              color: #666;
              font-size: 14px;
            }
            .info-value {
              color: #1a1a1a;
              font-weight: 400;
              font-size: 14px;
            }
            .timeline {
              margin: 32px 0;
              padding: 24px;
              background: #f8f8f8;
              border-radius: 4px;
            }
            .timeline h3 {
              margin: 0 0 20px 0;
              font-size: 14px;
              font-weight: 600;
              color: #666;
              text-transform: uppercase;
              letter-spacing: 0.8px;
            }
            .timeline-item {
              display: flex;
              gap: 16px;
              margin-bottom: 16px;
              align-items: flex-start;
            }
            .timeline-item:last-child {
              margin-bottom: 0;
            }
            .timeline-number {
              width: 32px;
              height: 32px;
              background: #FF6B35;
              color: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 600;
              flex-shrink: 0;
              font-size: 14px;
            }
            .timeline-content {
              flex: 1;
              padding-top: 4px;
            }
            .timeline-title {
              font-weight: 600;
              color: #1a1a1a;
              margin-bottom: 4px;
              font-size: 14px;
            }
            .timeline-desc {
              color: #666;
              font-size: 13px;
              line-height: 1.5;
            }
            .contact-section {
              background: #f8f8f8;
              padding: 24px;
              margin: 24px 0;
              text-align: center;
              border-radius: 4px;
            }
            .contact-section h4 {
              margin: 0 0 16px 0;
              font-size: 14px;
              font-weight: 600;
              color: #1a1a1a;
            }
            .contact-section p {
              margin: 8px 0;
              font-size: 14px;
              color: #333;
            }
            .contact-section a {
              color: #FF6B35;
              text-decoration: none;
              font-weight: 500;
            }
            .note-box {
              background: #fff8e1;
              border-left: 3px solid #ffc107;
              padding: 20px;
              margin: 24px 0;
            }
            .note-box h4 {
              margin: 0 0 12px 0;
              font-size: 14px;
              font-weight: 600;
              color: #f57c00;
            }
            .note-box ul {
              margin: 0;
              padding-left: 20px;
              color: #5d4037;
            }
            .note-box li {
              margin: 6px 0;
              font-size: 13px;
              line-height: 1.5;
            }
            .divider {
              height: 1px;
              background: #e5e5e5;
              margin: 32px 0;
            }
            .footer { 
              text-align: center; 
              padding: 32px;
              background: #2c3e50;
              color: #ecf0f1;
            }
            .footer p {
              margin: 6px 0;
              font-size: 13px;
              line-height: 1.6;
            }
            .footer-company {
              font-weight: 600;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Xác nhận nhận hồ sơ</h1>
              <p>Kenix Solutions - Tuyển dụng</p>
            </div>
            
            <div class="content">
              <div class="greeting">Kính chào ${name},</div>
              
              <div class="message-box">
                <p>
                  Cảm ơn bạn đã quan tâm đến vị trí <strong>${position}</strong> tại Kenix Solutions. 
                  Hồ sơ của bạn đã được tiếp nhận thành công. Chúng tôi sẽ xem xét và liên hệ lại 
                  với bạn trong vòng <strong>3-5 ngày làm việc</strong>.
                </p>
              </div>

              <div class="info-box">
                <h3>Thông tin đã nhận</h3>
                <div class="info-item">
                  <span class="info-label">Vị trí ứng tuyển</span>
                  <span class="info-value">${position}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Họ và tên</span>
                  <span class="info-value">${name}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Email</span>
                  <span class="info-value">${email}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Số điện thoại</span>
                  <span class="info-value">${phone}</span>
                </div>
                ${experience ? `
                <div class="info-item">
                  <span class="info-label">Kinh nghiệm</span>
                  <span class="info-value">${experience}</span>
                </div>
                ` : ''}
              </div>

              <div class="timeline">
                <h3>Quy trình tuyển dụng</h3>
                <div class="timeline-item">
                  <div class="timeline-number">1</div>
                  <div class="timeline-content">
                    <div class="timeline-title">Xét duyệt hồ sơ</div>
                    <div class="timeline-desc">Đánh giá hồ sơ và kinh nghiệm của ứng viên (3-5 ngày)</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-number">2</div>
                  <div class="timeline-content">
                    <div class="timeline-title">Phỏng vấn sơ bộ</div>
                    <div class="timeline-desc">Trao đổi trực tuyến hoặc điện thoại về vị trí và kỳ vọng</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-number">3</div>
                  <div class="timeline-content">
                    <div class="timeline-title">Phỏng vấn chuyên sâu</div>
                    <div class="timeline-desc">Phỏng vấn với hiring manager và đánh giá kỹ năng</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-number">4</div>
                  <div class="timeline-content">
                    <div class="timeline-title">Thông báo kết quả</div>
                    <div class="timeline-desc">Gửi thư mời làm việc hoặc phản hồi kết quả</div>
                  </div>
                </div>
              </div>

              <div class="note-box">
                <h4>Lưu ý quan trọng</h4>
                <ul>
                  <li>Kiểm tra email thường xuyên, bao gồm cả hộp thư spam</li>
                  <li>Đảm bảo số điện thoại có thể liên lạc được trong giờ hành chính</li>
                  <li>Chuẩn bị sẵn sàng cho cuộc phỏng vấn trực tuyến hoặc trực tiếp</li>
                  <li>Tìm hiểu thêm về Kenix Solutions trước khi phỏng vấn</li>
                </ul>
              </div>

              <div class="divider"></div>

              <div class="contact-section">
                <h4>Thông tin liên hệ</h4>
                <p><strong>Email:</strong> <a href="mailto:kenix.solutions@gmail.com">kenix.solutions@gmail.com</a></p>
                <p><strong>Hotline:</strong> <a href="tel:+84586997953">+84 586 997 953</a></p>
                <p><strong>Website:</strong> <a href="https://kenixsolutions.com" target="_blank">kenixsolutions.com</a></p>
              </div>
            </div>

            <div class="footer">
              <p class="footer-company">Kenix Solutions</p>
              <p>Chuyên gia giải pháp số - Đồng hành cùng doanh nghiệp</p>
              <p style="margin-top: 16px; opacity: 0.8;">
                © ${new Date().getFullYear()} Kenix Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(candidateMailOptions)
    ])

    console.log('Job application submitted successfully:', {
      name,
      email,
      position,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { 
        message: 'Hồ sơ của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại sớm.',
        success: true
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Job application error:', error)
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi gửi hồ sơ. Vui lòng thử lại sau.' },
      { status: 500 }
    )
  }
}
