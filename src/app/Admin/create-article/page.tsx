"use client";
import * as React from "react";
import Image from "next/image";
import { useEffect, useState, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
// You can choose a different style if you prefer
import Resizer from "react-image-file-resizer";

import "highlight.js/styles/atom-one-dark.css";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

// Dynamically import React Quill
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import { Loader2 } from "lucide-react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import useUploadMutation from "@/hooks/useUploadMutation";
import { handleImageUpload } from "@/hooks/handleImageUpload";
import { Textarea } from "@/components/ui/textarea";
import { modulesObject } from "@/components/admin-panel/modules";

const formSchema = z.object({
  title: z.string().nonempty({ message: "Title is required." }),
  shortSummary: z
    .string()
    .max(200, { message: "Short summary should be 200 characters or less." })
    .nonempty({ message: "Short summary is required." }),
  description: z.any(),
  image: z.string().nonempty({ message: "Image is required." }),
  blurImage: z.string().nonempty({ message: "Blur Image string is required." })
});

export default function CreateProduct() {
  return (
    <React.Suspense>
      <ProductForm />
    </React.Suspense>
  );
}

function ProductForm() {
  const [isFetchingImage, setIsFetchingImage] = useState(false);
  const [quillIsFocus, setQuillIsFocus] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const url = id
    ? `/api/routes/edit-article?productId=${id}`
    : "/api/routes/create-article";

  const [shouldFetch, setShouldFetch] = useState(false); // Control fetch trigger

  const {
    isPending: fetchEditIsPending,
    error: fetchEditIsError,
    data: fetchEditIsData,
    isSuccess: fetchEditIsSuccess
  } = useQuery({
    queryKey: [id], // Query key should be an array
    queryFn: () =>
      axios(`/api/routes/fetchSingleArticle?articleId=${id}&place=create`), // Query function
    enabled: shouldFetch // Trigger query only when `shouldFetch` is true
  });

  useEffect(() => {
    if (fetchEditIsSuccess) {
      // Disable further fetching after successful fetch
      setShouldFetch(false);
    }
  }, [fetchEditIsSuccess]);
  useEffect(() => {
    // Trigger the query after the component mounts
    setShouldFetch(true);
  }, []);
  const { toast } = useToast();

  const { error, isSuccess, mutate, isPending } = useUploadMutation(url, [
    "newArticle",
    "featureArticles"
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      shortSummary: "",
      description: "",
      image: "",
      blurImage: ""
    }
  });

  const [editorContent, setEditorContent] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const beforeDivRef = useRef<HTMLDivElement>(null);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    mutate(values);
  };

  useEffect(() => {
    isSuccess &&
      toast({
        description: id
          ? "Article updated successfully"
          : "Article created successfully"
      });
  }, [isSuccess, id, toast]);

  const resizeFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        24,
        24,
        "JPEG",
        30,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFetchingImage(true);
    const imageUrl = await handleImageUpload(e);
    const file = e.target.files?.[0] as File;
    const resizedImage: any = await resizeFile(file);

    form.setValue("blurImage", resizedImage.split(",")[1]);
    console.log(resizedImage.split(",")[1], "resizedImage");
    setImagePreview(imageUrl);
    setIsFetchingImage(false);
    form.setValue("image", imageUrl);
  };

  const modules = modulesObject;

  const handleQuillChange = (content: string) => {
    setEditorContent(content);
    form.setValue("description", content);
  };

  const handleQuillFocus = () => {
    setQuillIsFocus(true);
  };

  const handleOnBlur = () => {
    setQuillIsFocus(false);
  };

  useEffect(() => {
    if (beforeDivRef.current) {
      const beforeDivHeight = beforeDivRef.current.clientHeight + 30;
      const formContent = document.querySelector(
        ".form-content"
      ) as HTMLDivElement;
      if (formContent) {
        formContent.style.marginTop = quillIsFocus
          ? `-${beforeDivHeight}px`
          : "0";
      }
    }
  }, [quillIsFocus]);

  useEffect(() => {
    if (fetchEditIsSuccess && fetchEditIsData?.data?.article) {
      const product = fetchEditIsData.data.article;
      form.reset({
        title: product.title,
        shortSummary: product.shortSummary || "",
        description: product.description,
        image: product.imageUrl,
        blurImage: product.blurImage
      });
      setImagePreview(product.imageUrl);
      setEditorContent(product.description);
    }
  }, [fetchEditIsSuccess, fetchEditIsData, form]);

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:space-y-6 md:p-10 space-y-10 p-4 form-content"
        >
          <div ref={beforeDivRef} className="beforeDiv">
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Article Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="shortSummary"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Summary</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter a short summary (max 200 characters)"
                      {...field}
                      maxLength={200}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="image"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Image</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center justify-center">
                      <label
                        className="absolute left-0 mx-4 h-[80%] flex items-center justify-center cursor-pointer text-center rounded-lg w-[40%] bg-blue-400"
                        htmlFor="uploadImage"
                      >
                        <div className="flex items-center text-white justify-center">
                          {isFetchingImage && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          )}
                          Upload Image
                        </div>
                      </label>
                      <Input
                        type="file"
                        id="uploadImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="py-8 border border-opacity-35"
                      />
                    </div>
                  </FormControl>
                  {imagePreview && (
                    <div className="mt-2 relative border border-opacity-25 overflow-hidden h-[100px] w-[100px] max-w-fit p-4">
                      <Image
                        src={imagePreview}
                        alt="Image Preview"
                        width={100}
                        height={100}
                      />
                    </div>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-8 md:mt-0 relative">
            <div className="flex gap-2 items-center justify-center absolute -top-5 right-0">
              <label className="switch">
                <input
                  onClick={() => setQuillIsFocus(!quillIsFocus)}
                  type="checkbox"
                  checked={quillIsFocus}
                />
                <span className="slider round"></span>
              </label>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Submitting..." : "Submit"}
              </Button>
              {error && <p className="text-red-500">{error.message}</p>}
            </div>
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl
                    className={`${
                      quillIsFocus ? "h-[75vh] relative top-0 z-50" : "h-[30vh]"
                    }`}
                  >
                    <ReactQuill
                      value={editorContent}
                      onChange={handleQuillChange}
                      modules={modules}
                      theme="snow"
                      onFocus={handleQuillFocus}
                      onBlur={handleOnBlur}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}
