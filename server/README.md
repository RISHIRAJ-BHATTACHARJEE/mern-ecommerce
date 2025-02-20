# User Authentication API - README

## Overview
This backend provides user authentication functionalities such as registration and login. It is built using **Node.js**, **Express.js**, **MongoDB**, and **Zod** for validation.

## Base URL
```
http://localhost:3000/api/v1/users
```

## Prerequisites for Frontend Integration
To interact with this backend, install **Axios** in your frontend project:
```sh
npm install axios
```

## Endpoints and Usage

### 1. Register a User
**Endpoint:**
```
POST /register
```
**Request Body:**
```json
{
    "name": "test_name",
    "email": "testuser@email.com",
    "password": "test_user_password"
}
```
**Response:**
```json
{
    "message": "User created successfully",
    "user": {
        "_id": "65f9cbb48c3e2a1f6a9c01a3",
        "name": "test_name",
        "email": "testuser@email.com"
    }
}
```

### **Axios Implementation for Registration**
```javascript
import axios from "axios";

const registerUser = async (userData) => {
    try {
        const response = await axios.post("http://localhost:3000/api/v1/users/register", userData);
        console.log("User registered:", response.data);
        return response.data;
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
    }
};

// Example Usage:
registerUser({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "securepassword"
});
```

### 2. Login User (Implementation Pending)
The login API is commented out in the backend, but once implemented, you can use Axios similarly to handle user login.

### **Additional Notes:**
- Ensure the backend server is running before making API calls.
- Use environment variables in frontend (`.env` file) to store the API URL instead of hardcoding it.
```env
REACT_APP_API_URL=http://localhost:3000/api/v1/users
```
Then, update Axios calls:
```javascript
const API_URL = process.env.REACT_APP_API_URL;
axios.post(`${API_URL}/register`, userData);
```

---
**Happy Coding! 🚀**

