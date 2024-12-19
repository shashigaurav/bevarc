import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required."],
  },
  mobile: {
    type: Number,
    required: [true, "Mobile Number is required."],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "Address is required."],
  },
  services: [
    {
      type: String,
      required: true,
    },
  ],
});

export const Booking =
  mongoose.models?.booking || mongoose.model("booking", bookingSchema);
