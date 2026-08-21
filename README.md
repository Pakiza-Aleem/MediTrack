<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:064E3B,50:059669,100:34D399&height=220&section=header" width="100%"/>

<br>

# MEDI TRACK

### Secure Care. Simple Appointments.

<p>
  <strong>A MERN-stack patient appointment management system with secure authentication and role-based staff access.</strong>
</p>

<br>

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
<img src="https://img.shields.io/badge/Express.js-065F46?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
<img src="https://img.shields.io/badge/MongoDB-059669?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
<img src="https://img.shields.io/badge/JWT-047857?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT"/>
<img src="https://img.shields.io/badge/Status-Completed-10B981?style=for-the-badge" alt="Completed"/>

<br><br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=059669&height=2&width=700" />

</div>

---

## 📖 About

**Medi Track** is a full-stack **patient appointment management system** developed using the **MERN stack**.

The application allows patients to securely register, log in, book appointments, manage their own appointment requests, and track appointment status.

Authorized staff members can access the clinic-wide appointment schedule, view patient information, and manage appointment requests through **role-based authorization**.

The project focuses on **secure authentication, authorization, session persistence, and appointment ownership**.

---

## ✨ Features

<table>
<tr>

<td width="33%" valign="top">

### 🔐 Authentication

* Patient registration
* Secure login
* JWT authentication
* HttpOnly cookies
* Persistent sessions
* Password reset

</td>

<td width="33%" valign="top">

### 👤 Patient

* Patient dashboard
* Book appointments
* View own appointments
* Cancel appointments
* Track appointment status

</td>

<td width="33%" valign="top">

### 📅 Appointments

* Doctor selection
* Reason for visit
* Scheduled date & time
* Appointment status
* Ownership-based access

</td>

</tr>

<tr>

<td width="33%" valign="top">

### 👨‍⚕️ Staff

* Staff dashboard
* Clinic-wide schedule
* Patient information
* Confirm appointments
* Cancel appointments

</td>

<td width="33%" valign="top">

### 🛡️ Security

* bcrypt password hashing
* JWT expiration
* Authentication middleware
* Role-based authorization
* Protected API routes
* Ownership checks

</td>

<td width="33%" valign="top">

### 📊 Management

* Appointment requests
* Status tracking
* Patient-specific records
* Staff management
* Persistent database records

</td>

</tr>

<tr>

<td width="33%" valign="top">

### 🔄 Sessions

* Secure authentication state
* Session restoration
* `/auth/me`
* Secure logout
* Cookie-based sessions

</td>

<td width="33%" valign="top">

### 🎨 Interface

* Clean healthcare UI
* Patient dashboard
* Staff dashboard
* Authentication screens
* Appointment management

</td>

<td width="33%" valign="top">

### 🧩 Architecture

* MERN stack
* REST APIs
* Redux Toolkit
* Express middleware
* MongoDB & Mongoose

</td>

</tr>
</table>

---

## 🖥️ Screenshots

### 🔑 Login Screen

<p align="center">
  <img src="screenshots/login.png" alt="Medi Track Login Screen" width="850"/>
</p>

### 📝 Registration Screen

<p align="center">
  <img src="screenshots/register.png" alt="Medi Track Registration Screen" width="850"/>
</p>

### 📅 My Appointments

<p align="center">
  <img src="screenshots/my-appointments.png" alt="Medi Track My Appointments" width="850"/>
</p>

### 👨‍⚕️ Staff Dashboard

<p align="center">
  <img src="screenshots/staff-dashboard.png" alt="Medi Track Staff Dashboard" width="850"/>
</p>

---

## 🚀 Setup Guide

### System Requirements

| Requirement          | Details              |
| :------------------- | :------------------- |
| **Operating System** | Windows 10 / 11      |
| **Frontend**         | React + Vite         |
| **Backend**          | Node.js + Express.js |
| **Database**         | MongoDB              |
| **Language**         | JavaScript           |
| **State Management** | Redux Toolkit        |
| **Version Control**  | Git                  |

### Installation

<details>
<summary><strong>Click to expand the installation guide</strong></summary>

<br>

#### 1. Install Dependencies

Install backend dependencies:

```bash
cd server
npm install
```

Install frontend dependencies:

```bash
cd ../client
npm install
```

#### 2. Configure Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

> Never commit `.env` or real credentials to GitHub.

#### 3. Start the Backend

```bash
cd server
npm run dev
```

The API runs at:

```text
http://localhost:5000
```

#### 4. Start the Frontend

Open another terminal:

```bash
cd client
npm run dev
```

The application normally runs at:

```text
http://localhost:5173
```

</details>

---

## 🧠 Concepts Used

<table>
<tr>

<td width="50%" valign="top">

### Authentication & Authorization

* JWT Authentication
* HttpOnly Cookies
* Password Hashing
* Authentication Middleware
* Role-Based Authorization
* Protected Routes
* Session Persistence
* Ownership-Based Access

</td>

<td width="50%" valign="top">

### MERN Development

* React Components
* React Router
* Redux Toolkit
* Axios
* Express.js
* REST APIs
* MongoDB
* Mongoose

</td>

</tr>
</table>

---

## 🛠️ Technology Stack

<p align="center">

<img src="https://img.shields.io/badge/React-Frontend-059669?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/React%20Router-Routing-047857?style=for-the-badge&logo=reactrouter&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux%20Toolkit-State%20Management-065F46?style=for-the-badge&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-Backend-15803D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-API-064E3B?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-Database-059669?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/JWT-Authentication-10B981?style=for-the-badge&logo=jsonwebtokens&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-Version%20Control-166534?style=for-the-badge&logo=git&logoColor=white"/>

</p>

---

<div align="center">

## 🩺 Secure Care. Simple Appointments.

<strong>Medi Track — MERN · Authentication · Authorization · Appointment Management</strong>

<br><br>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:064E3B,50:059669,100:34D399&height=120&section=footer" width="100%"/>

</div>
