"use server";

import { dbConnect } from "@/lib/db";
import { Contact } from "@/models/Contact";
import { contactSchema } from "@/schemas/zod";
import { revalidatePath } from "next/cache";

export const createContact = async (data) => {
  try {
    await dbConnect();
    const validatedData = contactSchema.safeParse(data);

    if (validatedData.success) {
      const { name, mobile, email, message } = validatedData.data;

      const contact = await Contact.findOne({ $or: [{ mobile }, { email }] });

      if (contact) {
        contact.messages.push(message);
        await contact.save();
      } else {
        const newContact = await Contact.create({
          name,
          mobile,
          email,
          messages: [message],
        });
      }
      revalidatePath("/admin");

      return {
        message: "Thank You for Contacting Us. We will reach you soon.",
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

export const getContacts = async () => {
  try {
    await dbConnect();

    const contacts = await Contact.find();

    return {
      message: "Contacts fetched successfully.",
      data: contacts,
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
