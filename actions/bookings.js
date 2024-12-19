"use server";

import { dbConnect } from "@/lib/db";
import { Booking } from "@/models/Booking";
import { bookingSchema } from "@/schemas/zod";
import { revalidatePath } from "next/cache";

export const createBooking = async (data) => {
  try {
    await dbConnect();
    const validatedData = bookingSchema.safeParse(data);

    if (validatedData.success) {
      const { name, mobile, service, address } = validatedData.data;

      const booking = await Booking.findOne({ mobile });

      if (booking) {
        booking.services.push(service);
        await booking.save();
      } else {
        const newBooking = await Booking.create({
          name,
          mobile,
          services: [service],
          address,
        });
      }

      revalidatePath("/admin");

      return {
        message: "Booking done.",
        success: true,
        type: "success",
      };
    }
  } catch (error) {
    return {
      message: error.message,
      success: false,
      type: "error",
    };
  }
};

export const getBookings = async () => {
  try {
    await dbConnect();

    const bookings = await Booking.find();

    return {
      message: "Bookings fetched successfully.",
      data: bookings,
      success: true,
      type: "success",
    };
  } catch (error) {
    return {
      message: error.message,
      success: false,
      type: "error",
    };
  }
};
