import { assignTaskToUser } from "../controllers/taskAssignmentController.js";
import express from "express";
import { getMyAssignments } from "../controllers/taskAssignmentController.js";

const router = express.Router();

router.post("/assignments", assignTaskToUser);
router.get("/assignments/me", getMyAssignments);

export default router;
