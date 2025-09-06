# 🛒 ShoppyGlobe Backend

This project is the **backend for ShoppyGlobe E-commerce**, built using **Node.js, Express, and MongoDB**.  
It provides REST APIs for product management, user authentication, and shopping cart functionality.  

---

## 🚀 Features

- User **Registration & Login** with **JWT Authentication**
- **Products API**  
  - Fetch all products  
  - Fetch single product by ID  
- **Cart API**  
  - Add items to cart  
  - Fetch cart items by user  
  - Update quantity of cart items  
  - Delete items from cart  
- **MongoDB Integration** with Mongoose
- **Error handling & validation**
- Tested with **ThunderClient**

---

## ⚙️ Tech Stack

- **Node.js** (Runtime)
- **Express.js** (Server Framework)
- **MongoDB + Mongoose** (Database & ODM)
- **JWT** (Authentication)

---

## 📌 API Endpoints

### 🔑 Authentication
- **POST** `/api/register` → Register new user  
- **POST** `/api/login` → Login & get JWT token  

### 🛍️ Products
- **GET** `/api/products` → Fetch all products  
- **GET** `/api/products/:id` → Fetch product by ID  

### 🛒 Cart (JWT Protected)
- **GET** `/api/cart/:userId` → Fetch user cart  
- **POST** `/api/cart` → Add item to cart  
- **PUT** `/api/cart/:id` → Update cart item quantity  
- **DELETE** `/api/cart/:id` → Delete item from cart  

## github link : https://github.com/Santanu0010/ShoppyGlobe-website


