# Hướng Dẫn Tạo Favicon.ico Cho Google Search

## Vấn Đề
Google Search ưu tiên hiển thị favicon với format `.ico` thay vì `.png`. Để icon hiển thị đúng trên Google Search, bạn cần tạo file `favicon.ico`.

## Cách Tạo Favicon.ico

### Cách 1: Sử dụng Online Converter (Khuyến nghị)
1. Truy cập: https://convertio.co/png-ico/ hoặc https://www.favicon-generator.org/
2. Upload file `public/icon.png`
3. Download file `favicon.ico`
4. Đặt file vào thư mục `public/favicon.ico`

### Cách 2: Sử dụng ImageMagick (Command Line)
```bash
# Cài đặt ImageMagick (nếu chưa có)
# Windows: choco install imagemagick
# Mac: brew install imagemagick
# Linux: sudo apt-get install imagemagick

# Convert icon.png thành favicon.ico
magick convert public/icon.png -resize 32x32 public/favicon.ico
```

### Cách 3: Sử dụng Python với PIL/Pillow
```python
from PIL import Image

# Mở file PNG
img = Image.open('public/icon.png')

# Resize về 32x32 (kích thước chuẩn cho favicon)
img = img.resize((32, 32), Image.Resampling.LANCZOS)

# Lưu thành ICO
img.save('public/favicon.ico', format='ICO', sizes=[(32, 32)])
```

## Sau Khi Tạo Favicon.ico

1. **Kiểm tra file tồn tại:**
   - Đảm bảo file `public/favicon.ico` tồn tại
   - File có thể truy cập tại: `https://kenix-solutions.com/favicon.ico`

2. **Yêu cầu Google Re-index:**
   - Vào Google Search Console: https://search.google.com/search-console
   - Chọn property của bạn
   - Vào "URL Inspection"
   - Nhập URL: `https://kenix-solutions.com`
   - Click "Request Indexing"

3. **Kiểm tra:**
   - Sau 1-2 tuần, icon sẽ hiển thị trên Google Search
   - Có thể test bằng cách search: `site:kenix-solutions.com`

## Lưu Ý
- Favicon.ico nên có kích thước 16x16, 32x32, hoặc 48x48 pixels
- File size nên nhỏ (< 100KB)
- Icon nên đơn giản, dễ nhận biết ở kích thước nhỏ

