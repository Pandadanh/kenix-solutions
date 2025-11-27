import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Vui lòng điền đầy đủ thông tin' },
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

    // Phone validation (basic)
    const phoneRegex = /^[0-9+\-\s()]+$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Số điện thoại không hợp lệ' },
        { status: 400 }
      )
    }

    // Configure nodemailer with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to admin (notification)
    const adminMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USERNAME,
      subject: `Yêu cầu liên hệ mới từ ${name} - Kenix Solutions`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 40px auto; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: #2c3e50; color: white; padding: 32px 40px; border-bottom: 3px solid #FF6B35; }
            .header h1 { margin: 0 0 8px 0; font-size: 22px; font-weight: 600; letter-spacing: -0.3px; }
            .header p { margin: 0; font-size: 14px; opacity: 0.9; font-weight: 400; }
            .content { padding: 40px; }
            .info-section { margin-bottom: 24px; }
            .info-row { padding: 16px 0; border-bottom: 1px solid #e5e5e5; }
            .info-row:last-child { border-bottom: none; }
            .label { font-size: 11px; font-weight: 600; color: #666; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 6px; display: block; }
            .value { font-size: 15px; color: #1a1a1a; font-weight: 400; line-height: 1.6; }
            .message-content { background: #f8f8f8; padding: 20px; border-radius: 4px; margin-top: 8px; border-left: 3px solid #FF6B35; }
            .footer { background: #f8f8f8; padding: 24px 40px; text-align: center; border-top: 1px solid #e5e5e5; }
            .footer p { margin: 0; font-size: 12px; color: #666; line-height: 1.6; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Yêu cầu liên hệ mới</h1>
              <p>Kenix Solutions</p>
            </div>
            <div class="content">
              <div class="info-section">
                <div class="info-row">
                  <span class="label">Họ và tên</span>
                  <div class="value">${name}</div>
                </div>
                <div class="info-row">
                  <span class="label">Địa chỉ email</span>
                  <div class="value">${email}</div>
                </div>
                <div class="info-row">
                  <span class="label">Số điện thoại</span>
                  <div class="value">${phone}</div>
                </div>
                ${message ? `
                <div class="info-row">
                  <span class="label">Nội dung tin nhắn</span>
                  <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
                </div>
                ` : ''}
                <div class="info-row">
                  <span class="label">Thời gian gửi</span>
                  <div class="value">${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}</div>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Email tự động từ hệ thống Kenix Solutions<br>Vui lòng không trả lời trực tiếp email này</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    }

    // Email to customer (confirmation)
    const customerMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: `Xác nhận đã nhận yêu cầu liên hệ - Kenix Solutions`,
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
              background: #f8f8f8;
              border-left: 3px solid #FF6B35;
              padding: 24px;
              margin: 24px 0;
              line-height: 1.7;
            }
            .message-box p {
              margin: 0;
              color: #333;
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
              <h1>Kenix Solutions</h1>
              <p>Giải pháp công nghệ chuyên nghiệp</p>
            </div>
            
            <div class="content">
              <div class="greeting">Kính chào ${name},</div>
              
              <div class="message-box">
                <p>
                  Cảm ơn bạn đã liên hệ với Kenix Solutions. Chúng tôi đã nhận được yêu cầu của bạn 
                  và sẽ phản hồi trong thời gian sớm nhất. Đội ngũ tư vấn sẽ liên hệ lại với bạn 
                  trong vòng <strong>24 giờ làm việc</strong>.
                </p>
              </div>

              <div class="info-box">
                <h3>Thông tin đã nhận</h3>
                <div class="info-item">
                  <span class="info-label">Họ và tên: </span>
                  <span class="info-value">${name}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Email</span>
                  <span class="info-value">${email}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Số điện thoại: </span>
                  <span class="info-value">${phone}</span>
                </div>
                ${message ? `
                <div class="info-item" style="display: block; padding-top: 16px;">
                  <span class="info-label" style="display: block; margin-bottom: 8px;">Nội dung</span>
                  <span class="info-value" style="display: block; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</span>
                </div>
                ` : ''}
              </div>

              <div class="divider"></div>

              <div class="contact-section">
                <h4>Thông tin liên hệ</h4>
                <p><strong>Hotline:</strong> <a href="tel:+84586997953">+84 586 997 953</a></p>
                <p><strong>Email:</strong> <a href="mailto:kenix.solutions@gmail.com">kenix.solutions@gmail.com</a></p>
                <p><strong>Địa chỉ:</strong> Tân Bình, TP. Hồ Chí Minh</p>
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
      transporter.sendMail(customerMailOptions)
    ])

    // Log for debugging
    console.log('Contact form submission sent successfully:', {
      name,
      email,
      phone,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Có lỗi xảy ra. Vui lòng thử lại sau.' },
      { status: 500 }
    )
  }
}

