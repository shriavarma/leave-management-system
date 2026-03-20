# Leave Management System

## Overview

A full-stack Leave Management System where employees can apply for leave and employers can approve or reject requests. The application includes authentication, role-based access, and a clean UI.

---

## Features

### Employee

* Signup & Login
* Apply for leave (type, start date, end date, reason)
* View leave status (Pending / Approved / Rejected)

### Employer

* Signup & Login
* View all leave requests
* Approve or Reject leave requests
* Modify decision if required (flexible control)

---

## Authentication & Security

* JWT-based authentication
* Role-based access (Employee / Employer)
* Protected routes using middleware
* Prevents duplicate actions (idempotent updates)

---

## Tech Stack

### Frontend

* Vue.js (Vite)
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

---

## Project Structure

```
leave-management-system/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
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

## Setup Instructions

### Backend Setup

```bash
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

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## API Endpoints

### Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`

### Leave

* `POST /api/leave/apply` → Apply leave
* `GET /api/leave/my` → Employee leaves
* `GET /api/leave/all` → Employer view
* `PUT /api/leave/:id` → Approve/Reject

---

## Testing

* APIs tested using Postman
* UI tested through browser interaction

---

## Deployment

* Backend: AWS EC2 (Node.js server)
* Database: MongoDB Atlas
* Frontend: Can be deployed on Vercel / Netlify

---

## Improvements Added

* Allow flexible status changes (real-world scenario)
* Clean UI with Tailwind CSS

---

## Author

Shria Varma

---

## Notes

This project was developed as part of an internship assignment. The focus was on building a functional and scalable system with clean architecture and real-world features.
