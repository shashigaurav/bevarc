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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Loader, Send } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { bookingSchema } from "@/schemas/zod";
import { toast } from "sonner";
import { createBooking } from "@/actions/bookings";
import { services } from "@/lib/utils";
import SuccessPopup from "./successPopup";

function BookingForm() {
  const [selectedServioce, setSelectedService] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      mobile: "",
      address: "",
      service: "",
    },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      const validatedData = bookingSchema.safeParse(values);
      if (validatedData.success) {
        const res = await createBooking(values);
        if (res.success) {
          setIsBooked(true);
          window.scrollTo(0, 0);
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

  return isBooked ? (
    <SuccessPopup
      title={"Booking Reccieved"}
      description={"Thank You for booking with Us. We will reach you shortly."}
      className={"mt-20 max-w-lg mx-auto"}
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
              <FormLabel className="text-accent">Mobile Number</FormLabel>
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
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-accent">Address</FormLabel>
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
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-accent">Choose a Service</FormLabel>
              <FormControl>
                <RadioGroup
                  disabled={loading}
                  onValueChange={(e) => {
                    field.onChange(e);
                    setSelectedService(e);
                  }}
                  defaultValue={field.value}
                  className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
                >
                  {services.map((service, index) => (
                    <FormItem
                      key={index}
                      className="w-full h-full flex items-center"
                    >
                      <FormControl>
                        <RadioGroupItem
                          value={service.title}
                          className="hidden"
                        />
                      </FormControl>
                      <FormLabel className="w-full h-full">
                        <Card
                          className={`p-6 w-full h-full transition-colors cursor-pointer ${
                            selectedServioce === service.title
                              ? "bg-accent text-black"
                              : loading
                              ? "pointer-events-none"
                              : "group hover:border-accent transition-colors"
                          }`}
                        >
                          <CardContent className="pt-0 flex justify-center">
                            <service.icon className="w-16 h-16 group-hover:text-accent transition-colors" />
                          </CardContent>
                          <CardHeader className="p-0 text-center">
                            <CardTitle className="group-hover:text-accent transition-colors">
                              {service.title}
                            </CardTitle>
                          </CardHeader>
                        </Card>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
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
              <span>Booking...</span>
              <Loader className="animate-spin w-3 h-3" />
            </>
          ) : (
            <>
              <span>Book Now</span>
              <Send className="w-3 h-3" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}

export default BookingForm;
