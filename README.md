# Secure Password Reset System 🔐

A production-grade full-stack **Password Reset System** built using **Node.js, Express, MongoDB, React, and Email Services**.  
This project demonstrates a real-world, secure authentication workflow used in modern applications.

---

## 📌 Project Overview

This system allows users to reset their password securely through a **token-based email verification flow**.

It follows industry standards:
- Secure token generation
- Token expiry validation
- Database verification
- Password encryption
- One-time reset links
- Email-based authentication flow

---

## ✨ Features

### 🔑 Authentication
- Forgot Password Flow  
- Reset Password Flow  
- Token-Based Verification  
- One-Time Reset Links  

### 🔐 Security
- Password hashing using bcrypt  
- Token stored in database  
- Token expiry validation  
- Token invalidation after use  
- No plaintext password storage  

### 📧 Email Integration
- Automatic email sending  
- Secure reset links  
- Token embedded URLs  
- Email verification workflow  

### 🎨 Frontend UI
- React-based UI  
- Bootstrap styling  
- Responsive design  
- Clean forms  
- Error & success handling  
- Navigation bar  

---

## 🔄 System Flow

1. User enters email on **Forgot Password**
2. Backend generates secure random token
3. Token is stored in database with expiry time
4. Reset link is sent to user's email
5. User clicks the reset link
6. Backend verifies token from database
7. Reset password page is displayed
8. User enters new password
9. Password is hashed
10. Database is updated
11. Token is deleted (one-time use)

---

## 🏗 Architecture

Frontend (React)  
⬇  
Axios API Service  
⬇  
Backend Server (Node.js + Express)  
⬇  
MongoDB Database  
⬇  
Email Service (Nodemailer)

---

## 🛠 Tech Stack

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- bcrypt  
- Nodemailer  
- dotenv  
- crypto  

### Frontend
- React  
- Vite  
- React Router  
- Axios  
- Bootstrap  


## 🌐 API Endpoints

### Forgot Password

POST /api/auth/forgot-password


**Request Body**
```json
{
  "email": "user@example.com"
}

Response

{
  "message": "Reset link sent to email"
}
Verify Reset Token
GET /api/auth/reset-password/:token

Response

{
  "message": "Token valid"
}
Reset Password
POST /api/auth/reset-password/:token

Request Body

{
  "password": "newPassword123"
}

Response

{
  "message": "Password reset successful"
}
⚙️ Environment Variables

### Create .env file in backend/ folder:

PORT=4000

MONGO_URI=your_mongodb_connection_string

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_email_app_password

CLIENT_URL=http://localhost:5173

🚀 Installation & Setup

Backend

cd backend

npm install

npm run dev

Frontend

cd frontend

npm install

npm run dev

🌍 Application URLs

Service	URL

Backend	http://localhost:4000

Frontend	http://localhost:5173

🧪 Testing

API tested using Postman

Token verification tested

Email flow tested

Password reset tested

Error handling verified

🔐 Security Implementation

Encrypted password storage

Secure token generation

Token expiry handling

Token database validation

Token invalidation

Protected routes

Secure API design

🎯 Learning Outcomes

Real-world authentication flow

Secure token architecture

Email integration

Full-stack integration

Secure password handling

Production-grade project structure

API security practices

🧾 Explanation

“This project implements a secure password reset mechanism using token-based authentication. When a user requests a password reset, the system generates a secure token stored in the database with an expiry time. A reset link containing the token is emailed to the user. When the user clicks the link, the backend validates the token, allows password reset, encrypts the new password, updates the database, and deletes the token to prevent reuse.”

📌 Project Status

Backend: Completed

Frontend: Completed

Email Integration: Completed

Token Validation: Completed

UI Integration: Completed

Security Flow: Implemented

Testing: Completed

👩‍💻## Author

Kanesha
Computer Science Engineer
Full Stack Developer
Systems Engineer at TCS

📜## License

This project is developed for educational and learning purposes.
