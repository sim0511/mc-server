import { NextFunction, Request, Response } from "express";

import CleaningTaskModel from "../models/CleaningTask.model.js";
import TaskAssignmentModel from "../models/taskAssignment.model.js";
import UserModel from "../models/User.model.js";

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
