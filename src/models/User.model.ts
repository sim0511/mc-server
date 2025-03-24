import mongoose, { Model, Schema, model } from "mongoose";

import { IUser } from "../shared/interfaces/IUser.js";

const AvailabilitySchema = new Schema({
  day: { type: String, required: true },
  availableFrom: { type: String, required: true },
  availableTo: { type: String, required: true },
}, { _id: false });

const UserSchema = new Schema<IUser>({
  userId: {
    type: String,
    required: true,
    unique: true,
    default: function () {
      return this._id.toString();
    }
  },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String },
  googleId: { type: String },
  profilePicture: { type: String },
  lastLoginAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  role: {
    type: String,
    required: true,
    enum: ["employee", "manager", "admin"],
    default: "employee"
  },
  weeklyAvailability: {
    type: [AvailabilitySchema],
    required: function () {
      return this.role === "employee";
    },
    default: undefined
  }
});

const UserModel: Model<IUser> = model<IUser>("User", UserSchema);
export default UserModel;
