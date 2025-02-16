import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    address: {
      type: String,
      trim: true,
    },
    date_of_birth: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", userSchema);
export default UserModel;
