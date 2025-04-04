import { NextFunction, Request, Response } from "express";

import CleaningTaskModel from "../models/CleaningTask.model.js";
import TaskAssignmentModel from "../models/taskAssignment.model.js";
import UserModel from "../models/User.model.js";
import uploadDataToS3 from "../utils/uploadToS3.js";
import { v4 as uuidv4 } from "uuid";

export const assignTaskToUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { taskId, userId, dueDate } = req.body;

    // Optional: Validate existence
    const task = await CleaningTaskModel.findById(taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });

    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const assignment = await TaskAssignmentModel.create({
      taskId,
      userId,
      dueDate,
      completed: false,
    });

    return res.status(201).json({
      message: "Task assigned successfully",
      data: assignment,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyAssignments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user?.userId || req.query.userId;

    const tasks = await TaskAssignmentModel.find({ userId })
      .populate("taskId") 
      .sort({ dueDate: 1 });

    res.status(200).json({
      message: "Your assigned tasks",
      data: tasks,
    });
    console.log(tasks);
  } catch (error) {
    next(error);
  }
};

export const getAllAssignments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const assignments = await TaskAssignmentModel.find()
      .populate('taskId')  
      .populate('userId')  
      .sort({ dueDate: 1 });

    res.status(200).json(assignments);
  } catch (error) {
    next(error);
  }
};

export const markAssignmentComplete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { assignmentId, photoUrl } = req.body;

    const assignment = await TaskAssignmentModel.findById(assignmentId);

    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    assignment.completed = true;
    
    await assignment.save();

    return res.status(200).json({
      message: "Assignment marked as completed",
      data: assignment,
    });
  } catch (error) {
    next(error);
  }
};

export const uploadAssignmentPhoto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { base64Image,assignmentId } = req.body;

    if (!base64Image) {
      return res.status(400).json({ message: 'base64 image data is required' });
    }

    // Get image extension (png, jpeg, etc.)
    const match = base64Image.match(/^data:image\/(\w+);base64,/);
    const ext = match?.[1];

    if (!ext) {
      return res.status(400).json({ message: 'Invalid base64 image format' });
    }
    
    const assignment = await TaskAssignmentModel.findById(assignmentId);
    
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    
    const fileName = `assignment-photos/${uuidv4()}.${ext}`;

    const photoUrl = await uploadDataToS3(fileName, base64Image, ext);
    
    if (!photoUrl) {
      return res.status(500).json({ message: 'Failed to upload image' });
    }
    assignment.photoUrl = photoUrl;
    assignment.save();
    console.log(photoUrl);
    res.status(200).json({
      message: 'Image uploaded successfully',
      photoUrl,
    });
  } catch (error) {
    next(error);
  }
};
