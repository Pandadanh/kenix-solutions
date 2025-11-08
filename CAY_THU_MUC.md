# Cây thư mục dự án Landing Profile

```
Landingprofile/
│
├── app/                              # Next.js App Router
│   ├── api/                          # API Routes
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts          # NextAuth configuration
│   │   └── contact/
│   │       └── route.ts              # Contact form API endpoint
│   │
│   ├── vi/                           # Vietnamese routes
│   │   ├── page.tsx                  # Homepage
│   │   └── contact/
│   │       └── page.tsx               # Contact page
│   │
│   ├── layout.tsx                     # Root layout với SEO, Analytics
│   ├── page.tsx                      # Root redirect to /vi
│   ├── globals.css                   # Global CSS variables & styles
│   └── sitemap.ts                    # Dynamic sitemap generation
│
├── components/                        # React Components
│   ├── Header/
│   │   ├── Header.tsx                # Header component với navigation
│   │   ├── Header.module.css         # Header styles
│   │   └── index.ts                   # Export
│   │
│   ├── Hero/
│   │   ├── Hero.tsx                  # Hero section
│   │   ├── Hero.module.css            # Hero styles
│   │   └── index.ts
│   │
│   ├── WhyChoose/
│   │   ├── WhyChoose.tsx             # Why choose us section
│   │   ├── WhyChoose.module.css
│   │   └── index.ts
│   │
│   ├── ProjectsCarousel/
│   │   ├── ProjectsCarousel.tsx      # Projects carousel
│   │   ├── ProjectsCarousel.module.css
│   │   └── index.ts
│   │
│   ├── ServicesPackages/
│   │   ├── ServicesPackages.tsx      # Service packages
│   │   ├── ServicesPackages.module.css
│   │   └── index.ts
│   │
│   ├── CallToAction/
│   │   ├── CallToAction.tsx          # CTA section
│   │   ├── CallToAction.module.css
│   │   └── index.ts
│   │
│   ├── Testimonials/
│   │   ├── Testimonials.tsx          # Testimonials carousel
│   │   ├── Testimonials.module.css
│   │   └── index.ts
│   │
│   ├── ContactSection/
│   │   ├── ContactSection.tsx        # Contact form section
│   │   ├── ContactSection.module.css
│   │   └── index.ts
│   │
│   ├── Footer/
│   │   ├── Footer.tsx                 # Footer component
│   │   ├── Footer.module.css
│   │   └── index.ts
│   │
│   ├── FloatingActions/
│   │   ├── FloatingActions.tsx      # Floating action buttons
│   │   ├── FloatingActions.module.css
│   │   └── index.ts
│   │
│   └── SEOHead.tsx                    # SEO meta tags component
│
├── public/                            # Static files
│   ├── images/                       # Images (tạo thư mục này)
│   │   ├── projects/                 # Project thumbnails
│   │   └── testimonials/             # Testimonial avatars
│   └── robots.txt                    # Robots.txt
│
├── .gitignore                         # Git ignore rules
├── .eslintrc.json                     # ESLint configuration
├── next.config.js                     # Next.js configuration
├── package.json                       # Dependencies & scripts
├── tsconfig.json                      # TypeScript configuration
├── README.md                          # Documentation
└── CAY_THU_MUC.md                    # File này

```

## Ghi chú

- **Images**: Tạo thư mục `public/images/` và thêm các hình ảnh cần thiết:
  - `public/images/projects/*.png` - Project thumbnails
  - `public/images/testimonials/*.png` - Testimonial avatars
  - Hoặc sử dụng placeholder SVG như trong code

- **Environment Variables**: Tạo file `.env.local` (không commit) với các biến môi trường cần thiết.

- **Build Output**: Thư mục `.next/` được tạo tự động khi build, không cần tạo thủ công.

