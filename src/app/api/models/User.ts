import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcryptjs';

export interface IUser extends Document {

 username: string;
  password: string;

}

const userSchema = new mongoose.Schema<IUser>(
  {

   username: { type: String, required: true },
    password: { type: String, required: true },

  },
  {
    timestamps: true
  }
);

// Encrypt password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
