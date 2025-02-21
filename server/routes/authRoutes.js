import express from "express"
import { loginUser, registerUser, loginAdmin } from "../controller/authController";
import { currentUser } from "../middlewares/authMiddleware";

const router = express.Router();

//Register Route
router.post('/users/register', registerUser)

//Login Route
router.post('/users/login', loginUser)

//Admin Login Route
router.post('/admin/login', loginAdmin)

//Current user
router.get("/users/current", currentUser, async(req, res) => res.json(req.user))

export default router;