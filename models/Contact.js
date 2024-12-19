import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required."],
  },
  mobile: {
    type: Number,
    required: [true, "Mobile Number is required."],
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required."],
  },
  messages: [
    {
      type: String,
      required: true,
    },
  ],
});

export const Contact =
  mongoose.models?.contact || mongoose.model("contact", contactSchema);
