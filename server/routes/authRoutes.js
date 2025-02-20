import express from "express"
import { loginUser, registerUser } from "../controller/userController";

const router = express.Router();

//Register Route
router.post('/register', registerUser)

//Login Route
// router.post('/login', loginUser)

export default router;