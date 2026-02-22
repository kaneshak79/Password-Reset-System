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

---

## 📁 Project Structure

### Backend
