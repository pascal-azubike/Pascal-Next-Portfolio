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
import { useAuthStore } from "@/hooks/use-login";
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters."
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters."
  })
});
export function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });
  const pathname = usePathname();
  const router = useRouter();
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { data, error, isSuccess, mutate, isPending } = useUploadMutation(
    "/api/routes/login",
    ["AdminLogIn"]
  );
  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    mutate(values);
  };
  useEffect(() => {
    if (isSuccess) {
      setIsLoggedIn(true);
      if (pathname === "/Admin") {
        router.push("/Admin/manage-products");
      }
      toast({
        description: "Login In Successfully"
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  useEffect(() => {
    error &&
      toast({
        description: "login Error Try Again",
        variant: "destructive"
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  function togglePasswordVisibility() {
    setPasswordVisible((prev) => !prev);
  }
  return (
    <div className=" mt-20">
      <div className=" text-center ">
        <PrimaryHeading>
          <div className="mb-6 lg:mb-[40px]">
            <h3 className="font-bold text-[30px] md:text-[40px]  ">
              Admin Login
            </h3>
            <div className=" border-t bg-slate-950 max-w-[203px] mx-auto mt-2"></div>
          </div>
        </PrimaryHeading>
        <span className=" block mt-2 text-lg">
          Enter your Credentials below to access the admin panel
        </span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 mx-auto mt-24"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="User Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
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
                <FormDescription>Enter your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <LoaderCircleIcon className=" animate-spin" />
            ) : (
              <p>Submit</p>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
