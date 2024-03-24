import mongoose from "mongoose";
import z from "zod";

export const Z_UserSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email(),
  password: z.string().min(6),
});

export type UserModelType = z.infer<typeof Z_UserSchema>;

export const UserSchema = new mongoose.Schema<UserModelType>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// getAllUsers
UserSchema.statics.getAllUsers = async function () {
  return this.find();
};

// getUserById
UserSchema.statics.getUserById = async function (id: string) {
  return this.findById(id);
};

export const UserModel = mongoose.model<UserModelType>("User", UserSchema);
