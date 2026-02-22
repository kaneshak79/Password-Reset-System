🔐 Password Reset System (Full Stack)

A complete secure password recovery system built with Node.js, Express, MongoDB, React, and Email verification.
This project implements a real-world Forgot Password & Reset Password flow using token-based verification, database validation, and email delivery.

📌 Features
🔒 Security

Secure random token generation

Token stored in database

Token expiry handling

One-time use token

Password hashing using bcrypt

Token cleanup after reset

📧 Email System

Reset link sent to user email

Secure token embedded in URL

Real-time email delivery

🔁 Reset Flow

User enters email

Token generated

Token stored in DB

Reset link sent via email

User clicks link

Token verified

Reset form shown

New password submitted

Password updated

Token deleted

🧠 System Architecture

Frontend (React + Vite)
↓
API Calls (Axios)
↓
Backend (Node.js + Express)
↓
Database (MongoDB)
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

📂 Project Structure
Backend

backend/
│── controllers/
│ └── auth.controller.js
│── models/
│ └── User.js
│── routes/
│ └── auth.routes.js
│── config/
│ └── db.js
│── .env
│── index.js

Frontend

frontend/
│── src/
│ │── pages/
│ │ ├── ForgotPassword.jsx
│ │ └── ResetPassword.jsx
│ │── services/
│ │ └── api.js
│ │── App.jsx
│ │── main.jsx

🌐 API Endpoints
1️⃣ Forgot Password

POST /api/auth/forgot-password

Request Body:
{
"email": "user@example.com
"
}

Response:
{
"message": "Reset link sent to email"
}

2️⃣ Verify Reset Token

GET /api/auth/reset-password/:token

Response:
{
"message": "Token valid"
}

3️⃣ Reset Password

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

Create .env file in backend folder:

PORT=4000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_email_app_password
CLIENT_URL=http://localhost:5173

🚀 Installation & Setup
Backend Setup

cd backend
npm install
npm run dev

Frontend Setup

cd frontend
npm install
npm run dev

🌍 Running Ports

Backend API: 4000
Frontend UI: 5173

🧪 Testing

Postman API testing supported

Browser email reset flow supported

Full frontend UI supported

🔐 Security Design

Token stored securely in DB

Expiry time validation

One-time token usage

Hashed password storage

Email verification flow

No plaintext password handling

📸 Screenshots Section

(Add screenshots here)

Home Page

Forgot Password Page

Email Reset Link

Reset Password Page

Success Message

🎯 Project Objectives

Implement secure password recovery

Follow production authentication flow

Demonstrate token-based verification

Implement email-based authentication flow

Practice full-stack integration

📄 Submission Description

This project demonstrates a complete real-world password reset system with:

Secure token-based authentication

Database verification

Email integration

Frontend UI flow

Backend validation

Error handling

Security best practices


🏁 Status

Backend Complete
Frontend Complete
Email Integration
Token System
Security Flow
UI Integration
API Working
Production Ready Architecture

🤝 Author

Project Developer: Kanesha
Role: Full Stack Developer

📜 License

This project is for educational and learning purposes.

✨ Professional full-stack password reset system using modern web technologies.
