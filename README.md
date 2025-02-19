# 🛍️ Happy Shopper - Website Đánh Giá Dịch Vụ

- Happy Shopper là một website cho phép khách hàng quét QR để truy cập, đánh giá dịch vụ và gửi phản hồi về hệ thống.
- Trải nghiệm thử tại http://ichi.io.vn/

## ⚙️ Cách cài đặt và chạy dự án

### **1. Clone repository về máy**
Mở terminal hoặc command prompt và chạy lệnh:  
```sh
git clone https://github.com/nhatzonz/happy_shoppper.git
cd happy_shopper
```

### **2. Cài đặt dependencies**  
Đảm bảo rằng bạn đã cài đặt [Node.js](https://nodejs.org/) trước khi chạy lệnh sau:
```sh
npm install
```

### **3. Chạy dự án**
Sau khi cài đặt dependencies, chạy dự án bằng lệnh:
```sh
npm start
```
Dự án sẽ chạy trên `http://localhost:3000/`.

---

## 🚀 Tính năng chính
- Đánh giá sao cho dịch vụ, nhân viên hỗ trợ, không gian và góp ý.  
- Gửi phản hồi về hệ thống.  

---

## 🛠 Công nghệ sử dụng

### **Frontend**  
- **React.js**: Xây dựng giao diện người dùng.  
- **SCSS**: Tạo giao diện đẹp mắt, dễ bảo trì.  
- **FontAwesome**: Hiển thị icon chuyên nghiệp.  
- **Axios**: Gửi và nhận dữ liệu từ API.  

### **Triển khai**  
- **VPS (ichi.io.vn)**: Chạy hệ thống frontend.  
- **Nginx + PM2**: Cấu hình server, tối ưu hiệu suất.  

---

## 📂 Cấu trúc thư mục
```bash
happy_shopper/
├── src/
│   ├── components/
│   │   ├── RatingSelected/
│   │   │   ├── RatingSelected.js
│   │   │   └── RatingSelected.module.scss
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   └── Button.module.scss
│   │   ├── GlobalStyles/
│   │   │   ├── GlobalStyles.js
│   │   │   └── GlobalStyles.module.scss
│   │   ├── Layout/
│   │   │   ├── Layout.js
│   │   │   └── Layout.module.scss         
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.module.scss          
│   ├── assets/                
│   ├── styles/                
│   ├── App.js                 
│   └── index.js               
├── public/
│   ├── index.html             
│   └── styles.css             
├── package.json               
└── README.md                 
```
---

Nếu bạn cần thêm thông tin, hãy cho tôi biết nhé! 🚀🔥

