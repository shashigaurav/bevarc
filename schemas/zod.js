import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 3 characters.",
  }),
  mobile: z.coerce.number(),
  address: z.string().min(10, {
    message: "Address is too short",
  }),
  service: z.string(),
});

export const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 3 characters.",
  }),
  mobile: z.coerce.number(),
  email: z.string().email(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});
