import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validation
    if (!name || !email || !phone || !service || !message) {
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

    // TODO: Integrate with email service (nodemailer, SendGrid, etc.)
    // Example with nodemailer (commented):
    /*
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Liên hệ mới từ ${name}`,
      html: `
        <h2>Thông tin liên hệ</h2>
        <p><strong>Họ tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Điện thoại:</strong> ${phone}</p>
        <p><strong>Dịch vụ:</strong> ${service}</p>
        <p><strong>Nội dung:</strong></p>
        <p>${message}</p>
      `,
    });
    */

    // For now, just log the data (in production, save to database or send email)
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      service,
      message,
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

