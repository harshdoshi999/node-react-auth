# node-react-auth

Authentication system with NodeJS (ExpressJS) + ReactJS + TailwindCSS + SQLite

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/harshdoshi999/node-react-auth.git
cd node-react-auth
```

### 2. Backend Setup (NodeJS)

Navigate to the project's root directory and run the following commands:

```bash
npm install
```

#### Run the Backend Server:

```bash
cd backend
node server.js
```

The backend will run on `http://localhost:5000`.

### 3. Frontend Setup (ReactJS + TailwindCSS)

Navigate to the project's root directory and run the following commands:

```bash
cd frontend
npm install
```

#### Run the Frontend Server:

```bash
npm start
```

The frontend will run on `http://localhost:3000`.

### 4. View the Login Page

You can access the login page in your browser by navigating to `http://localhost:3000/login`.

## API Routes

| Method | Route                       | Description                |
| ------ | --------------------------- | -------------------------- |
| POST   | `/api/auth/signup`          | Register a new user        |
| POST   | `/api/auth/login`           | Login a user               |
| POST   | `/api/auth/forgot-password` | Send a password reset link |
| POST   | `/api/auth/reset-password`  | Reset the user's password  |

## Frontend Routes

| Path                     | Component          | Description            |
| ------------------------ | ------------------ | ---------------------- |
| `/signup`                | Signup.jsx         | User registration page |
| `/login`                 | Login.jsx          | User login page        |
| `/forgot-password`       | ForgotPassword.jsx | Forgot password page   |
| `/reset-password/:token` | ResetPassword.jsx  | Password reset page    |

### Commands to Start the Project

- **Start Backend**: `cd backend && node server.js`
- **Start Frontend**: `cd frontend && npm start`

### Links

- [Login Page](http://localhost:3000/login)
