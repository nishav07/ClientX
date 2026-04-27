import express from 'express';
const router = express.Router();
import { signup,login } from '../controllers/auth.js';
import { verifyToken } from '../middlewares/jwtAuth.js';
import { dashboard,addLeads,statusUpdate,filterData } from '../controllers/user.js';

router.post("/signup",signup);
router.post("/login",login);
router.get("/dashboard",verifyToken,dashboard);
router.post("/addLeads",verifyToken,addLeads);
router.put("/statusUpdate/:id",verifyToken,statusUpdate);
router.get("/filterData",verifyToken,filterData);

export default router;
