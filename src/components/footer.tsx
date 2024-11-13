import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { Loader2Icon } from "lucide-react";

const Footer = () => {
  const [isMessageFormOpen, setIsMessageFormOpen] = useState(false);

  const toggleMessageForm = () => {
    setIsMessageFormOpen(!isMessageFormOpen);
  };

  return (
    <footer className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8 mt-40">
      {/* ... existing footer content ... */}
      <div className="flex flex-col justify-center items-center py-10  relative">
        <Link href={"/"} className="flex items-center mb-4">
          <div className="font-bold text-sm flex items-center justify-center text-white space-x-2 md:text-xl">
            <Image
              src="/assets/images/5617318_family-gathered-around-jigsaw-puzzle.jpg"
              alt="Azubike"
              width={32}
              height={32}
              className=" rounded-full h-8 w-8 mr-2"
            />

          </div>
          <h2 className="text-xl font-bold">Azubike Pascal</h2>
        </Link>
        {/* ... rest of the existing content ... */}
        <div className="flex items-center flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          <a className="text-zinc-100 text-sm relative" href="/about">
            <span className="relative z-10 px-2 py-2 inline-block">About</span>
          </a>
          <a className="text-zinc-100 text-sm relative" href="/projects">
            <span className="relative z-10 px-2 py-2 inline-block">
              Projects
            </span>
          </a>
         
          <a className="text-zinc-100 text-sm relative" href="/blogs">
            <span className="relative z-10 px-2 py-2 inline-block">Blogs</span>
          </a>
         
        </div>
        <p className="text-zinc-200 text-sm font-light text-center max-w-fit mx-auto mt-8 border-t border-zinc-800 pt-4">
          © {new Date().getFullYear()} Azubike Pascal. All rights reserved.
        </p>
        <div className="flex flex-row justify-center space-x-2 mt-2">
          <a
            href="https://wa.me/2349095606300"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-zinc-500 text-sm relative"
          >
            <div className="relative z-10 px-2 py-2 inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="lucide-icon"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/azubike-pascal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-zinc-500 text-sm relative"
          >
            <div className="relative z-10 px-2 py-2 inline-block">
              <Linkedin />
            </div>
          </a>
          <a
            href="https://github.com/pascal-tech1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-zinc-500 text-sm relative"
          >
            <div className="relative z-10 px-2 py-2 inline-block">
              <Github />
            </div>
          </a>
        </div>

        <div className="fixed right-4 md:right-10 bottom-10 flex flex-col items-end z-[999999]">
          <button
            onClick={toggleMessageForm}
            className="bg-zinc-700 w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 hover:shadow-xl transition duration-200 shadow-lg"
          >
            <MessageCircle className="w-6 h-6 text-zinc-100" />
          </button>

          <AnimatePresence>
            {isMessageFormOpen && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-800 rounded-lg shadow-xl p-4 md:p-10 mt-4 w-80 md:w-96"
              >
                <h3 className="text-white text-lg font-semibold mb-2">
                  Have a question? Drop in your message 👇
                </h3>
                <p className="text-zinc-300 text-sm mb-4">
                  It won&apos;t take more than 10 seconds. Shoot your shot. 😉
                </p>
                <ContactUs />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FormSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
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
          title: "Message Sent!",
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <p className="text-white">
                We&apos;ve received your message and will get back to you soon.
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
          name="name"
          render={({ field }) => (
            <FormItem className="">
              <FormControl className="">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  {...field}
                  className="w-full bg-zinc-700 text-white p-2 rounded mb-2"
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
            <FormItem className="">
              <FormControl className="">
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...field}
                  className="w-full bg-zinc-700 text-white p-2 rounded mb-2"
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
            <FormItem className="">
              <FormControl className="">
                <textarea
                  rows={3}
                  {...field}
                  className="w-full bg-zinc-700 text-white p-2 rounded mb-2"
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
          className="flex items-center justify-center w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
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
