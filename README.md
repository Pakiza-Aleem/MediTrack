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


<br><br>

<img src="https://capsule-render.vercel.app/api?type=rect&color=059669&height=2&width=700" />

</div>

---

## 📖 About

**Medi Track** is a full-stack **patient appointment management system** developed using the **MERN stack**.

The application provides separate experiences for **patients and authorized staff**.

Patients can register, securely log in, book appointments, view their own appointments, cancel requests, and track appointment status.

Staff members can access the clinic-wide appointment schedule, view patient information, and confirm or cancel appointments through **role-based authorization**.

The project focuses on implementing a realistic full-stack workflow involving **authentication, authorization, session persistence, resource ownership, REST APIs, and database management**.

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
* Secure logout
* Password reset

</td>

<td width="33%" valign="top">

### 👤 Patient

* Patient dashboard
* Book appointments
* View own appointments
* Cancel appointments
* Track appointment status
* Protected patient access

</td>

<td width="33%" valign="top">

### 📅 Appointments

* Doctor selection
* Reason for visit
* Scheduled date & time
* Appointment status
* Ownership-based access
* Persistent records

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
* Staff-only routes

</td>

<td width="33%" valign="top">

### 🛡️ Security

* bcrypt password hashing
* JWT expiration
* HttpOnly cookies
* Authentication middleware
* Role-based authorization
* Ownership checks

</td>

<td width="33%" valign="top">

### 📊 Management

* Appointment requests
* Status tracking
* Patient-specific records
* Staff management
* Database persistence
* Request management

</td>

</tr>

<tr>

<td width="33%" valign="top">

### 🔄 Sessions

* Secure authentication state
* Session restoration
* `/auth/me`
* Cookie-based authentication
* Secure logout

</td>

<td width="33%" valign="top">

### 🎨 Interface

* Healthcare-focused UI
* Authentication screens
* Patient dashboard
* Appointment screens
* Staff dashboard
* Responsive layouts

</td>

<td width="33%" valign="top">

### 🧩 Architecture

* MERN stack
* REST APIs
* Redux Toolkit
* Express middleware
* MongoDB & Mongoose
* Client-server separation

</td>

</tr>
</table>

---

## 🔄 How It Works

### 👤 Patient Flow

```text
Register
   ↓
Login
   ↓
Authenticated Session
   ↓
Patient Dashboard
   ↓
Book Appointment
   ↓
Appointment Requested
   ↓
Track Status
   ↓
Cancel if Needed
```

### 👨‍⚕️ Staff Flow

```text
Staff Login
   ↓
Role Verification
   ↓
Staff Dashboard
   ↓
View Clinic Appointments
   ↓
Review Patient Information
   ↓
Confirm / Cancel
   ↓
Appointment Status Updated
```

---

## 🖥️ Screenshots

### 🔑 Login Screen

<p align="center">
  <img src="screenshots/Screenshot%202026-08-21%20195121.png" alt="Medi Track Login Screen" width="850"/>
</p>

### 📝 Registration Screen

<p align="center">
  <img src="screenshots/Screenshot%202026-08-21%20195134.png" alt="Medi Track Registration Screen" width="850"/>
</p>

### 📅 My Appointments

<p align="center">
  <img src="screenshots/Screenshot%202026-08-21%20195250.png" alt="Medi Track My Appointments" width="850"/>
</p>

### 👨‍⚕️ Staff Dashboard

<p align="center">
  <img src="screenshots/Screenshot%202026-08-21%20195438.png" alt="Medi Track Staff Dashboard" width="850"/>
</p>

---

## 🔒 Security & Authorization

Medi Track uses authentication and authorization as separate layers.

```text
Login
  ↓
Credentials Verified
  ↓
JWT Created
  ↓
JWT Stored in HttpOnly Cookie
  ↓
Protected Request
  ↓
Authentication Middleware
  ↓
req.user Identified
  ↓
Role / Ownership Check
  ↓
Authorized Response
```

### Authentication

* Passwords are hashed using **bcrypt**
* JWTs are used for authentication
* Authentication tokens are stored in **HttpOnly cookies**
* Tokens are not stored in Redux
* Authentication state can be restored using `/auth/me`
* Logout clears the authentication cookie

### Authorization

Staff functionality requires a valid staff role.

Patient appointment operations are restricted by ownership using the authenticated user's ID rather than trusting an ID supplied by the client.

This prevents a patient from accessing another patient's appointment simply by changing the appointment ID.

---

## 🗄️ Data Model

### User

```text
User
├── Name
├── Email
├── Password
├── Role
└── Password Reset Data
```

### Appointment

```text
Appointment
├── Patient / Owner
├── Doctor
├── Reason
├── Date & Time
├── Status
├── Created At
└── Updated At
```

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

#### 1. Install Backend Dependencies

```bash
cd server
npm install
```

#### 2. Install Frontend Dependencies

```bash
cd ../client
npm install
```

#### 3. Configure Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

> Never commit `.env` or real credentials to GitHub.

#### 4. Start the Backend

```bash
cd server
npm run dev
```

The API runs at:

```text
http://localhost:5000
```

#### 5. Start the Frontend

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

## 🧪 Project Scope & Limitations

Medi Track is a **working educational and portfolio project** focused on the core appointment-management workflow.

It intentionally does not attempt to provide the complete functionality of a production healthcare platform.

### Current Limitations

* No real email service for password-reset emails
* Password-reset links are exposed through the server console during development
* No real doctor management system
* No doctor availability calendar
* No automated appointment conflict detection
* No email or SMS notifications
* No payment processing
* No medical records
* No prescriptions
* No insurance management
* No real-time communication
* No production-grade healthcare compliance implementation

These limitations are intentional and define the current scope of the project.

---

## 🔮 Future Improvements

* Doctor management and availability
* Automated scheduling and conflict detection
* Email password-reset delivery
* Appointment confirmation emails
* SMS notifications
* Appointment reminders
* Admin dashboard
* Doctor-specific dashboards
* Medical record management
* Production deployment and security hardening

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

<tr>

<td width="50%" valign="top">

### Backend Concepts

* Express Middleware
* RESTful Routing
* Database Queries
* Request Validation
* Error Handling
* Environment Variables

</td>

<td width="50%" valign="top">

### Security Concepts

* bcrypt Hashing
* JWT Expiration
* Secure Cookies
* Role Validation
* Resource Ownership
* Protected API Endpoints

</td>

</tr>
</table>

---

## 🛠️ Technology Stack

<p align="center">

<img src="https://img.shields.io/badge/React-Frontend-059669?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/React%20Router-Routing-047857?style=for-the-badge&logo=reactrouter&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux%20Toolkit-State%20Management-065F46?style=for-the-badge&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-HTTP%20Client-15803D?style=for-the-badge&logo=axios&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-Backend-16A34A?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-API-064E3B?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-Database-059669?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Mongoose-ODM-047857?style=for-the-badge&logo=mongoose&logoColor=white"/>
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
