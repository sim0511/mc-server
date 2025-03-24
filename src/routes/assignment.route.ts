import { assignTaskToUser } from "../controllers/taskAssignmentController.js";
import express from "express";

const router = express.Router();

router.post("/assignments", assignTaskToUser);

export default router;
