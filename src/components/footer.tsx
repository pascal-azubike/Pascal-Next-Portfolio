import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Twitter, Linkedin, Github } from "lucide-react";
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
          <a className="text-zinc-100 text-sm relative" href="/contributions">
            <span className="relative z-10 px-2 py-2 inline-block">
              Contributions
            </span>
          </a>
          <a className="text-zinc-100 text-sm relative" href="/blogs">
            <span className="relative z-10 px-2 py-2 inline-block">Blogs</span>
          </a>
          <a className="text-zinc-100 text-sm relative" href="/events">
            <span className="relative z-10 px-2 py-2 inline-block">Events</span>
          </a>
        </div>
        <p className="text-zinc-200 text-sm font-light text-center max-w-fit mx-auto mt-8 border-t border-zinc-800 pt-4">
          © 2024 Devpro Portfolio Template. All rights reserved.
        </p>
        <div className="flex flex-row justify-center space-x-2 mt-2">
          <a
            href="#"
            className="hover:text-gray-400 text-zinc-500 text-sm relative "
          >
            <div className="relative z-10 px-2 py-2 inline-block">
              <Twitter />
            </div>
          </a>
          <a
            href="#"
            className="hover:text-gray-400 text-zinc-500 text-sm relative"
          >
            <div className="relative z-10 px-2 py-2 inline-block">
              <Linkedin />
            </div>
          </a>
          <a
            href="#"
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
