import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  passwordHash?: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  googleId?: string;
  profilePicture?: string;
  lastLoginAt?: Date;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String,
    required: function(this:any){
      return !this.googleId; // Required if not a Google user
    }
   },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  googleId: { type: String, unique: true, sparse: true },
  profilePicture: { type: String },
  lastLoginAt: { type: Date },
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;
