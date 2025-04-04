import { getAllAssignments, markAssignmentComplete } from "../controllers/taskAssignmentController.js";
import { getMyAssignments, uploadAssignmentPhoto } from "../controllers/taskAssignmentController.js";

import { assignTaskToUser } from "../controllers/taskAssignmentController.js";
import express from "express";

const router = express.Router();

router.post("/assignments", assignTaskToUser);
router.get("/assignments/me", getMyAssignments);
router.get('/allAssignments', getAllAssignments);
router.post('/assignments/complete', markAssignmentComplete);
router.post('/assignments/upload-photo', uploadAssignmentPhoto);
export default router;
