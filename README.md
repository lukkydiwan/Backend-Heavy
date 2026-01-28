# Scalable REST API with Authentication & Role-Based Access Control

## 📌 Assignment Overview
This project implements a **Scalable REST API with Authentication and Role-Based Access Control**, along with a **basic frontend UI** to test and interact with the APIs.

The backend is the primary focus and demonstrates clean API design, secure authentication using JWT, role-based authorization (User/Admin), CRUD operations on a secondary entity (Tasks), and API documentation using Swagger.

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Token) for authentication
- bcrypt for password hashing
- Swagger (OpenAPI 3.0) for API documentation

### Frontend
- Vanilla HTML, CSS, and JavaScript

---

## ✨ Core Features Implemented

### 🔐 Authentication & Authorization
- User registration and login APIs
- Password hashing using bcrypt
- JWT-based authentication
- Secure token handling using Authorization headers
- Role-based access control (User vs Admin)

### 🧩 Role-Based Access
- Normal users can access their own resources
- Admin users have access to admin-only APIs
- Role validation handled via middleware

### 📝 Task Management (CRUD)
- Create tasks
- Read tasks (user-specific)
- Update tasks (only by owner)
- Delete tasks (only by owner)
- Ownership checks enforced at API level

### 👑 Admin APIs
- Admin-only endpoint to fetch all users
- Protected using both JWT and role middleware

### 📑 API Documentation
- Swagger UI for interactive API documentation
- JWT authentication supported inside Swagger
- APIs grouped by Auth, Tasks, and Admin

### 🖥 Basic Frontend UI
- Register and login users
- JWT-protected dashboard
- Perform CRUD operations on tasks
- Display success and error messages from APIs

---

## 📂 Project Structure

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
├── index.html
├── dashboard.html
└── app.js





This modular structure allows easy scaling and addition of new features.

---

## 🔗 API Endpoints

### 🔑 Authentication APIs
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/v1/auth/register` | Register new user |
| POST | `/api/v1/auth/login` | Login user |
| GET  | `/api/v1/auth/me` | Get logged-in user (JWT required) |

### 📝 Task APIs (JWT Protected)
| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/api/v1/tasks` | Create task |
| GET | `/api/v1/tasks` | Get user tasks |
| PUT | `/api/v1/tasks/:id` | Update task |
| DELETE | `/api/v1/tasks/:id` | Delete task |

### 👑 Admin APIs (Admin Only)
| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/api/v1/admin/users` | Get all users |

---

## 🔄 Authentication Flow
1. User registers or logs in
2. Server returns a JWT token
3. Client sends the token in request headers:
4. Middleware validates token and user role
5. Access is granted or denied accordingly

---

## 📖 API Documentation (Swagger)

Swagger UI is available at:
http://localhost:5000/api-docs



Features:
- View all API endpoints
- JWT authentication using Authorize button
- Test APIs directly from browser

---

## 🔒 Security Practices
- Passwords are securely hashed using bcrypt
- JWT tokens include expiration
- Protected routes require valid JWT
- Role-based access control prevents unauthorized access
- Admin role assignment is restricted and not allowed via public registration

---

## 🚀 Scalability & Deployment Readiness
- Stateless JWT authentication enables horizontal scaling
- Modular architecture supports microservices
- Redis can be added for caching
- Docker and Nginx can be used for production deployment
- Logging and rate-limiting can be added easily

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone <your-github-repo-url>
cd backend


###2️⃣ Install Dependencies
###3️⃣ Environment Variables

Create a .env file in the backend root:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

###4️⃣ Run Backend Server
npm run dev

###5️⃣ Run Frontend

Open frontend/index.html directly in a browser.
