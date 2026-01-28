# Scalable Full-Stack REST API with Authentication & Role-Based Access Control

## 📌 Project Overview
This project is a **full-stack scalable REST API system** developed as part of an assignment.  
It demonstrates backend engineering principles such as **secure authentication, role-based access control, CRUD operations**, and **API documentation**, along with a **basic React frontend** to interact with the APIs.

The backend is the primary focus, while the frontend is intentionally kept simple and functional.

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Local by default, Atlas optional)
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt
- CORS
- Swagger (OpenAPI 3.0)

### Frontend
- React (Vite)
- JavaScript (ES6)
- Fetch API

---

## ✨ Features Implemented

### 🔐 Authentication & Authorization
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes using middleware
- Role-based access control (User / Admin)

### 📝 Task Management (CRUD)
- Create tasks
- View logged-in user’s tasks
- Update tasks (owner only)
- Delete tasks (owner only)
- Ownership checks enforced at API level

### 👑 Admin APIs
- Admin-only endpoint to fetch all users
- Access protected using both JWT and role middleware
- Admin role not assignable via public registration

### 🧾 API Documentation
- Swagger UI for interactive API documentation
- JWT authentication supported inside Swagger
- APIs grouped into Auth, Tasks, and Admin sections

### 🖥 Frontend (React)
- User registration and login
- JWT-protected dashboard
- Task creation and deletion
- Displays API success and error messages
- Communicates with backend via REST APIs

---

## 📂 Project Structure
```
backend/
├── src/
│ ├── config/
│ │ ├── db.js
│ │ └── swagger.js
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middlewares/
│ ├── utils/
│ ├── app.js
│ └── server.js
└── package.json

frontend/
├── src/
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ └── Dashboard.jsx
│ ├── api.js
│ ├── App.jsx
│ └── main.jsx
└── package.json
```



---

## 🔗 API Endpoints

### 🔑 Authentication
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/v1/auth/register` | Register user |
| POST | `/api/v1/auth/login` | Login user |
| GET  | `/api/v1/auth/me` | Get logged-in user (JWT required) |

### 📝 Tasks (JWT Protected)
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/v1/tasks` | Create task |
| GET | `/api/v1/tasks` | Get user tasks |
| PUT | `/api/v1/tasks/:id` | Update task |
| DELETE | `/api/v1/tasks/:id` | Delete task |

### 👑 Admin (Admin Only)
| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/api/v1/admin/users` | Get all users |

---

## 🔄 Authentication Flow
1. User registers or logs in
2. Server returns a JWT token
3. Client sends token in headers:
```
Authorization: Bearer <JWT_TOKEN>
```
4. Middleware validates token and role
5. Access is granted or denied

---

## 📖 API Documentation (Swagger)

Swagger UI is available at:
[http://localhost:5000/api-docs]


Features:
- View all endpoints
- JWT authentication via **Authorize** button
- Test APIs directly from browser

---

## 🔒 Security Practices
- Passwords hashed using bcrypt
- JWT tokens have expiration
- Protected routes require valid JWT
- Role-based access control prevents privilege escalation
- Admin role assignment restricted (manual only)

---

## 🌐 CORS Configuration
CORS is enabled in the backend to allow communication between:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

This allows seamless frontend-backend integration during development.

---

## 🚀 Scalability & Future Improvements
- Stateless JWT authentication allows horizontal scaling
- Modular architecture supports microservices
- Redis can be added for caching
- Docker and Nginx can be used for deployment
- Rate limiting and logging can be added
- Frontend can be extended with role-based UI

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone <your-github-repo-url>
```
---
### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

Create ```.env``` file:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/assignment_db
JWT_SECRET=your_secret_key
```

Run backend:
```bash
npm run dev
```
---
### 3️⃣ Frontend Setup (React)
```bash
cd frontend
npm install
npm run dev
```

Open:

http://localhost:5173
