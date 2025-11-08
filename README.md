# Landing Profile - Website Thiết Kế Chuyên Nghiệp

Website landing page chuyên nghiệp được xây dựng với Next.js 14 (App Router), TypeScript, và CSS Modules. Theme trắng với accent màu vàng, tối ưu SEO và performance.

## 🚀 Tính năng

- ✅ Next.js 14 với App Router
- ✅ TypeScript
- ✅ CSS Modules (không dùng Tailwind/Bootstrap)
- ✅ Responsive design (mobile-first)
- ✅ SEO tối ưu (meta tags, Open Graph, JSON-LD, sitemap)
- ✅ Google Analytics integration
- ✅ NextAuth.js (stub)
- ✅ Contact form với API route
- ✅ Performance optimization (code splitting, image optimization)
- ✅ Accessibility (ARIA, semantic HTML)

## 📋 Yêu cầu

- Node.js 18+ 
- npm hoặc yarn

## 🛠️ Cài đặt

1. **Clone repository:**
```bash
git clone <repository-url>
cd Landingprofile
```

2. **Cài đặt dependencies:**
```bash
npm install
# hoặc
yarn install
```

3. **Tạo file `.env.local`** (tùy chọn):
```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-81YCGH9JY6

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# SMTP (cho contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=nguyenvantanphat.it@gmail.com
```

4. **Chạy development server:**
```bash
npm run dev
# hoặc
yarn dev
```

5. **Mở trình duyệt:**
```
http://localhost:3000
```

## 📁 Cấu trúc thư mục

```
Landingprofile/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/    # NextAuth routes
│   │   └── contact/                # Contact form API
│   ├── vi/
│   │   ├── page.tsx                # Trang chủ
│   │   └── contact/
│   │       └── page.tsx            # Trang liên hệ
│   ├── layout.tsx                   # Root layout
│   ├── globals.css                  # Global styles
│   └── sitemap.ts                   # Sitemap generation
├── components/
│   ├── Header/                      # Header component
│   ├── Hero/                        # Hero section
│   ├── WhyChoose/                   # Why choose us
│   ├── ProjectsCarousel/            # Projects carousel
│   ├── ServicesPackages/            # Service packages
│   ├── CallToAction/               # CTA section
│   ├── Testimonials/                # Testimonials
│   ├── ContactSection/              # Contact section
│   ├── Footer/                      # Footer
│   ├── FloatingActions/             # Floating action buttons
│   └── SEOHead.tsx                  # SEO component
├── public/
│   ├── images/                      # Images (tạo thư mục này)
│   └── robots.txt                   # Robots.txt
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎨 Theme & Styling

Website sử dụng **theme trắng** với:
- **Background**: Trắng (#FFFFFF)
- **Text**: Đen (#000000)
- **Accent**: Vàng (#FFD700)
- **Font**: Inter (Google Fonts)

CSS được tổ chức theo CSS Modules, mỗi component có file `.module.css` riêng.

## 📧 Tích hợp Email (Contact Form)

Để gửi email từ contact form, bạn cần:

1. **Cài đặt nodemailer:**
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

2. **Cấu hình SMTP trong `.env.local`** (xem phần Cài đặt)

3. **Uncomment code trong `app/api/contact/route.ts`** (dòng 30-50)

4. **Hoặc sử dụng service khác:**
   - SendGrid
   - Mailgun
   - AWS SES
   - Resend

## 🚀 Deploy

### Vercel (Recommended)

1. **Push code lên GitHub/GitLab**
2. **Import project vào Vercel:**
   - Truy cập [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import repository
3. **Cấu hình Environment Variables** trong Vercel dashboard
4. **Deploy!**

### Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. **Cấu hình environment variables**

### Self-hosted

```bash
npm run build
npm start
```

## 🔧 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run start` - Chạy production server
- `npm run lint` - Chạy ESLint

## ✅ Checklist Tối Ưu Production

### 1. Font Preload
- ✅ Đã cấu hình Inter font với `preload: true`
- ⚠️ Kiểm tra font loading trong DevTools

### 2. SEO
- ✅ Meta tags đầy đủ
- ✅ Open Graph tags
- ✅ JSON-LD structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ⚠️ Kiểm tra với Google Search Console

### 3. Performance
- ✅ Image optimization (next/image)
- ✅ Code splitting
- ✅ CSS minification
- ⚠️ Kiểm tra Lighthouse score (target: 90+)

### 4. Accessibility
- ✅ ARIA labels
- ✅ Semantic HTML
- ✅ Keyboard navigation
- ⚠️ Test với screen reader
- ⚠️ Kiểm tra contrast ratios

### 5. Security
- ✅ Form validation
- ⚠️ CSRF protection (Next.js tự động)
- ⚠️ XSS prevention
- ⚠️ Rate limiting cho API routes

### 6. Analytics
- ✅ Google Analytics (G-81YCGH9JY6)
- ⚠️ Cấu hình Google Tag Manager (nếu cần)

### 7. Email Integration
- ⚠️ Tích hợp SMTP hoặc email service
- ⚠️ Test contact form

## 🎯 5 Công Việc Ưu Tiên Để Deploy Production

1. **Cấu hình SSL/CDN**
   - Setup SSL certificate (Let's Encrypt hoặc từ hosting provider)
   - Cấu hình CDN (Cloudflare, Vercel Edge Network)

2. **Bật Google Tag Manager**
   - Uncomment GTM code trong `app/layout.tsx`
   - Cấu hình GTM container ID

3. **Tích hợp SMTP**
   - Cấu hình SMTP credentials
   - Uncomment email code trong `app/api/contact/route.ts`
   - Test gửi email

4. **Kiểm tra Accessibility**
   - Test với screen reader (NVDA, JAWS)
   - Kiểm tra keyboard navigation
   - Verify contrast ratios (WCAG AA)

5. **A/B Test CTAs**
   - Test các CTA buttons
   - Monitor conversion rates
   - Optimize based on data

## 📞 Thông tin liên hệ

- **Phone**: +84 374 225 294
- **Email**: nguyenvantanphat.it@gmail.com
- **Address**: Bình Thạnh, TP. Hồ Chí Minh

## 📄 License

© 2025 Landing Profile. All rights reserved.

---

**Lưu ý:** Đây là template website. Hãy thay đổi nội dung, hình ảnh, và thông tin liên hệ phù hợp với dự án của bạn.

