"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Loader2Icon } from "lucide-react";

const FormSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(1, "Subject  is required."),
  message: z.string().min(1, "Message is required.")
});

export function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false); //
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });
  const { toast } = useToast();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);

    // Sending data to the backend using axios
    setIsSubmitting(true);
    axios
      .post("/api/routes/sendEmail", data)
      .then((response) => {
        setIsSubmitting(false);
        toast({
          title: "Your Request sent successfully!",
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <p className="text-white">
                You will be contacted via email at {data.email} with response to
                your request.
              </p>
            </div>
          )
        });
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("There was a problem with the axios request:", error);
        toast({
          title: "Submission Failed",
          description:
            "There was an issue submitting the form. Please try again.",
          variant: "destructive"
        });
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
        {/* Full Name Field */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="flex flex-col lg:flex-row lg:items-center gap-4">
              <FormLabel className="lg:w-[150px] text-gray-700 font-medium">
                Full Name
              </FormLabel>
              <FormControl className="w-full lg:max-w-[400px]">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  {...field}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#f5f5f5]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col lg:flex-row lg:items-center gap-4">
              <FormLabel className="lg:w-[150px] text-gray-700 font-medium">
                Email
              </FormLabel>
              <FormControl className="w-full lg:max-w-[400px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#f5f5f5]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="flex flex-col lg:flex-row lg:items-center gap-4">
              <FormLabel className="lg:w-[150px] text-gray-700 font-medium">
                Subject
              </FormLabel>
              <FormControl className="w-full lg:max-w-[400px]">
                <input
                  type="text"
                  placeholder="Enter mail subject"
                  {...field}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#f5f5f5]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col lg:flex-row lg:items-start gap-4">
              <FormLabel className="lg:w-[150px] text-gray-700 font-medium">
                Message
              </FormLabel>
              <FormControl className="w-full">
                <textarea
                  cols={30}
                  rows={10}
                  {...field}
                  className="w-full mt-1 bg-[#f5f5f5] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Your Message"
                ></textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex relative h-12 font-bold animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#3BC7B0,55%,#000103)] bg-[length:200%_100%] px-6  text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          {isSubmitting ? (
            <Loader2Icon className=" animate-spin" />
          ) : (
            <h1 className="">Submit Form</h1>
          )}
        </button>
      </form>
    </Form>
  );
}