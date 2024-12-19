"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Loader, Send } from "lucide-react";
import { contactSchema } from "@/schemas/zod";
import { useState } from "react";
import { createContact } from "@/actions/contact";
import { toast } from "sonner";
import SuccessPopup from "./successPopup";

function ContactForm() {
  const [isContacted, setIsContacted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      const validatedData = contactSchema.safeParse(values);
      if (validatedData.success) {
        const res = await createContact(values);
        if (res.success) {
          setIsContacted(true);
        }
        toast[res.type](res.message);
      } else {
        toast.error(validatedData.error.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  return isContacted ? (
    <SuccessPopup
      title={"Query Reccieved"}
      description={"Thank You for contacting Us. We will reach you shortly."}
      isHome={false}
    />
  ) : (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full p-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-accent">Name</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  className="dark:placeholder:text-gray-500 placeholder:text-gray-300"
                  placeholder="Shashi Gaurav"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-accent">Mobile no.</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  onChange={(e) => {
                    field.onChange(parseInt(e));
                  }}
                  type="number"
                  className="dark:placeholder:text-gray-500 placeholder:text-gray-300"
                  placeholder="9876543210"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-accent">Email</FormLabel>
              <FormControl>
                <Input
                  disabled={loading}
                  className="dark:placeholder:text-gray-500 placeholder:text-gray-300"
                  placeholder="shashigaurav789@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-accent">Messsage</FormLabel>
              <FormControl>
                <Textarea
                  disabled={loading}
                  rows={5}
                  placeholder="Tell us a little bit about your query"
                  className="resize-none dark:placeholder:text-gray-500 placeholder:text-gray-300"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={loading}
          type="submit"
          className="ml-auto hover:bg-accent flex items-center gap-2"
        >
          {loading ? (
            <>
              <span>Please wait...</span>
              <Loader className="animate-spin w-3 h-3" />
            </>
          ) : (
            <>
              <span>Submit</span>
              <Send className="w-3 h-3" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
