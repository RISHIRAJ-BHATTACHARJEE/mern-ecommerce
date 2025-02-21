import express from "express"
import { loginUser, registerUser, loginAdmin } from "../controller/authController";
import { currentUser } from "../middlewares/authMiddleware";

const router = express.Router();

//Register Route
router.post('/register', registerUser)

//Login Route
router.post('/login', loginUser)

//Admin Login Route
router.post('/login', loginAdmin)

//Current user
router.get("/current", currentUser, async(req, res) => res.json(req.user))

export default router;