import express from 'express';
const router = express.Router();
import { signup,login } from '../controllers/auth.js';
import { verifyToken } from '../middlewares/jwtAuth.js';
import { dashboard,addLeads,statusUpdate,filterData,deleteLeads,leadData,editLeads} from '../controllers/user.js';

router.post("/signup",signup);
router.post("/login",login);
router.get("/dashboard",verifyToken,dashboard);
router.post("/addLeads",verifyToken,addLeads);
router.put("/statusUpdate/:id",verifyToken,statusUpdate);
router.get("/filterData",verifyToken,filterData);
router.delete("/deleteLeads/:id",verifyToken,deleteLeads);
router.patch("/editLeads/:id",verifyToken,editLeads)
router.get("/api/leads/:id",verifyToken,leadData)

export default router;
