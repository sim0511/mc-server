import { Area, AssignedRole, Frequency, TaskName } from "../../config/constants.js";

export interface ICleaningTask {
  taskName: TaskName;
  area: Area;
  frequency: Frequency;
  assignedTo: AssignedRole;
  completed?: boolean;
  completedBy?: string | null; // User ID
  completedAt?: Date | null;
  createdAt?: Date;
}
