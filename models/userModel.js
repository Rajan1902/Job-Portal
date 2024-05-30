import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
// user Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    location: {
      type: String,
      default: "India",
    },
  },
  { timestamps: true }
);
//middlewares
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
export default mongoose.model("User", userSchema);
