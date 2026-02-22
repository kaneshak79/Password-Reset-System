🔐 Secure Password Reset Application

A full-stack password recovery system built using Node.js, Express, MongoDB, React, and Email services.
This project implements a production-grade Forgot Password & Reset Password flow with secure token handling, database validation, and email-based verification.

🚀 Project Overview

This application allows users to securely reset their passwords through a token-based email verification system.
It follows real-world authentication practices used in modern applications, ensuring security, reliability, and scalability.

✨ Key Features
🔑 Authentication Flow

Forgot password request via email

Secure reset link generation

Token-based verification

Expiry-controlled tokens

One-time reset links

Secure password update

🔐 Security

Encrypted password storage (bcrypt)

Token storage in database

Token expiry validation

Token invalidation after use

No plaintext credentials

Safe API handling

📧 Email Integration

Automated reset email sending

Secure link delivery

User verification through email

Token embedded reset URLs

🎨 User Interface

Clean React UI

Bootstrap styling

Responsive layout

User-friendly forms

Success & error messaging

Professional navigation

🧠 System Flow

User submits email

Server generates secure random token

Token stored in database with expiry

Reset link sent to email

User clicks reset link

Token verified by backend

Reset form displayed

User submits new password

Password securely updated

Token deleted from database

🏗 Architecture

Client (React + Vite)
→ API Layer (Axios)
→ Backend Server (Node.js + Express)
→ Database (MongoDB)
→ Email Service (Nodemailer)

🛠 Technology Stack
Backend

Node.js

Express.js

MongoDB

Mongoose

bcrypt

Nodemailer

dotenv

crypto

Frontend

React

Vite

React Router

Axios

Bootstrap

📁 Project Structure
Backend

backend/
├── controllers/
│ └── auth.controller.js
├── models/
│ └── User.js
├── routes/
│ └── auth.routes.js
├── config/
│ └── db.js
├── .env
├── package.json
└── index.js

Frontend

frontend/
├── src/
│ ├── pages/
│ │ ├── ForgotPassword.jsx
│ │ └── ResetPassword.jsx
│ ├── services/
│ │ └── api.js
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── vite.config.js

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

✨ A production-style secure password reset system using modern full-stack technologies.
