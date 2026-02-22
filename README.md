🔐 Secure Password Reset System

A production-grade full-stack password reset system built using Node.js, Express, MongoDB, React, and Email services.
This project demonstrates a secure, token-based password recovery flow used in real-world applications.

🚀 Project Description

This application allows users to securely reset their password using a token-based email verification system.
It follows industry-standard security practices including encryption, token expiry, email validation, and database verification.

The system is designed to simulate real-world authentication flows used in enterprise applications.

✨ Features
🔑 Authentication

Forgot Password flow

Reset Password flow

Secure token generation

Token expiry handling

One-time reset links

🔐 Security

Password hashing using bcrypt

Token stored in database

Token expiry validation

Token invalidation after use

No plaintext password storage

📧 Email System

Automatic reset email sending

Secure reset link generation

Token embedded reset URL

Email verification flow

🎨 Frontend UI

React-based UI

Bootstrap styling

Responsive design

Clean form layout

Success & error handling

Navigation bar

🧠 System Flow

User enters email on Forgot Password

Server generates secure random token

Token stored in database with expiry

Reset link sent to user's email

User clicks reset link

Backend verifies token

Reset password form is displayed

User enters new password

Password is hashed and updated

Token is deleted from database

🏗 Architecture
Frontend (React)
        ↓
Axios API Service
        ↓
Backend Server (Node.js + Express)
        ↓
MongoDB Database
        ↓
Email Service (Nodemailer)
🛠 Tech Stack
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
📦 Backend
backend/
│
├── controllers/
│   └── auth.controller.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── auth.routes.js
│
├── config/
│   └── db.js
│
├── .env
├── package.json
└── index.js
📦 Frontend
frontend/
│
├── src/
│   │
│   ├── pages/
│   │   ├── ForgotPassword.jsx
│   │   └── ResetPassword.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js
🌐 API Endpoints
🔹 Forgot Password
POST /api/auth/forgot-password

Request Body:

{
  "email": "user@example.com"
}

Response:

{
  "message": "Reset link sent to email"
}
🔹 Verify Reset Token
GET /api/auth/reset-password/:token

Response:

{
  "message": "Token valid"
}
🔹 Reset Password
POST /api/auth/reset-password/:token

Request Body:

{
  "password": "newPassword123"
}

Response:

{
  "message": "Password reset successful"
}
⚙️ Environment Variables

Create .env file inside backend/:

PORT=4000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
CLIENT_URL=http://localhost:5173
🧑‍💻 Installation & Setup
🔹 Backend Setup
cd backend
npm install
npm run dev
🔹 Frontend Setup
cd frontend
npm install
npm run dev
🌍 Application URLs
Service	URL
Backend API	http://localhost:4000

Frontend UI	http://localhost:5173
🧪 Testing

API tested using Postman

Email verification tested via browser

Token validation tested

Reset flow tested

Error handling verified

🔐 Security Practices

Hashed password storage

Secure token generation

Token expiry validation

Token invalidation

No token reuse

Secure API endpoints

Input validation

Error handling

🎯 Learning Outcomes

Real-world authentication flow

Token-based security design

Email system integration

Secure password management

Full-stack integration

Production-style architecture

API security handling

📄 Interview Explanation

“This project implements a secure password reset mechanism using token-based authentication. When a user requests a password reset, a secure token is generated and stored in the database with an expiry time. The token is sent to the user via email. The backend validates the token before allowing password reset. The new password is hashed and stored securely, and the token is deleted to prevent reuse.”

📌 Project Status

✅ Backend Completed
✅ Frontend Completed
✅ Email Integration
✅ Token Validation
✅ Password Encryption
✅ UI Integration
✅ API Testing
✅ Production Architecture

👩‍💻 Author

Kanesha
Full Stack Developer
Computer Science Engineer
TCS Systems Engineer

📜 License

This project is created for educational and learning purposes.

⭐ Secure Password Reset System

A real-world authentication flow implementation using modern full-stack technologies.
