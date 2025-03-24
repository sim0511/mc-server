import mongoose, { Document, Schema, model } from "mongoose";

export interface ITaskAssignment extends Document {
  taskId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  dueDate: Date;
  completed: boolean;
  completedAt?: Date | null;
  photoUrl?: string | null;
  createdAt?: Date;
}

const TaskAssignmentSchema = new Schema<ITaskAssignment>({
  taskId: { type: Schema.Types.ObjectId, ref: "CleaningTask", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  dueDate: { type: Date, required: true },
  completed: { type: Boolean, default: false },
  completedAt: { type: Date, default: null },
  photoUrl: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

const TaskAssignmentModel = model<ITaskAssignment>("TaskAssignment", TaskAssignmentSchema);
export default TaskAssignmentModel;
