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
      subject: `🔔 Liên hệ mới từ ${name} - Kenix Solutions`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { background: white; margin: 10px 0; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { color: #333; }
            .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 Liên Hệ Mới</h1>
              <p>Kenix Solutions - Landing Profile</p>
            </div>
            <div class="content">
              <div class="info-row">
                <div class="label">👤 Họ và Tên:</div>
                <div class="value">${name}</div>
              </div>
              <div class="info-row">
                <div class="label">📧 Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="info-row">
                <div class="label">📱 Số điện thoại:</div>
                <div class="value">${phone}</div>
              </div>
              ${message ? `
              <div class="info-row">
                <div class="label">💬 Nội dung:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              <div class="info-row">
                <div class="label">🕐 Thời gian:</div>
                <div class="value">${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}</div>
              </div>
            </div>
            <div class="footer">
              <p>Email này được gửi tự động từ form liên hệ trên website Kenix Solutions</p>
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
      subject: `✅ Cảm ơn bạn đã liên hệ với Kenix Solutions`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container { 
              max-width: 600px; 
              margin: 20px auto; 
              background: white;
              border-radius: 15px;
              overflow: hidden;
              box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            }
            .header { 
              background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); 
              color: white; 
              padding: 40px 30px; 
              text-align: center; 
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 700;
            }
            .header p {
              margin: 10px 0 0 0;
              font-size: 16px;
              opacity: 0.95;
            }
            .logo {
              width: 60px;
              height: 60px;
              background: white;
              border-radius: 50%;
              margin: 0 auto 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 30px;
            }
            .content { 
              padding: 40px 30px;
              background: white;
            }
            .greeting {
              font-size: 20px;
              font-weight: 600;
              color: #333;
              margin-bottom: 20px;
            }
            .message-box {
              background: #f8f9fa;
              border-left: 4px solid #FF6B35;
              padding: 20px;
              margin: 25px 0;
              border-radius: 5px;
            }
            .message-box p {
              margin: 0;
              line-height: 1.8;
              color: #555;
            }
            .info-section {
              margin: 30px 0;
              padding: 20px;
              background: #fff5f2;
              border-radius: 10px;
            }
            .info-section h3 {
              color: #FF6B35;
              font-size: 18px;
              margin-bottom: 15px;
              display: flex;
              align-items: center;
              gap: 10px;
            }
            .info-item {
              display: flex;
              align-items: center;
              gap: 10px;
              margin: 10px 0;
              color: #555;
            }
            .info-item strong {
              color: #333;
              min-width: 120px;
            }
            .cta-button {
              display: inline-block;
              background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
              color: white;
              padding: 15px 40px;
              text-decoration: none;
              border-radius: 30px;
              font-weight: 600;
              margin: 20px 0;
              text-align: center;
              transition: transform 0.3s ease;
            }
            .cta-button:hover {
              transform: translateY(-2px);
            }
            .social-links {
              text-align: center;
              margin: 30px 0;
              padding: 20px;
              background: #f8f9fa;
              border-radius: 10px;
            }
            .social-links h4 {
              margin-bottom: 15px;
              color: #333;
            }
            .social-links a {
              display: inline-block;
              margin: 0 10px;
              color: #FF6B35;
              text-decoration: none;
              font-weight: 500;
            }
            .footer { 
              text-align: center; 
              padding: 30px;
              background: #2c3e50;
              color: #ecf0f1;
            }
            .footer p {
              margin: 5px 0;
              font-size: 14px;
            }
            .footer a {
              color: #FF6B35;
              text-decoration: none;
            }
            .divider {
              height: 2px;
              background: linear-gradient(to right, transparent, #FF6B35, transparent);
              margin: 30px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">🚀</div>
              <h1>Kenix Solutions</h1>
              <p>Digital Innovation & Web Development</p>
            </div>
            
            <div class="content">
              <div class="greeting">Xin chào ${name}! 👋</div>
              
              <div class="message-box">
                <p>
                  <strong>Cảm ơn bạn đã liên hệ với Kenix Solutions!</strong><br><br>
                  Chúng tôi đã nhận được thông tin của bạn và sẽ phản hồi trong thời gian sớm nhất. 
                  Đội ngũ chuyên gia của chúng tôi đang xem xét yêu cầu và sẽ liên hệ lại với bạn 
                  trong vòng <strong>24 giờ</strong>.
                </p>
              </div>

              <div class="info-section">
                <h3>📋 Thông tin bạn đã gửi:</h3>
                <div class="info-item">
                  <strong>👤 Họ và tên:</strong> ${name}
                </div>
                <div class="info-item">
                  <strong>📧 Email:</strong> ${email}
                </div>
                <div class="info-item">
                  <strong>📱 Điện thoại:</strong> ${phone}
                </div>
                ${message ? `
                <div class="info-item" style="display: block; margin-top: 15px;">
                  <strong>💬 Nội dung:</strong><br>
                  <span style="margin-left: 0; display: block; margin-top: 5px;">${message.replace(/\n/g, '<br>')}</span>
                </div>
                ` : ''}
              </div>

              <div class="divider"></div>

              <div style="text-align: center;">
                <p style="margin-bottom: 20px;">Trong lúc chờ đợi, bạn có thể tìm hiểu thêm về dịch vụ của chúng tôi:</p>
                <a href="https://kenixsolutions.com" class="cta-button">
                  🌐 Khám phá dịch vụ
                </a>
              </div>

              <div class="social-links">
                <h4>📞 Liên hệ trực tiếp:</h4>
                <p>
                  <strong>Hotline:</strong> <a href="tel:+84586997953">+84 586 997 953</a><br>
                  <strong>Email:</strong> <a href="mailto:kenis.solutions@gmail.com">kenis.solutions@gmail.com</a><br>
                  <strong>Địa chỉ:</strong> Tân Bình, TP. Hồ Chí Minh
                </p>
              </div>
            </div>

            <div class="footer">
              <p><strong>Kenix Solutions</strong></p>
              <p>Chuyên gia giải pháp số - Đồng hành cùng doanh nghiệp</p>
              <p style="margin-top: 15px; opacity: 0.8;">
                © ${new Date().getFullYear()} Kenix Solutions. All rights reserved.
              </p>
              <p style="font-size: 12px; opacity: 0.7; margin-top: 10px;">
                Email này được gửi tự động. Vui lòng không reply trực tiếp.
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

