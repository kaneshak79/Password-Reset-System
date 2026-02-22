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


🌐 API Documentation
Forgot Password

POST /api/auth/forgot-password

Request:
{
"email": "user@example.com
"
}

Response:
{
"message": "Reset link sent to email"
}

Verify Reset Token

GET /api/auth/reset-password/:token

Response:
{
"message": "Token valid"
}

Reset Password

POST /api/auth/reset-password/:token

Request:
{
"password": "newPassword123"
}

Response:
{
"message": "Password reset successful"
}

⚙️ Environment Configuration

Create .env file in backend folder:

PORT=4000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_email_app_password
CLIENT_URL=http://localhost:5173

🧑‍💻 Setup Instructions
Backend

cd backend
npm install
npm run dev

Frontend

cd frontend
npm install
npm run dev

🌍 Application Ports

Backend API → http://localhost:4000

Frontend UI → http://localhost:5173

🧪 Testing

API testing via Postman

Email-based browser testing

Full UI flow testing

Token validation testing

Password update verification

🔐 Security Practices

Token stored securely in database

Expiry validation enforced

Token invalidation after reset

Hashed password storage

Secure API communication

Input validation

Error handling

🎯 Project Goals

Implement secure authentication flow

Simulate real-world password recovery

Practice token-based security

Learn email integration

Build full-stack flow

Apply security best practices

📄 Submission Summary

This project demonstrates:

Secure token-based password reset

Database validation mechanisms

Email verification flow

Full-stack integration

Secure password handling

Production-style architecture

Real-world authentication design

🎓 Interview Explanation

“This system uses a secure token-based password reset mechanism. When a user requests a reset, a random token is generated and stored in the database with an expiry time. The token is sent to the user via email. When the user accesses the link, the backend validates the token and expiry, allowing the user to reset their password. The password is hashed and stored securely, and the token is deleted to prevent reuse.”

📌 Project Status

✔ Backend Complete
✔ Frontend Complete
✔ Email Integration
✔ Token Validation
✔ Password Encryption
✔ UI Integration
✔ API Stability
✔ Production-Style Architecture

👩‍💻 Author

Developer: Kanesha
Role: Full Stack Developer

📜 License

This project is developed for educational and learning purposes.
