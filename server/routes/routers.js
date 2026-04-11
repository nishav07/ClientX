import express from 'express';
const router = express.Router();
import { signup,login } from '../controllers/auth.js';
import { verifyToken } from '../middlewares/jwtAuth.js';
import { dashboard } from '../controllers/user.js';

router.post("/signup",signup);
router.post("/login",login);
router.get("/dashboard",verifyToken,dashboard);

export default router;
