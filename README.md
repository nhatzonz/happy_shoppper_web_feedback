# 🛍️ Happy Shopper - Website Đánh Giá Dịch Vụ

Happy Shopper đây là Website khi khách hàng quét QR sẽ qua url đến. Nhằm thu thập đánh giá sao và phản hồi để gửi về server.

## ⚙️ Cách cài đặt và chạy dự án

### ** 1.Clone repository về máy**
Mở terminal hoặc command prompt và chạy lệnh:  
```sh
git clone https://github.com/nhatzonz/happy_shoppper.git
cd happy_shopper

### ** 2.Cài đặt dependencies**
```sh
npm install

## 🚀 Tính năng chính
- Chọn đánh giá sao dịch vụ và nhân viên hỗ trợ, đánh giá không gian và nêu góp ý.
- Gửi phản hồi về hệ thống.


## 🛠 Công nghệ sử dụng
### **Frontend**  
- **React.js**: Xây dựng giao diện người dùng.  
- **SCSS**: Tạo giao diện đẹp mắt, dễ bảo trì.  
- **FontAwesome**: Hiển thị icon chuyên nghiệp.  
- **Axios**: Gửi và nhận dữ liệu từ API.  

### **Triển khai**  
- **VPS (ichi.io.vn)**: Chạy hệ thống frontend.  
- **Nginx + PM2**: Cấu hình server, tối ưu hiệu suất.  

## 📂 Cấu trúc thư mục
```bash
happy_shopper/
├── src/
│   ├── components/
│   │   ├── RatingSelected/
│   │   |   ├── RatingSelected.js
│   │   |   └── RatingSelected.module.scss
│   │   ├── Button.js/
│   │   |   ├── Button.js
│   │   |   └── Button.module.scss
│   │   ├── GlobalStyles
│   │   |   ├── GlobalStyles.js
│   │   |   └── GlobalStyles.module.scss
│   │   ├── Layout/
│   │   |   ├── Layout.js
│   │   |   └── Layout.module.scss         
│   │   └── Header/
│   │   |   ├── Header.js
│   │   |   └── Header.module.scss          
│   ├── assets/                
│   ├── styles/                
│   ├── App.js                 
│   └── index.js               
├── public/
│   ├── index.html             
│   └── styles.css             
├── package.json               
└── README.md                 
