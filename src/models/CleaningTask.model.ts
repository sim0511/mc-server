import { AREAS, ASSIGNED_ROLES, FREQUENCIES, TASK_NAMES } from "../config/constants.js";
import mongoose, { Document, Model, Schema, model } from "mongoose";

import { ICleaningTask } from "../shared/interfaces/ICleaningTask.js";

const CleaningTaskSchema: Schema<ICleaningTask & Document> = new Schema({
  taskName: { type: String, required: true, enum: TASK_NAMES },
  area: { type: String, required: true, enum: AREAS },
  frequency: { type: String, required: true, enum: FREQUENCIES },
  assignedTo: { type: String, required: true, enum: ASSIGNED_ROLES },
  completed: { type: Boolean, default: false },
  completedBy: { type: String, default: null, ref: "User" }, // Reference userId
  completedAt: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now },
});

const CleaningTaskModel: Model<ICleaningTask & Document> = model("CleaningTask", CleaningTaskSchema);
export default CleaningTaskModel;
