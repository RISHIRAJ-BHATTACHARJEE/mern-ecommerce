import express from "express"
import { loginUser, registerUser, loginAdmin } from "../controller/authController";

const router = express.Router();

//Register Route
router.post('/register', registerUser)

//Login Route
router.post('/login', loginUser)

//Admin Login Route
router.post('/login', loginAdmin)


export default router;