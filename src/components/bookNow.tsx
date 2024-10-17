"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, LoaderIcon } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";
import PrimaryHeading from "./primaryHeading";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

// Define validation schemasubmion
const FormSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  phoneNumber: z.string().min(10, "Phone number is required."),
  email: z.string().email("Invalid email address."),
  quantity: z
    .number()
    .min(1, "Quantity must be at least 1.")
    .transform((val) => Math.max(val, 1)), // Ensure quantity is at least 1
  deliveryDate: z.date({
    required_error: "Estimated delivery date is required."
  }),
  price: z.number().min(0, "Price is required.")
});

export function CalendarForm() {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Extract the id from the URL

  const { isPending, error, data } = useQuery({
    queryKey: [id],
    queryFn: () =>
      axios(`/api/routes/fetchSingleProduct?productId=${id}`).then(
        (res) => res.data
      )
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      quantity: 1 // Set default quantity to 1
    }
  });

  const { toast } = useToast();
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false); //

  const product = data?.product;

  useEffect(() => {
    if (product) {
      setPrice(product.price); // Set the fetched product price
      form.setValue("price", product.price); // Set price in the form
      const quantity = form.getValues("quantity");
      setTotalPrice(product.price * quantity); // Calculate total price
    }
  }, [product, form]);

  useEffect(() => {
    const quantity = form.getValues("quantity");
    setTotalPrice(price * quantity); // Recalculate total price when quantity changes
  }, [form.watch("quantity"), price]);

  // If no product is found, return a "not found" message
  if (isPending) {
    return (
      <h1 className="text-2xl font-bold flex items-center justify-start flex-col space-y-6 md:p-10 lg:px-24">
        Loading .....
      </h1>
    );
  }
  if (error) {
    return (
      <h1 className="text-2xl font-bold flex items-center justify-start flex-col space-y-6 md:p-10 lg:px-24 text-red-400">
        Failed to Fetch Products
      </h1>
    );
  }
  if (!data) {
    return (
      <h1 className="text-2xl font-bold flex items-center justify-start flex-col space-y-6 md:p-10 lg:px-24">
        Product Not Found
      </h1>
    );
  }

  function onSubmit(formData: z.infer<typeof FormSchema>) {
    const totalPrice = formData.price * formData.quantity;

    setIsSubmitting(true);
    axios
      .post("/api/routes/SendPreOder", {
        ...formData,
        totalPrice,
        title: product.title,
        imageUrl: product.imageUrl
      })
      .then((response) => {
        setIsSubmitting(false);
        toast({
          title: "Thank you for your pre-order!",
          description: (
            <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <p className="text-white">
                You ordered {formData.quantity} unit(s).
              </p>
              <p className="text-white">
                Total price: &#8358; {totalPrice.toFixed(2)}
              </p>
              <p className="text-white">
                You will be contacted via email at {formData.email} with further
                details.
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center justify-start flex-col space-y-6 mt-10 md:p-10 lg:px-24"
      >
        <div className="text-center">
          <div className="">
            <PrimaryHeading>
              <h3 className="font-bold text-[30px] md:text-[50px] mb-6 lg:mb-[10px]">
                Bulk Pre-Order
              </h3>
            </PrimaryHeading>
          </div>
          <div className="title-separator mx-auto"></div>
          <p className="text title-box-text">
            Want to Pre-Order {product.title} ? <br /> fill in your details
            below and choose the quantity you want
          </p>
        </div>

        {/* Full Name Field */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full md:flex-row md:items-center gap-4">
              <FormLabel className="w-full text-gray-700 font-medium">
                Full Name
              </FormLabel>
              <FormControl className="w-full">
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

        {/* Phone Number Field */}
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full md:flex-row md:items-center gap-4">
              <FormLabel className="w-full text-gray-700 font-medium">
                Phone Number
              </FormLabel>
              <FormControl className="w-full">
                <input
                  type="text"
                  placeholder="Enter your phone number"
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
            <FormItem className="flex flex-col w-full md:flex-row md:items-center gap-4">
              <FormLabel className="w-full text-gray-700 font-medium">
                Email
              </FormLabel>
              <FormControl className="w-full">
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

        {/* Quantity Field */}
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full md:flex-row md:items-center gap-4">
              <FormLabel className="w-full text-gray-700 font-medium">
                Quantity
              </FormLabel>
              <FormControl className="w-full">
                <input
                  type="number"
                  placeholder="Enter the quantity"
                  {...field}
                  min={1} // Ensure minimum value is 1
                  onChange={(e) => {
                    const quantity = parseInt(e.target.value, 10);
                    form.setValue("quantity", Math.max(quantity, 1)); // Ensure quantity is at least 1
                    setTotalPrice(price * Math.max(quantity, 1));
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#f5f5f5]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Price Field */}
        <FormItem className="flex flex-col w-full md:flex-row md:items-center gap-4">
          <FormLabel className="w-full text-gray-700 font-medium">
            Price per Unit
          </FormLabel>
          <div className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-[#f5f5f5]">
            &#8358; {price.toFixed(2)}
          </div>
        </FormItem>

        {/* Total Price Field */}
        <FormItem className="flex flex-col w-full md:flex-row md:items-center gap-4">
          <FormLabel className="w-full text-gray-700 font-medium">
            Total Price
          </FormLabel>
          <div className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-[#f5f5f5]">
            &#8358; {totalPrice.toFixed(2)}
          </div>
        </FormItem>

        {/* Delivery Date Field */}
        <FormField
          control={form.control}
          name="deliveryDate"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full md:flex-row md:items-center gap-4">
              <FormLabel className="w-full text-gray-700 font-medium">
                Estimated Delivery Date
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-between px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-[#f5f5f5]",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Price Field (Hidden) */}
        <input type="hidden" {...form.register("price")} />

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex relative h-12 font-bold animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#3BC7B0,55%,#000103)] bg-[length:200%_100%] px-6  text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            {isSubmitting ? (
              <LoaderIcon className=" animate-spin" />
            ) : (
              <h1 className="">Pre-Order Now</h1>
            )}
          </button>
        </div>
      </form>
    </Form>
  );
}
