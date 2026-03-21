# 🚀 Leave Management System

## 📌 Overview

The Leave Management System is a full-stack web application that allows employees to apply for leave and employers to manage and respond to those requests efficiently.

The system implements authentication, role-based access control, and real-time interaction between frontend and backend services.

---

## ✨ Features

### 👩‍💻 Employee

* Signup and Login
* Apply for leave with details (type, dates, reason)
* View leave status (Pending / Approved / Rejected)

### 🧑‍💼 Employer

* Signup and Login
* View all employee leave requests
* Approve or Reject requests
* Modify decisions (flexible control)

---

## 🔐 Authentication & Security

* JWT-based authentication
* Protected API routes
* Role-based access control (Employee / Employer)
* Prevention of duplicate actions

---

## 🛠️ Tech Stack

### Frontend

* Vue.js (Vite)
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

---

## 📂 Project Structure

```
leave-management-system/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── App.vue
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

```
cd backend
npm install
npm run dev
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 💻 Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

### Authentication

* POST `/api/auth/signup`
* POST `/api/auth/login`

### Leave Management

* POST `/api/leave/apply`
* GET `/api/leave/my`
* GET `/api/leave/all`
* PUT `/api/leave/:id`

---

## 🌐 Live Deployment

* Frontend (Vercel): https://leave-management-system-neon-gamma.vercel.app/
* Backend (Render): https://leave-management-system-2-p1md.onrender.com

---

## 🧪 Testing

* APIs tested using Postman
* Application tested via browser

---

## 💡 Key Highlights

* Full-stack implementation
* Role-based dashboards
* Real-time data handling
* Clean UI with Tailwind CSS
* Deployed and production-ready

---

## 👩‍💻 Author

Shria Varma

---

## 📌 Note

Due to AWS account activation delay, the project has been deployed using Vercel and Render to ensure timely submission.
