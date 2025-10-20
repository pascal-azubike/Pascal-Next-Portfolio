"use client";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { EyeIcon, EyeOffIcon, LoaderCircleIcon } from "lucide-react";
import useUploadMutation from "@/hooks/useUploadMutation";
import { usePathname, useRouter } from "next/navigation";
import PrimaryHeading from "@/components/primaryHeading";
// Define the schema for validation
const FormSchema = z.object({
  oldUsername: z.string().min(2, {
    message: "Username must be at least 2 characters."
  }),
  oldPassword: z.string().min(6, {
    message: "Password must be at least 6 characters."
  }),
  newUsername: z.string().min(2, {
    message: "New username must be at least 2 characters."
  }),
  newPassword: z.string().min(6, {
    message: "New password must be at least 6 characters."
  })
});
export default function ChangePasswordForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      oldUsername: "",
      oldPassword: "",
      newUsername: "",
      newPassword: ""
    }
  });
  const pathname = usePathname();
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { data, error, isSuccess, mutate, isPending } = useUploadMutation(
    "/api/routes/changePassword", // Adjust the endpoint
    ["ChangePassword"]
  );
  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    mutate(values);
  };
  useEffect(() => {
    if (isSuccess) {
      toast({
        description: "Password Changed Successfully"
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  useEffect(() => {
    if (error) {
      toast({
        description: "Error changing password",
        variant: "destructive"
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  function togglePasswordVisibility() {
    setPasswordVisible((prev) => !prev);
  }
  return (
    <div>
      <div className=" text-center ">
        <PrimaryHeading>
          <div className="mb-6 lg:mb-[40px]">
            <h3 className="font-bold text-[30px] md:text-[40px]  ">
              Change Password
            </h3>
            <div className=" border-t bg-slate-950 max-w-[203px] mx-auto mt-2"></div>
          </div>
        </PrimaryHeading>
        <span className=" block mt-2 text-lg">
          fill the form below with the old and new Admin details to Reseet
          password
        </span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 mx-auto mt-10"
        >
          <FormField
            control={form.control}
            name="oldUsername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Old Username</FormLabel>
                <FormControl>
                  <Input placeholder="oldUsername" {...field} />
                </FormControl>
                <FormDescription>
                  This is your current username.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="oldPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Old Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="••••••••"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    >
                      {passwordVisible ? (
                        <EyeOffIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormDescription>Enter your current password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newUsername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Username</FormLabel>
                <FormControl>
                  <Input placeholder="newUsername" {...field} />
                </FormControl>
                <FormDescription>This is your new username.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="••••••••"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    >
                      {passwordVisible ? (
                        <EyeOffIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormDescription>Enter your new password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <LoaderCircleIcon className=" animate-spin" />
            ) : (
              <p>Change Password</p>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
